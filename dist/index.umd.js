!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t||self).passwordUtilities={})}(this,function(t){t.generateStrongPassword=function(t){return void 0===t&&(t=12),Array.from({length:t},function(){var t=Math.floor(74*Math.random());return"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+".charAt(t)}).join("")},t.isStrongPassword=function(t){return!(t.length<8)&&/[A-Z]/.test(t)&&/[a-z]/.test(t)&&/\d/.test(t)&&/[!@#$%^&*()_+]/.test(t)}});
//# sourceMappingURL=index.umd.js.map
