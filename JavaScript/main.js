// header
let icon = document.querySelector(".icon");
let list = document.querySelector(".links");
let contain = document.querySelector("header .container");

icon.addEventListener("click", function () {
  list.classList.toggle("click");
});

// <<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// html
let htmlFloat = document.createElement("div");
htmlFloat.className = "float display";
let htmlContainer = document.createElement("div");
htmlContainer.className = "container";
htmlFloat.appendChild(htmlContainer);

let htmlClos = document.createElement("img");
htmlClos.setAttribute("src", "Images/times.svg");
htmlContainer.appendChild(htmlClos);
htmlClos.style.cssText =
  "width: 20px;position: absolute;top: 20px;right: 35px;cursor: pointer;";

// >> image
let htmlImage = document.createElement("div");
let htmlImg = document.createElement("img");
htmlImage.className = "image";
htmlImg.setAttribute("src", "Images/Code-editor.png.png");
htmlImage.appendChild(htmlImg);

// >> htmlText
let htmlText = document.createElement("div");
let htmlTag = document.createElement("h2");
let htmlInfo = document.createElement("p");
let htmlAnalizA = document.createElement("div");
let namehtmlAnalizA = document.createElement("h3");
let prohtmlAnalizA = document.createElement("div");
let htmlAnalizB = document.createElement("div");
let namehtmlAnalizB = document.createElement("h3");
let porhtmlAnalizB = document.createElement("div");

htmlText.className = "text";
htmlTag.className = "tag";
htmlInfo.className = "info";
htmlAnalizA.className = "analizA";
htmlAnalizB.className = "analizB";
namehtmlAnalizA.className = "nameAnalizA";
namehtmlAnalizB.className = "nameAnalizB";
prohtmlAnalizA.className = "proAnalizA";
prohtmlAnalizA.setAttribute("data-width", "90%");
porhtmlAnalizB.className = "proAnalizB";
porhtmlAnalizB.setAttribute("data-width", "70%");

let thtmlTag = document.createTextNode("HTML");
let thtmlInfo = document.createTextNode(
  "Writing a code according to the standards for HTML language. And use semantic elements according to HTML5."
);
let thtmlNameA = document.createTextNode("Study");
let thtmlNameB = document.createTextNode("Practicing");

htmlText.appendChild(htmlTag);
htmlText.appendChild(htmlInfo);
htmlText.appendChild(htmlAnalizA);
htmlText.appendChild(htmlAnalizB);
htmlAnalizA.appendChild(namehtmlAnalizA);
htmlAnalizA.appendChild(prohtmlAnalizA);
htmlAnalizB.appendChild(namehtmlAnalizB);
htmlAnalizB.appendChild(porhtmlAnalizB);

htmlTag.appendChild(thtmlTag);
htmlInfo.appendChild(thtmlInfo);
namehtmlAnalizA.appendChild(thtmlNameA);
namehtmlAnalizB.appendChild(thtmlNameB);

htmlContainer.appendChild(htmlImage);
htmlContainer.appendChild(htmlText);

// style
htmlContainer.style.cssText =
  "display: flex;align-items: center;justify-content: space-between;gap: 5%; padding: 60px 40px;border: black 5px solid;border-radius: 30px;background-color: white;position: fixed;top: 50%;width: 100%;left: 50%;transform: translate(-50%, -50%);";
htmlImage.style.cssText = "flex-basis: 35%";
htmlImg.style.width = "100%";
htmlText.style.flexBasis = "60%";
htmlTag.style.cssText = "font-size: 45px;font-weight: 700;margin: 10px 0;";
htmlInfo.style.cssText =
  "margin: 0;font-size: 18px;font-weight: 300;line-height: 1.6;";
htmlAnalizA.style.cssText =
  "height: 90px;width: 100%;border-radius: 10px;background-color: #f2f5f6;padding: 15px;margin-top: 20px;";
htmlAnalizB.style.cssText =
  "height: 90px;width: 100%;border-radius: 10px;background-color: #f2f5f6;padding: 15px;margin-top: 20px;";
namehtmlAnalizA.style.margin = "0";
namehtmlAnalizB.style.margin = "0";
prohtmlAnalizA.style.cssText =
  "width: 100%;height: 15px;background-color: black;margin-top: 25px;border-radius: 20px;";
