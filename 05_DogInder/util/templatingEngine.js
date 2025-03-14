import fs from "fs";
const header = readPage('./public/components/header/header.html')
const footer = readPage('./public/components/footer/footer.html')

export function readPage(path) {
    return fs.readFileSync(path).toString();
}
// options = title, cssLinks
export function constructPage(pageHTML, options = {}) {
    return header
        .replace('{nav_title}', options.title || 'DogInder')
        .replace('{css_links}', options.cssLinks || '')
        + pageHTML
        + footer;
}