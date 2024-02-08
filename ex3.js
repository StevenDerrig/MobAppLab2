"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SampleClass = /** @class */ (function () {
    function SampleClass() {
        this.myArray2 = []; //set array to be empty
    }
    SampleClass.prototype.addTask = function (task) {
        var length = this.myArray2.push(task); //this.refers to the myArray2, declared before the addTask
        console.log(task + " has been added to myArray2.");
        return length;
    };
    SampleClass.prototype.listAllTasks = function () {
        this.myArray2.forEach(function (item) {
            console.log("Element " + item + " is in myArray2.");
        });
    };
    SampleClass.prototype.deleteTask = function (task) {
        var index = this.myArray2.indexOf(task);
        if (index > -1) {
            this.myArray2.splice(index, 1);
            console.log(task + " has been deleted from myArray2");
        }
        else {
            console.log(task + " is not in myArray2");
        }
        return this.myArray2.length;
    };
    return SampleClass;
}());
var myTask = new SampleClass();
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
