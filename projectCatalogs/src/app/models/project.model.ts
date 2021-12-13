import { Task } from "./task.model";

export class Project{

    constructor(
        public id?:number,
        public name?:string,
        public description?: string,
        public categoryId?: number,
        public completeRate?: number ,
        public tasks?:Task[],
        public details?:string,
        public startDate? : Date 
    ){

    }
}