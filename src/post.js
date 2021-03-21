const debug = require('./debug');

module.exports = class Post{
    constructor(kit, context) {
        this.kit = kit;
        this.context = context;
    }

    async send() {
        debug(this.context);

        const res = this.kit.repos.getContent({ path: 'devpaper.json' });

        debug(res);

        debug('Post send to devpaper.fun 🚚')
    }
}