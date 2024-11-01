export const ChainId = {
  ETH: 1,
  ROPSTEN: 3,
  RINKEBY: 4,
  XDAI: 100,
  FTM: 250,
  FTM_TESTNET: 4002,
  BSC: 56,
  BSC_TESTNET: 97,
  HECO: 128,
  HECO_TESTNET: 256,
  MATIC: 137,
  MATIC_TESTNET: 80001,
  AVALANCHE: 43114
}

export const rpcConfig = {
  [ChainId.ETH]: {
    chainId: '0x1',
    chainName: 'Ethereum Mainnet',
    nativeCurrency: {
      name: 'ETH',
      symbol: 'ETH',
      decimals: 18
    },
    rpcUrls: [
      'https://mainnet.infura.io/v3/' + process.env.REACT_APP_INFURA_KEY
    ],
    blockExplorerUrls: ['https://etherscan.io/']
  },
  [ChainId.ROPSTEN]: {
    chainId: '0x3',
    chainName: 'Ropsten Testnet',
    nativeCurrency: {
      name: 'ETH',
      symbol: 'ETH',
      decimals: 18
    },
    rpcUrls: [
      'https://ropsten.infura.io/v3/' + process.env.REACT_APP_INFURA_KEY
    ],
    blockExplorerUrls: ['https://ropsten.etherscan.io/']
  },
  [ChainId.RINKEBY]: {
    chainId: '0x4',
    chainName: 'Rinkeby Testnet',
    nativeCurrency: {
      name: 'ETH',
      symbol: 'ETH',
      decimals: 18
    },
    rpcUrls: [
      'https://rinkeby.infura.io/v3/' + process.env.REACT_APP_INFURA_KEY
    ],
    blockExplorerUrls: ['https://rinkeby.etherscan.io/']
  },
  [ChainId.XDAI]: {
    chainId: '0x64',
    chainName: 'xDAI Chain',
    nativeCurrency: {
      name: 'xDAI',
      symbol: 'xDAI',
      decimals: 18
    },
    rpcUrls: ['https://rpc.xdaichain.com/'],
    blockExplorerUrls: ['https://blockscout.com/poa/xdai/']
  },
  [ChainId.MATIC]: {
    chainId: '0x89',
    chainName: 'Matic Mainnet',
    nativeCurrency: {
      name: 'Matic',
      symbol: 'MATIC',
      decimals: 18
    },
    rpcUrls: ['https://polygon-rpc.com/'],
    blockExplorerUrls: ['https://polygonscan.com/'],
    iconUrls: []
  },
  [ChainId.MATIC_TESTNET]: {
    chainId: "0x13881",
    chainName: 'Mumbai',
    nativeCurrency: {
      name: 'Matic',
      symbol: 'MATIC',
      decimals: 18
    },
    rpcUrls: ['https://rpc-endpoints.superfluid.dev/mumbai'],
    blockExplorerUrls: ["https://mumbai.polygonscan.com/"],
    iconUrls: []
  },
  [ChainId.BSC]: {
    chainId: '0x38',
    chainName: 'Binance Smart Chain Mainnet',
    nativeCurrency: {
      name: 'BNB',
      symbol: 'BNB',
      decimals: 18
    },
    rpcUrls: [
      'https://bsc-dataseed.binance.org',
      'https://bsc-dataseed1.defibit.io'
    ],
    blockExplorerUrls: ['https://bscscan.com']
  },
  [ChainId.BSC_TESTNET]: {
    chainId: '0x61',
    chainName: 'Binance Smart Chain Testnet',
    nativeCurrency: {
      name: 'BNB',
      symbol: 'BNB',
      decimals: 18
    },
    rpcUrls: [
      'https://data-seed-prebsc-1-s1.binance.org:8545',
      'https://data-seed-prebsc-2-s1.binance.org:8545'
    ],
    blockExplorerUrls: ['https://testnet.bscscan.com']
  },
  [ChainId.HECO]: {
    chainId: '0x80',
    chainName: 'Huobi ECO Chain Mainnet',
    nativeCurrency: {
      name: 'HT',
      symbol: 'HT',
      decimals: 18
    },
    rpcUrls: ['https://http-mainnet.hecochain.com'],
    blockExplorerUrls: ['https://hecoinfo.com']
  },
  [ChainId.HECO_TESTNET]: {
    chainId: '0x100',
    chainName: 'Huobi ECO Chain Testnet',
    nativeCurrency: {
      name: 'htt',
      symbol: 'htt',
      decimals: 18
    },
    rpcUrls: ['https://http-testnet.hecochain.com'],
    blockExplorerUrls: ['https://testnet.hecoinfo.com']
  },
  [ChainId.AVALANCHE]: {
    chainId: '0xa86a',
    chainName: 'Avalanche Network',
    nativeCurrency: {
      name: 'AVAX',
      symbol: 'AVAX',
      decimals: 18
    },
    rpcUrls: ['https://api.avax.network/ext/bc/C/rpc'],
    blockExplorerUrls: ['https://cchain.explorer.avax.network/']
  }
}
