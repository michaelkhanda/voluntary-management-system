// JavaScript code
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const messageContainer = document.querySelector('.message-container');
const messages = document.querySelectorAll('.message');

let currentIndex = 0;

prevButton.addEventListener('click', () => {
  if (currentIndex === 0) {
    currentIndex = messages.length - 1;
  } else {
    currentIndex--;
  }
  updateSlider();
});

nextButton.addEventListener('click', () => {
  if (currentIndex === messages.length - 1) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }
  updateSlider();
});

function updateSlider() {
  messageContainer.style.transform = `translateX(-${currentIndex * 100}%)`;

  messages.forEach((message, index) => {
    if (index === currentIndex) {
      message.classList.add('active');
    } else {
      message.classList.remove('active');
    }
  });
}
