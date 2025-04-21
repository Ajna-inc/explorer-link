"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTokenTrackerLink = createTokenTrackerLink;
exports.createCustomTokenTrackerLink = createCustomTokenTrackerLink;
exports.createTokenTrackerLinkForChain = createTokenTrackerLinkForChain;
exports.getTokenTrackerLink = getTokenTrackerLink;
var helpers_1 = require("./helpers");
var base_url_for_chain_1 = require("./base-url-for-chain");
var base_url_for_network_1 = require("./base-url-for-network");
function createTokenTrackerLink(tokenAddress, networkId, holderAddress) {
    var baseUrl = (0, base_url_for_network_1.getBaseUrlForNetwork)(networkId);
    return baseUrl === null
        ? ""
        : "https://".concat(baseUrl, "/token/").concat(tokenAddress).concat(holderAddress ? "?a=".concat(holderAddress) : "");
}
function createCustomTokenTrackerLink(tokenAddress, customNetworkUrl) {
    var parsedUrl = (0, helpers_1.addPathToUrl)(customNetworkUrl, "token", tokenAddress);
    return parsedUrl;
}
function createTokenTrackerLinkForChain(tokenAddress, chainId, holderAddress) {
    var baseUrl = (0, base_url_for_chain_1.getBaseUrlForChain)(chainId);
    return baseUrl === null
        ? ""
        : "https://".concat(baseUrl, "/token/").concat(tokenAddress).concat(holderAddress ? "?a=".concat(holderAddress) : "");
}
function getTokenTrackerLink(tokenAddress, chainId, networkId, holderAddress, rpcPrefs) {
    if (rpcPrefs === void 0) { rpcPrefs = {}; }
    if (rpcPrefs.blockExplorerUrl) {
        return createCustomTokenTrackerLink(tokenAddress, rpcPrefs.blockExplorerUrl);
    }
    if (networkId) {
        return createTokenTrackerLink(tokenAddress, networkId, holderAddress);
    }
    return createTokenTrackerLinkForChain(tokenAddress, chainId, holderAddress);
}
