import SmallCouncilMember from '@people/social-class/nobles/advisors/small-council-member'
import Royalty from "@people/social-class/nobles/royals/royalty";
import DecisionMaker from "@people/powers/decision-maker";

export default interface Sovereign extends DecisionMaker, Royalty {
    name: string;

    appoint(smallCouncilMember: SmallCouncilMember);
}