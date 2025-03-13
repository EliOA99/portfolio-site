$(document).ready(function(){
  $(".dropdown").on("hide.bs.dropdown", function(){
    $(".dropdbtn").html('Projects <i class="fa fa-caret-down">');
  });
  $(".dropdown").on("show.bs.dropdown", function(){
    $(".dropdbtn").html('Projects <i class="fa fa-caret-up">');
  });
});