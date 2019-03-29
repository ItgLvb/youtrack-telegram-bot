'use strict';

const debug = require('debug')('youtrack:app');
const YouTrackBot = require('./youtrackbot');
const configSource = (process.env.configPath || "./bot-config-sample.json");
const config = require(configSource);

debug.log = console.log.bind(console);

(async function () {
    for (let project of config.telegram.projects) {
        project.token = project.token || config.telegram.defaultToken;
        let ytBot = new YouTrackBot(config, project);
        try {
            await ytBot.start();
            debug(`${project.projectName} done.`);
        }
        catch (error) {
            debug('Error occurred:', error);
        }
    }
})();
