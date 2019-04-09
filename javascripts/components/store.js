import util from '../helpers/util.js'

const makeStore = () => {
  let domString = `<h3>Dope<h3>`;
  util.printToDom('store-container', domString);
};

export default {makeStore}