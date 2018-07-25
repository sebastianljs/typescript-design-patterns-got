import King from "./king";
import SmallCouncilMember from "@people/social-class/nobles/advisors/small-council-member";
import Sovereign from "./sovereign";

export default abstract class BasicKing implements King {
    name: string;
    titles: string[];

    protected constructor(name: string) {
        this.name = name
    }

    appoint(smallCouncilMember: SmallCouncilMember) {
        console.log(this.name + " appoints a small council member")
    }

    makeDecision() {
        console.log(this.name + " makes a decision")
    }

    marry(spouse: Sovereign) {
        console.log(this.name + " marries " + spouse.name)
    }

    fathers() {
        console.log(this.name + " fathers ")
    }

}