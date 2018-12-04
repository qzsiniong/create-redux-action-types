# Create Redux Action Types

Create redux action types with normal javascript object.


## Install

```bash
npm install --save create-redux-action-types
or 
yarn add create-redux-action-types
```

## Usage

```ts
# file:actionTypes.ts
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
  "-", // delimiter, default "/"
  "app" // namespace, default undefined
);


```

```ts
# file:some.ts
import actionTypes from "./actionTypes"

actionTypes.auth.login // "app-auth-login"
actionTypes.some.foo.bar // "app-some-foo-bar"
```

```json
// actionTypes look like that
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