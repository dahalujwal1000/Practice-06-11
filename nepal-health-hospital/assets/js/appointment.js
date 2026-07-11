// JavaScript for Appointment Booking Page
document.addEventListener('DOMContentLoaded', function() {
    const stepContents = document.querySelectorAll('.step-content');
    const steps = document.querySelectorAll('.step');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    let currentStep = 1;

    function showStep(step) {
        // Hide all step contents
        stepContents.forEach(content => {
            content.classList.remove('active');
        });

        // Show the current step content
        document.getElementById('step-' + step).classList.add('active');

        // Update step indicators
        steps.forEach((stepEl, index) => {
            if (index < step) {
                stepEl.classList.add('active', 'completed');
            } else if (index === step - 1) {
                stepEl.classList.add('active');
                stepEl.classList.remove('completed');
            } else {
                stepEl.classList.remove('active', 'completed');
            }
        });

        // Update button states
        if (step === 1) {
            prevBtn.disabled = true;
        } else {
            prevBtn.disabled = false;
        }

        if (step === stepContents.length) {
            nextBtn.textContent = 'Confirm Booking';
        } else {
            nextBtn.textContent = 'Next';
        }

        currentStep = step;
    }

    // Next button click
    nextBtn.addEventListener('click', function() {
        if (currentStep < stepContents.length) {
            showStep(currentStep + 1);
        } else {
            // Handle form submission
            alert('Appointment booked successfully! Your appointment ID is: APPT-' + Math.floor(Math.random() * 10000));
            // In a real app, you would submit the form here
        }
    });

    // Previous button click
    prevBtn.addEventListener('click', function() {
        if (currentStep > 1) {
            showStep(currentStep - 1);
        }
    });

    // Department selection
    const deptCards = document.querySelectorAll('.dept-card');
    deptCards.forEach(card => {
        card.addEventListener('click', function() {
            // Remove active class from all cards
            deptCards.forEach(c => c.classList.remove('selected'));
            // Add active class to clicked card
            this.classList.add('selected');
        });
    });

    // Doctor selection
    const doctorCards = document.querySelectorAll('.doctor-card');
    doctorCards.forEach(card => {
        card.addEventListener('click', function() {
            // Remove active class from all cards
            doctorCards.forEach(c => c.classList.remove('selected'));
            // Add active class to clicked card
            this.classList.add('selected');
        });
    });

    // Time slot selection
    const timeSlots = document.querySelectorAll('.time-slot');
    timeSlots.forEach(slot => {
        slot.addEventListener('click', function() {
            // Remove active class from all slots
            timeSlots.forEach(s => s.classList.remove('selected'));
            // Add active class to clicked slot
            this.classList.add('selected');
        });
    });

    // Initialize first step
    showStep(1);
});