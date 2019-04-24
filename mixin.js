// Disposable Mixin
var Disposable = /** @class */ (function () {
    function Disposable() {
    }
    Disposable.prototype.dispose = function () {
        console.log("dispose()");
        this.isDisposed = true;
    };
    return Disposable;
}());
// Activatable Mixin
var Activatable = /** @class */ (function () {
    function Activatable() {
    }
    Activatable.prototype.activate = function () {
        console.log("activate()");
        this.isActive = true;
    };
    Activatable.prototype.deactivate = function () {
        console.log("deactivate()");
        this.isActive = false;
    };
    return Activatable;
}());
var SmartObject = /** @class */ (function () {
    function SmartObject() {
        var _this = this;
        // Disposable
        this.isDisposed = false;
        // Activatable
        this.isActive = false;
        console.log("ctor_SO()");
        setInterval(function () { return console.log(_this.isActive + " : " + _this.isDisposed); }, 500);
    }
    SmartObject.prototype.interact = function () {
        console.log("intearct()");
        this.activate();
    };
    return SmartObject;
}());
applyMixins(SmartObject, [Disposable, Activatable]);
var smartObj = new SmartObject();
setTimeout(function () { return smartObj.interact(); }, 10);
////////////////////////////////////////
// In your runtime library somewhere
////////////////////////////////////////
function applyMixins(derivedCtor, baseCtors) {
    console.log("apply()");
    baseCtors.forEach(function (baseCtor) {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(function (name) {
            console.log("name: " + name);
            Object.defineProperty(derivedCtor.prototype, name, Object.getOwnPropertyDescriptor(baseCtor.prototype, name));
        });
    });
}
