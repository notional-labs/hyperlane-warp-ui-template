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
};
