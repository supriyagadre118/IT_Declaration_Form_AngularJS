/**
 * Created by supriyag on 12-08-2014.
 */

app.controller('BodyController', function () {
    this.tabIndex = 0;
    this.tabList = tabs;

    this.next = function(){
        if(this.tabIndex !== this.tabList.length -1 ){
            this.tabList[this.tabIndex].active = false;
            this.tabIndex++;
            this.tabList[this.tabIndex].active = true;
        }
    };

    this.prev = function(){
        if(this.tabIndex !== 0 ){
            this.tabList[this.tabIndex].active = false;
            this.tabIndex--;
            this.tabList[this.tabIndex].active = true;
        }
    };

    this.setIndex = function($index){
        this.tabIndex = $index;
    }
});

var tabs = [
    {tab: 'Home'},
    {tab: 'Deduction under Chapter VI'},
    {tab: 'Deduction under Chapter VI-A'},
    {tab: 'Housing'},
    {tab: 'HRA'},
    {tab: 'LTA'},
    {tab: 'Other Declarations'},
    {tab: 'Other Exemptions'}
];

// define all the controllers
app.controller('HomeController', function ($scope) {
    $scope.onlyNumbers = /^\d+$/;
});
app.controller('DeductionSixController', function () {
    $(function() {
        $("#ppfTextBox").change(function(){
            $( "#ppf-slider" ).val($("#ppfTextBox").val())
        });

        $( "#ppf-slider" ).slider({
            range: "min",
            value: 0,
            min: 0,
            max: 100000,
            slide: function( event, ui ) {
                $( "#ppfTextBox" ).val(ui.value );
            }
        });
        $( "#ppfTextBox" ).val( $( "#ppf-slider" ).slider( "value" ) );
    });
});
app.controller('DeductionSixAController', function () {});
app.controller('HousingController', function () {});
app.controller('HRAController', function () {});
app.controller('LTAController', function () {

});
app.controller('OtherDeclarationsController', function () {});
app.controller('OtherExemptionsController', function () {
    $( "#medical-bills" ).slider({
        range: "min",
        value: 0,
        min: 0,
        max: 15000,
        slide: function( event, ui ) {
            $( "#medical-textBox" ).val(ui.value );
        }
    });
    $( "#medical-textBox" ).val( $( "#medical-bills" ).slider( "value" ) );


    $( "#laundry-bills" ).slider({
        range: "min",
        value: 0,
        min: 0,
        max: 24000,
        slide: function( event, ui ) {
            $( "#laundry-textBox" ).val(ui.value );
        }
    });
    $( "#laundry-textBox" ).val( $( "#laundry-bills" ).slider( "value" ) );
});
