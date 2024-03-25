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

function getNextNavElement(elements, currentElement, currentElementIndex) {
  var nextElement;
  const totalElements = elements.length;
  if (currentElementIndex === totalElements - 1) {
    if (currentElement) {
      const parent = currentElement.closest(".n-col");
      nextElement = parent?.nextElementSibling;
      if (nextElement) {
        nextElement = nextElement.getElementsByClassName("n-item")?.[0];
      }
    }
  } else {
    nextElement = elements[currentElementIndex + 1];
  }
  return nextElement;
}

function getDownNavElement(elements, currentElement, currentElementIndex) {
  var nextElement;
  const totalElements = elements.length;
  if (currentElementIndex === totalElements - 1) {
    if (currentElement) {
      const parent = currentElement.closest(".n-row");
      nextElement = parent?.nextElementSibling;
      if (nextElement) {
        nextElement = nextElement.getElementsByClassName("n-item")?.[0];
      }
    }
  } else {
    nextElement = elements[currentElementIndex + 1];
  }
  return nextElement;
}

function getPreviousNavElement(elements, currentElement, currentElementIndex) {
  var previousElement;
  if (currentElementIndex === 0) {
    if (currentElement) {
      const parent = currentElement.closest(".n-col");
      previousElement = parent?.previousElementSibling;
      if (previousElement) {
        previousElement = previousElement.getElementsByClassName("n-item")?.[0];
      }
    }
  } else {
    previousElement = elements[currentElementIndex - 1];
  }
  return previousElement;
}

function getUpNavElement(elements, currentElement, currentElementIndex) {
  var previousElement;
  if (currentElementIndex === 0) {
    if (currentElement) {
      const parent = currentElement.closest(".n-row");
      previousElement = parent?.previousElementSibling;
      if (previousElement) {
        previousElement = previousElement.getElementsByClassName("n-item")?.[0];
      }
    }
  } else {
    previousElement = elements[currentElementIndex - 1];
  }
  return previousElement;
}

function findRootElements() {
  navigatableElements = document.getElementsByClassName(
    ROOT_ELEMENT_CLASS_NAME
  );
  const totalElements = navigatableElements.length;
  for (let index = 0; index < totalElements; index++) {
    const element = navigatableElements[index];
    const id = makeid(10);
    element.setAttribute("data-id", id);
    navigateObj[id] = {
      element,
      id,
      isRoot: true,
      type: ROOT_ELEMENT_CLASS_NAME,
      /*up: getPreviousNavElement(navigatableElements, element, index),
      down: getNextNavElement(navigatableElements, element, index),
      left: null,
      right: null,*/
    };
    findnRowElements(element);
  }
}

function findnRowElements(domElement) {
  const navigatableElements = domElement.getElementsByClassName(
    N_ROW_ELEMENT_CLASS_NAME
  );
  const totalElements = navigatableElements.length;
  for (let index = 0; index < totalElements; index++) {
    const element = navigatableElements[index];
    const id = makeid(10);
    element.setAttribute("data-id", id);
    navigateObj[id] = {
      element,
      id,
      isRoot: false,
      type: N_ROW_ELEMENT_CLASS_NAME,
      /*left: null,
      right: null,
      up: getPreviousNavElement(navigatableElements, element, index),
      down: getNextNavElement(navigatableElements, element, index),*/
    };
    findnColElements(element);
  }
}

function findnColElements(domElement) {
  const navigatableElements = domElement.getElementsByClassName(
    N_COL_ELEMENT_CLASS_NAME
  );
  const totalElements = navigatableElements.length;
  for (let index = 0; index < totalElements; index++) {
    const element = navigatableElements[index];
    // element.id = id;
    const id = makeid(10);
    element.setAttribute("data-id", id);
    navigateObj[id] = {
      element,
      id,
      isRoot: false,
      type: N_COL_ELEMENT_CLASS_NAME,
      /*left: getPreviousNavElement(navigatableElements, element, index),
      right: getNextNavElement(navigatableElements, element, index),
      up: null,
      down: null,*/
    };
    findnItemElements(element);
  }
}

function findnItemElements(domElement) {
  const navigatableElements = domElement.getElementsByClassName(
    N_ITEM_ELEMENT_CLASS_NAME
  );
  const totalElements = navigatableElements.length;
  for (let index = 0; index < totalElements; index++) {
    const element = navigatableElements[index];
    const id = makeid(10);
    element.setAttribute("data", id);
    navigateObj[id] = {
      element,
      id,
      isRoot: false,
      type: N_ITEM_ELEMENT_CLASS_NAME,
      left: getPreviousNavElement(navigatableElements, element, index),
      right: getNextNavElement(navigatableElements, element, index),
      up: getUpNavElement(navigatableElements, element, index),
      down: getDownNavElement(navigatableElements, element, index),
    };
  }
}
function setup() {
  findRootElements();
  // findnRowElements();
  // findnColElements();
  // findnItemElements();
}
function init() {
  setup();
}
// setTimeout(() => {
init();
// }, 2000);
