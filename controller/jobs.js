const fetch = require('node-fetch');
const env = require('../config/environment');

// Function to render job page
module.exports.jobPage = async function (req, res) {
    // Fetching data from an external API using node-fetch
    const response = await fetch(env.api_path);
    const jobsData = await response.json();
    // Rendering the page and passing the data as context
    return res.render('placementCell', {
        title: "Placement Cell",
        body : jobsData.jobs
    });
};
