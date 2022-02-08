require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hover enrich sun foot ecology rice magic atom gentle light army gift'; 
let testAccounts = [
"0x8fa9b2c4cecd55a1a1b87c67be8d1d4e295e82f87f5d1f20867c5ca8ddb9fb56",
"0x13e1299321b86524f56f21f9d3d2064493e13e135533bc4c34331bd642b5b36a",
"0xf1e0a8c51420f7d6a25f1d6837c1fb0dad3333295438bb3660fc727d9ef93c58",
"0x2cfcc5af85ef1ac8a321c15a6efca4df60ac9e761dedead07b43e6ee80858905",
"0x50d70e3129f60e605474b26b45087a6490c3f18963abb5b7f640f9848472e458",
"0x15df2b66ca084aab97252cb19a886441c61228a6628763a1cb7f99731b12b93d",
"0x79015878da346a00e3ded0a5189f4ac1439e308f6f8df349fafce3b7f6b648e4",
"0x60c4deabd1694cc85420c787b3ab30fff9a1716611766d7927d7974e4a05abf3",
"0x01f8e253b77060636a0b3de2b0f467b950ad5c4a320efa05d2f470a5e325661d",
"0xfd56338b7f80158674cc9e90f78a77980198983331641354314be42fece0f4fe"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

