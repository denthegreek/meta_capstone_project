import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Import the hook for navigation
import './Confirmation.css'

const dayMap = {
  M: 'Monday',
  Tu: 'Tuesday',
  W: 'Wednesday',
  Th: 'Thursday',
  F: 'Friday',
  Sa: 'Saturday',
  Su: 'Sunday',
};

const ReservationConfirmation = () => {
  const [reservationData, setReservationData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedData = localStorage.getItem('reservationData');
    if (storedData) {
      setReservationData(JSON.parse(storedData));
    }
  }, []);

  if (!reservationData) {
    return <div>Loading...</div>;
  }

  const { firstName, selectedDay, startTime, endTime, numDiners, instructions } = reservationData;

  const fullDayName = dayMap[selectedDay];

  const handleClose = () => {
    navigate('/');
  };

  return (
    <div className="confirmation-container">
      <div className="confirmation-box">
        <button className="close-button" onClick={handleClose}>X</button>
        <h1>Confirmation</h1>
        <div className="confirmation-details">
          <p>Thank you, <strong>{firstName}</strong>! We have booked you for <strong>{fullDayName}</strong> at <strong>{startTime}</strong>, and you will be staying with us up to <strong>{endTime}</strong>. Your reservation is valid for a table of <strong>{numDiners}</strong> guests.</p>
          {instructions && (
            <p>We have taken your special instructions into consideration: <strong>{instructions}</strong></p>
          )}
        </div>
        <div className="thank-you">Thank You!</div>
      </div>
    </div>
  );
};

export default ReservationConfirmation;
