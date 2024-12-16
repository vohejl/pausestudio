import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "/src/css/Floating.css";

function Floating() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedService, setSelectedService] = useState(null);
  const [bookingDate, setBookingDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const navigate = useNavigate();

  // Create refs for smooth scrolling
  const calendarRef = useRef(null);
  const timeSlotsRef = useRef(null);
  const bookButtonRef = useRef(null);

  const goToHome = () => {
    navigate("/");
  };

  const handleBooking = () => {
    navigate("/booket");
  };

  // Scroll to calendar when service is selected
  useEffect(() => {
    if (selectedService && calendarRef.current) {
      calendarRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [selectedService]);

  // Scroll to time slots when a date is selected
  useEffect(() => {
    if (bookingDate && timeSlotsRef.current) {
      timeSlotsRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [bookingDate]);

  // Scroll to book button when a time is selected
  useEffect(() => {
    if (selectedTime && bookButtonRef.current) {
      bookButtonRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [selectedTime]);

  // Handle session type clicks
  const handleOnePersonClick = () => {
    setSelectedOption("1 person");
    setSelectedService(null);
    setBookingDate(null);
    setSelectedTime(null);
  };

  const handleTwoPersonClick = () => {
    setSelectedOption("2 personer");
    setSelectedService(null);
    setBookingDate(null);
    setSelectedTime(null);
  };

  const handleServiceSelect = (service) => {
    setSelectedService(service);
    setBookingDate(null);
    setSelectedTime(null);
  };

  const handleDateChange = (date) => {
    setBookingDate(date);
  };

  const handleTimeChange = (time) => {
    setSelectedTime(time);
  };

  // Time slots
  const timeSlots = {
    "45min-1": ["10:00-10:45", "11:00-11:45", "13:00-13:45", "14:00-14:45"],
    "60min-1": ["10:00-11:00", "11:30-12:30", "13:30-14:30", "15:00-16:00"],
    "45min-2": ["10:00-10:45", "11:00-11:45", "13:00-13:45", "14:00-14:45"],
    "60min-2": ["10:00-11:00", "11:30-12:30", "13:30-14:30", "15:00-16:00"],
  };

  return (
    <div className="floating-container">
      <button className="close-btn-booking" onClick={goToHome}>
        &times;
      </button>

      <h2 className="header-title">Book tid her</h2>

      <div className="floating-booking">
        <img src="/public/img/floating.png" alt="Floating" />
        <p>Floating</p>
      </div>

      <div className="booking-section">
        <h3 className="session-title">Enkelt session</h3>
        <div className="button-group">
          <button
            className={`option-btn ${selectedOption === "1 person" ? "selected" : ""}`}
            onClick={handleOnePersonClick}
          >
            1 person
          </button>
          <button
            className={`option-btn ${selectedOption === "2 personer" ? "selected" : ""}`}
            onClick={handleTwoPersonClick}
          >
            2 personer
          </button>
        </div>
      </div>

      {selectedOption && (
        <div className="ydelser-section">
          <h3 className="services-title">Ydelser</h3>
          <div className="button-group-ydelser">
            {selectedOption === "1 person" && (
              <>
                <button
                  className={`option-btn ${selectedService === "45min-1" ? "selected" : ""}`}
                  onClick={() => handleServiceSelect("45min-1")}
                >
                  Floating for 1 (45 min) DK 695,-
                </button>
                <button
                  className={`option-btn ${selectedService === "60min-1" ? "selected" : ""}`}
                  onClick={() => handleServiceSelect("60min-1")}
                >
                  Floating for 1 (60 min) DK 795,-
                </button>
              </>
            )}
            {selectedOption === "2 personer" && (
              <>
                <button
                  className={`option-btn ${selectedService === "45min-2" ? "selected" : ""}`}
                  onClick={() => handleServiceSelect("45min-2")}
                >
                  Floating for 2 (45 min) DK 695,-
                </button>
                <button
                  className={`option-btn ${selectedService === "60min-2" ? "selected" : ""}`}
                  onClick={() => handleServiceSelect("60min-2")}
                >
                  Floating for 2 (60 min) DK 795,-
                </button>
              </>
            )}
          </div>
        </div>
      )}

      {selectedService && (
        <div ref={calendarRef} className="custom-calendar">
          <DatePicker
            selected={bookingDate}
            onChange={handleDateChange}
            inline
            minDate={new Date()}
          />
        </div>
      )}

      {selectedService && bookingDate && (
        <div ref={timeSlotsRef} className="time-slots">
          <h4>Vælg tidspunkt</h4>
          <div className="time-buttons">
            {timeSlots[selectedService]?.map((time) => (
              <button
                key={time}
                className={`time-btn ${selectedTime === time ? "selected" : ""}`}
                onClick={() => handleTimeChange(time)}
              >
                {time}
              </button>
            ))}
          </div>
        </div>
      )}

      {selectedTime && (
        <button ref={bookButtonRef} className="book-btn" onClick={handleBooking}>
          Book tid
        </button>
      )}
    </div>
  );
}

export default Floating;
