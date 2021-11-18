function Verb(word, index, needObject, compatibleSubjects, stats){
  this.word = word;
  this.index = index;
  this.needObject = needObject;
  this.subjects = compatibleSubjects;
  this.stats = stats;
}

function Subject(word, index, compatibleObjects, stats){
  this.word = word;
  this.index = index;
  this.objects = compatibleObjects;
  this.stats = stats;
}

function Object(word, index, stats){
  this.word = word;
  this.index = index;
  this.stats = stats;
}

let objectWordList = ["door", "console", "enemy"]
let objects = [];

let subjectWordList = ["hand", "wrench", "rifle", "north", "south", "east", "west"];

let subObjects = [
  [0, 1, 2],
  [2],
  [2],
  [],
  [],
  [],
  [],
];

let subjects = [];

let verbWordList = ["go", "pick up", "use"];

let verNeedObject = [0, 0, 1];

let verSubjects = [
  [3, 4, 5, 6],
  [0, 1, 2],
  [0, 1, 2],
];

let verbs = [];
let words = ["","",""];

let ignoreList = ["you","him","they","do","is","a","an","the","this","that","to","go"];

for(i = 0; i < objectWordList.length; i++){
  objects.push(Object(objectWordList[i]), i)
}

for(i = 0; i < subjectWordList.length; i++){
  subjects.push(Subject(subjectWordList[i]), i, subObjects[i])
}

for(i = 0; i < verbWordList.length; i++){
  verbs.push(Verb(verbWordList[i]), i, verNeedObject[i],verSubjects[i])
}

let input = "Go use rifle to attack enemy";
input = input.toLowerCase();
let inputArray = input.split(" ");
var i = 0;

while(true){
  if (i >= inputArray.length){
    break;
  }
  if (ignoreList.includes(inputArray[i])){
    inputArray.splice(i, 1);
  }else{
    i++;
  }
}

console.log(inputArray);


for(i = 0; i < inputArray.length; i++){
  if (verbWordList.includes(inputArray[i])){
    words[0] = verbs[verbWordList.indexOf(inputArray[i])];
    break;
  }
}

console.log(words);