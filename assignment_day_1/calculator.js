const crypto = require("crypto")
const input = process.argv.slice(2)
// console.log(input)


const operation = input[0]

const num1 = parseFloat(input[1])
// console.log(num1)
const num2 = parseFloat(input[2])
const length = parseFloat(input[3]) || 8

if (operation === "add") {
    console.log(num1 + num2)
} else if (operation === "sub") {
    console.log(num1 - num2)

} else if (operation === "mult") {
    console.log(num1 * num2)

} else if (operation === "divide") {
    console.log(num1 / num2)
} else if (operation === "sin") {
    console.log(Math.sin(num1))
} else if (operation === "cos") {
    console.log(Math.cos(num1))
} else if (operation === "tan") {
    console.log(Math.tan(num1))

} else if (operation === "random") {
    console.log(crypto.randomBytes(length).toString("hex"))

} else {
    console.log("Invalid operation")
}