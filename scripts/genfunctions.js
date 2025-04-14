/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}


// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
  if (!e.target.matches('.dropdbtn')) {
  var myDropdown = document.getElementById("myDropdown");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
}

//Caret change upon click
$(document).ready(function(){
  $(".dropdown").on("hide.bs.dropdown", function(){
    $(".dropdbtn").html('Projects <i class="fa fa-chevron-down">');
  });
  $(".dropdown").on("show.bs.dropdown", function(){
    $(".dropdbtn").html('Projects <i class="fa fa-chevron-up">');
  });
});

//active page indicator
const activePage = window.location.pathname;
const navLinks = document.querySelectorAll('.BLinks a').forEach(link => {
  if(link.href.includes(`${activePage}`)){
    link.classList.add('active');
    console.log(link);
  }
})