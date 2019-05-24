// Main Anagram finder Function
function anagramfind(){
    var w1 = document.getElementById("word1").value;
    var w2 = document.getElementById("word2").value;
    if(w1.length === w2.length){
    	// Making the words into lower case so that program remains not case sensitive.
	    loword1 = wordCaselow(w1);
	    loword2 = wordCaselow(w2);

	    // First splitting the words, the sorting them and joining them later.
	    loword1 = sortLetter(loword1);
	    loword2 = sortLetter(loword2);

	    if(loword1 == loword2){
	    	console.log(loword1, loword2);
	    	console.log("anagram");
            
	    	confirm("you have entered anagram words");
            console.log("after Confirm");
	    }else{
	    	confirm("words are not anagram");
	    }
    }else{
    	alert("Not same length word. please input same length words");
    }

}

// word lower case function to make the program case sensitive free
function wordCaselow(word){
    return word.toLowerCase();
}

// Leter sorting function
function sortLetter(word){
    return word.split("").sort().join("");
}
