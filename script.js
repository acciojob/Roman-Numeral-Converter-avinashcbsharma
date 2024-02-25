  function convertToRoman(num) {
  	const obj = {
      0:['M',1000], 
      1:['D', 500], 
      2:['C', 100], 
      3:['L', 50], 
      4:['X', 10], 
      5:['V', 5], 
      6:['I', 1]
    };

  var number = document.getElementById("numberInput").value;
      if (isNaN(number) || number < 1 || number > 3999) {
        document.getElementById("result").innerText = "Please enter a valid number between 1 and 3999.";
        return;
      }

      var romanNumerals = [
        ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
        ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],
        ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"],
        ["", "M", "MM", "MMM"]
      ];

      var romanNumeral = "";
      var numString = number.toString();

      for (var i = numString.length - 1, j = 0; i >= 0; i--, j++) {
        romanNumeral = romanNumerals[j][parseInt(numString[i])] + romanNumeral;
      }

      document.getElementById("result").innerText = "Roman numeral: " + romanNumeral;
    }
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman
