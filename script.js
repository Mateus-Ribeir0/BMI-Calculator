document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("calc-form");
  const nameInput = document.getElementById("name");
  const nameError = document.getElementById("name-error");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    if (!nameInput.value) { 
      nameError.style.display = "block";
      return;
    } else {
      nameError.style.display = "none";
    }

    const name = nameInput.value;
    const height = parseFloat(document.getElementById("height").value);
    const weight = parseFloat(document.getElementById("weight").value);

    const bmi = weight / (height * height);
    const resultElement = document.getElementById("result");

    let category;

    if (bmi < 18.5) {
      category = "Underweight";
      resultElement.style.backgroundColor = "#FFFF00";
    } else if (bmi < 25) {
      category = "Normal weight";
      resultElement.style.backgroundColor = "#00FF00";
    } else if (bmi < 30) {
      category = "Overweight";
      resultElement.style.backgroundColor = "#FFA500";
    } else {
      category = "Obesity";
      resultElement.style.backgroundColor = "#FF0000";
    }

    resultElement.innerHTML = `<p> ${name}, your BMI is ${bmi.toFixed(
      2
    )}.</p><p>You are in the category: ${category}</p>`;

    document.getElementById("category").value = category;

    let formData = new FormData(form);

    for (let [key, value] of formData.entries()) { 
      console.log(key + " : " + value);
    }
  });
});
