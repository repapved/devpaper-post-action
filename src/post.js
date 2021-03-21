const debug = require('./debug');
const fetch = require('node-fetch');

module.exports = class Post{
    constructor(kit, context) {
        this.kit = kit;
        this.context = context;
        this.repository = context.payload.repository;
    }

    async send() {
        debug(this.context);

        const devpaperRootJsonDescPath = this.repository.contents_url.replace('{+path}', 'devpaper.json');

        const devpaperRootJsonDesc = await fetch(devpaperRootJsonDescPath).then(r => r.json());
        const devpaperRootJson = JSON.parse(Buffer.from(devpaperRootJsonDesc.content, 'base64').toString());

        debug(devpaperRootJson);

        debug('Post send to devpaper.fun 🚚')
    }
}