# Create Redux Action Types

Create redux action types with normal javascript object.


## Install

```bash
npm install --save create-redux-action-types
or 
yarn add create-redux-action-types
```

## Usage

### file:actions/actionTypes.ts
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
  "-", // delimiter, default "/"
  "app" // namespace, default undefined
);


```

### file:actions/some.ts
```ts
import actionTypes from "./actionTypes"

actionTypes.auth.login          // "app-auth-login"
String(actionTypes.user.get)    // "app-user-get-"
actionTypes.user.get.pending    // "app-user-get-pending"
actionTypes.user.get.fulfilled  // "app-user-get-fulfilled"
actionTypes.user.get.rejected   // "app-user-get-rejected"
```

### The actionTypes look like that
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