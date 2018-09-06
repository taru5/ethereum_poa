const BigNumber = require('bignumber.js');
const Web3 = require("web3");
const solc = require('solc')

node1 = new Web3(new Web3.providers.HttpProvider(""));
node2 = new Web3(new Web3.providers.HttpProvider(""));

var node1_coinbase = ""; //0xa914aa8e80c33807b7a7058bfd444aa2153df768
var node1_balance = 0;
var node2_coinbase = "";
var node2_balance = 0;


//contract deploy
// var contractInput = `contract Adoption {
//     address[16] public adopters;

//     // Adopting a pet
//     function adopt(uint petId) public returns (uint) {
//       require(petId >= 0 && petId <= 15);

//       adopters[petId] = msg.sender;

//       return petId;
//     }

//     // Retrieving the adopters
//     function getAdopters() public returns (address[16]) {
//       return adopters;
//     }
// }`;

// let compiledContract = solc.compile(contractInput, 1).contracts[':Adoption'];

// let contract = new node1.eth.Contract(JSON.parse(compiledContract.interface), null, { 
//     data: '0x' + compiledContract.bytecode 
// });

// var gasPrice, gas, contractInstance;

// const deployedContractAddress = "0x965c99b462F389285B32E852dfA18c0dE59b837e";

// node1.eth.getCoinbase(function(error, result){
//    if(!error){
//    		node1_coinbase = result; 
// 			console.log("node1 coinbase: ", node1_coinbase);
// 		  node1.eth.getBalance(node1_coinbase, function(error, result){
// 				if(!error){
// 					node1_balance = new BigNumber(result).toNumber();
// 					console.log("node1 balance: ", node1_balance);
// 					node1.eth.getGasPrice().
// 					   then((averageGasPrice) => {
// 					       console.log("Average gas price: " + averageGasPrice);
// 					       gasPrice = averageGasPrice;
// 								contract.deploy().estimateGas().then((estimatedGas) => {
// 								        console.log("Estimated gas: " + estimatedGas);
// 								        gas = estimatedGas;
// 												contract.deploy().send({
// 												    from: node1_coinbase,
// 												    gasPrice: gasPrice, 
// 												    gas: gas
// 												}).then((instance) => { 
// 												    console.log("Contract mined at " + instance.options.address);
// 												    contractInstance = instance; 
// 												});
// 								    }).
// 								    catch(console.error);
// 					   }).
// 					   catch(console.error);
// 				}
// 				else
//        		console.error(error);
// 			});
// 		}
//    else
//        console.error(error);
// });

node1.eth.getCoinbase(function(error, result){
   if(!error){
   		node1_coinbase = result; 
			console.log("node1 coinbase: ", node1_coinbase);
		  node1.eth.getAccounts(function(error, result){
				if(!error){
					// node1_balance = new BigNumber(result).toNumber();
					console.log("node1 balance: ", result);
				}
				else
       		console.error(error);
			});
		}
   else
       console.error(error);
});


// console.log(Web3.personal);



