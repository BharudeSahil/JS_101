const unitData = {
  temperature: ["Celsius", "Fahrenheit", "Kelvin"],
  weight: ["Kilogram", "Gram", "Milligram", "Pound", "Ounce"],
  length: ["Meter","Kilometer","Centimeter","Millimeter","Mile","Yard","Foot","Inch",],
  data: ["Bit", "Byte", "Kilobyte", "Megabyte", "Gigabyte", "Terabyte"],
  area: ["Square Meter", "Square Kilometer", "Square Mile", "Acre", "Hectare"],
  speed: ["Meter/Second", "Kilometer/Hour", "Mile/Hour"],
  time: ["Second", "Minute", "Hour", "Day"],
  volume: ["Liter", "Milliliter", "Cubic Meter", "Cubic Centimeter", "Gallon"],
};

const unitTypeDropdown = document.getElementById("unit-type");
const unit1Dropdown = document.getElementById("unit1");
const unit2Dropdown = document.getElementById("unit2");

function populateUnits() {
  const selectedType = unitTypeDropdown.value;
  const units = unitData[selectedType];

  unit1Dropdown.innerHTML = "";
  unit2Dropdown.innerHTML = "";

  units.forEach((unit) => {
    const option1 = document.createElement("option");
    option1.value = unit;
    option1.textContent = unit;
    unit1Dropdown.appendChild(option1);

    const option2 = document.createElement("option");
    option2.value = unit;
    option2.textContent = unit;
    unit2Dropdown.appendChild(option2);
  });
}

unitTypeDropdown.addEventListener("change", populateUnits);
populateUnits();

document.getElementById("calculate").addEventListener("click", () => {
  const unitType = unitTypeDropdown.value;
  const input1 = parseFloat(document.getElementById("input1").value);
  const unit1 = unit1Dropdown.value;
  const unit2 = unit2Dropdown.value;

  let output = 0;

  if (unitType === "weight") {
    const conversionRates = {
      Kilogram: 1,
      Gram: 1000,
      Milligram: 1000000,
      Pound: 2.20462,
      Ounce: 35.274,
    };
    output = (input1 * conversionRates[unit2]) / conversionRates[unit1];
  
  } else if (unitType === "length") {
    const conversionRates = {
      Meter: 1,
      Kilometer: 0.001,
      Centimeter: 100,
      Millimeter: 1000,
      Mile: 0.000621371,
      Yard: 1.09361,
      Foot: 3.28084,
      Inch: 39.3701,
    };
    output = (input1 * conversionRates[unit2]) / conversionRates[unit1];
  } 
  else if (unitType === "temperature") {
    if (unit1 === "Celsius" && unit2 === "Fahrenheit") {
      output = (input1 * 9) / 5 + 32;
    } else if (unit1 === "Fahrenheit" && unit2 === "Celsius") {
      output = ((input1 - 32) * 5) / 9;
    } else if (unit1 === "Celsius" && unit2 === "Kelvin") {
      output = input1 + 273.15;
    } else if (unit1 === "Kelvin" && unit2 === "Celsius") {
      output = input1 - 273.15;
    } else if (unit1 === "Fahrenheit" && unit2 === "Kelvin") {
      output = ((input1 - 32) * 5) / 9 + 273.15;
    } else if (unit1 === "Kelvin" && unit2 === "Fahrenheit") {
      output = ((input1 - 273.15) * 9) / 5 + 32;
    } else {
      output = input1;
    }
  }
  else if (unitType === "data") {
    const conversionRates = {
        Bit: 1,
        Byte: 0.125,
        Kilobyte: 0.000125,
        Megabyte: 0.000000125,
        Gigabyte: 0.000000000125,
        Terabyte: 0.000000000000125
    };
    output = (input1 * conversionRates[unit2]) / conversionRates[unit1];
  }
  if (unitType === "area") {
    const conversionRates = {
        "Square Meter": 1,
        "Square Kilometer": 0.000001,
        "Square Mile": 0.000000386102,
        Acre: 0.000247105,
        Hectare: 0.0001
    };
    output = (input1 * conversionRates[unit2]) / conversionRates[unit1];
  }
  if (unitType === "speed") {
    const conversionRates = {
        "Meter/Second": 1,
        "Kilometer/Hour": 3.6,
        "Mile/Hour": 2.23694
    };
    output = (input1 * conversionRates[unit2]) / conversionRates[unit1];
  }
  if (unitType === "time") {
    const conversionRates = {
        Second: 1,
        Minute: 1 / 60,
        Hour: 1 / 3600,
        Day: 1 / 86400
    };
    output = (input1 * conversionRates[unit1]) / conversionRates[unit2];
  }
  if (unitType === "volume") {
    const conversionRates = {
        Liter: 1,
        Milliliter: 1000,
        "Cubic Meter": 0.001,
        "Cubic Centimeter": 1000,
        Gallon: 0.264172
    };
    output = (input1 * conversionRates[unit1]) / conversionRates[unit2];
  }

  

  document.getElementById("input2").value = output.toFixed(4);
  console.log(`Converted ${input1} ${unit1} to ${output.toFixed(4)} ${unit2}`);
});
