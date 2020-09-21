/* globals alert */
const testWeex = {
  show () {
    alert('Module testWeex is created sucessfully ');
  }
};

const meta = {
  testWeex: [{
    lowerCamelCaseName: 'show',
    args: []
  }]
};

function init (weex) {
  weex.registerModule('testWeex', testWeex, meta);
}

export default {
  init: init
};
