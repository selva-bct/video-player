let RC_LEFT, RC_UP, RC_RIGHT, RC_DOWN, RC_ENTER, RC_BACK, RC_EXIT;
let root = null;
function registerKeys() {
  console.log("registerKeys is called");
  RC_LEFT = 37;
  RC_UP = 38;
  RC_RIGHT = 39;
  RC_DOWN = 40;
  RC_ENTER = 13;
  RC_BACK = 10009;
  RC_EXIT = 10182;
}

/**
 * The key press functions
 */
function keyPressUp() {
  console.log("You pressed the up key");
  root.innerHTML = "UP";
}

function keyPressDown() {
  console.log("You pressed the down key");
  root.innerHTML = "DOWN";
}

function keyPressLeft() {
  console.log("You pressed the left key");
  root.innerHTML = "LEFT";
}

function keyPressRight() {
  console.log("You pressed the right key");
  root.innerHTML = "RIGHT";
}

function selectItem() {
  console.log("You pressed the enter key");
  root.innerHTML = "ENTER";
}

/**
 * Function which is called when a key is pressed
 */
function handleKeyPress(event) {
  console.log(event.target);
  switch (event.keyCode) {
    case RC_ENTER:
      selectItem();
      break;
    case RC_EXIT:
      break;
    case RC_LEFT:
      keyPressLeft();
      break;
    case RC_RIGHT:
      keyPressRight();
      break;
    case RC_UP:
      keyPressUp();
      break;
    case RC_DOWN:
      keyPressDown();
      break;
    default:
      console.log(
        "You need to add some cases here, a key you pressed was",
        event.keyCode
      );
  }
}
/**
 * Function for creating the application and getting it ready for the users to use
 */
function createApp() {
  console.log("Creating the app...");
  registerKeys();

  /**
   * Setting the root HTML element
   */
  root = document.getElementById("app");

  document.addEventListener("keydown", handleKeyPress);

  /**
   * Here you can start doing awesome things!
   */
  console.log("...and it's ready for use");
}
createApp();
