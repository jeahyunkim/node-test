console.log('Client-side code running');

function clientTrackPurchase() {
    fbq('track', 'Purchase', {currency: "USD", value: 30.00});
}

function clientTrackCart() {
    fbq('track', 'Cart', {currency: "USD", value: 40.00});
}

function conversionAPI(eventName, testCodeExist) {
    var accessToken = document.getElementById("access_token").value;
    $.ajax({
        type: "POST",
        url: '/commonRequest',
        data: {
            token : accessToken,
            event_name: eventName,
            test_code: testCodeExist
        },
        // contentType: 'application/json',
        beforeSend: function(xhr) {

        }, success: function(data){
            console.log(data);
            alert(data);
        }, error : function(err) {
            alert("failed : " + err);
        }
    })
}

function cartBtn() {
    conversionAPI('Cart', true);
}

function cartBtn2() {
    conversionAPI('Cart', false);
}

function testBtn() {
    conversionAPI('TestEvent', true);
}

function testBtn2() {
    conversionAPI('TestEvent', false);
}

function purchaseBtn() {
    conversionAPI('Purchase', true);
}

function purchaseBtn2() {
    conversionAPI('Purchase', false);
}
