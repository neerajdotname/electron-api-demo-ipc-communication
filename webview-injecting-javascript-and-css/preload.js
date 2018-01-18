// Not all applications will have jQuery.
// BigBinary website has jQuery.
// Hence following code is working
// try to handle following code without using jQuery

const handleMouseMove = (event) => {
  const $el = $(event.target);
  const selector1 = "selector1"
  $el.attr("aria-label",selector1);
  $el.addClass("hint--bottom"); //needed by Hint.css
  $el.addClass("hintBox"); //added by BigBinary
}

const handleMouseOut = (event) => {
  const $el = $(event.target);
  $el.removeClass("hint--bottom");
  $el.removeClass("hintBox");
}

const handleMouseClick = (event) => {
  const $el = $(event.target);
  const selector = "selector"
  event.preventDefault();
  sendSelectorToRenderer(selector)
}

const addTracking = () => {
  $('*').on('mousemove', handleMouseMove);
  $('*').on('mouseout', handleMouseOut);
  $('*').on('click', handleMouseClick);
}

document.addEventListener("DOMContentLoaded", function(event) {

    var styles = document.createElement('link');
    styles.rel = 'stylesheet';
    styles.type = 'text/css';
    styles.media = 'screen';
    styles.href = 'https://s3.amazonaws.com/zindi-io/hint.min.css';

    document.body.appendChild(styles);

  // Was not able to figure out when jQuery is fully loaded
    setTimeout(addTracking, 2000);
});

const { ipcRenderer } = require('electron');

const sendSelectorToRenderer = (selector) => {
  ipcRenderer.sendToHost(selector);
}


ipcRenderer.on('from-webview', (event, message) => {
  console.log(message);
})
