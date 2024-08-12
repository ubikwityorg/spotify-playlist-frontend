// pkceUtils.js
import CryptoJS from "crypto-js";

export function generateCodeVerifier(length = 64) {
    let array = new Uint32Array(length);
    window.crypto.getRandomValues(array);
    return Array.from(array, dec => ('0' + dec.toString(16)).substr(-2)).join('');
}

export function generateCodeChallenge(verifier) {
    return base64URLEncode(CryptoJS.SHA256(verifier));
}

function base64URLEncode(str) {
    return str.toString(CryptoJS.enc.Base64)
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=+$/, '');
}