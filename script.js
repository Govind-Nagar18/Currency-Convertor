const rates = {
  USD: { EUR: 0.91, GBP: 0.79, JPY: 150.35, AUD: 1.52, INR: 83.25, USD: 1 },
  EUR: { USD: 1.1, GBP: 0.87, JPY: 165.28, AUD: 1.67, INR: 91.45, EUR: 1 },
  GBP: { USD: 1.27, EUR: 1.15, JPY: 190.32, AUD: 1.92, INR: 105.48, GBP: 1 },
  JPY: { USD: 0.0067, EUR: 0.006, GBP: 0.0053, AUD: 0.01, INR: 0.55, JPY: 1 },
  AUD: { USD: 0.66, EUR: 0.6, GBP: 0.52, JPY: 99.12, INR: 54.93, AUD: 1 },
  INR: { USD: 0.012, EUR: 0.011, GBP: 0.0095, JPY: 1.81, AUD: 0.018, INR: 1 },
};

function convert() {
  const inputamnt = document.getElementById("inputamnt").value;
  const from = document.getElementById("from").value;
  const to = document.getElementById("to").value;

  if (!inputamnt || Number(inputamnt) <= 0) {
    document.getElementById("result").textContent = "Invalid amount. Please try again...";
    return;
  }

  const rate = rates[from][to];
  if (!rate) {
    document.getElementById("result").textContent = "Conversion rate not found.";
    return;
  }

  const result = (inputamnt * rate).toFixed(2);
  document.getElementById("result").textContent = `${inputamnt} ${from} = ${result} ${to}`;
}
