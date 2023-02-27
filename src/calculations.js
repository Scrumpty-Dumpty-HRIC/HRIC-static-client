console.log("Starting Health Insurance Risk Calculator... ");

function calculateRisk() {
  console.log("calculateRisk()");

  let ageResponseValue = parseInt(
    document.getElementById("ageID").selectedOptions[0].value
  );
  console.log("ageResponseValue = " + ageResponseValue);

  let bloodPressureResponseValue = parseInt(
    document.getElementById("bloodID").selectedOptions[0].value
  );
  console.log("bloodPressureResponseValue = " + bloodPressureResponseValue);

  let diabetesResponseValue = parseInt(
    document.getElementById("diabetesID").selectedOptions[0].value
  );
  console.log("diabetesResponseValue = " + diabetesResponseValue);

  let cancerResponseValue = parseInt(
    document.getElementById("cancerID").selectedOptions[0].value
  );
  console.log("cancerResponseValue = " + cancerResponseValue);

  let alzheimersResponseValue = parseInt(
    document.getElementById("alzheimersID").selectedOptions[0].value
  );
  console.log("alzheimersResponseValue = " + alzheimersResponseValue);

  let totalRisk =
    ageResponseValue +
    bloodPressureResponseValue +
    diabetesResponseValue +
    cancerResponseValue +
    alzheimersResponseValue;
  console.log("totalRisk = " + totalRisk);

  document.getElementById("riskID").innerHTML =
    "Based on the given answers, the total risk is: " + totalRisk;

  let riskMessage = "Not insurable";
  if (totalRisk <= 20) {
    riskMessage = "This customer is Low Risk";
  } else if (totalRisk <= 50) {
    riskMessage = "This customer is Moderate Risk";
  } else if (totalRisk <= 75) {
    riskMessage = "This customer is High Risk";
  }

  document.getElementById("riskMessage").innerHTML = riskMessage;
}

function BMI(height, weight) {
  return (703 * weight) / (height * height);
}

function calculateBMI() {
  console.log("CalculateBMI()");
  let heightValueInInches = parseInt(
    document.getElementById("heightID").selectedOptions[0].value
  );
  let weightValueInLbs = parseInt(
    document.getElementById("weightID").selectedOptions[0].value
  );
  console.log(
    "Height = " + heightValueInInches + " and weight = " + weightValueInLbs
  );

  let bmiValue = BMI(heightValueInInches, weightValueInLbs);
  console.log("BMI = " + bmiValue);

  bmiValue = Math.round(bmiValue * 10) / 10;
  console.log("BMI = " + bmiValue);

  document.getElementById("bmiResultID").innerHTML =
    "Your Body Mass Index is: " + bmiValue;

  let bmiMessage = "Obese";
  if (bmiValue < 24.9) {
    bmiMessage = "Normal";
  } else if (bmiValue < 29.9) {
    bmiMessage = "Overweight";
  }

  document.getElementById("bmiMessage").innerHTML = bmiMessage;
}

export { calculateRisk, calculateBMI };
