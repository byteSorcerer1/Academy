import React, { useState } from 'react';
import './App.css';

const TemperatureConverter = () => {
  const [inputTemperature, setInputTemperature] = useState('');
  const [selectedUnit, setSelectedUnit] = useState('celsius');
  const [result, setResult] = useState(null);

  const convertTemperature = () => {
    const temperature = parseFloat(inputTemperature);

    if (isNaN(temperature)) {
      setResult('Geçerli bir sıcaklık değeri girin');
      return;
    }

    switch (selectedUnit) {
      case 'celsius':
        setResult({
          fahrenheit: (temperature * 9/5) + 32,
          kelvin: temperature + 273.15,
          rankine: (temperature + 273.15) * 9/5
        });
        break;
      case 'fahrenheit':
        setResult({
          celsius: (temperature - 32) * 5/9,
          kelvin: (temperature - 32) * 5/9 + 273.15,
          rankine: temperature + 459.67
        });
        break;
      case 'kelvin':
        setResult({
          celsius: temperature - 273.15,
          fahrenheit: (temperature - 273.15) * 9/5 + 32,
          rankine: temperature * 9/5
        });
        break;
      case 'rankine':
        setResult({
          celsius: (temperature - 459.67) * 5/9,
          fahrenheit: temperature - 459.67,
          kelvin: temperature * 5/9
        });
        break;
      default:
        setResult(null);
    }
  };

  return (
    <div className="temperature-converter-container">
      <h2>Sıcaklık Dönüştürücü</h2>
      <label>
        Sıcaklık Değeri:
        <input
          type="text"
          value={inputTemperature}
          onChange={(e) => setInputTemperature(e.target.value)}
        />
      </label>
      <br />
      <label>
        Dönüştürülecek Birim:
        <select
          value={selectedUnit}
          onChange={(e) => setSelectedUnit(e.target.value)}
        >
          <option value="celsius">Celsius</option>
          <option value="fahrenheit">Fahrenheit</option>
          <option value="kelvin">Kelvin</option>
          <option value="rankine">Rankine</option>
        </select>
      </label>
      <br />
      <button onClick={convertTemperature}>Dönüştür</button>
      <br />
      {result && (
        <div>
          <h3>Result:</h3>
          <p>Celsius: {result.celsius}</p>
          <p>Fahrenheit: {result.fahrenheit}</p>
          <p>Kelvin: {result.kelvin}</p>
          <p>Rankine: {result.rankine}</p>
        </div>
      )}
    </div>
  );
};

export default TemperatureConverter;
