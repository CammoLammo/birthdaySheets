flatpickr("#datePickerBig", {
    mode: "multiple",
    dateFormat: "d-m-Y",
    onChange: function(selectedDates, dateStr, instance) {
      // Store the selected dates for later use
      window.selectedDatesBig = selectedDates.map(date => date.toISOString().split('T')[0]);
      console.log("Selected dates for mini:", window.selectedDates);
    }
  });

flatpickr("#datePickerMini", {
    mode: "multiple",
    dateFormat: "d-m-Y",
    onChange: function(selectedDates, dateStr, instance) {
      // Store the selected dates for later use
      window.selectedDatesMini = selectedDates.map(date => date.toISOString().split('T')[0]);
      console.log("Selected dates for mini:", window.selectedDates);
    }
  });

  document.getElementById('generateBtn').addEventListener('click', () => {
    // Ensure at least one date is selected for each gym
    const datesBig = window.selectedDatesBig || [];
    const datesMini = window.selectedDatesMini || [];
  
    if (datesBig.length === 0 && datesMini.length === 0) {
      alert('Please select at least one date for Big Gym or Mini Gym.');
      return;
    }
  
    // For testing purposes, log the selected dates
    console.log('Generating sheets for:');
    console.log('Big Gym Dates:', datesBig);
    console.log('Mini Gym Dates:', datesMini);
  
    // Here, we'll send the selected dates to the main process via IPC
    // (We'll implement this in future steps)
  });
  