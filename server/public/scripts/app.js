

$(document).ready(function(){
  $("#previous").on("click",function(){
    console.log("previous button click");
  });
    $.ajax({
      type: "GET",
      url: "/data",
      success: function(data){
        console.log(data);
      }
    });
});
