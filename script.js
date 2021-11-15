function Verb(word, index, compatibleSubjects, stats){
  this.word = word;
  this.index = index;
  this.subjects = compatibleSubjects;
  this.stats = stats;
}

function Subject(word, index, compatibleObjects, stats){
  this.word = word;
  this.index = index;
  this.subjects = compatibleSubjects;
  this.stats = stats;
}

function Object(word, index, stats){
  this.word = word;
  this.index = index;
  this.stats = stats;
}


let verbWordList = ["go", "pick up", "use"]
let verbs = []



for(i = 0; i < verbWordList.length; i++){
  verbs.push(Verb(verbWordList[i]), i)
}