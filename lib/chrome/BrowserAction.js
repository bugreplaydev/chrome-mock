
module.exports = BrowserAction;
var noop = function(){}
function BrowserAction(chrome) {
  this.chrome = chrome;
  this.setIcon = noop;
  this.setBadgeText = noop;
  this.setBadgeBackgroundColor = noop;
}
