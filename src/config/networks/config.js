const networksConfig = {
  bsc: {
    key: 'bsc',
    name: 'BNB Chain',
    shortName: 'BSC',
    chainId: 56,
    rpc: [
      'https://bsc-dataseed.binance.org',
      'https://bsc-dataseed1.defibit.io',
      'https://bsc-dataseed1.ninicoin.io',
    ],
    explorerUrl: 'https://bscscan.com',
    multicallAddress: '0xB94858b0bB5437498F5453A16039337e5Fdc269C',
    converterAddress: '0xC0d9f24c325113b7d21494032B40D1c0a49A24d9',
    claimAllBonusesAddress: '0xD6F847959f00818BeB8FeC4F8866A7369695A488',
    nftPromoClaimAddress: '0x305e1c2356758bD4c1A85C9DF9a618a14783dA29',
    supportedWallets: [
      'injected',
      'walletconnect',
      'custom-coinbase',
      'custom-math',
      'custom-twt',
      'custom-safepal',
      'custom-binance',
    ],
    providerName: 'binance',
    walletSettings: {
      chainId: `0x${parseInt(56, 10).toString(16)}`,
      chainName: 'BSC Mainnet',
      nativeCurrency: {
        name: 'Binance Coin',
        symbol: 'BNB',
        decimals: 18,
      },
      rpcUrls: ['https://bsc-dataseed.binance.org'],
      blockExplorerUrls: ['https://bscscan.com/'],
    },
    stableCoins: [
      'BUSD',
      'USDT',
      'USDC',
      'DAI',
      'VAI',
      'QUSD',
      'UST',
      'VENUS BLP',
      '3EPS',
      'fUSDT',
      '4BELT',
      'IRON',
      'DOLLY',
      'TUSD',
      'USDN',
      'WUSD',
      'USDO',
    ],
    nativeCurrency: {
      symbol: 'BNB',
      decimals: 18,
      wrappedSymbol: 'WBNB',
      wrappedAddress: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    },
  },
  fantom: {
    key: 'fantom',
    name: 'Fantom',
    chainId: 250,
    rpc: ['https://rpc.ftm.tools'],
    explorerUrl: 'https://ftmscan.com',
    multicallAddress: '0xC9F6b1B53E056fd04bE5a197ce4B2423d456B982',
    fetchContractDataAddress: '0x37FF9b4612b9e80E4082e3aC3f5149adDA2d2f21',
    fetchBalancesAddress: '0x6cA0E431678979cB9Ffa317310D5db7131345058',
    supportedWallets: ['injected', 'walletconnect', 'custom-coinbase', 'custom-clover'],
    providerName: 'fantom',
    walletSettings: {
      chainId: `0x${parseInt('250', 10).toString(16)}`,
      chainName: 'Fantom Opera',
      nativeCurrency: {
        name: 'FTM',
        symbol: 'FTM',
        decimals: 18,
      },
      rpcUrls: ['https://rpc.ftm.tools'],
      blockExplorerUrls: ['https://ftmscan.com/'],
    },
    stableCoins: [
      'USDC',
      'USDT',
      'DAI',
      'fUSDT',
      'MIM',
      'FRAX',
      'MAI',
      'DOLA',
      'TUSD',
      'UST',
      'asUSDC',
      'LAMBDA',
    ],
    nativeCurrency: {
      symbol: 'FTM',
      decimals: 18,
      wrappedSymbol: 'WFTM',
      wrappedAddress: '0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83',
    },
  },
  // polygon: {
  //   key: 'polygon',
  //   name: 'Polygon',
  //   chainId: 137,
  //   rpc: ['https://polygon-rpc.com'],
  //   explorerUrl: 'https://polygonscan.com',
  //   multicallAddress: '0xC3821F0b56FA4F4794d5d760f94B812DE261361B',
  //   supportedWallets: ['injected', 'custom-clover', 'walletconnect', 'custom-coinbase'],
  //   providerName: 'matic',
  //   walletSettings: {
  //     chainId: `0x${parseInt('137', 10).toString(16)}`,
  //     chainName: 'Polygon Mainnet',
  //     nativeCurrency: {
  //       name: 'MATIC',
  //       symbol: 'MATIC',
  //       decimals: 18,
  //     },
  //     rpcUrls: ['https://rpc-mainnet.matic.network'],
  //     blockExplorerUrls: ['https://polygonscan.com/'],
  //   },
  //   stableCoins: [
  //     'USDC',
  //     'USDT',
  //     'maUSDC',
  //     'DAI',
  //     'IRON',
  //     'MAI',
  //     'FRAX',
  //     'rUSD',
  //     'UST',
  //     'WUSD',
  //     'jEUR',
  //     'jGBP',
  //     'jCHF',
  //     'EURt',
  //     'PAR',
  //     'EURS',
  //     'jJPY',
  //     'JPYC',
  //   ],
  //   nativeCurrency: {
  //     symbol: 'MATIC',
  //     decimals: 18,
  //     wrappedSymbol: 'WMATIC',
  //     wrappedAddress: '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270',
  //   },
  // },
};

export default networksConfig;
