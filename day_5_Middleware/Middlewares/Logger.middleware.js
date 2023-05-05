



const fs = require("fs")
const routeLogger = (req, res, next) => {
    const startTime = new Date().getTime()
    next()

    const endTime = new Date().getTime()

    fs.appendFileSync("./routeDetails.txt", `RouteVisited: ${req.url},method:${req.method} || ResponseTime:${endTime - startTime}ms\n`)
}


module.exports = {
    routeLogger
}
