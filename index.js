function shout(string){
  return string.toUpperCase();
}
shout("hello")

function whisper(string){
  return string.toLowerCase();
}
whisper("HELLO")

function logShout(string){
  return string.toUpperCase();
}
console.log(logShout("hello"));

function logWhisper(string){
  return string.toLowerCase();
}
console.log(logWhisper("HELLO"));

function sayHiToGrandma(string){
    if (string === "hello"){
      console.log("I can't hear you!");
    }
    else if (string === "HELLO"){
      console.log("YES INDEED!")
    }
    else if (string === "I love you, Grandma."){
      console.log("I love you, too.")
    }
}
sayHiToGrandma("hello");
