$(document).ready(function() {
    $("#checkbox4").click(function() {
        $("#checkout-shipping-address").toggle(this.checked);
    }).triggerHandler('click');
});