var BasicCard = require("./BasicCard.js");
var ClozeCard = require("./ClozeCard.js");

var firstPresident = new BasicCard("Who was the first president of the United States?", "George Washington");
console.log("Basic Front: " + firstPresident.front); 
console.log("Basic Back: " + firstPresident.back);

var firstPresidentCloze = new ClozeCard("George Washington was the first president of the United States.", "George Washington");
if (firstPresidentCloze.error !== true ){
	console.log("ClozeCard Cloze: " + firstPresidentCloze.cloze);
	console.log("ClozeCard Partial: " + firstPresidentCloze.partial);
	console.log("ClozeCard Full: " + firstPresidentCloze.text);
};