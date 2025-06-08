import { Status } from "../enums/Status";

export interface ITask {
    id: number;
    title: string;
    status: typeof Status[keyof typeof Status];
}