import { expect } from "chai"
import createReduxActionTypes from "../src/createReduxActionTypes"

const act = {
  one: {
    two: {
      three: {
        foo: "",
        bar: ""
      },
      a: ""
    }
  }
}

describe("tests", () => {
  it("default", () => {
    const actionTypes = createReduxActionTypes(act)
    expect(actionTypes.one.two.three.foo).to.equal("one/two/three/foo")
    expect(actionTypes.one.two.three.bar).to.equal("one/two/three/bar")
    expect(actionTypes.one.two.a).to.equal("one/two/a")
  })

  it("custom separator", () => {
    const actionTypes = createReduxActionTypes(act, "-")
    expect(actionTypes.one.two.three.foo).to.equal("one-two-three-foo")
    expect(actionTypes.one.two.three.bar).to.equal("one-two-three-bar")
    expect(actionTypes.one.two.a).to.equal("one-two-a")
  })

  it("custom rootName", () => {
    const actionTypes = createReduxActionTypes(act, undefined, "app")
    expect(actionTypes.one.two.three.foo).to.equal("app/one/two/three/foo")
    expect(actionTypes.one.two.three.bar).to.equal("app/one/two/three/bar")
    expect(actionTypes.one.two.a).to.equal("app/one/two/a")
  })

  it("custom separator and rootName", () => {
    const actionTypes = createReduxActionTypes(act, "@", "app")
    expect(actionTypes.one.two.three.foo).to.equal("app@one@two@three@foo")
    expect(actionTypes.one.two.three.bar).to.equal("app@one@two@three@bar")
    expect(actionTypes.one.two.a).to.equal("app@one@two@a")
  })

})
