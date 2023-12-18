function calculateGrade() {
    //  Prompt user for input, open the window with Text "What is your score"
    let grade = window.prompt("What is your score");
    // Convert input to a number
    const marks = parseFloat(grade);
    
    // Check if the input is a valid number between 0 and 100
    if (!isNaN(marks) && marks >= 0 && marks <= 100) {
    // Determine the grade based on the specified criteria
    if (marks<40){
        alert ("Your mean grade is E!");
    }else if(marks>40 &&marks<=49){
        alert ("Your mean grade is D!");
    }else if(marks>50 &&marks<=59){
        alert ("Your mean grade is C!");
    }else if(marks>60 &&marks<=79){
        alert ("Your mean grade is B!");
    }else {
        alert ("Your mean grade is A!");
    }
    }else{
        // Output an error message for invalid input
        alert ('Invalid input. Please enter a number between 0 and 100.');
    }
    }
    calculateGrade();