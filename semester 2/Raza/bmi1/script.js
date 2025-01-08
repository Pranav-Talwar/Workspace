// script.js

$(document).ready(function() {
    $('#calculate-btn').on('click', function() {
        let weight = parseFloat($('#weight').val());
        let height = parseFloat($('#height').val());

        if (weight > 0 && height > 0) {
            let bmi = (weight / ((height / 100) ** 2)).toFixed(2);
            $('#bmi-result').text(`Your BMI: ${bmi}`);

            let classification;
            if (bmi < 18.5) {
                classification = "Underweight";
            } else if (bmi >= 18.5 && bmi < 24.9) {
                classification = "Normal weight";
            } else if (bmi >= 25 && bmi < 29.9) {
                classification = "Overweight";
            } else {
                classification = "Obesity";
            }

            $('#bmi-classification').text(`Classification: ${classification}`);
        } else {
            $('#bmi-result').text("Please enter valid height and weight.");
            $('#bmi-classification').text("");
        }
    });
});
