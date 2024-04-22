let totalCalories = 0;
function addCalories() {
  const foodItem = document.getElementById("food").value;
  const calories = parseInt(document.getElementById("calories").value);

  if (isNaN(calories) || calories <= 0) {
    alert("Please enter a valid positive number for calories.");
    return;
  }

  totalCalories += calories;
  document.getElementById("totalCalories").textContent = totalCalories;

  document.getElementById("food").value = "";
  document.getElementById("calories").value = "";
}
