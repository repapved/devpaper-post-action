const debug = require('./debug');
const fetch = require('node-fetch');

module.exports = class Post{
    constructor(kit, context) {
        this.kit = kit;
        this.context = context;
        this.repository = context.repository;
    }

    async send() {
        debug(this.context);

        const devpaperRootJsonDescPath = this.repository.contents_url.replace('{+path}', 'devpaper.json');

        const devpaperRootJsonDesc = await fetch(devpaperRootJsonDescPath).then(r => r.json());

        debug(devpaperRootJsonDesc);

        debug('Post send to devpaper.fun 🚚')
    }
}