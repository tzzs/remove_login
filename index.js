// ==UserScript==
// @name         Remove Login 去除登录弹窗👻
// @namespace    http://tampermonkey.net/
// @version      0.2.1
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
            // [zhihu] close login popup
            document.querySelector("body > div:nth-child(40) > div > div > div > div.Modal.Modal--default.signFlowModal > button").click();
            // [zhihu] close login popup on the right bottom corner
            document.querySelector("body > div:nth-child(40) > div > div > div > svg").click();
        }

        times--;
    }, 100);
}


function log(msg) {
    console.log("[REMOVE_LOGIN] " + msg);
}
