document.addEventListener('DOMContentLoaded', () => {
    const monthYear = document.querySelector('.month-year');
    const daysContainer = document.querySelector('.days');
    const prevMonthBtn = document.querySelector('.prev-month');
    const nextMonthBtn = document.querySelector('.next-month');

    let currentDate = new Date();

    // Philippine holidays data: month is 0-based, day is 1-based
    const holidays = [
        { month: 0, day: 1, name: "New Year's Day" },
        { month: 1, day: 25, name: "EDSA People Power Revolution" },
        { month: 3, day: 9, name: "Araw ng Kagitingan" },
        { month: 4, day: 1, name: "Labor Day" },
        { month: 5, day: 12, name: "Independence Day" },
        { month: 7, day: 21, name: "Ninoy Aquino Day" },
        { month: 7, day: 26, name: "National Heroes Day" },
        { month: 10, day: 1, name: "All Saints' Day" },
        { month: 10, day: 30, name: "Bonifacio Day" },
        { month: 11, day: 25, name: "Christmas Day" },
        { month: 11, day: 30, name: "Rizal Day" }
        // Add more holidays as needed
    ];

    function renderCalendar(date) {
        daysContainer.innerHTML = '';

        const year = date.getFullYear();
        const month = date.getMonth();

        const options = { year: 'numeric', month: 'long' };
        monthYear.textContent = date.toLocaleDateString(undefined, options);

        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);
        const firstDayIndex = firstDay.getDay();
        const totalDays = lastDay.getDate();

        // Previous month's days to show
        const prevLastDay = new Date(year, month, 0).getDate();

        // Total cells to display (6 weeks to cover all cases)
        const totalCells = 42;

        for (let i = 0; i < totalCells; i++) {
            const dayElement = document.createElement('div');

            if (i < firstDayIndex) {
                // Days from previous month
                dayElement.textContent = prevLastDay - firstDayIndex + 1 + i;
                dayElement.classList.add('other-month');
            } else if (i >= firstDayIndex && i < firstDayIndex + totalDays) {
                // Current month days
                const day = i - firstDayIndex + 1;
                dayElement.textContent = day;

                // Check if this day is a holiday
                const holiday = holidays.find(h => h.month === month && h.day === day);
                if (holiday) {
                    dayElement.classList.add('holiday');
                    dayElement.title = holiday.name;

                    // Add holiday icon
                    const icon = document.createElement('span');
                    icon.textContent = "🎉";
                    icon.style.marginLeft = "5px";
                    dayElement.appendChild(icon);
                }

                const today = new Date();
                if (
                    day === today.getDate() &&
                    month === today.getMonth() &&
                    year === today.getFullYear()
                ) {
                    dayElement.classList.add('today');
                }
            } else {
                // Days from next month
                dayElement.textContent = i - firstDayIndex - totalDays + 1;
                dayElement.classList.add('other-month');
            }

            daysContainer.appendChild(dayElement);
        }
    }

    prevMonthBtn.addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() - 1);
        renderCalendar(currentDate);
    });

    nextMonthBtn.addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() + 1);
        renderCalendar(currentDate);
    });

    renderCalendar(currentDate);
});

