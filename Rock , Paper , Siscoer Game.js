let user = prompt("Enter the any one (R , P , S)?");
let computer = Math.floor(Math.random() * 3);
let selector = ["R", "P", "S"][computer];

function check(user, selector) {
    if (user == selector) {    
        return "Draw";
    }
    else if (user == "R" && selector == "P") {
        return "Computer";
    }
    else if (user == "R" && selector == "S") {
        return "User";
    }
    else if (user == "P" && selector == "R") {
        return "User";
    }
    else if (user == "P" && selector == "S") {
        return "Computer";
    }
    else if (user == "S" && selector == "R") {
        return "Computer";
    }
    else if (user == "S" && selector == "P") {
        return "User";
    }
}
let result = check(user , selector);
document.write("<br>" + `Computer : ${selector} and You : ${user}`);
document.write("<br>" + "The Winnner is : " + result);