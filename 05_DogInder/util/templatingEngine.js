import fs from "fs";
const header = readPage('./public/components/header/header.html')
const footer = readPage('./public/components/footer/footer.html')

export function readPage(path) {
    return fs.readFileSync(path).toString();
}

export function constructPage(pageHTML) {
    return header + pageHTML + footer;
}