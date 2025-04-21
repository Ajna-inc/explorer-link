"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAccountLink = createAccountLink;
exports.createAccountLinkForChain = createAccountLinkForChain;
exports.createCustomAccountLink = createCustomAccountLink;
exports.getAccountLink = getAccountLink;
var helpers_1 = require("./helpers");
var base_url_for_chain_1 = require("./base-url-for-chain");
var base_url_for_network_1 = require("./base-url-for-network");
function getSectionUrlPath(section) {
    if (section === void 0) { section = ""; }
    return section !== "" ? "#".concat(section) : "";
}
function createAccountLink(address, networkId, section) {
    if (section === void 0) { section = ""; }
    var baseUrl = (0, base_url_for_network_1.getBaseUrlForNetwork)(networkId);
    var sectionParam = getSectionUrlPath(section);
    return baseUrl === null
        ? ""
        : "https://".concat(baseUrl, "/address/").concat(address).concat(sectionParam);
}
function createAccountLinkForChain(address, chainId, section) {
    if (section === void 0) { section = ""; }
    var baseUrl = (0, base_url_for_chain_1.getBaseUrlForChain)(chainId);
    var sectionParam = getSectionUrlPath(section);
    return baseUrl === null
        ? ""
        : "https://".concat(baseUrl, "/address/").concat(address).concat(sectionParam);
}
function createCustomAccountLink(address, customNetworkUrl, section) {
    if (section === void 0) { section = ""; }
    var parsedUrl = (0, helpers_1.addPathToUrl)(customNetworkUrl, "address", address);
    var sectionParam = getSectionUrlPath(section);
    return "".concat(parsedUrl).concat(sectionParam);
}
function getAccountLink(address, chainId, rpcPrefs, networkId, section) {
    if (rpcPrefs === void 0) { rpcPrefs = {}; }
    if (networkId === void 0) { networkId = ""; }
    if (section === void 0) { section = ""; }
    if (rpcPrefs.blockExplorerUrl) {
        return createCustomAccountLink(address, rpcPrefs.blockExplorerUrl, section);
    }
    if (networkId) {
        return createAccountLink(address, networkId, section);
    }
    return createAccountLinkForChain(address, chainId, section);
}
