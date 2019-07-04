// ==UserScript==
// @name     Redirect IEEE Transactions to UW Library Proxy
// @version 0.1
// @author Matthew Di Nardo
// @match    *://ieeexplore.ieee.org/*
// @run-at   document-start
// @grant    none
// ==/UserScript==


(function() {
    'use strict';

    var newHost = "ieeexplore-ieee-org.proxy.lib.uwaterloo.ca";
    var newURL = location.protocol + "//" +
        newHost +
        (location.pathname || "") +
        (location.search || "") +
        (location.hash || "")
    ;

    //console.log("IEEE Redirect: ");
    //console.log(location);
    //console.log("IEEE Redirect: New URL:     " + newURL);

    location.replace (newURL);
})();



