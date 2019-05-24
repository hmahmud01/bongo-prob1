// word lower case function to make the program case sensitive free
function wordCaselow(word){
    return word.toLowerCase();
}

// Leter sorting function
function sortLetter(word){
    return word.split("").sort().join("");
}

function lengthCheck(w1, w2){
    if(w1.length === w2.length){      
      return true;      
    }else{
      return false;
    }
}

describe("Bongo Problem 1 anagram test", () => {
  it("success when matches", () => {
      expect(wordCaselow("SOME")).toEqual("some");
  });
  it("success when letters are sorted", () => {
      expect(sortLetter("aec")).toEqual("ace");
  });
  it("success when words are same lenth", () => {
      expect(lengthCheck("abelt", "Table")).toEqual(true);
  });
  it("fails when words are not same lenth", () => {
      expect(lengthCheck("abc", "abcd")).toEqual(false);
  });
});