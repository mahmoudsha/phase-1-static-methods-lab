class Formatter {
  //add static methods here
  constructor(){

  }
  static capitalize(str){
    return str[0].toUpperCase() + str.slice(1)
  }
  static sanitize(str){
    return  str.replace(/[^A-Za-z0-9-' ]+/g, "");

  }
  static titleize(str){
    const strs = str.toLowerCase();
    const expect = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    const words = strs.split(" ");
  
    const result = words.map((word, index) => { 
      if(index === 0 || !expect.includes(word)){
        return word[0].toUpperCase() + word.substring(1);
      } else {
        return word;
      }
    }).join(" ");  
  
    return result;
  }
}