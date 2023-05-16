const fs = require("fs")
const path = require("path")

// console.log(fs)

const input = process.argv.slice(2);
const operation = input[0]
const file = input[1]
const content = input[2]
switch (operation) {
    case "read":
        fs.readFileSync(file, "utf-8", (err, data) => {
            if (err) {
                throw err
                console.log(data)

            }
        });
        break;

    case "append":
        fs.appendFile(file, content, err => {
            if (err) {
                throw err
                console.log(`${content}was appended to ${file}`)

            }
        });
        break;
    case "delete":
        fs.unlink(file, err => {
            if (err) {
                throw err
                console.log(`${file} was deleted`)

            }
        });
        break;
    case "create":
        fs.writeFileSync(file, '', err => {
            if (err) {
                throw err
                console.log(`${file}  was  created`)

            }
        });
        break;
    case "rename":
        const newname = input[2]
        fs.rename(file, newname, err => {
            if (err) {
                throw err
                console.log(`${file} was renamed to ${newname}`)

            }
        });
        break;
    case "list":
        const dir = file || "."
        fs.readdir(dir, (err, files) => {
            if (err) {
                throw err
                console.log(files.map(file => path.join(dir, file)).join('\n'));

            }
        });
        break;
    default:
        console.log(`Unknown operation: ${operation}`);
}