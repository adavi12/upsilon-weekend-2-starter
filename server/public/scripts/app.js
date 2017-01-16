var currentStudentIndex = 0;
var showStudent = 0;

$(document).ready(function(){
  $(".carousel").on("click", studentCarousel);
  $('#prev').on("click", getPrevStudent);
  $('#next').on("click", getNextStudent);
  var interval = setInterval(getNextStudent, 10000);
});

function getNextStudent(){
  $.ajax({
    type: "GET",
    url: "/data",
    success: function(data){
      $("#studentContainer").empty();
      currentStudentIndex+=1;
      if(currentStudentIndex <= data.students.length){
        showStudent = data.students[currentStudentIndex];
        addStudent(showStudent);
      }else{
        currentStudentIndex = 0;
        showStudent = data.students[currentStudentIndex];
      }
    }
  });
}

function getPrevStudent(){
  $.ajax({
    type: "GET",
    url: "/data",
    success: function(data){
      $("#studentContainer").empty();
      // var index = data[currentIndex];
      console.log(data);
      currentStudentIndex -=1;

      if(currentStudentIndex >= 0){
        showStudent = data.students[currentStudentIndex];
        addStudent(showStudent);
      }
    }
  });
}
function studentCarousel(){
  currentStudentIndex = $(this).attr('id');
  $.ajax({
    type: "GET",
    url: "/data",
    success: function(data){
      $("#studentContainer").empty();
      showStudent = data.students[currentStudentIndex];
      addStudent(showStudent);
    }
  }
);
}
function addStudent(person) {
  $(".person").fadeOut(1000);
  var $studentDiv = $('<div class ="person"></div>');
  $studentDiv.append('<p><mark>' + person.name + '</mark></p>');
  $studentDiv.append('<p>' +person.githubUserName+'</p>');
  $studentDiv.append('<p>' +person.shoutout+'</p>');
  $("#studentContainer").append($studentDiv);
  $($studentDiv).hide().appendTo("#studentContainer").fadeIn(2000);
}

function clock() {
  $("#clock").html = new Date().toLocaleTimeString();
  $("#prev").on("click",clearInterval(interval));
  $("#next").on("click",clearInterval(interval));
}
