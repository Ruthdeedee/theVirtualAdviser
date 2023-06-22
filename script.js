document.getElementById("feedbackForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission

  // Get form values
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var session = document.getElementById("session").value;
  var adviserName = document.getElementById("adviserName").value;
  var category = document.getElementById("category").value;
  var review = document.getElementById("review").value;
  var solution = document.getElementById("solution").value;
  var difficulty = document.getElementById("difficulty").value;
  var flagging = document.getElementById("flagging").value;
  var engage = document.getElementById("engage").value;
  var rating = document.getElementById("rating").value;
  var generalComment = document.getElementById("generalComment").value;

  console.log("Name: " + name);
  console.log("Email: " + email);
  console.log("Session: " + session);
  console.log("Adviser Name: " + adviserName);
  console.log("Category: " + category);
  console.log("Review: " + review);
  console.log("Solution: " + solution);
  console.log("Difficulty: " + difficulty);
  console.log("Flagging: " + flagging);
  console.log("Engage: " + engage);
  console.log("Rating: " + rating);
  console.log("General Comment: " + generalComment);

  // Clear form fields
  document.getElementById("feedbackForm").reset();
});




