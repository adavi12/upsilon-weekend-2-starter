var currentStudentIndex = 0;
var showStudent = 0;
var upsilon = [];
$(document).ready(function(){
  $(".carousel").on("click", studentCarousel);
  $('#prev').on("click", getStudent);
  $('#next').on("click", getStudent);
  var interval = setInterval(getStudent, 10000);

  console.log(upsilon);
  // console.log(showStudent);
});

function getStudent(){
  $.ajax({
    type: "GET",
    url: "/data",
    success: function(data){
      upsilon = data.students;
      $("#studentContainer").empty();
      currentStudentIndex+=1;
      if(currentStudentIndex <= upsilon.length){
        // showStudent = data.students[currentStudentIndex];
        // showStudent = data.students;
        // upsilon = showStudent;
        console.log(upsilon);
        addStudent(upsilon);
      }else{
        currentStudentIndex = 0;
        // showStudent = data.students[currentStudentIndex];
      }
      // $("#studentContainer").empty();
      // // var index = data[currentIndex];
      // console.log(data);


      if(currentStudentIndex >= 0){
        // showStudent = data.students[currentStudentIndex];
        currentStudentIndex -=1;
        addStudent(upsilon);
      }
    }
  });

}


// function getPrevStudent(){
//   $.ajax({
//     type: "GET",
//     url: "/data",
//     success: function(data){
      // $("#studentContainer").empty();
      // // var index = data[currentIndex];
      // console.log(data);
      // currentStudentIndex -=1;
      //
      // if(currentStudentIndex >= 0){
      //   showStudent = data.students[currentStudentIndex];
      //   addStudent(showStudent);
      // }
  //   }
  // });
// }
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
  console.log(person[currentStudentIndex]);
  $(".person").fadeOut(1000);
  var $studentDiv = $('<div class ="person"></div>');
  $studentDiv.append('<p><mark>' + person[currentStudentIndex].name + '</mark></p>');
  $studentDiv.append('<p>' +person[currentStudentIndex].githubUserName+'</p>');
  $studentDiv.append('<p>' +person[currentStudentIndex].shoutout+'</p>');
  $("#studentContainer").append($studentDiv);
  $($studentDiv).hide().appendTo("#studentContainer").fadeIn(2000);
}

// function clock() {
//   $("#clock").html = new Date().toLocaleTimeString();
//   $("#prev").on("click",clearInterval(interval));
//   $("#next").on("click",clearInterval(interval));
// }
