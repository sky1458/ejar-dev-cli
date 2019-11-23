#!/usr/bin/env node
// 后期可更改为可配置headers选项
const fs = require('fs');
const path = require("path");
const chalk = require('chalk');
exports.run = async function (args) {
  const cmdPath = process.cwd()
  const [name] = args
  if(fs.existsSync(name)) {
    console.log("该项目已经存在")
    return
  }
  // 创建项目
  await fs.mkdirSync(name);

  // 复制 package.json
  const packageJSON = path.join(__dirname,"../teamplate/package.json");
  const packageDir = path.join(cmdPath, `${name}/package.json`)
  await fs.copyFileSync(packageJSON, packageDir);
  console.log(chalk.green(packageDir))

  // 创建mock文件夹
  const mockDir = path.join(cmdPath,`${name}/mock`);
  await fs.mkdirSync(mockDir)
  console.log(chalk.green(mockDir))

  // 复制example.js
  const mockExample = path.join(__dirname, "../teamplate/mock/example.js");
  const mockExampleDir = path.join(cmdPath, `${name}/mock/example.js`)
  await fs.copyFileSync(mockExample, mockExampleDir)
  console.log(chalk.green(mockExampleDir))

  // 复制main.js
  const main = path.join(__dirname,"../teamplate/main.js");
  const mainDir = path.join(cmdPath, `${name}/main.js`)
  await fs.copyFileSync(main,mainDir)
  console.log(chalk.green(mainDir))

  // 复制README.md
  const md = path.join(__dirname,"../teamplate/README.md");
  const mdDir = path.join(cmdPath, `${name}/README.md`)
  await fs.copyFileSync(md,mdDir)
  console.log(chalk.green(mdDir))

  // 复制README.md
  const nodemen = path.join(__dirname,"../teamplate/nodemon.json");
  const nodemenDir = path.join(cmdPath, `${name}/nodemen.json`)
  await fs.copyFileSync(nodemen,nodemenDir)
  console.log(chalk.green(nodemenDir))

  // 复制 server.js
  const g = path.join(__dirname,"../teamplate/server.js");
  const gDir = path.join(cmdPath, `${name}/server.js`)
  await fs.copyFileSync(g,gDir)
  console.log(chalk.green(gDir))
  console.log(chalk.green("***************************************"))
  console.log(chalk.green(`***  ${name} successfully created!  ***`))
  console.log(chalk.green("***************************************"))
  console.log(chalk.green("创建成功："))
  console.log("")
  console.log(chalk.yellow("1.进入目录："))
  console.log(chalk.green(`cd ${name}`))
  console.log("")
  console.log(chalk.yellow("2.安装依赖:"))
  console.log(chalk.green("npm install"),chalk.yellow("or"),chalk.green("yarn"))
  console.log("")
  console.log(chalk.yellow("3.运行模拟服务器："))
  console.log(chalk.green("npm run start"),chalk.yellow("or"),chalk.green("yarn start"))
  console.log("")
  console.log(chalk.yellow("更多使用方法，请查看"),chalk.green("README.md"))

};




