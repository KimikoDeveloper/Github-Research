document.addEventListener("DOMContentLoaded", function() {
  var toggleButton = document.getElementById("toggleButton");
  var preventionList = document.getElementById("preventionList");

  toggleButton.addEventListener("click", function() {
    if (preventionList.style.display === "none") {
      preventionList.style.display = "block";
    } else {
      preventionList.style.display = "none";
    }
  });
});
