import Person from "../../../person";
import DecisionMaker from "../../../powers/decision-maker";
import Sovereign from "../royals/sovereign/sovereign";

export default interface SmallCouncilMember extends DecisionMaker, Person {
    sovereign: Sovereign;

}