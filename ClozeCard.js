var ClozeCard = function( text, cloze ){

	this.text = text;
	this.cloze = cloze;
	var error = false;

	//https://stackoverflow.com/questions/10136097/mystring-replace-variable-but-globally

	var partial = text;
	// console.log("Original" + partial);
	this.partial = partial.replace(RegExp(cloze, "g"), "...");
	// console.log("Replaced:" + partial);


	if (text.indexOf(cloze) < 0) {
		this.error = true;
		console.log("ClozeCard: Whoops, this ClozeCard won't work.");
	}

}

module.exports = ClozeCard;