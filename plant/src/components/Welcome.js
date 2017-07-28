import React from 'react'
import { Link } from 'react-router'
import Logon from './logon'
/**
 * 本组件为欢迎页（首页）
 * 由于几乎没有交互逻辑
 * 因此可以不使用类的写法
 * 
 * 实际上，ES6 的类经由 Babel 转码后
 * 其实还是返回一个类似的函数
 */
const Welcome = () => (
  <div className="row">
      <div className="medium-8 columns">
          <h1>欢迎使用 <br/> 我是占位符我是占位符我是占位符我是占位符我是占位符我是占位符我是占位符我是占位符我是占位符我是占位符我是占位符我是占位符</h1>
      </div>
      <div className="medium-4 columns">
          <Logon/>
      </div>
  </div>
);

export default Welcome
