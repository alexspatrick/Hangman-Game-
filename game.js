//array//
const words= [ "Alabama", "Montgomery","Montana",	"Helena","Alaska"", "Juneau",	"Nebraska",	"Lincoln",
"Arizona",	"Phoenix",	"Nevada",	"Carson", "City Arkansas",	"Little Rock",	"New Hampshire",	"Concord",
"California",	"Sacramento",	"New Jersey",	"Trenton","Connecticut",	"Hartford",	"New York",	"Albany","Delaware",	"Dover",	"North Carolina",	"Raleigh",
"Florida",	"Tallahassee",	"North Dakota",	"Bismarck",
"Georgia", "Atlanta",	"Ohio",	"Columbus","Hawaii",	"Honolulu",	"Oklahoma",	"Oklahoma City",
"Idaho",	"Boise",	"Oregon",	"Salem",
"Illinois",	"Springfield",	"Pennsylvania",	"Harrisburg","Indiana",	"Indianapolis",	"Rhode Island",	"Providence",
"Iowa",	"Des Moines",	"South Carolina",	"Columbia",
"Kansas",	"Topeka",	"South Dakota",	"Pierre",
"Kentucky",	"Frankfort",	"Tennessee",	"Nashville","Louisiana",	"Baton Rouge","	"Texas",	"Austin",
"Maine",	"Augusta", "Utah",	"Salt Lake City",
"Maryland",	"Annapolis",	"Vermont",	"Montpelier","Massachusetts",	"Boston",	"Virginia",	"Richmond",
"Michigan",	"Lansing",	"Washington",	"Olympia",
"Minnesota",	"St. Paul",	"West Virginia",	"Charleston","Mississippi",	"Jackson",	"Wisconsin",	"Madison",
"Missouri",	"Jefferson City",	"Wyoming",	"Cheyenne"];

let randNum = Math.floor(Math.random() * words.length);
console.log("hello");
let choosenWord = word[ randNum];
let rightWord =[];
let wrongWord = [];
let underScore = [];
//dom manipulation//
let docUnderScore = document.getElementsByClassName("underscore");
let docRightGuess = document.getElementsByClassName("rightGuess");
let docWrongGuess = document.getElementsByClassName("wrongGuess");
//create underscores based on length of word//
let generateUnderscore = () => {
    for (let i =0; i < choosenWord.length; i++) {
    	underScore.push("_");
    	
    }
    return underScore;
}
//get user guess//
document.addEventListener("keypres", (event) => { 
    
    let keyword = String.fromChardCode(event.keyCode);
    //if users guess it is right//
    if(choosenWord.indexOf(keyword)> -1) {
    	//add to right word array//

    	rightWord.push(keyword);

    	//replace underscore with right letter//
    	underScore[choosenWord.indexOf(keyword)] = keyword;
    	docUnderScore[0].innerHTML = underScore.join(" ");
    	docRightGuess [0].innerHTML = rightWord;
    	//checks to see if user words matches guesses//
    	if(underScore.join(" ")== choosenWord){
             alert("You Win");
    	}
    }
     else{
     wrongWord.push(keyword);
     docWrongGuess[0].innerHTML = wrongWord;
     }
     });

     generateUnderscore[0];innerHTML = generateUnderscore().join(" ");
     
 }








    
})