porhtmlAnalizB.style.cssText =
  "width: 100%;height: 15px;background-color: black;margin-top: 25px;border-radius: 20px;";

// function
let morHtml = document.querySelector(".htm");

document.body.appendChild(htmlFloat);
morHtml.addEventListener("click", function () {
  htmlFloat.classList.toggle("display");
});
htmlClos.onclick = function () {
  htmlFloat.classList.toggle("display");
};

// <<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// css
let cssFloat = document.createElement("div");
cssFloat.className = "float display";
let cssContainer = document.createElement("div");
cssContainer.className = "container";
cssFloat.appendChild(cssContainer);

let cssClos = document.createElement("img");
cssClos.setAttribute("src", "Images/times.svg");
cssContainer.appendChild(cssClos);
cssClos.style.cssText =
  "width: 20px;position: absolute;top: 20px;right: 35px;cursor: pointer;";

// >> image
let cssImage = document.createElement("div");
let cssImg = document.createElement("img");
cssImage.className = "image";
cssImg.setAttribute("src", "Images/cssBack.jpg");
cssImage.appendChild(cssImg);

// >> cssText
let cssText = document.createElement("div");
let cssTag = document.createElement("h2");
let cssInfo = document.createElement("p");
let cssAnalizA = document.createElement("div");
let namecssAnalizA = document.createElement("h3");
let procssAnalizA = document.createElement("div");
let cssAnalizB = document.createElement("div");
let namecssAnalizB = document.createElement("h3");
let porcssAnalizB = document.createElement("div");

cssText.className = "text";
cssTag.className = "tag";
cssInfo.className = "info";
cssAnalizA.className = "analizA";
cssAnalizB.className = "analizB";
namecssAnalizA.className = "nameAnalizA";
namecssAnalizB.className = "nameAnalizB";
procssAnalizA.className = "proAnalizA";
porcssAnalizB.className = "proAnalizB";

let tcssTag = document.createTextNode("CSS");
let tcssInfo = document.createTextNode(
  "Use of new properties in the CSS language as flex-box, CSS grid, box-model and more from new properties."
);
let tcssNameA = document.createTextNode("Study");
let tcssNameB = document.createTextNode("Practicing");

cssText.appendChild(cssTag);
cssText.appendChild(cssInfo);
cssText.appendChild(cssAnalizA);
cssText.appendChild(cssAnalizB);
cssAnalizA.appendChild(namecssAnalizA);
cssAnalizA.appendChild(procssAnalizA);
cssAnalizB.appendChild(namecssAnalizB);
cssAnalizB.appendChild(porcssAnalizB);

cssTag.appendChild(tcssTag);
cssInfo.appendChild(tcssInfo);
namecssAnalizA.appendChild(tcssNameA);
namecssAnalizB.appendChild(tcssNameB);

cssContainer.appendChild(cssImage);
cssContainer.appendChild(cssText);

// style
cssContainer.style.cssText =
  "display: flex;align-items: center;justify-content: space-between;gap: 5%; padding: 60px 40px;border: black 5px solid;border-radius: 30px;background-color: white;position: fixed;top: 50%;width: 100%;left: 50%;transform: translate(-50%, -50%);";
cssImage.style.cssText = "flex-basis: 35%";
cssImg.style.width = "100%";
cssText.style.flexBasis = "60%";
cssTag.style.cssText = "font-size: 45px;font-weight: 700;margin: 10px 0;";
cssInfo.style.cssText =
  "margin: 0;font-size: 18px;font-weight: 300;line-height: 1.6;";
cssAnalizA.style.cssText =
  "height: 90px;width: 100%;border-radius: 10px;background-color: #f2f5f6;padding: 15px;margin-top: 20px;";
cssAnalizB.style.cssText =
  "height: 90px;width: 100%;border-radius: 10px;background-color: #f2f5f6;padding: 15px;margin-top: 20px;";
namecssAnalizA.style.margin = "0";
namecssAnalizB.style.margin = "0";
procssAnalizA.style.cssText =
  "width: 100%;height: 15px;background-color: black;margin-top: 25px;border-radius: 20px;";
porcssAnalizB.style.cssText =
  "width: 100%;height: 15px;background-color: black;margin-top: 25px;border-radius: 20px;";

// function
let morcss = document.querySelector(".more.css");

document.body.appendChild(cssFloat);
morcss.addEventListener("click", function () {
  cssFloat.classList.toggle("display");
});
cssClos.onclick = function () {
  cssFloat.classList.toggle("display");
};

