// Excercise 12
// Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, 
//print a message to them. The text of each message should be the same, but each message should be personalized 
// with the person’s name.
var friendsName = ["Ayesha", "Fatima", "Nimra", "shibra"];
for (var _i = 0, friendsName_1 = friendsName; _i < friendsName_1.length; _i++) {
    var name_1 = friendsName_1[_i];
    console.log("Hello ".concat(name_1, ", what are you doing nowadays?"));
}
