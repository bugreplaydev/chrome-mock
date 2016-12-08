var Event = require('../Event');
module.exports = Debugger;

function Debugger(chrome) {
    this.chrome = chrome;
    this.onDetach = new Event();
	this.onEvent = new Event();
}
