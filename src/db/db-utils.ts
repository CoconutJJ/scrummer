class DBUtils {


    public static createNameParamValueArrays(obj: {}): Array<Array<string|number>> {
        let names = []
        let values = []
        let params = []
        for (let key in obj) {
            names.push(key)
            values.push(obj[key])
            params.push('?')
        }
        return [names, params, values]
    }



}

export default DBUtils