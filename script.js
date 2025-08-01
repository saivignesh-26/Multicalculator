function appendValue(val) {
  document.getElementById("calcDisplay").value += val;
}

function clearDisplay() {
  document.getElementById("calcDisplay").value = "";
}

function calculate() {
  try {
    document.getElementById("calcDisplay").value = eval(document.getElementById("calcDisplay").value);
  } catch {
    document.getElementById("calcDisplay").value = "Error";
  }
}

function calculateBMI() {
  const height = parseFloat(document.getElementById("height").value) / 100;
  const weight = parseFloat(document.getElementById("weight").value);
  const bmi = weight / (height * height);
  if (!isNaN(bmi)) {
    document.getElementById("bmiResult").textContent = `Your BMI is ${bmi.toFixed(2)}`;
  } else {
    document.getElementById("bmiResult").textContent = "Please enter valid height and weight.";
  }
}

function convertCurrency() {
  const usd = parseFloat(document.getElementById("usdAmount").value);
  const currency = document.getElementById("currency").value;
  let rate = 0;

  switch (currency) {
    case "INR": rate = 83.2; break;
    case "EUR": rate = 0.91; break;
    case "JPY": rate = 143.6; break;
  }

  if (!isNaN(usd)) {
    const result = usd * rate;
    document.getElementById("currencyResult").textContent = `Converted amount: ${result.toFixed(2)} ${currency}`;
  } else {
    document.getElementById("currencyResult").textContent = "Enter a valid amount.";
  }
}
