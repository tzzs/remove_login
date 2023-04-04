// ==UserScript==
// @name         Remove Login 去除登录弹窗👻
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  try to take over the world! 删除烦人的登录弹窗
// @author       tanzz
// @match        *://*.zhihu.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @license      MIT
// ==/UserScript==

(function () {
    'use strict';

    // Your code here...
    // remove login popup
    common(1, 10);
    log('运行完成');
})();


/**
 * common function
 * @param {int} type Type of processing
 * @param {int} times Number of processing
 */
function common(type, times) {
    let interval = setInterval(function () {
        if (times <= 0) {
            clearInterval(interval)
        }

        if (type === 1) {
            let list = [
                '.Modal-wrapper.undefined.Modal-enter-done'
            ]
            for (var k = 0; k < list.length; k++) {
                var elements = document.querySelectorAll(list[k]);
                for (var i = 0; i < elements.length; i++) {
                    elements[i].parentNode.removeChild(elements[i]);
                }
            }
        }

        times--;
    }, 100);
}


function log(msg) {
    console.log("[REMOVE_LOGIN] " + msg);
}

