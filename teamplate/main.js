import fs from 'fs';
const s = fs.readdirSync("./mock");
let ms = {};
s.forEach(item => {
  let m = require(`./mock/${item}`).default
  ms = { ...ms, ...m }
})
export default ms