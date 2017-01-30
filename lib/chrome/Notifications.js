var Event = require('../Event');

module.exports = Notifications;

function Notifications(chrome) {
    this.chrome = chrome;
    this.onClicked = new Event();
    this.onButtonClicked = new Event();
    this.onClosed = new Event();
}
