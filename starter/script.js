
$(function () {

//header time and date
var today =dayjs().format('📅 MMMM D, YYYY ⌛h:mm:ss A');
$("#currentDay").text(today);

//lets check if current time is equal to the time block using if statement
//if its equal to the time block then add class present
//if its less than the time block then add class past
//if its greater than the time block then add class future
var currentHour = dayjs().format('H');
console.log(currentHour);


function Color() {
    $('.time-block').each(function() {
        var blockHour = parseInt(this.id);
        if (blockHour == currentHour) {
            $(this).removeClass('past future').addClass('present');
        } else if (blockHour < currentHour) {
            $(this).removeClass('future present').addClass('past');
        } else {
            $(this).removeClass('past present').addClass('future');
        }
    });
}
Color();

//store data in local storage when save button is clicked we shoud store two things key and value
//we need to use the time block id as the key and the text area value as the value
//key should be the value of the time block
//value should be the value of the text area
let store =()=>{
    $(".saveBtn").on("click", function(){
        var time = $(this).parent().attr("id");//this is the parent of the save button which is the time block id
        var text = $(this).siblings(".description").val();//this is the sibling of the save button which is the text area
        localStorage.setItem(time,text);
    })

}
store();
// lets get the data from local storage and display it in the text area
// we need to use the key to get the value from local storage

let display=()=>{
    $(".time-block").each(function(){
        var time = $(this).attr("id");
        var text = localStorage.getItem(time);
        $(this).children(".description").val(text);
    })
}
display();



})