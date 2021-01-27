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


