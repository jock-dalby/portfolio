$(document).click(function (event) {
    var clickover = $(event.target);
    var $navbar = $(".navbar-collapse");
    var _opened = $navbar.hasClass("in");
    if (_opened === true && !clickover.hasClass("navbar-toggle")) {
        $navbar.collapse('hide');
    }



});
  // const jobTitle = document.querySelector('.jobTitle');
  // const jobTitleTimer = setInterval(rotateJobTitle, 5000);
  // const jobTitleOptions = ["Web Developer", "Entrepreneur", "Business Owner", "Manager"]
  // let currentTitle = 1;
  //
  // function rotateJobTitle () {
  //     jobTitle.innerText=jobTitleOptions[currentTitle];
  //       if(currentTitle === jobTitleOptions.length - 1) {
  //       currentTitle = 0;
  //     } else {
  //       currentTitle++;
  //     }
  // }
