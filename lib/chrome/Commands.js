var Event = require('../Event');

module.exports = Commands;

function Commands(chrome) {
    this.chrome = chrome;
    this.onCommand = new Event();
}
//    chrome.commands.onCommand.addListener(function(command) {
