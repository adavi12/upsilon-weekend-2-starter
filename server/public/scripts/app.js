var clickIndex = 0;
$(document).ready(function(){
  $('#prev').on("click", function() {
    console.log("previous button click");
    if(currentIndex > 0) {
             clickIndex += 1;
         }

    addStudent(currentIndex);
  });
  $('#next').on("click",function() {
    console.log("next button click");
    if(currentIndex <16){


      clickIndex-= 1;

      addStudent(currentIndex);
  }

  });


  function getStudent(){
    $.ajax({
      type: "GET",
      url: "/data",
      success: function(data){
        console.log(data);
        upsilon.json = data;
        data.forEach(function(student){
        appendDOM(student);

      });
    }
});


}
function addStudent(i) {
  var $studentDiv = $('<div class ="carousel"></div>');
  $studentDiv.append('<p>' +data.name+ '</p>');
  $studentDiv.append('<p>' +data.githubUserName+ '</p>');
  $studentDiv.append('<p>' +data.shoutout+ '</p>');
  $(".studentContainer").append($studentDiv);
}
