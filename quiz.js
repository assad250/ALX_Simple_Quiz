function checkAnswer () {
    //correct answer
    const correctAnswer = "4";

    //Retrieve User's answer
    const userAnswer = document.querySelector('input[name="quiz"]:checked')?.value;

    //Get feedback element
    const feedback = document.getElementById('feedback');

    //Comparing answers and providing feedback
    if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct! Well done ."
    } else {
        feedback.textContent = "That's Incorrect. Try Again?"
    }
}


//adding event listener to the submit button
document.getElementById('submit-answer').addEventListener('click', CheckAnswer);
