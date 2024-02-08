export interface TaskInterface{
    myArray2:Array<string>;
    addTask(task:string):number;
    listAllTasks():void;//have to call the void on this
    deleteTask(task: string): number;
}