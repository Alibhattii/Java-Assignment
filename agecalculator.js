// age caltulater

var bornYear = Number(prompt("Enter your born year"))

var rightNow = new Date()

var currentYear = rightNow.getFullYear()

var age = currentYear - bornYear

console.log("your age is" , age)