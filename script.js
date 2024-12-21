let htmlInput = document.getElementById("html-markup");
let cssInput = document.getElementById("css-style");
let jsInput = document.getElementById("js-script");
let displayOutput = document.getElementById("output-display");

// opdateOutput func for updating the iframe content
const updateOutput = () => {
  let htmlCode = htmlInput.value;
  let cssCode = cssInput.value;
  let jsCode = jsInput.value;

  let fullHTML = `
            <html>
            <head>
                <style>${cssCode}</style>
            </head>
            <body>
                ${htmlCode}
                <script>${jsCode}</script>
            </body>
            </html>
        `;

  displayOutput.contentDocument.open();
  displayOutput.contentDocument.write(fullHTML);
  displayOutput.contentDocument.close();
};

htmlInput.addEventListener("keyup", updateOutput);
cssInput.addEventListener("keyup", updateOutput);
jsInput.addEventListener("keyup", updateOutput);

// Clear functions for clearing the contet
let htmlBtn = document.getElementById("html-btn");
let cssBtn = document.getElementById("css-btn");
let jsBtn = document.getElementById("js-btn");
let outputBtn = document.getElementById("output-btn");

const clearHtml = () => {
  htmlInput.value = "";
  updateOutput(); // To clear the iframe when HTML is cleared
};

const clearCss = () => {
  cssInput.value = "";
};

const clearJs = () => {
  jsInput.value = "";
};

const clearOutput = () => {
  displayOutput.contentDocument.write("");
};

htmlBtn.addEventListener("click", clearHtml);
cssBtn.addEventListener("click", clearCss);
jsBtn.addEventListener("click", clearJs);
outputBtn.addEventListener("click", clearOutput);

// Conditional styling on buttons
let buttons = document.getElementsByTagName("button");
if (buttons.length > 0) {
  for (let button of buttons) {
    switch (button.textContent) {
      case "Clear HTML":
        button.style.backgroundColor = "red";
        break;
      case "Clear CSS":
        button.style.backgroundColor = "skyblue";
        break;
      case "Clear jS":
        button.style.backgroundColor = "yellow";
        break;
      default:
        button.style.backgroundColor = "gray";
        button.style.color = "white";
    }
  }
}
