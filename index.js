function shout(string){
  return string.toUpperCase();
}
shout("hello")

function whisper(string){
  return string.toLowerCase();
}
whisper("HELLO")

function logShout(string){
  console.log(string.toUpperCase());
}
logShout("hello");

function logWhisper(string){
  console.log( string.toLowerCase());
}
logWhisper("HELLO");

function sayHiToGrandma(string){
  var s = string;
    if (s.toLowerCase() === s){
      return "I can't hear you!";
    }
    if (s.toUpperCase() === s){
      return "YES INDEED!"
    }
    if (string === "I love you, Grandma."){
      return "I love you, too."
    }
}

sayHiToGrandma("hello");
sayHiToGrandma("HELLO");
sayHiToGrandma("I love you, Grandma.");
