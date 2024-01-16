// 当使用第三方库时，我们需要引用它的声明文件，才能获得对应的代码补全、接口提示等功能
// declare let 声明全局变量
// declare function  声明全局函数
// declare class 声明全局类
// declare enum 声明全局枚举类型
// declare namespace 声明（含有子属性的）全局对象
import axios, { AxiosHeaders } from "axios";

import express from 'express'
const app = express()
const router = express.Router()

app.use('/api', router)

router.get('/api', (req, res) => {
  res.json({
    code: 200
  })
})

app.listen(1209, () => {
  console.log('1209');
})