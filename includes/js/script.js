/*

My Custom JS
============

Author:  Brad Hussey
Updated: August 2013
Notes:	 Hand coded for Udemy.com

*/
$(function() {
  $('#alertMe').click(function(e){
    e.preventDefault();
    $('#successAlert').slideDown();
  });
});
$(function() {
  $('#alertMe1').click(function(e){
    e.preventDefault();
    $('#successAlert1').slideDown();
  });
});
$(function() {
  $('#alertMe2').click(function(e){
    e.preventDefault();
    $('#successAlert2').slideDown();
  });
});
