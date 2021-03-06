
function setCookie(key, value, days) {
    var date = new Date();
    days = days || 365;
    date.setTime(+ date + (days * 86400000));
    window.document.cookie = key + "=" + value + "; expires=" + date.toGMTString() + "; path=/";
}

function getCookie(name) {
    var matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

function deleteCookie(name) {
    setCookie(name, "", {
        expires: -1
    })
}