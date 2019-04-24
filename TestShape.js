define(["require", "exports", "./Circle", "./Triangle"], function (require, exports, circle, triangle) {
    "use strict";
    exports.__esModule = true;
    function drawAllShapes(shapeToDraw) {
        shapeToDraw.draw();
    }
    drawAllShapes(new circle.Circle());
    drawAllShapes(new triangle.Triangle());
});
