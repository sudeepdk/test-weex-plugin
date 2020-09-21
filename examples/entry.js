import Vue from 'vue';

import weex from 'weex-vue-render';

import TestWeex from '../src/index';

weex.init(Vue);

weex.install(TestWeex)

const App = require('./index.vue');
App.el = '#root';
new Vue(App);
