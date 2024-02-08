import { TaskInterface } from './interface';

class SampleClass implements TaskInterface {

    myArray2: Array<string> = [];//set array to be empty

    addTask(task: string): number {
        let length: number = this.myArray2.push(task);//this.refers to the myArray2, declared before the addTask
        console.log(task + " has been added to myArray2.");
        return length;
    }

    listAllTasks(): void {
        this.myArray2.forEach((item) => { //note the use of =>
            console.log("Element " + item + " is in myArray2.");
        })
    }

    deleteTask(task: string): number {
        let index: number = this.myArray2.indexOf(task);

        if (index > -1) {
            this.myArray2.splice(index, 1);
            console.log(task + " has been deleted from myArray2");
        } else {
            console.log(task + " is not in myArray2");
        }
        return this.myArray2.length;
    }
}

let myTask = new SampleClass();
myTask.addTask("F-22 Raptor");
myTask.addTask("YF-23 Window");
myTask.listAllTasks();
myTask.deleteTask("YF-23 Window");
myTask.listAllTasks();

/*
interface TaskInterface{
    myArray2:Array <string>;
    addTask(task:string):number;
}
*/