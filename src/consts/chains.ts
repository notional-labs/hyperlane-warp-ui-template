import {ChainMap, ChainMetadata, ExplorerFamily} from '@hyperlane-xyz/sdk';
import {ProtocolType} from "@hyperlane-xyz/utils";

// A map of chain names to ChainMetadata
// Chains can be defined here, in chains.json, or in chains.yaml
// Chains already in the SDK need not be included here unless you want to override some fields
// Schema here: https://github.com/hyperlane-xyz/hyperlane-monorepo/blob/main/typescript/sdk/src/metadata/chainMetadataTypes.ts
export const chains: ChainMap<ChainMetadata & { mailbox?: Address }> = {
  bob: {
    protocol: ProtocolType.Ethereum,
    chainId: 60808,
    domainId: 60808,
    name: 'bob',
    displayName: 'BOB',
    nativeToken: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    rpcUrls: [{ http: 'https://rpc.gobob.xyz/' }],
    blockExplorers: [
      {
        name: 'BOB explorer',
        url: 'https://explorer.gobob.xyz/',
        apiUrl: 'https://explorer.gobob.xyz/api',
        family: ExplorerFamily.Blockscout,
      },
    ],
    blocks: {
      confirmations: 1,
      reorgPeriod: 1,
      estimateBlockTime: 10,
    },
  },
  hyperliquidtestnet: {
    protocol: ProtocolType.Ethereum,
    chainId: 998,
    domainId: 998,
    name: 'hyperliquidtestnet',
    displayName: 'Hyperliquid Testnet',
    nativeToken: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    rpcUrls: [{ http: 'https://api.hyperliquid-testnet.xyz/evm' }],
    blocks: {
      confirmations: 1,
      reorgPeriod: 1,
      estimateBlockTime: 10,
    },
  },
  zircuittestnet: {
    protocol: ProtocolType.Ethereum,
    chainId: 48899,
    domainId: 48899,
    name: 'zircuittestnet',
    displayName: 'Zircuit Testnet',
    nativeToken: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    rpcUrls: [{ http: 'https://zircuit1.p2pify.com/' }],
    blockExplorers: [
      {
        name: 'Zircuit explorer',
        url: 'https://explorer.zircuit.com/',
        apiUrl: 'https://explorer.zircuit.com/api',
        family: ExplorerFamily.Blockscout,
      },
    ],
    blocks: {
      confirmations: 1,
      reorgPeriod: 1,
      estimateBlockTime: 10,
    },
  },
};
