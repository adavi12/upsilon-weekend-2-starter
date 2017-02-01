var currentStudentIndex = 0;
var upsilon = [];
var time = 0;
$(document).ready(function(){
  $('#prev').on("click", getPrevStudent);
  $('#next').on("click", getNextStudent);
  var interval = setInterval(getNextStudent, 10000);
  getStudent();

  function getStudent(){
    $.ajax({
      type: "GET",
      url: "/data",
      success: function(data){
        upsilon = data.students;
        makeTracker();
        addStudent();
      }
    });
  }

  function makeTracker() {

    for (var i = 0; i < upsilon.length; i++){
      var indexToDisplay = i +1;
      $("#trackStudent").append('<div class = "newStudent" id = "student-' + indexToDisplay +'">' + indexToDisplay + '</div>');
    }
    updateStudent();
  }

  function getNextStudent(){

    $("#studentContainer").empty();
    currentStudentIndex++;
    if(currentStudentIndex >= upsilon.length){
      currentStudentIndex = 0;
    }
    updateStudent();
    addStudent();
    changeTime();
  }

  function getPrevStudent(){
    $("#studentContainer").empty();
    currentStudentIndex --;

    if(currentStudentIndex < 0){
      currentStudentIndex = upsilon.length - 1;
    }

    addStudent();
    updateStudent();
    changeTime();
  }


  function addStudent() {
    var student = upsilon[currentStudentIndex];
    $(".person").fadeOut(1000);
    var $studentDiv = $('<div class ="person"></div>');
    $studentDiv.append('<p><mark>' + student.name + '</mark></p>');
    $studentDiv.append('<p>' +student.githubUserName+'</p>');
    $studentDiv.append('<p>' +student.shoutout+'</p>');

    $("#studentContainer").append($studentDiv);
    $($studentDiv).hide().appendTo("#studentContainer").fadeIn(2000);
  }

  function updateStudent() {

    $("#trackStudent").children().each(function(i, item) {

      if(currentStudentIndex == i) {
        $(this).addClass("highlightStudent");
      } else {
        $(this).removeClass("highlightStudent");
      }
    });
  }
  function changeTime(){
    clearInterval(time);
  }
});
