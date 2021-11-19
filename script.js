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

let ignoreList = ["you","her","him","she","he","they","do","is","a","an","the","this","that","to","go", "with","using"];

let errors = ["No Verb", "No Subject", "No Object"];

for(i = 0; i < objectWordList.length; i++){
  objects.push(new Object(objectWordList[i], i));
}

for(i = 0; i < subjectWordList.length; i++){
  subjects.push(new Subject(subjectWordList[i], i, subObjects[i]));
}

for(i = 0; i < verbWordList.length; i++){
  verbs.push(new Verb(verbWordList[i], i, verNeedObject[i],verSubjects[i]));
}

let input = "attack enemey with rifle";
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
    words[0] = verbWordList.indexOf(inputArray[i]);
    break;
  }
}

var i = 0;

while(true){
  if (i >= inputArray.length){
    break;
  }
  if (verbWordList.includes(inputArray[i])){
    inputArray.splice(i, 1);
  }else{
    i++;
  }
}

for(i = 0; i < inputArray.length; i++){
  if (subjectWordList.includes(inputArray[i])){
    words[1] = subjectWordList.indexOf(inputArray[i]);
    break;
  }
}

while(true){
  if (i >= inputArray.length){
    break;
  }
  if (subjectWordList.includes(inputArray[i])){
    inputArray.splice(i, 1);
  }else{
    i++;
  }
}

for(i = 0; i < inputArray.length; i++){
  if (objectWordList.includes(inputArray[i])){
    words[2] = objectWordList.indexOf(inputArray[i]);
    break;
  }
}

while(true){
  if (i >= inputArray.length){
    break;
  }
  if (objectWordList.includes(inputArray[i])){
    inputArray.splice(i, 1);
  }else{
    i++;
  }
}

console.log(words);

var err = 0;

if (words[0] != ""){
  console.log(verbs[words[0]].word);
}else{
  err = 1;
}

if(words[1] != ""){
  console.log(subjects[words[1]].word);
}else{
  if(err == 0){
    err = 2;
  }
}

if (words[2] != ""){
  console.log(objects[words[2]].word);
}

try{
  if (words[2] != "" && verbs[words[0]].needObject != 0){
    //fatal: if verb and object both dont exist, error message appears. 
    if(err == 0){
      err = 3;
    }
  }
}catch(error){
  if(err == 0){
    err = 3;
  }
}

if (err != 0){

  if (inputArray[0] != undefined){
    console.log("Don't understand " + inputArray[0]);
  }
  else{
    console.log(errors[err-1])
  }
}