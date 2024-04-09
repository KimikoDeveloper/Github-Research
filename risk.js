document.addEventListener("DOMContentLoaded", function() {
  var toggleButton = document.getElementById("toggleButton");
  var risksList = document.getElementById("risksList");

  toggleButton.addEventListener("click", function() {
    if (risksList.style.display === "none") {
      risksList.style.display = "block";
    } else {
      risksList.style.display = "none";
    }
  });
});
