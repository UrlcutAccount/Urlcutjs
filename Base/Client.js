const fetch = require('node-fetch');

class Client {
    constructor(token) {
        if (!token || token.length == 0) throw new _UrlcutError("No API key provided.");

        this._T = token;
    }

    Create(Long) {
        return new Promise((resolve, reject) => {
            fetch(API.Create, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${this._T}`
                },
                body: JSON.stringify({
                    refLink: Long
                })
            })
                .then(response => response.json())
                .then(data => {
                    if (data.success == false) {
                        throw new _UrlcutError(data.error);
                    }
                    resolve(data);
                })
                .catch(error => reject(new _UrlcutError(error.message)));
        });
    }

    Delete(Identifier) {
        return new Promise((resolve, reject) => {
            fetch(API.Delete, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${this._T}`
                },
                body: JSON.stringify({
                    shortened: Identifier
                })
            })
                .then(response => response.json())
                .then(data => {
                    if (data.success == false) {
                        throw new _UrlcutError(data.error);
                    }
                    resolve(data);
                })
                .catch(error => reject(new _UrlcutError(error.message)));
        });
    }

    Analytics(Identifier) {
        return new Promise((resolve, reject) => {
            fetch(API.Analytics, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${this._T}`
                },
                body: JSON.stringify({
                    shortenedUrlId: Identifier
                })
            })
                .then(response => response.json())
                .then(data => {
                    if (data.success == false) {
                        throw new _UrlcutError(data.error);
                    }
                    resolve(data);
                })
                .catch(error => reject(new _UrlcutError(error.message)));
        });
    }
};

module.exports = Client;
