$(document).ready(function() {
    var urls = ['1','2','3'];
  
    var cout = 1;
    $('main-agileinfo').css('background-image', 'url("' + urls[0] + '")');
    setInterval(function() {
      $('main-agileinfo').css('background-image', 'url("' + urls[cout] + '")');
      cout == urls.length-1 ? cout = 0 : cout++;
    }, 3000);
  
  });