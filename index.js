const Web3 = require('web3');

if(process.argv.length < 3) return console.error('Please set node address in following format: http://IP:PORT OR ws://IP:PORT');

const args = process.argv.slice(2);

const nodeUrl = args[0];

const web3 = new Web3(nodeUrl);

(async () => {
  const currentBlock = await web3.eth.getBlock('latest');
  const peersCount = await web3.eth.net.getPeerCount();
  console.log(JSON.stringify(currentBlock, null, 2));
  console.log(`currentBlockNB: ${currentBlock.number}`);
  console.log(`peersCount: ${peersCount}`);
  process.exit();
})().catch(error => console.error(error));


