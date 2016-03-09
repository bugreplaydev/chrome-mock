module.exports = App;

function App(chrome) {
    this.chrome = chrome;
    this.getDetails = function getDetails() {
        return {
            version: '0.0.1'
        };
    };
}
