const Vue =require('vue');
const He = require('./components/Hello.vue');
new Vue({
    el:"#app",
    template:{
        template:'<div><he></he></div>'
    },
    components:{He}
});