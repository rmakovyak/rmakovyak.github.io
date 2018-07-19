// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-pages-contact-js": require("gatsby-module-loader?name=component---src-pages-contact-js!/Users/romanmakovyak/workspace/rmakovyak.github.io/src/pages/contact.js"),
  "component---src-pages-experience-js": require("gatsby-module-loader?name=component---src-pages-experience-js!/Users/romanmakovyak/workspace/rmakovyak.github.io/src/pages/experience.js"),
  "component---src-pages-index-js": require("gatsby-module-loader?name=component---src-pages-index-js!/Users/romanmakovyak/workspace/rmakovyak.github.io/src/pages/index.js")
}

exports.json = {
  "contact.json": require("gatsby-module-loader?name=path---contact!/Users/romanmakovyak/workspace/rmakovyak.github.io/.cache/json/contact.json"),
  "experience.json": require("gatsby-module-loader?name=path---experience!/Users/romanmakovyak/workspace/rmakovyak.github.io/.cache/json/experience.json"),
  "index.json": require("gatsby-module-loader?name=path---index!/Users/romanmakovyak/workspace/rmakovyak.github.io/.cache/json/index.json")
}

exports.layouts = {

}