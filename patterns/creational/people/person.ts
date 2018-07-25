import Marryable from "./powers/marryable";
import Parents from "./relations/parents";

export default interface Person extends Marryable{
    name: string;
    parents?: Parents;
    children?: Person[];
}