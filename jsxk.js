var P1 = {
    firstname: "Sachin",
    lastname: "Tendulkar",
    get fun() {
        return this._fun;
    },
    set fun(value) {
        this._fun = value;
    }
};
P1.fun();
