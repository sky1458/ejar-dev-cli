# 快速生成一个模拟服务器


## 安装（Install）
```bash
npm install -g ejar-dev-cli
```

## 生成模板（generate）
```bash
ejar-dev-cli g [name]
```

## 使用（Usage）
```bash
cd [name]
yarn
or
npm install
```

## 快速开始（Quick Start）

- 在mock文件夹下新建 js 文件
- 编写模拟接口

```js
export default {
  //支持POST GET DELETE PUT
  //格式为 请求方式+空格+请求地址
  "POST /exampleApi" : (req, res) => {
    res.send({
      status : "OK",
      code : 200,
      data : ""
    })
  },
  "POST /otherApi" : (req, res) => {
    res.send({
      data: "other data"
    })
  }
}
```

## 选项
- 更改启动端口号 ( 默认启动在 9527 )
```bash
yarn start 端口号
```
### mock数据
- mockjs 使用方式请移步 [mockjs 文档](http://mockjs.com)

### 注意
- 新增接口后，服务器会重新启动，会有 200ms-3s 左右的启动间隔