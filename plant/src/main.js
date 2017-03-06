import Vue from 'vue/dist/vue';
import He from './components/Hello.vue';
new Vue({
    el:"#app",
    template:'<div><he></he></div>',
    components:{He}
});