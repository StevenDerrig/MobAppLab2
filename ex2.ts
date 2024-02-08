let myArray: string[] = [];//equal it to an empty array
//let myArray:Array<string>=[]; another way to do it

function addTask(task: string): number {
    let length: number = myArray.push(task);//push also gives back the new length of the array.
    console.log(task + " has been added to myArray.");
    return length;
}

function listAllTasks() {//can add void after the () so ():void to return nothing 
    myArray.forEach(function (item) {
        console.log("Element " + item + " is in myArray.");
    })
    /*
for(let i = 0; i < myArray.length; i++)
    console.log("Array item at " + i + " is " +myArray[i]);
    */
}


function deleteTask(task: string): number {
    let index: number = myArray.indexOf(task);

    if (index > -1) {
        myArray.splice(index, 1);
        console.log(task + " has been deleted from myArray");
    } else {
        console.log(task + " is not in myArray");
    }
    return myArray.length;
}

addTask("X-02 Wyvern");
addTask("ADF-01 Falken");
listAllTasks();
deleteTask("Falken");
deleteTask("ADF-01 Falken");
listAllTasks();
//let x:number = myArray.indexOf(task);
//myArray.splice(x,' ');