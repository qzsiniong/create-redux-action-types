# Create Redux Action Types

使用一个普通的javascript对象来创建 redux 的 actionTypes.


## 安装

```bash
npm install --save create-redux-action-types
或
yarn add create-redux-action-types
```

## 使用

```ts
# 文件:actionTypes.ts
import createReduxActionTypes from "create-redux-action-types"

export default createReduxActionTypes(
  {
    auth: {
      login: "",
      logout: "",
    },
    some: {
      foo: {
        bar: ""
      }
    }
  },
  "-", // 分隔符, 默认 "/"
  "app" // 命名空间, 默认 undefined
);


```

```ts
# 文件:some.ts
import actionTypes from "./actionTypes"

actionTypes.auth.login // "app-auth-login"
actionTypes.some.foo.bar // "app-some-foo-bar"
```

```json
// 创建出来的actionTypes 就像下面这样
{
  auth: {
    login: "app-auth-login",
    logout: "app-auth-logout",
  },
  some: {
    foo: {
      bar: "app-some-foo-bar"
    }
  }
}
```