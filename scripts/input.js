$(document).ready(function() {
    $("#events").click(function() {
        $(".eventIcon").toggle(this.checked);
    }).triggerHandler('click');

    $("#landmarks").click(function() {
        $(".landIcon").toggle(this.checked);
    }).triggerHandler('click');

    $("#leaders").click(function() {
        $(".leaderIcon").toggle(this.checked);
    }).triggerHandler('click');

    $("#orgs").click(function() {
        $(".orgIcon").toggle(this.checked);
    }).triggerHandler('click');

    $("#strikes").click(function() {
        $(".strikeIcon").toggle(this.checked);
    }).triggerHandler('click');

    $("#tech").click(function() {
        $(".techIcon").toggle(this.checked);
    }).triggerHandler('click');

    $('#hideButton').click(function(){
      $('#sidebar').toggle('#hide');
        });

});