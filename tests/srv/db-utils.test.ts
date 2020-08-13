import DBUtils from '../../src/db/db-utils'

let [cols, params, values] = DBUtils.createNameParamValueArrays({
    a1: "v1",
    a2: "v2",
    a3: "v3"
})

test("createNameParamValueArrays returns correct column array", () => {
    expect(cols).toStrictEqual(["a1", "a2", "a3"])
})

test("createNameParamValueArrays returns correct param array", () => {
    expect(params).toStrictEqual(["?", "?", "?"])
})

test("createNameParamValueArrays returns correct value array", () => {
    expect(values).toStrictEqual(["v1", "v2", "v3"])
})
