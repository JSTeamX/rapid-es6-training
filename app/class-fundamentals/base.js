//let newClass = class Task { or set Aliasses

class Task {
	
	static getCounter(){
		return 999;
	}

	//Constructor
	constructor(){
		this.location = 'Colombia';
		console.warn("2","Constructing class");
		//console.warn(new.target.getDefaultId());
	}

	//Methods
	showId() {
		console.warn("3","99");
	}

}

// Extend Class
class SoftwareProject extends Task{
	//Comment if test new.target
	constructor(){
		super();
		console.warn("8","Constructing SoftwareProject");
	}
	static getDefaultId(){
		return 99;
	}
}

console.warn("1",typeof Task) // 'function'
let task = new Task(); // instance
task.showId(); // Call method
console.warn("4",typeof task) // 'object'
console.warn("5",task.showId == Task.prototype.showId); // true
function Task_1(){};
console.warn("6",window.Task_1 === Task_1) // true, if is importer from systemJs should be false
console.warn("7",window.Task === Task) // false

let p = new SoftwareProject();
console.warn("9",p.location);

let project = {
	getTaskCount(){
		return 50;
	}
}

let softwareProject = {
	getTaskCount(){
		return super.getTaskCount() + 7;
	}
}

Object.setPrototypeOf(softwareProject, project);
console.warn("10",softwareProject.getTaskCount());
console.warn("11",Task.getCounter());