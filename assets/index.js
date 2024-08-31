document.addEventListener("DOMContentLoaded", function() {
  const likeBtn = document.querySelector(".btn");

  if (likeBtn) {
    let likes = localStorage.getItem('likes') ? parseInt(localStorage.getItem('likes')) : 0;
    likeBtn.value = likes === 0 ? "♥️" : `${likes} ♥️`;

    let hasLiked = localStorage.getItem('hasLiked') === 'true';

    likeBtn.addEventListener('click', function() {
      if (!hasLiked) {
        likes++;
        localStorage.setItem('likes', likes);
        localStorage.setItem('hasLiked', 'true');
        likeBtn.value = `${likes} ♥️`;
        hasLiked = true;
      } else {}
    });
  }
});
