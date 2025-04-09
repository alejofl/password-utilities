function t(t=12){return Array.from({length:t},()=>{const t=Math.floor(74*Math.random());return"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+".charAt(t)}).join("")}function r(t){return!(t.length<8)&&/[A-Z]/.test(t)&&/[a-z]/.test(t)&&/\d/.test(t)&&/[!@#$%^&*()_+]/.test(t)}export{t as generateStrongPassword,r as isStrongPassword};
//# sourceMappingURL=index.modern.js.map
