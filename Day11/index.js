var cron = require('node-cron');

cron.schedule('*/40 * * * * *', () => {
    console.log('running every 10 seconds');
});
