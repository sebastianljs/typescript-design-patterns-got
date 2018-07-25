"use strict";
exports.__esModule = true;
var BasicKing = /** @class */ (function () {
    function BasicKing(name) {
        this.name = name;
    }
    BasicKing.prototype.appoint = function (smallCouncilMember) {
        console.log(this.name + " appoints a small council member");
    };
    BasicKing.prototype.makeDecision = function () {
        console.log(this.name + " makes a decision");
    };
    BasicKing.prototype.marry = function (spouse) {
        console.log(this.name + " marries " + spouse.name);
    };
    BasicKing.prototype.fathers = function () {
        console.log(this.name + " fathers ");
    };
    return BasicKing;
}());
exports["default"] = BasicKing;
//# sourceMappingURL=basic-king.js.map