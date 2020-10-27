function searchQuiz() {
  let input, filter, a, i, txtValue;
  input = document.getElementById("myQuiz");
  filter = input.nodeValue.toUpperCase();
  for (i = 0; i < listofQuiz.length; i++)
    a = listOfQuiz[i].getElementsByTagName("a")[0];
  txtValue = a.textContent || a.innerText;
  $(document).ready(function () {
    $("#myQuiz").on("keyup", function () {
      var value = $(this).val().toLowerCase();
      $("#listOfQuiz li").filter(function () {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
      });
    });
  });
}
