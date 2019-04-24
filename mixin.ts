// Disposable Mixin
class Disposable {
    isDisposed: boolean;
    dispose() {
        console.log("dispose()");
        this.isDisposed = true;
    }

}

// Activatable Mixin
class Activatable {
    isActive: boolean;
    activate() {
        console.log("activate()");
        this.isActive = true;
    }
    deactivate() {
        console.log("deactivate()");
        this.isActive = false;
    }
}

class SmartObject implements Disposable, Activatable {
    constructor() {
        console.log("ctor_SO()");
        setInterval(() => console.log(this.isActive + " : " + this.isDisposed), 500);
    }

    interact() {
        console.log("intearct()");
        this.activate();
    }

    /*The first thing you may notice in the above is that instead of using extends, we use implements. 
    This treats the classes as interfaces, and only uses the types behind Disposable and Activatable rather than the implementation. 
    This means that we’ll have to provide the implementation in class. Except, that’s exactly what we want to avoid by using mixins. */
    
    // Disposable
    isDisposed: boolean = false;
    dispose: () => void;
    // Activatable
    isActive: boolean = false;
    activate: () => void;
    deactivate: () => void;
}
applyMixins(SmartObject, [Disposable, Activatable]);

let smartObj = new SmartObject();
setTimeout(() => smartObj.interact(), 10);

////////////////////////////////////////
// In your runtime library somewhere
////////////////////////////////////////

function applyMixins(derivedCtor: any, baseCtors: any[]) {
    console.log("apply()");
    baseCtors.forEach(baseCtor => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
            console.log("name: " + name);
            Object.defineProperty(derivedCtor.prototype, name, Object.getOwnPropertyDescriptor(baseCtor.prototype, name));
        });
    });
}