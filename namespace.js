var draw_fning;
(function (draw_fning) {
    var CircleShape = /** @class */ (function () {
        function CircleShape() {
        }
        CircleShape.prototype.draw_fn = function () {
            console.log("CircleShape is draw_fnn");
        };
        return CircleShape;
    }());
    draw_fning.CircleShape = CircleShape;
})(draw_fning || (draw_fning = {}));
(function (draw_fning) {
    var TraingleShape = /** @class */ (function () {
        function TraingleShape() {
        }
        TraingleShape.prototype.draw_fn = function () {
            console.log("TraingleShape is draw_fnn");
        };
        return TraingleShape;
    }());
    draw_fning.TraingleShape = TraingleShape;
    function draw_fnAllShapes(shape) {
        shape.draw_fn();
    }
    draw_fnAllShapes(new draw_fning.CircleShape());
    draw_fnAllShapes(new draw_fning.TraingleShape());
})(draw_fning || (draw_fning = {}));
var mynamespace;
(function (mynamespace) {
    var ns_a;
    (function (ns_a) {
        var X = /** @class */ (function () {
            function X() {
            }
            X.prototype.calculateX = function (price) {
                return price * 40;
            };
            return X;
        }());
        ns_a.X = X;
    })(ns_a = mynamespace.ns_a || (mynamespace.ns_a = {}));
})(mynamespace || (mynamespace = {}));
var y = new mynamespace.ns_a.X();
console.log("Final amount is : " + y.calculateX(500));
