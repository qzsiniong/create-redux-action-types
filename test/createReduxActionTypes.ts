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
  },
  user: {
    get: {
      pending: "",
      fulfilled: "",
      rejected: ""
    }
  }
}

describe("tests", () => {
  it("default", () => {
    const actionTypes = createReduxActionTypes(act)
    expect(actionTypes.one.two.three.foo).to.equal("one/two/three/foo")
    expect(actionTypes.one.two.three.bar).to.equal("one/two/three/bar")
    expect(actionTypes.one.two.a).to.equal("one/two/a")

    expect(String(actionTypes.user.get)).to.equal("user/get/")
    expect(actionTypes.user.get.pending).to.equal("user/get/pending")
    expect(actionTypes.user.get.fulfilled).to.equal("user/get/fulfilled")
    expect(actionTypes.user.get.rejected).to.equal("user/get/rejected")
  })

  it("custom separator", () => {
    const actionTypes = createReduxActionTypes(act, "-")
    expect(actionTypes.one.two.three.foo).to.equal("one-two-three-foo")
    expect(actionTypes.one.two.three.bar).to.equal("one-two-three-bar")
    expect(actionTypes.one.two.a).to.equal("one-two-a")

    expect(String(actionTypes.user.get)).to.equal("user-get-")
    expect(actionTypes.user.get.pending).to.equal("user-get-pending")
    expect(actionTypes.user.get.fulfilled).to.equal("user-get-fulfilled")
    expect(actionTypes.user.get.rejected).to.equal("user-get-rejected")
  })

  it("custom rootName", () => {
    const actionTypes = createReduxActionTypes(act, undefined, "app")
    expect(actionTypes.one.two.three.foo).to.equal("app/one/two/three/foo")
    expect(actionTypes.one.two.three.bar).to.equal("app/one/two/three/bar")
    expect(actionTypes.one.two.a).to.equal("app/one/two/a")

    expect(String(actionTypes.user.get)).to.equal("app/user/get/")
    expect(actionTypes.user.get.pending).to.equal("app/user/get/pending")
    expect(actionTypes.user.get.fulfilled).to.equal("app/user/get/fulfilled")
    expect(actionTypes.user.get.rejected).to.equal("app/user/get/rejected")
  })

  it("custom separator and rootName", () => {
    const actionTypes = createReduxActionTypes(act, "@", "app")
    expect(actionTypes.one.two.three.foo).to.equal("app@one@two@three@foo")
    expect(actionTypes.one.two.three.bar).to.equal("app@one@two@three@bar")
    expect(actionTypes.one.two.a).to.equal("app@one@two@a")

    expect(String(actionTypes.user.get)).to.equal("app@user@get@")
    expect(actionTypes.user.get.pending).to.equal("app@user@get@pending")
    expect(actionTypes.user.get.fulfilled).to.equal("app@user@get@fulfilled")
    expect(actionTypes.user.get.rejected).to.equal("app@user@get@rejected")
  })

})
