var NewspaperType = prompt("what type of newspaper do you want?"); //sport 
var noNewspaper = prompt("what mean of newspaper do you want in a one week?"); //22

var OrderDetails;

if (noNewspaper >= 1 && noNewspaper < 5) {
    OrderDetails = " congracts You can get two newspapers for free";
}
else if (noNewspaper > 10) {
    OrderDetails = "Congratulations you got free delivery of your newspaper every day";
}
else {
    OrderDetails = "We apologize. There is an error";
}


document.write(OrderDetails);
confirm("welcom");
alert("thank you");


var order = prompt(`what do you want newspaper or book`);

while (order !== `newspaper` && order !== `book`) {

    order = prompt(`what do you want newspaper or book`);

}

var picture = ``;
if (order === `newspaper`) {
    picture = `<img src="images/newspaper.jpeg"/>`;
}
else
    if (order === `book`) {
        picture = `<img src="images/bookr.png"/>`;
    }
var numper = prompt(`how many do you want?`)

var result = "";
for (var i = 0; i < numper; i++) {

    result = result + picture;
}


