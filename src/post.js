const debug = require('./debug');

class Post{
    constructor(kit, context) {
        this.kit = kit;
        this.context = context;
    }

    async send() {
        debug('Post send to devpaper.fun 🚚')
    }
}

module.exports = Post;