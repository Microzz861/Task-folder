if (typeof localStorage === "undefined" || localStorage === null) {
  var LocalStorage = require('node-localstorage').LocalStorage;
  localStorage = new LocalStorage('./Task');
}


class Task{
  static score = 5;
  
  constructor(
    Name, Description, taskDateCreated, DueDate, completion){
    this.Name = Name;
    this.Description = Description;
    this.taskDateCreated = taskDateCreated;
    this.DueDate= DueDate ;
    this.completion = completion; //default value is false if not specified in constructor
  }
  

  get Tasks(){
    return this.displayTask();
  }
   displayTask(){
    return this.Name;
   }
}

  let task1 = new Task('Dishes','Clean the dishes', '28/9/2023', '29/9/2023',0);

console.log(task1.Tasks);

