// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {

}

exports.components = {
  "component---src-pages-contact-js": preferDefault(require("/Users/romanmakovyak/workspace/rmakovyak.github.io/src/pages/contact.js")),
  "component---src-pages-experience-js": preferDefault(require("/Users/romanmakovyak/workspace/rmakovyak.github.io/src/pages/experience.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/romanmakovyak/workspace/rmakovyak.github.io/src/pages/index.js"))
}

exports.json = {
  "contact.json": require("/Users/romanmakovyak/workspace/rmakovyak.github.io/.cache/json/contact.json"),
  "experience.json": require("/Users/romanmakovyak/workspace/rmakovyak.github.io/.cache/json/experience.json"),
  "index.json": require("/Users/romanmakovyak/workspace/rmakovyak.github.io/.cache/json/index.json")
}