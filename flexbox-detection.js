(function(){
    "use strict";

    var addClassToHTMLElement = function(className) {
        var htmlElement = document.getElementsByTagName('html')[0];
        if (htmlElement.classList) {
            htmlElement.classList.add(className);
        } else {
            htmlElement.className += ' ' + className;
        }
    };

    var flexBoxTest = function(element) {
        return element.style["flex"] != undefined || element.style["-ms-flex"] != undefined;
    };

    var flexboxTestElement = document.createElement("div");
    flexboxTestElement.id = "flexboxTestElement";
    document.getElementsByTagName('body')[0].appendChild(flexboxTestElement);


    if(flexBoxTest(flexboxTestElement)) {
        addClassToHTMLElement("flexbox");
        //console.log("Flexbox is supported");
    } else {
        addClassToHTMLElement("no-flexbox");
        //console.log("Flexbox is NOT supported");
    }

    flexboxTestElement.parentNode.removeChild(flexboxTestElement);
})();