// >>>>>>>>>>>>>>>??????<<<<<<<<<<<<<<<<<<<<<
// js
let jsFloat = document.createElement("div");
jsFloat.className = "float display";
let jsContainer = document.createElement("div");
jsContainer.className = "container";
jsFloat.appendChild(jsContainer);

let jsClos = document.createElement("img");
jsClos.setAttribute("src", "Images/times.svg");
jsContainer.appendChild(jsClos);
jsClos.style.cssText =
  "width: 20px;position: absolute;top: 20px;right: 35px;cursor: pointer;";

// >> image
let jsImage = document.createElement("div");
let jsImg = document.createElement("img");
jsImage.className = "image";
jsImg.setAttribute("src", "Images/jsBack.png");
jsImage.appendChild(jsImg);

// >> jsText
let jsText = document.createElement("div");
let jsTag = document.createElement("h2");
let jsInfo = document.createElement("p");
let jsAnalizA = document.createElement("div");
let namejsAnalizA = document.createElement("h3");
let projsAnalizA = document.createElement("div");
let jsAnalizB = document.createElement("div");
let namejsAnalizB = document.createElement("h3");
let porjsAnalizB = document.createElement("div");

jsText.className = "text";
jsTag.className = "tag";
jsInfo.className = "info";
jsAnalizA.className = "analizA";
jsAnalizB.className = "analizB";
namejsAnalizA.className = "nameAnalizA";
namejsAnalizB.className = "nameAnalizB";
projsAnalizA.className = "proAnalizA";
projsAnalizA.setAttribute("data-width", "70%");
porjsAnalizB.className = "proAnalizB";
porjsAnalizB.setAttribute("data-width", "45%");

let tjsTag = document.createTextNode("JS");
let tjsInfo = document.createTextNode(
  "Use pure js with ES6 for JS language. made page of website interactive with people and use new technologies in it."
);
let tjsNameA = document.createTextNode("Study");
let tjsNameB = document.createTextNode("Practicing");

jsText.appendChild(jsTag);
jsText.appendChild(jsInfo);
jsText.appendChild(jsAnalizA);
jsText.appendChild(jsAnalizB);
jsAnalizA.appendChild(namejsAnalizA);
jsAnalizA.appendChild(projsAnalizA);
jsAnalizB.appendChild(namejsAnalizB);
jsAnalizB.appendChild(porjsAnalizB);

jsTag.appendChild(tjsTag);
jsInfo.appendChild(tjsInfo);
namejsAnalizA.appendChild(tjsNameA);
namejsAnalizB.appendChild(tjsNameB);

jsContainer.appendChild(jsImage);
jsContainer.appendChild(jsText);

// style
jsContainer.style.cssText =
  "display: flex;align-items: center;justify-content: space-between;gap: 5%; padding: 60px 40px;border: black 5px solid;border-radius: 30px;background-color: white;position: fixed;top: 50%;width: 100%;left: 50%;transform: translate(-50%, -50%);";
jsImage.style.cssText = "flex-basis: 35%";
jsImg.style.width = "100%";
jsText.style.flexBasis = "60%";
jsTag.style.cssText = "font-size: 45px;font-weight: 700;margin: 10px 0;";
jsInfo.style.cssText =
  "margin: 0;font-size: 18px;font-weight: 300;line-height: 1.6;";
jsAnalizA.style.cssText =
  "height: 90px;width: 100%;border-radius: 10px;background-color: #f2f5f6;padding: 15px;margin-top: 20px;";
jsAnalizB.style.cssText =
  "height: 90px;width: 100%;border-radius: 10px;background-color: #f2f5f6;padding: 15px;margin-top: 20px;";
namejsAnalizA.style.margin = "0";
namejsAnalizB.style.margin = "0";
projsAnalizA.style.cssText =
  "width: 100%;height: 15px;background-color: black;margin-top: 25px;border-radius: 20px;";
porjsAnalizB.style.cssText =
  "width: 100%;height: 15px;background-color: black;margin-top: 25px;border-radius: 20px;";

// function
let morjs = document.querySelector(".more.js");

document.body.appendChild(jsFloat);
morjs.addEventListener("click", function () {
  jsFloat.classList.toggle("display");
});
jsClos.onclick = function () {
  jsFloat.classList.toggle("display");
};