// Existing DOMContentLoaded event listener for other forms remains unchanged
document.addEventListener('DOMContentLoaded', () => {
    // New code for AUDI-GYM-Form
    const audiGymForm = document.getElementById('AUDI-GYM-Form');
    const audiPopup = document.getElementById('success-popup');
    const blurWrapper = document.getElementById('blur-wrapper');
    const audiSubmitBtn = audiGymForm ? audiGymForm.querySelector('button[type="submit"]') : null;

    if (audiGymForm && audiPopup && audiSubmitBtn) {
        // Disable submit button initially
        audiSubmitBtn.disabled = true;

        // Function to check if all required inputs are filled
        function checkAudiFormValidity() {
            const inputs = audiGymForm.querySelectorAll('input[type="text"], input[type="date"], input[type="time"]');
            let allFilled = true;
            inputs.forEach(input => {
                if (!input.value.trim()) {
                    allFilled = false;
                }
            });
            audiSubmitBtn.disabled = !allFilled;
        }

        // Add input event listeners to all inputs to validate form
        const audiInputs = audiGymForm.querySelectorAll('input[type="text"], input[type="date"], input[type="time"]');
        audiInputs.forEach(input => {
            input.addEventListener('input', checkAudiFormValidity);
        });

        // Initially hide popup
        audiPopup.classList.add('popup-hidden');
        audiPopup.style.display = 'none';

        audiGymForm.addEventListener('submit', (e) => {
            e.preventDefault();

            audiPopup.style.display = 'flex'; // Show popup as flex for centering
            audiPopup.style.zIndex = '1200'; // Ensure popup is above other elements

            setTimeout(() => {
                audiPopup.style.display = 'none';
                audiGymForm.reset();
                audiSubmitBtn.disabled = true;
                window.location.href = 'home.html'; // Redirect to home after 3 seconds
            }, 3000);
        });
    }

    // New code for Audio-Visual-Room-Form
    const avrForm = document.getElementById('avrForm');
    const avrPopup = document.getElementById('success-popup');
    const avrSubmitBtn = avrForm ? avrForm.querySelector('button[type="submit"]') : null;

    if (avrForm && avrPopup && avrSubmitBtn) {
        // Disable submit button initially
        avrSubmitBtn.disabled = true;

        // Function to check if all required inputs are filled
        function checkAvrFormValidity() {
            const inputs = avrForm.querySelectorAll('input[type="text"], input[type="date"]');
            let allFilled = true;
            inputs.forEach(input => {
                if (!input.value.trim()) {
                    allFilled = false;
                }
            });
            avrSubmitBtn.disabled = !allFilled;
        }

        // Add input event listeners to all inputs to validate form
        const avrInputs = avrForm.querySelectorAll('input[type="text"], input[type="date"]');
        avrInputs.forEach(input => {
            input.addEventListener('input', checkAvrFormValidity);
        });

        // Initially hide popup
        avrPopup.classList.add('popup-hidden');
        avrPopup.style.display = 'none';

        avrForm.addEventListener('submit', (e) => {
            e.preventDefault();

            avrPopup.style.display = 'flex'; // Show popup as flex for centering
            avrPopup.style.zIndex = '1200'; // Ensure popup is above other elements

            setTimeout(() => {
                avrPopup.style.display = 'none';
                avrForm.reset();
                avrSubmitBtn.disabled = true;
                window.location.href = 'home.html'; // Redirect to home after 3 seconds
            }, 3000);
        });
    }
});

// Facilities table inline editing functions
function editFacility(button) {
    const row = button.closest('tr');
    const isEditing = row.classList.contains('editing');

    if (!isEditing) {
        // Enter edit mode
        row.classList.add('editing');
        for (let i = 1; i <= 4; i++) { // Editable columns: Facility Name, Status, Availability, Upcoming Bookings
            const cell = row.cells[i];
            const text = cell.textContent;
            cell.innerHTML = `<input type="text" value="${text}">`;
        }
        // Change buttons
        const actionCell = row.cells[5];
        actionCell.innerHTML = `
            <button type="button" onclick="saveFacility(this)">Save</button>
            <button type="button" onclick="cancelEdit(this)">Cancel</button>
        `;
    }
}

function saveFacility(button) {
    const row = button.closest('tr');
    for (let i = 1; i <= 4; i++) {
        const cell = row.cells[i];
        const input = cell.querySelector('input');
        if (input) {
            cell.textContent = input.value;
        }
    }
    // Restore action buttons
    const actionCell = row.cells[5];
    const facilityName = row.cells[1].textContent;
    actionCell.innerHTML = `
        <button type="button" aria-label="Edit ${facilityName}" onclick="editFacility(this)">Edit</button>
        <button type="button" aria-label="Delete ${facilityName}">Delete</button>
    `;
    row.classList.remove('editing');
}

function cancelEdit(button) {
    const row = button.closest('tr');
    for (let i = 1; i <= 4; i++) {
        const cell = row.cells[i];
        const input = cell.querySelector('input');
        if (input) {
            cell.textContent = input.defaultValue;
        }
    }
    // Restore action buttons
    const actionCell = row.cells[5];
    const facilityName = row.cells[1].textContent;
    actionCell.innerHTML = `
        <button type="button" aria-label="Edit ${facilityName}" onclick="editFacility(this)">Edit</button>
        <button type="button" aria-label="Delete ${facilityName}">Delete</button>
    `;
    row.classList.remove('editing');
}
