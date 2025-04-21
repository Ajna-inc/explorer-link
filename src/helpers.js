"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addPathToUrl = void 0;
var addPathToUrl = function (customNetworkUrl, linkType, suffixType) {
    var _a = new URL(customNetworkUrl), username = _a.username, password = _a.password, protocol = _a.protocol, host = _a.host, pathname = _a.pathname, search = _a.search, hash = _a.hash;
    var newPath = pathname.endsWith('/') ? "".concat(pathname).concat(linkType, "/").concat(suffixType) : "".concat(pathname, "/").concat(linkType, "/").concat(suffixType);
    var auth = username ? "".concat(username, ":").concat(password) : '';
    var parsedUrl = new URL("".concat(protocol, "//").concat(auth).concat(host).concat(newPath).concat(search).concat(hash));
    return parsedUrl.toString();
};
exports.addPathToUrl = addPathToUrl;
