const { Cluster } = require('puppeteer-cluster');
const puppeteer = require('puppeteer');

/**
 * 1. gather urls
 * 2. 
*/
function main() {
    const query = 'chocolate cake recipe';
    gatherURLs(query).then(data => {
        scanURLs(data);
    });
}

async function gatherURLs(queryString) {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.setViewport({ width: 1288, height: 800 });
    await page.goto('https://www.google.com/');
    await page.type('.gLFyf.gsfi', queryString);
    await page.waitForTimeout(100);
    await page.click('input.gNO89b');
    await page.waitForSelector('.g');

    let data = await page.evaluate(() => {
        var titles = [];
        var urls = [];

        containers = document.querySelectorAll('h3[class="LC20lb MBeuO DKV0Md"]');

        containers.forEach(element => {
            titles.push(element.innerHTML);
            urls.push(element.parentElement.href)
        })

        return { 'titles': titles, 'urls': urls };
    })
    console.log(data);
    await browser.close();
    return data
}

function scrapeItems(NodeList) {
    const outputArr = [];

    NodeList.forEach(li => {
        if (li.innerText != null) {
            outputArr.push(li.innerText);
        }
        else if (li.querySelector('strong') != null && li.querySelector('strong').innerText != null) {
            outputArr.push(li.querySelector('strong').innerText);
        }
        else if (li.querySelector('p') != null && li.querySelector('p').innerText != null) {
            outputArr.push(li.querySelector('p').innerText);
        }
        else {
            outputArr.push('0')
        }
    });
    return outputArr;
}

async function scanURLs(data, ingredient_query) {     // data is the dictionary containing all of the URLs and titles.
    const cluster = await Cluster.launch({
        concurrency: Cluster.CONCURRENCY_PAGE,
        maxConcurrency: 100,
        monitor: false,
        puppeteerOptions: {
            headless: false,
            defaultViewport: false,
            userDataDir: "./tmp",
        },
    });

    // error handler
    cluster.on("taskerror", (err, data) => {
        console.log(`Error crawling ${data}: ${err.message}`)
    });



    // everything analysis belongs in here.
    await cluster.task(async ({ page, data }) => {    // expects data to be a json object containing the url and title of the page.
        const { url, title } = data;
        await page.goto(
            url,
            { waitUntil: 'domcontentloaded' }
        )

        console.log(`Extracting data from ${url}`);


        const example = await page.evaluate(() => {
            const uls = document.querySelectorAll('ul');
            const ols = document.querySelectorAll('ol');

            formattedUls = [];

            uls.forEach(ul => {
                const outputArr = [];
                const lis = ul.querySelectorAll('li');

                lis.forEach(li => {
                    if (li.innerText != null) {
                        outputArr.push(li.innerText);
                    }
                    else if (li.querySelector('strong') != null && li.querySelector('strong').innerText != null) {
                        outputArr.push(li.querySelector('strong').innerText);
                    }
                    else if (li.querySelector('p') != null && li.querySelector('p').innerText != null) {
                        outputArr.push(li.querySelector('p').innerText);
                    }
                    else if (li.querySelectorAll('span') != null && li.querySelectorAll('span').innerText != null) {
                        concat = ''
                        li.querySelectorAll('span').forEach(item => {
                            concat = concat + item.innerText;
                        })
                    }
                    else {
                        outputArr.push('0')
                    }
                });

                formattedUls.push(outputArr);
            });

            //PARSE FORMATTED ULS
            indexOfIngreds = -1
            indexOfInstruc = -1
            const measurements = ['cup', 'tablespoon', 'teaspoon']
            const cookingTerms = ['cook', 'fry', 'boil', 'steam', 'broil', 'bake', 'hour', 'minute']

            for (let i = 0; i < formattedUls.length; i++) {
                for (let j = 0; j < formattedUls[i].length; j++) {
                    let list_item = formattedUls[i][j];
                    for (let k = 0; k < measurements.length; k++) {
                        if (list_item.indexOf(measurements[k]) != -1 && indexOfIngreds == -1) {
                            indexOfIngreds = i;
                            if (list_item.length > 300){
                                return null;
                            }
                        }
                    }
                }
            }

            for (let i = indexOfIngreds + 1; i < formattedUls.length; i++) {
                for (let j = 0; j < formattedUls[i].length; j++) {
                    let list_item = formattedUls[i][j];
                    for (let k = 0; k < cookingTerms.length; k++) {
                        if (list_item.indexOf(cookingTerms[k]) != -1 && indexOfInstruc == -1) {
                            indexOfInstruc = i;
                            if (list_item.length > 600){
                                return null;
                            }
                        }
                    }
                }
            }


            //return formattedUls;
            if (indexOfIngreds == -1 || indexOfInstruc == -1){
                return null;
            }

            ingredientsList = formattedUls[indexOfIngreds];
            instructionsList = formattedUls[indexOfInstruc];

            if (ingredientsList.length > 20 || instructionsList.length > 15){
                return null;
            }

            return { ingredientsList, instructionsList }

        })

        console.log(example)
    })



    for (let index = 0; index < data['urls'].length; index++) {
        cluster.queue({url: data['urls'][index], title: data['titles'][index]}) // add each website to the queue
    }

    //cluster.queue({ url: 'https://www.allrecipes.com/recipe/166081/deep-fried-oreos/', title: 'cake' })

    await cluster.idle()
    await cluster.close()
}


main()