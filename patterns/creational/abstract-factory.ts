import Sovereign from "@people/social-class/nobles/royals/sovereign/sovereign";
import Person from "@people/person";
import BasicKing from "@people/social-class/nobles/royals/sovereign/basic-king";
import HandOfKing from "@people/social-class/nobles/advisors/hand-of-king";
import SmallCouncilMember from "@people/social-class/nobles/advisors/small-council-member";


class LannisterKing extends BasicKing {
    constructor(name: string) {
        super(name)
    }

    makeDecision() {
        super.makeDecision();
        console.log(this.name + " then throws a fit")
    }

    marry(spouse: Sovereign) {
        super.marry(spouse);
        console.log(this.name + " then threatens his in-laws")
    }

}


class TargaryenKing extends BasicKing {
    constructor(name: string) {
        super(name)
    }
}


abstract class BasicHandOfKing implements HandOfKing {
    name: string;
    sovereign: Sovereign;

    protected constructor(name: string, sovereign: Sovereign) {
        this.name = name;
        this.sovereign = sovereign;
    }

    makeDecision() {
    }

    marry(spouse: Person) {
        console.log(this.name + " is marrying" + spouse.name);
    }

    ruleInPlaceOf() {
        console.log(this.name + " is ruling in the place of " + this.sovereign.name)
    }
}


class LannisterHandOfKing extends BasicHandOfKing {
    constructor(name: string, sovereign: Sovereign) {
        super(name, sovereign);
    }
}

class TargaryenHandOfKing extends BasicHandOfKing {
    constructor(name: string, sovereign: Sovereign) {
        super(name, sovereign);
    }
}

const lordTywin = new LannisterHandOfKing("Tywin Lannister", new TargaryenKing("Aerys Targaryen"));
lordTywin.makeDecision();

abstract class NobleFactory {
    abstract makeQueen(name: string);

    abstract makeKing(name: string);

    abstract makeHandOfKing(name: string, sovereign: Sovereign);

    abstract makePrince(name: string);

    abstract makePrincess(name: string);
}

class TargaryenFactory extends NobleFactory {
    makeQueen(name: string) {
    }

    makeKing(name: string) {
        return new TargaryenKing(name)
    }

    makeHandOfKing(name: string, sovereign: Sovereign) {
        return new TargaryenHandOfKing(name, sovereign);
    }

    makePrince(name: string) {
    }

    makePrincess(name: string) {
    }


}

class LannisterFactory extends NobleFactory {
    makeQueen(name: string) {
    }

    makeKing(name: string) {
        return new LannisterKing(name);
    }

    makeHandOfKing(name: string, sovereign: Sovereign) {
        return new LannisterHandOfKing(name, sovereign);
    }

    makePrince(name: string) {
    }

    makePrincess(name: string) {
    }
}

class CourtSession {
    constructor() {

    }
}

const lannisterFactory: NobleFactory = new LannisterFactory();
const targaryenFactory: NobleFactory = new TargaryenFactory();
const daenerys: Sovereign = targaryenFactory.makeQueen("Daenerys Targaryen");
const tyrion: SmallCouncilMember = lannisterFactory.makeHandOfKing("Tyrion Lannister", daenerys);


