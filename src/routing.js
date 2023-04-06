const { SendEmail } = require("./handlers/email")
const { SendIfReCaptcha } = require("./handlers/recaptcha")
const { Error400 } = require("./handlers/error")
const { GitHubLanguages, GitHubProjects, GitHubDocumentsByDocument } = require("./handlers/github")
const { Experiences } = require("./handlers/experience")
const { Skills } = require("./handlers/skills")
const { Academia } = require("./handlers/academia")
const { Decorations } = require("./handlers/decorations")
const { Information } = require("./handlers/information")

module.exports = {
    POST: [
        {route: "/email/send", handler: (req, res) => SendIfReCaptcha(req, res, SendEmail, Error400)},
        {route: "/github/documents", handler: GitHubDocumentsByDocument},
    ],
    GET: [
        {route: "/github/languages", handler: GitHubLanguages},
        {route: "/github/projects", handler: GitHubProjects},
        {route: "/me/experiences", handler: Experiences},
        {route: "/me/skills", handler: Skills},
        {route: "/me/academia", handler: Academia},
        {route: "/me/decorations", handler: Decorations},
        {route: "/info", handler: Information},
    ]
}