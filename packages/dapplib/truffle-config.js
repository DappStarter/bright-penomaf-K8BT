require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give nation flush special drift return noble social hope arctic metal genre'; 
let testAccounts = [
"0xec276e967b3d5a9597e5b149a7e19f75074c192a781caf02a6e2f791cd9b669f",
"0xfb18cb9c7ad8d19daa9e633c5b04d5b9655aab0be5fddebc7c15bf8d8cb71217",
"0x2ee40ea1b644d03cc013936cb3ba595cd5140d38d3d9077d224c734ce57bacad",
"0xb4bc4cfa7b6563cbeca8982a47cc0d48cb110300891b921ed52a7dc3312cdcfd",
"0x2d8340f3a485ba95f2cb0cebc23226c2b4796c34aebdc97ae3276e296754c6c4",
"0x6b097cd6ea606582c52275f9968b2512229f348d7039ada62edc2dd9a2e949bd",
"0x49382e04407765d40c0549a4842b42cddbe17f3aa340e024a756332e93e24b7e",
"0x8ce54c8cd430ece7125e428f2aabe70dd109628e077b3f10269c3b1a35c19767",
"0x93f10f929c830d7e2131b9080641f23b5e92a60fcf6bc4d8f505f440dfd62d4b",
"0x12b9fbc44e8b9847db7385250c88cc77d97f1ca6de99202b097858607114546a"
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

