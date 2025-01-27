// Get all FAQ question buttons
const faqQuestions = document.querySelectorAll('.faq-question');

// Loop through each question and add a click event listener
faqQuestions.forEach(question => {
  question.addEventListener('click', function() {
    // Toggle the answer visibility
    const answer = this.nextElementSibling;
    answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
  });
});
