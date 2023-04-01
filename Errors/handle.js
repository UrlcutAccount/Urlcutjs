class _UrlcutError extends Error {
    constructor(message) {
        super(message);
        this.name = "[UrlcutJS]"
    }
}
const API = new String("https://v3.urlcut.app/developer/api");
API.Create = "https://v3.urlcut.app/developer/api/create";
API.Delete = "https://v3.urlcut.app/developer/api/delete";
API.AnalyticsLink = (i) => {
    return `https://v3.urlcut.app/developer/api/analytics/${i}`
};

global._UrlcutError = _UrlcutError;
global.API = API;
