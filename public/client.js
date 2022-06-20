console.log('Client-side code running');

function clientTrackPurchase() {
    fbq('track', 'Purchase', {currency: "USD", value: 30.00});
}

function clientTrackCart() {
    fbq('track', 'Cart', {currency: "USD", value: 40.00});
}

function serverRequest(postPath) {
    fetch(postPath, {method: 'POST'})
        .then(function(response) {
            if(response.ok) {
            console.log('Request successed.');
            return;
            }
            throw new Error('Request failed.');
        })
        .catch(function(error) {
            console.log(error);
        });
}

function cartBtn() {
    serverRequest('/cartClick');
}

function cartBtn2() {
    serverRequest('/cartClick2');
}

function testBtn() {
    serverRequest('/testClick');
}

function testBtn2() {
    serverRequest('/testClick2');
}

function purchaseBtn() {
    serverRequest('/purchaseClick');
}

function purchaseBtn2() {
    serverRequest('/purchaseClick2');
}
