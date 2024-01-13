import { Stage } from "./projectStage";
import { Type } from "./projectType";
import { steelType } from "./steelType";

export class Project{
    id: number;
    name: string;
    deadline: Date;
    steelType: steelType;
    type: Type;
    stage: Stage;
}