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
jsImg.setAttribute("src", "Images/Code-editor.png.png");
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
porjsAnalizB.className = "proAnalizB";

let tjsTag = document.createTextNode("HTML");
let tjsInfo = document.createTextNode(
  "Writing a code according to the standards for HTML language. And use semantic elements according to HTML5."
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
let morjs = document.querySelector(".js");

document.body.appendChild(jsFloat);
morjs.addEventListener("click", function () {
  jsFloat.classList.toggle("display");
});
jsClos.onclick = function () {
  jsFloat.classList.toggle("display");
};
