const debug = require('./debug');

module.exports = class Post{
    constructor(kit, context) {
        this.kit = kit;
        this.context = context;
    }

    async send() {
        debug('Post send to devpaper.fun 🚚')
    }
}