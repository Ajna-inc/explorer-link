"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCustomExplorerLink = createCustomExplorerLink;
exports.createExplorerLink = createExplorerLink;
exports.createExplorerLinkForChain = createExplorerLinkForChain;
exports.getBlockExplorerLink = getBlockExplorerLink;
var helpers_1 = require("./helpers");
var base_url_for_chain_1 = require("./base-url-for-chain");
var base_url_for_network_1 = require("./base-url-for-network");
function createCustomExplorerLink(hash, customNetworkUrl) {
    var parsedUrl = (0, helpers_1.addPathToUrl)(customNetworkUrl, "tx", hash);
    return parsedUrl;
}
function createExplorerLink(hash, network) {
    var baseUrl = (0, base_url_for_network_1.getBaseUrlForNetwork)(network);
    return baseUrl === null ? "" : "https://".concat(baseUrl, "/tx/").concat(hash);
}
function createExplorerLinkForChain(hash, chainId) {
    var baseUrl = (0, base_url_for_chain_1.getBaseUrlForChain)(chainId);
    return baseUrl === null ? "" : "https://".concat(baseUrl, "/tx/").concat(hash);
}
function getBlockExplorerLink(transaction, rpcPrefs) {
    if (rpcPrefs === void 0) { rpcPrefs = {}; }
    if (rpcPrefs.blockExplorerUrl) {
        return createCustomExplorerLink(transaction.hash, rpcPrefs.blockExplorerUrl);
    }
    if (transaction.chainId) {
        return createExplorerLinkForChain(transaction.hash, transaction.chainId);
    }
    return createExplorerLink(transaction.hash, transaction.metamaskNetworkId);
}
