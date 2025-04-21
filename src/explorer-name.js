"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getExplorerName = void 0;
var getExplorerName = function (networkId) {
    // eslint-disable-next-line radix
    var net = parseInt(networkId);
    var explorerName;
    switch (net) {
        case 1: // main net
            explorerName = "Etherscan";
            break;
        case 3: // ropsten test net
            explorerName = "Etherscan";
            break;
        case 4: // rinkeby test net
            explorerName = "Etherscan";
            break;
        case 5: // goerli test net
            explorerName = "Etherscan";
            break;
        case 10: // optimism main net
            explorerName = "Etherscan";
            break;
        case 42: // kovan test net
            explorerName = "Etherscan";
            break;
        case 56: // bsc main net
            explorerName = "Bscscan";
            break;
        case 97: // bsc test net
            explorerName = "Bscscan";
            break;
        case 137: // polygon main net
            explorerName = "Polygonscan";
            break;
        case 250: // fantom main net
            explorerName = "FTMScan";
            break;
        case 42161: // arbitrum main net
            explorerName = "Arbiscan";
            break;
        case 43114: // avalanche main net
            explorerName = "Snowtrace";
            break;
        case 80001: // polygon test net mumbai
            explorerName = "Polygonscan";
            break;
        default:
            explorerName = null;
    }
    return explorerName;
};
exports.getExplorerName = getExplorerName;
