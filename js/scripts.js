$(document).ready(function() {
  $("form#form").submit(function(event) {
    event.preventDefault();

    var user_answer = $("input#palindrome_user").val();
    var res = "";

    function checkPalindrom(user_answer) {

      for (var i = user_answer.length; i > 0; i--) {
        if (user_answer[i] === user_answer.charAt(user_answer.length - 1 - i)) {
          res = "Is palindrom"
        } else {
          res = "In not palindrom"
        }
      }
    }
    checkPalindrom(user_answer)
    console.log(res)

  });
});