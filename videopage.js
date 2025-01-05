 const toggle = document.querySelector('')   
document.addEventListener("DOMContentLoaded", () => {
    const video = document.querySelector(".video-container video");
    const playPauseButton = document.querySelector(".play-pause-btn");

    playPauseButton.addEventListener("click", () => {
        if (video.paused) {
            video.play();
            playPauseButton.textContent = "Pause";
        } else {
            video.pause();
            playPauseButton.textContent = "Play";
        }
    });
});
console.log(Intl.DateTimeFormat().resolvedOptions().timeZone)
            flatpickr("#date-picker", {
            inline: true,
            dateFormat: "d-m-y", // Format for the selected date
            defaultDate:new Date(),
            prevArrow: "<", // Custom left arrow
            nextArrow: ">", // Custom right arrow
            locale: {
                firstDayOfWeek: 1 // Start the week on Monday
            },
            // disable: [
            //      "2024-12-25",            // Disable specific dates
            //      function (date) {
            //      // Disable weekends (Saturday and Sunday)
            //     return (date.getDay() === 0 || date.getDay() === 6);
            // }]
            onDayCreate: function(dObj, dStr, fp, dayElem) {
                // Get today's date
                const today = new Date();
                today.setHours(0, 0, 0, 0); // Set time to 00:00 for comparison

                // Get the date of the current day element
                const currentDate = new Date(dObj);
                currentDate.setHours(0, 0, 0, 0); // Set time to 00:00 for comparison

                // Check if the date is in the future (after today)
                if (currentDate > today) {
                    // Apply custom class to future dates
                    dayElem.classList.add("future-date");
                }
            },
            onChange: function(selectedDates, dateStr, instance) {
                      // Update the output when a date is selected
                      document.getElementById("selected-date-output").textContent =
                          `You selected: ${dateStr}`;
                  }
        });
            //   // Initialize Flatpickr
            //   flatpickr("#date-picker", {
            //       inline: true, // Always show the calendar
            //       dateFormat: "Y-m-d", // Format for the selected date
            //       onChange: function(selectedDates, dateStr, instance) {
            //           // Update the output when a date is selected
            //           document.getElementById("selected-date-output").textContent =
            //               `You selected: ${dateStr}`;
            //       }
            //   });
            const countries = [
            "Afghanistan",
            "Albania",
            "Algeria",
            "Andorra",
            "Angola",
            "Argentina",
            "Australia",
            "Austria",
            "Bahamas",
            "Bangladesh",
            "Belgium",
            "Brazil",
            "Canada",
            "China",
            "Denmark",
            "Egypt",
            "Finland",
            "France",
            "Germany",
            "India",
            "Indonesia",
            "Italy",
            "Japan",
            "Kenya",
            "Mexico",
            "Maroc",
            "Nigeria",
            "Pakistan",
            "Russia",
            "South Africa",
            "Spain",
            "United Kingdom",
            "United States",
            "Zimbabwe"
        ];

        const countrySelect = document.getElementById('country-select');

        
        countries.forEach(country => {
            const option = document.createElement('option');
            option.value = country.toLowerCase();
            option.textContent = 'Horaire Du '+country;
            countrySelect.appendChild(option);
        });
