import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Reservations.css';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    startTime: '',
    endTime: '',
    tableChoice: 'Balcony Table',
    numDiners: 1,
    phoneNumber: '',
    instructions: '',
    selectedDay: 'M'
  });

  const [formErrors, setFormErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setFormErrors({ ...formErrors, [name]: '' }); // Clear the error as the user types
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.firstName) errors.firstName = 'First Name is required';
    if (!formData.lastName) errors.lastName = 'Last Name is required';
    if (!formData.startTime) errors.startTime = 'Start time is required';
    if (!formData.endTime) errors.endTime = 'End time is required';
    if (!formData.phoneNumber) errors.phoneNumber = 'Phone Number is required';
    if (!formData.selectedDay) errors.selectedDay = 'Day selection is required';

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
  
    if (Object.keys(errors).length === 0) {
      console.log(formData);
      setSuccessMessage('Booking submitted successfully!');
      setFormErrors({});
  
      // Store reservation data in localStorage
      localStorage.setItem('reservationData', JSON.stringify(formData));
  
      // Redirect to /reservations/confirmation after successful submission
      setTimeout(() => {
        navigate('/reservations/confirmation');
      }, 1000);
    } else {
      setFormErrors(errors);
      setSuccessMessage('');
    }
  };

  const selectDay = (day) => {
    setFormData({ ...formData, selectedDay: day });
    setFormErrors({ ...formErrors, selectedDay: '' }); // Clear error for day selection
  };

  return (
    <div className='outerContainer'>
      <div className="booking-form-container">
        <h2>Booking</h2>
        <form onSubmit={handleSubmit}>
          <div id='nameGroup'>
            <div className="form-group">
              <label>First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Enter First Name"
                required
              />
              {formErrors.firstName && <span className="error-message">{formErrors.firstName}</span>}
            </div>

            <div className="form-group">
              <label>Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Enter Last Name"
                required
              />
              {formErrors.lastName && <span className="error-message">{formErrors.lastName}</span>}
            </div>
          </div>

          <div className="form-group">
            <label>Select Day</label>
            <div className="day-buttons">
              {['M', 'Tu', 'W', 'Th', 'F', 'Sa', 'Su'].map((day, index) => (
                <button
                  key={index}
                  type="button"
                  className={`day-button ${formData.selectedDay === day ? 'selected' : ''}`}
                  onClick={() => selectDay(day)}
                >
                  {day}
                </button>
              ))}
            </div>
            {formErrors.selectedDay && <span className="error-message">{formErrors.selectedDay}</span>}
          </div>

          <div className="form-group time-frame">
            <div>
              <label>Start</label>
              <input
                type="time"
                name="startTime"
                value={formData.startTime}
                onChange={handleChange}
                required
              />
              {formErrors.startTime && <span className="error-message">{formErrors.startTime}</span>}
            </div>
            <div>
              <label htmlFor="">End</label>
              <input
                type="time"
                name="endTime"
                value={formData.endTime}
                onChange={handleChange}
                required
              />
              {formErrors.endTime && <span className="error-message">{formErrors.endTime}</span>}
            </div>
          </div>

          <div className="form-group">
            <label>Table Choice</label>
            <select
              name="tableChoice"
              value={formData.tableChoice}
              onChange={handleChange}
            >
              <option value="Balcony Table">Balcony Table</option>
              <option value="Lounge Table">Lounge Table</option>
            </select>
          </div>

          <div className="form-group">
            <label>Number of Diners</label>
            <input
              type="range"
              min="1"
              max="10"
              value={formData.numDiners}
              onChange={(e) => setFormData({ ...formData, numDiners: e.target.value })}
            />
            <div className="number-display">{formData.numDiners} Guest(s)</div>
          </div>

          <div className="form-group">
            <label>Phone Number</label>
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="Enter Phone Number"
              required
            />
            {formErrors.phoneNumber && <span className="error-message">{formErrors.phoneNumber}</span>}
          </div>

          <div className="form-group">
            <label>Extra Instructions</label>
            <textarea
              name="instructions"
              value={formData.instructions}
              onChange={handleChange}
              placeholder="Extra Instructions (Optional)"
            ></textarea>
          </div>

          <button type="submit" className="book-button">BOOK NOW</button>
        </form>

        {successMessage && <p className="success-message">{successMessage}</p>}
      </div>
    </div>
  );
};

export default BookingForm;
