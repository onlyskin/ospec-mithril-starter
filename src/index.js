const m = require('mithril');

function init() {
    m.mount(document.body, {view: () => 'Hello World'});
}

init();
