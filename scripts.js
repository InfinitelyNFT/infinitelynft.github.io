
fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,cardano,crypto-com-chain,hedera-hashgraph&vs_currencies=eur')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
    appendData(data);
    })
    .catch(function (err) {
        console.log('error: ' + err);
    });
function appendData(data) {
    var mainContainer = document.getElementById("crypto-list");

    var div_bit = document.createElement("p");
    div_bit.innerHTML = 'Bitcoin ' + data['bitcoin']['eur'] + '€';

    var div_eth = document.createElement("p");
    div_eth.innerHTML = 'Ethereum ' + data['ethereum']['eur'] + '€';

    var div_ada = document.createElement("p");
    div_ada.innerHTML = 'Cardano ' + data['cardano']['eur'] + '€';

    var div_cro = document.createElement("p");
    div_cro.innerHTML = 'Crypto.com ' + data['crypto-com-chain']['eur'] + '€';

    var div_bar = document.createElement("p");
    div_bar.innerHTML = 'HBAR ' + data['hedera-hashgraph']['eur'] + '€';


    mainContainer.appendChild(div_bit);
    mainContainer.appendChild(div_eth);
    mainContainer.appendChild(div_ada);
    mainContainer.appendChild(div_cro);
    mainContainer.appendChild(div_bar);
    
}