// Switches between development.js and production.js depending on NODE_ENV
export default require(`./${process.env.NODE_ENV}`).default;