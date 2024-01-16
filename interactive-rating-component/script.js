document.addEventListener('DOMContentLoaded', function () {
  const card = document.querySelector('.card');
  const thankYouCard = document.querySelector('.thank-you-card');
  const ratingButtons = document.querySelectorAll('.rating');
  const submitButton = document.querySelector('.submit-button');
  const resultSpan = document.querySelector('.result');

  let selectedRating = null;

  ratingButtons.forEach(button => {
    button.addEventListener('click', () => {
      ratingButtons.forEach(btn => btn.classList.remove('selected'));
      button.classList.toggle('selected');
      selectedRating = button.textContent;
    });
  });

  submitButton.addEventListener('click', () => {
    resultSpan.textContent = `You selected ${selectedRating} out of 5`;
    card.style.display = 'none';
    thankYouCard.style.display = 'flex';
  });

  card.style.display = 'flex';
});

