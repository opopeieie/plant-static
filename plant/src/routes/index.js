export default {
  path: '/',

  component: require('views/App').default,
  
  indexRoute: {
    component: require('component/Welcome').default
  },
  
  childRoutes: [
    // 路由按模块组织分离，避免单文件代码量过大
    // require('./msg').default,
    // require('./todo').default,
    
    // 强制“刷新”页面的 hack
    { path: 'redirect', component: require('component/Redirect').default },
    
    // 无路由匹配的情况一定要放到最后，否则会拦截所有路由
    { path: '*', component: require('component/404').default }
  ]
}

/*
  当前路由树如下
  ├ /
  |
  ├ /msg
  ├ /msg/add
  ├ /msg/detail/:msgId
  ├ /msg/modify/:msgId
  |
  ├ /todo
  |
  ├ /redirect
*/
