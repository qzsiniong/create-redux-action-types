
export interface IActionTypes {
    [propertyName: string]: string | IActionTypes
}

const initActionTypeNamespace = (obj: IActionTypes, delimiter: string, objName?: string, parentName?: string) => {

    let actionTypeNamespace = ""
    if (parentName !== undefined && parentName !== "") {
        actionTypeNamespace = parentName + delimiter
    }
    if (objName !== undefined) {
        actionTypeNamespace = actionTypeNamespace + objName
    }

    for (const propertyName in obj) {
        if (obj.hasOwnProperty(propertyName)) {
            const propertyValue = obj[propertyName]
            if (typeof propertyValue === "string") {
                obj[propertyName] = actionTypeNamespace + delimiter + propertyName
            } else {
                initActionTypeNamespace(propertyValue, delimiter, propertyName, actionTypeNamespace)
            }
        }
    }
}

const createReduxActionTypes = <T extends IActionTypes>(actionTypesObject: T, delimiter: string = "/", namespace?: string): T => {
    const ret = JSON.parse(JSON.stringify(actionTypesObject)) as T
    initActionTypeNamespace(ret, delimiter, namespace)
    return ret
}

export default createReduxActionTypes
