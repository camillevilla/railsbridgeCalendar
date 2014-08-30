$(document).ready(function(){

var days = [
{
    name: 'Labor Day',
    day: 1
},
{
    name: 'Laborious Day',
    day: 2
}
];

var t = $('table');
t.addClass('classy');

function insertEvent (name, day) {
   if (name.length){
       console.log('name is ' + name);
   } else {
       console.error('no name!');
       return;
   }
    
console.log(day);
   
   if (day > 0){
       console.log('day is ' + name);
   } else {
       console.error('no day!');
       return;
   }
   
   var offset = 1;
   
   $($('td')[offset + (day -1)]).append('<span class="event">' + name + '</span>');
}



var btn = $('#submitter');
btn.on('click', function(evt){
   evt.preventDefault();
   console.log('clicked button!');
   var name = $('[name="eventName"]').val();
   var day = $('[name="eventDay"]').val();
   
   insertEvent(name,day)
   $('#myModal').modal('hide');
});

$.each(days, function (index,dateObj){
    insertEvent(dateObj.name, dateObj.day);
});



$('td').on('click', function (e) {
    console.log(e);
    var day = $(e.target).children('.date').text();
    console.log(day);
    $('[name="eventDay"]').val(day);
    $('#myModal').modal('show');
    
});

/*
$('#eventName').on('keyup', function (event){
    console.log($(this).val());
});
*/

});