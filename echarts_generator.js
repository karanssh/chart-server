const puppeteer = require('puppeteer');

const render = async function(options,width,height){

    const browser = await puppeteer.launch();
    const page = await browser.newPage();


    await page.setContent(
        `<div id="container" style="width:${width}px;height:${height}px" ></div>`
    );

    //Pass the options object to the evaluate function and mount it to the global properties of the window object
    await page.evaluate((options)=>{
        window.chart={
            options
        }
    },options);

    await page.addScriptTag({url:'https://cdn.jsdelivr.net/npm/echarts@5.1.2/dist/echarts.min.js'});

    await page.addScriptTag({
        content:`
        (function (window) {
            let option =window.chart.options; //Get the chart configuration items in the window object to initialize in the browser environment
            window.myChart = window.echarts.init(document.getElementById('container'), null, {
                renderer: 'svg'
            });
            window.myChart.setOption(option);
            
        })(this);
        
        `
    });
    let base64 = await page.evaluate(()=>{
        return myChart.getDataURL();
    }).catch(error => console.log(error.message));
    //console.log(base64);
    //await page.screenshot({path:'example.png'});
    browser.close();
    return base64;
};


exports.render_echart = render;