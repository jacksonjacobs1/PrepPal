const { Cluster } = require('puppeteer-cluster');
const puppeteer = require('puppeteer');

/**
 * 1. gather urls
 * 2. 
*/
function main() {
    const query = 'vindaloo curry';
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

    await browser.close();
    console.log(data)
    return data
}

async function scanURLs(data) {     // data is the dictionary containing all of the URLs and titles.
    const cluster = await Cluster.launch({
        concurrency: Cluster.CONCURRENCY_PAGE,
        maxConcurrency: 100,
        monitor: true,
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
    await cluster.task(async ({page, data}) => {    // expects data to be a json object containing the url and title of the page.
        const { url, title } = data;
        await page.goto(
            url,
            {waitUntil: 'domcontentloaded'}
        )

        console.log(`Extracting data from ${url}`);
    })
    
    
    
    
    
    for (let index = 0; index < data['urls'].length; index++) {
        cluster.queue({url: data['urls'][index], title: data['titles'][index]}) // add each website to the queue
    }

    await cluster.idle()
    await cluster.close()
}



main()