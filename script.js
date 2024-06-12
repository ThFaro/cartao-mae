let currentPage = 0;

document.getElementById('next').addEventListener('click', () => {
  const pages = document.querySelector('.pages');
  if (currentPage < pages.children.length - 1) {
    currentPage++;
    pages.style.transform = `rotateY(-${currentPage * 90}deg)`;
  }
});

document.getElementById('prev').addEventListener('click', () => {
  const pages = document.querySelector('.pages');
  if (currentPage > 0) {
    currentPage--;
    pages.style.transform = `rotateY(-${currentPage * 90}deg)`;
  }
});