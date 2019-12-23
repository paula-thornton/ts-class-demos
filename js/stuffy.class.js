"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Stuffy = /** @class */ (function () {
    // can only define constructor once, BUT can set default values for the class 
    // variables
    function Stuffy(id, type, color, size, limbs) {
        if (id === void 0) { id = 0; }
        if (type === void 0) { type = ""; }
        if (color === void 0) { color = ""; }
        if (size === void 0) { size = ""; }
        if (limbs === void 0) { limbs = 0; }
        this.id = id;
        this.type = type;
        this.color = color;
        this.size = size;
        this.limbs = limbs;
    }
    return Stuffy;
}());
exports.Stuffy = Stuffy;
