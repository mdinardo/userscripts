// ==UserScript==
// @name     Redirect IEEE Xplore to UW Library Proxy
// @version 0.1
// @author Matthew Di Nardo
// @updateURL https://raw.githubusercontent.com/mdinardo/userscripts/master/ieee_xplore_uw_proxy_redirect.user.js
// @downloadURL https://raw.githubusercontent.com/mdinardo/userscripts/master/ieee_xplore_uw_proxy_redirect.user.js
// @match    *://ieeexplore.ieee.org/*
// @run-at   document-start
// @grant    none
// ==/UserScript==

(function() {
    'use strict';
    var newURL = location.href.replace(/ieeexplore.ieee.org/, newHost);
    location.replace (newURL);
})();
