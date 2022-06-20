console.log('Client-side code running');

function cartBtn() {
    fetch('/clicked', {method: 'POST'})
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

function purchaseBtn() {
    fetch('/clicked', {method: 'POST'})
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