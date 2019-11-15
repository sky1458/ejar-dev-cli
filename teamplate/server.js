import EX from 'express';
import BP from 'body-parser';
import os from 'os';
import rts from './main';
const a = EX()
const p = process.argv[4] || 3000
a.all('*', function (request, response, next) {
  response.header("Access-Control-Allow-Origin", "*");
  response.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, token");
  next();
});
function gf() {
  const host = os.networkInterfaces();
  let alias = ""
  for (let h in host) {
    let face = host[h];
    face.forEach(i => {
      if (i.family === "IPv4" && i.address !== "127.0.0.1" && !i.internal && i.netmask === "255.255.255.0") {
        alias = i.address
      }
    })
  }
  return alias
}
const ad = gf()
a.use(BP.urlencoded({ extended: false }))
a.use(BP.json())
for (let rt in rts) {
  const [md, ph] = rt.split(" ");
  const m = md.toLowerCase()
  a[m](ph, rts[rt])
}
a.listen(p, (e) => {
  console.log("\x1B[32m", 'Service running successfully', "\x1B[39m", "\n")
  console.log("\x1B[32m", "You can now access the interface service!", "\x1B[39m", "\n")
  console.log(`     Local          : http://localhost:${p}`)
  console.log(`     On Your Network: http://${ad}:${p}`)
})