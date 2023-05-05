const first = (req, res, next) => {
    console.log("1")
    next()
    console.log("2")
}
const second = (req, res, next) => {
    console.log("3")
    next()
    console.log("4")
}
const third = (req, res, next) => {
    console.log("5")
    next()
    console.log("6")
}


module.exports = {
    first,
    third,
    second
}