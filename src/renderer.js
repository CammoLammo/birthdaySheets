flatpickr("#datePicker", {
    mode: "multiple",
    dateFormat: "Y-m-d",
    onChange: function(selectedDates, dateStr, instance) {
      // Store the selected dates for later use
      window.selectedDates = selectedDates.map(date => date.toISOString().split('T')[0]);
      console.log("Selected dates:", window.selectedDates);
    }
  });