import React, { useState } from 'react';

const CarSellAppForm = () => {
  const [formData, setFormData] = useState({
    carMake: '',
    carModel: '',
    year: '',
    mileage: '',
    condition: '',
    features: [],
    transmission: '',
    priceRange: '',
    contactNumber: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    const updatedFeatures = checked
      ? [...formData.features, value]
      : formData.features.filter((feature) => feature !== value);
    setFormData({ ...formData, features: updatedFeatures });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Car Make:
        <input
          type="text"
          name="carMake"
          value={formData.carMake}
          onChange={handleInputChange}
          required
        />
      </label>
      <label>
        Car Model:
        <input
          type="text"
          name="carModel"
          value={formData.carModel}
          onChange={handleInputChange}
          required
        />
      </label>
      <label>
        Year:
        <input
          type="date"
          name="year"
          value={formData.year}
          onChange={handleInputChange}
          required
        />
      </label>
      <label>
        Mileage:
        <input
          type="number"
          name="mileage"
          value={formData.mileage}
          onChange={handleInputChange}
          required
        />
      </label>
      <fieldset>
        <legend>Condition:</legend>
        <label>
          Excellent
          <input
            type="radio"
            name="condition"
            value="Excellent"
            checked={formData.condition === 'Excellent'}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Good
          <input
            type="radio"
            name="condition"
            value="Good"
            checked={formData.condition === 'Good'}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Fair
          <input
            type="radio"
            name="condition"
            value="Fair"
            checked={formData.condition === 'Fair'}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Poor
          <input
            type="radio"
            name="condition"
            value="Poor"
            checked={formData.condition === 'Poor'}
            onChange={handleInputChange}
          />
        </label>
      </fieldset>
      <fieldset>
        <legend>Features:</legend>
        <label>
          Air Conditioning
          <input
            type="checkbox"
            name="features"
            value="Air Conditioning"
            checked={formData.features.includes('Air Conditioning')}
            onChange={handleCheckboxChange}
          />
        </label>
        <label>
          Power Steering
          <input
            type="checkbox"
            name="features"
            value="Power Steering"
            checked={formData.features.includes('Power Steering')}
            onChange={handleCheckboxChange}
          />
        </label>
        <label>
          Power Windows
          <input
            type="checkbox"
            name="features"
            value="Power Windows"
            checked={formData.features.includes('Power Windows')}
            onChange={handleCheckboxChange}
          />
        </label>
        <label>
          ABS
          <input
            type="checkbox"
            name="features"
            value="ABS"
            checked={formData.features.includes('ABS')}
            onChange={handleCheckboxChange}
          />
        </label>
        <label>
          Navigation System
          <input
            type="checkbox"
            name="features"
            value="Navigation System"
            checked={formData.features.includes('Navigation System')}
            onChange={handleCheckboxChange}
          />
        </label>
      </fieldset>
      <label>
        Transmission:
        <select
          name="transmission"
          value={formData.transmission}
          onChange={handleInputChange}
          required
        >
          <option value="">Select</option>
          <option value="Automatic">Automatic</option>
          <option value="Manual">Manual</option>
        </select>
      </label>
      <label>
        Price Range:
        <input
          type="range"
          name="priceRange"
          min="0"
          max="100"
          value={formData.priceRange}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Contact Number:
        <input
          type="text"
          name="contactNumber"
          value={formData.contactNumber}
          onChange={handleInputChange}
          required
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default CarSellAppForm;

