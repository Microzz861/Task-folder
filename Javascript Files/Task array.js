if (typeof localStorage === "undefined" || localStorage === null) {
  var LocalStorage = require('node-localstorage').LocalStorage;
  localStorage = new LocalStorage('./Task');
}

let catOBJ = {
  catName:'',
  dateCreated:'',
  Tasks:[],
  color:'',
  taskCounter:0,
  catScore:0,
  completedTasks:0,
}


class Category{ 
 constructor(catName,color,dateCreated){
  this.catName = catName;
  this.dateCreated = dateCreated; // put the getCurrentDate function
  this.color = color;
  this.taskCounter = 0;
  this.catScore = 0;
  this.completedTasks = 0;
  this.Tasks = [];
 }

  getTodayTasks(){
   return this.dateCreated;
 }
  

}

const category = new Category('Dishes', 'Blue', '123/123/1');
const {catName, dateCreated} = category;
console.log('Nour ' + catName); // we can use shorthand term for the initialization
console.log(category.getTodayTasks());
class Task{
  static taskscore = 5;
  
  constructor(
    Name, Description, taskDateCreated, completion, DueDate){
    this.Name = Name;
    this.Description = Description;
    this.taskDateCreated = taskDateCreated;
    this.DueDate= DueDate;
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

