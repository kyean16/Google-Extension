// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Simple extension to replace lolcat images from
// http://icanhascheezburger.com/ with loldog images instead.

/*var opt = {
  type: "basic",
  title: "Primary Title",
  message: "Primary message to display",
  iconUrl: "url_to_small_icon"
}

chrome.webRequest.onBeforeRequest.addListener(
  function(info) {
    // Redirect the lolcal request to a random loldog URL.
    var i = Math.round(Math.random() * loldogs.length);
    console.log(info);
    chrome.notifications.create(opt);
    return {redirectUrl: loldogs[0]}; //redirects the link to an image found on running.js
    //return {cancel:true} //Cancels all image requests
  },
  // filters
  {
    urls: [
      "*://www.depauw.edu/*"
    ],
    types: ["image"]
  },
  // extraInfoSpec
  ["blocking"]);*/

//
/*chrome.webRequest.onBeforeRequest.addListener(
        function(details) {
          console.log(details);
          return {cancel: details.url.indexOf("://www.depauw.edu/") != -1};
        },
        {urls: ["<all_urls>"]},
        ["blocking"]);
*/


chrome.webRequest.onCompleted.addListener(
        function(details) {
          console.log(details);
          return {cancel: details.url.indexOf("://www.depauw.edu/") != -1};
        },
        {urls: ["<all_urls>"]},
        ["blocking"]);

