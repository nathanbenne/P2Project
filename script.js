var xlsx = require("xlsx");

var wb = xlsx.readFile("TimmyBookInventory.xlsx", {cellDates:true});
var ws = wb.Sheets[wb.SheetNames[0]];

    function changeValue(cell, value){
        let desiredCell = ws[cell];
        let desiredValue = desiredCell ? desiredCell.v : undefined;
        if(desiredValue !== undefined){
            desiredCell.v = value;
        } else {
            console.log("Error: desiredValue === undefined");
        }
    }

    function pageSum(){
        let i =2;
        let sum = 0;
        let desiredValue = ws["C"+i].v;
        while(desiredValue !== undefined){
            sum += ws["C"+i].v;
            i++;
            desiredValue = ws["C"+i] ? ws["C"+i].v : undefined;
        }
        document.getElementById("pg").innerHTML = ("Text change test");
        return sum;
    }

    changeValue("A2", "suckmyNut");

var sum = pageSum();
let newData = xlsx.utils.sheet_to_json(ws);

var newWB = xlsx.utils.book_new();
xlsx.utils.book_append_sheet(newWB, xlsx.utils.json_to_sheet(newData), "Books");
xlsx.writeFile(newWB, "TimmyBookInventory.xlsx", {cellDates:false});

//This changes the text value of the header
function changeText(text){
    document.getElementById("heading").innerHTML = text;
}

//this is a function that runs when the website is loaded
function intialize(){
    document.getElementById("heading").innerHTML = "poop";
}


//gets the value stored in textField and passes it to changeText
function getText(){
    var text = document.getElementById("textField").value;
    changeText(text);
}