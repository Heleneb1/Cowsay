const info= require("./information");
console.log(info);
const cowsay= require("cowsay");
console.log(cowsay.say({
    text : "Hi i'm " + info.firstName + " from " + info.campus,
    e : "oO",
    T : "U "
}));
