// JavaScript Document
const mouse = $(".mouse");
 
function Cursor(element, options) {
  function stringNode(node) {
    var tmpNode = document.createElement("div");
    tmpNode.appendChild(node.cloneNode(true));
    return tmpNode.innerHTML;
  }
 
  var intSize = parseInt(options.size);
  function setSize(size, scale) {
    if (scale) {
      scale = `${scale}`;
      element.css({
        "transform" : `scale(${options.hoverSize})`,
        "opacity" : ".6"
      });
    } else {
      size = parseInt(size);
      element.css({
        width: size + "px",
        height: size + "px",
        transform: "none",
        opacity : "0.7"
      });
    }
  }
 
  setSize(options.size);
 
  document.onmousemove = e => {
    element.css({
      left: e.clientX - parseInt(options.size) / 2 + "px",
      top: e.clientY - parseInt(options.size) / 2 + "px"
    });
    elementType = stringNode(e.target)
      .replace(/\</g, "")
      .split(">")[0]
      .split(" ")[0];
    //console.log(elementType)
    if (["a", "button", "input"].includes(elementType))
      setSize(options.size, options.hoverSize);
    else setSize(options.size);
  };
}
 
Cursor(mouse, {
  size: "30px", // Width and Height
  hoverSize: 0.5 // Scale size
});