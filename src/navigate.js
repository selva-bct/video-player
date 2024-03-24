var navigateObj = {};
var ROOT_ELEMENT_CLASS_NAME = "navigatable";
var N_ROW_ELEMENT_CLASS_NAME = "n-row";
var N_COL_ELEMENT_CLASS_NAME = "n-col";
var N_ITEM_ELEMENT_CLASS_NAME = "n-item";

var navigatableElements;
var nrowElements;
var nColElements;
var nItemElements;

function makeid(length) {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}

function findRootElements() {
  navigatableElements = document.getElementsByClassName(
    ROOT_ELEMENT_CLASS_NAME
  );
  for (let index = 0; index < navigatableElements.length; index++) {
    const element = navigatableElements[index];
    console.log(element);
    const id = makeid(5);
    navigateObj[id] = {
      element,
      id,
      isRoot: true,
      type: ROOT_ELEMENT_CLASS_NAME,
    };
  }
}

function findnRowElements() {
  navigatableElements = document.getElementsByClassName(
    N_ROW_ELEMENT_CLASS_NAME
  );
  for (let index = 0; index < navigatableElements.length; index++) {
    const element = navigatableElements[index];
    console.log(element);
    const id = makeid(5);
    navigateObj[id] = {
      element,
      id,
      isRoot: false,
      type: N_ROW_ELEMENT_CLASS_NAME,
    };
  }
}

function findnColElements() {
  navigatableElements = document.getElementsByClassName(
    N_COL_ELEMENT_CLASS_NAME
  );
  for (let index = 0; index < navigatableElements.length; index++) {
    const element = navigatableElements[index];
    console.log(element);
    const id = makeid(5);
    navigateObj[id] = {
      element,
      id,
      isRoot: false,
      type: N_COL_ELEMENT_CLASS_NAME,
    };
  }
}

function findnItemElements() {
  navigatableElements = document.getElementsByClassName(
    N_ITEM_ELEMENT_CLASS_NAME
  );
  for (let index = 0; index < navigatableElements.length; index++) {
    const element = navigatableElements[index];
    console.log(element);
    const id = makeid(5);
    navigateObj[id] = {
      element,
      id,
      isRoot: false,
      type: N_ITEM_ELEMENT_CLASS_NAME,
    };
  }
}
function setup() {
  findRootElements();
  findnRowElements();
  findnColElements();
  findnItemElements();
}
function init() {
  setup();
}
// setTimeout(() => {
init();
// }, 2000);
