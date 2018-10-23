import {ApiClient} from './http'

export default {
    greetings() {
        return ApiClient.get('/greetings')
    },
    submitForm(url, method, data, config) {
        let jsonObject = {};
        for (const [key, value] of data.entries()) {
            jsonObject[key] = value;
        }

        return ApiClient({
            method: method,
            url: url,
            data: jsonObject
        }, config || {});
    }
}