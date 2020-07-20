const path = require('path');
const config = require('./common');

Object.assign(config, {
    host: './',

    cdnPayRootMap: {
        zh: './',
        en: './'
    },
    mainSiteCDNPayRootMap: {
        zh: './',
        en: './'
    },

    mainSiteHost: 'https://echarts.apache.org',

    // host: 'http://localhost:8000/echarts/incubator-echarts-website/examples',
    // cdnPayRootMap: {
    //     zh: 'http://localhost:8000/echarts/incubator-echarts-website/examples',
    //     en: 'http://localhost:8000/echarts/incubator-echarts-website/examples'
    // },
    // mainSiteCDNPayRootMap: {
    //     zh: 'http://127.0.0.1:8000/echarts/incubator-echarts-website',
    //     en: 'http://127.0.0.1:8000/echarts/incubator-echarts-website'
    // },
    // mainSiteHost: 'http://127.0.0.1:8000/echarts/incubator-echarts-website',

    blogPath: 'http://efe.baidu.com/tags/ECharts/',
    releaseDestDir: path.resolve(__dirname, '../public-gh')
});

module.exports = config;
