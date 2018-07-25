"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var basic_king_1 = require("@people/social-class/nobles/royals/sovereign/basic-king");
var LannisterKing = /** @class */ (function (_super) {
    __extends(LannisterKing, _super);
    function LannisterKing(name) {
        return _super.call(this, name) || this;
    }
    LannisterKing.prototype.makeDecision = function () {
        _super.prototype.makeDecision.call(this);
        console.log(this.name + " then throws a fit");
    };
    LannisterKing.prototype.marry = function (spouse) {
        _super.prototype.marry.call(this, spouse);
        console.log(this.name + " then threatens his in-laws");
    };
    return LannisterKing;
}(basic_king_1["default"]));
var TargaryenKing = /** @class */ (function (_super) {
    __extends(TargaryenKing, _super);
    function TargaryenKing(name) {
        return _super.call(this, name) || this;
    }
    return TargaryenKing;
}(basic_king_1["default"]));
var BasicHandOfKing = /** @class */ (function () {
    function BasicHandOfKing(name, sovereign) {
        this.name = name;
        this.sovereign = sovereign;
    }
    BasicHandOfKing.prototype.makeDecision = function () {
    };
    BasicHandOfKing.prototype.marry = function (spouse) {
        console.log(this.name + " is marrying" + spouse.name);
    };
    BasicHandOfKing.prototype.ruleInPlaceOf = function () {
        console.log(this.name + " is ruling in the place of " + this.sovereign.name);
    };
    return BasicHandOfKing;
}());
var LannisterHandOfKing = /** @class */ (function (_super) {
    __extends(LannisterHandOfKing, _super);
    function LannisterHandOfKing(name, sovereign) {
        return _super.call(this, name, sovereign) || this;
    }
    return LannisterHandOfKing;
}(BasicHandOfKing));
var TargaryenHandOfKing = /** @class */ (function (_super) {
    __extends(TargaryenHandOfKing, _super);
    function TargaryenHandOfKing(name, sovereign) {
        return _super.call(this, name, sovereign) || this;
    }
    return TargaryenHandOfKing;
}(BasicHandOfKing));
var lordTywin = new LannisterHandOfKing("Tywin Lannister", new TargaryenKing("Aerys Targaryen"));
lordTywin.makeDecision();
var NobleFactory = /** @class */ (function () {
    function NobleFactory() {
    }
    return NobleFactory;
}());
var TargaryenFactory = /** @class */ (function (_super) {
    __extends(TargaryenFactory, _super);
    function TargaryenFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TargaryenFactory.prototype.makeQueen = function (name) {
    };
    TargaryenFactory.prototype.makeKing = function (name) {
        return new TargaryenKing(name);
    };
    TargaryenFactory.prototype.makeHandOfKing = function (name, sovereign) {
        return new TargaryenHandOfKing(name, sovereign);
    };
    TargaryenFactory.prototype.makePrince = function (name) {
    };
    TargaryenFactory.prototype.makePrincess = function (name) {
    };
    return TargaryenFactory;
}(NobleFactory));
var LannisterFactory = /** @class */ (function (_super) {
    __extends(LannisterFactory, _super);
    function LannisterFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LannisterFactory.prototype.makeQueen = function (name) {
    };
    LannisterFactory.prototype.makeKing = function (name) {
        return new LannisterKing(name);
    };
    LannisterFactory.prototype.makeHandOfKing = function (name, sovereign) {
        return new LannisterHandOfKing(name, sovereign);
    };
    LannisterFactory.prototype.makePrince = function (name) {
    };
    LannisterFactory.prototype.makePrincess = function (name) {
    };
    return LannisterFactory;
}(NobleFactory));
var CourtSession = /** @class */ (function () {
    function CourtSession() {
    }
    return CourtSession;
}());
var lannisterFactory = new LannisterFactory();
var targaryenFactory = new TargaryenFactory();
var daenerys = targaryenFactory.makeQueen("Daenerys Targaryen");
var tyrion = lannisterFactory.makeHandOfKing("Tyrion Lannister", daenerys);
//# sourceMappingURL=abstract-factory.js.map