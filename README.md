[![Gitpod Ready-to-Code](https://img.shields.io/badge/Gitpod-Ready--to--Code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/qzsiniong/create-redux-action-types) 

# Create Redux Action Types

使用一个普通的javascript对象来创建 redux 的 actionTypes.


## 安装

```bash
npm install --save create-redux-action-types
或
yarn add create-redux-action-types
```

## 使用

### 文件:actions/actionTypes.ts
```ts
import createReduxActionTypes from "create-redux-action-types"

export default createReduxActionTypes(
  {
    auth: {
      login: "",
      logout: "",
    },
    user: {
      get: {
        pending: "",
        fulfilled: "",
        rejected: ""
      }
    }
  },
  "-", // 分隔符, 默认 "/"
  "app" // 命名空间, 默认 undefined
);


```

### 文件:actions/some.ts
```ts
import actionTypes from "./actionTypes"

actionTypes.auth.login          // "app-auth-login"
String(actionTypes.user.get)    // "app-user-get-"
actionTypes.user.get.pending    // "app-user-get-pending"
actionTypes.user.get.fulfilled  // "app-user-get-fulfilled"
actionTypes.user.get.rejected   // "app-user-get-rejected"
```

### 创建出来的actionTypes 就像下面这样
```js
{
  auth: {
    login: "app-auth-login",
    logout: "app-auth-logout",
  },
  user: {
    get: {
      pending: "app-user-get-pending",
      fulfilled: "app-user-get-fulfilled",
      rejected: "app-user-get-rejected"
    }
  }
}
```