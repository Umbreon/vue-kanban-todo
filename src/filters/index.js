import dayjs from "dayjs"

let truncate = function (text, length) {
    return text.slice(0, length) + (length < text.length ? '...' : '')
}

let formatDate = function(date) {
    return dayjs(date).format("D MMM");
}

export default {
    install(Vue) {
        Vue.filter('truncate', truncate);
        Vue.filter('formatDate',formatDate);
    }
}