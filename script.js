
document.querySelectorAll('.likeButton').forEach(button => {
    button.addEventListener('click', function () {
        const likeCountElement = this.nextElementSibling; 
        let likeCount = parseInt(likeCountElement.textContent);
  
        if (this.classList.contains('liked')) {
            this.classList.remove('liked');
            this.textContent = 'Like';
            likeCount--; 
        } else {
            this.classList.add('liked');
            this.textContent = 'Liked';
            likeCount++; 
        }
        likeCountElement.textContent = `${likeCount} Likes`;
    });
});


document.querySelectorAll('.commentButton').forEach(button => {
    button.addEventListener('click', function () {
        const commentSection = this.nextElementSibling; 
        commentSection.classList.toggle('visible'); 
    });
});

document.querySelectorAll('.commentInput').forEach(input => {
    input.addEventListener('keypress', function (e) {
        if (e.key === 'Enter' && this.value.trim() !== '') {
            const commentList = this.nextElementSibling; 
            const newComment = document.createElement('li');
            newComment.textContent = this.value;
            commentList.appendChild(newComment);
            this.value = '';
        }
    });
});

document.querySelectorAll('.shareButton').forEach(button => {
    button.addEventListener('click', function () {
        const shareCountElement = this.nextElementSibling; 
        let shareCount = parseInt(shareCountElement.textContent);

        shareCount++; 
        shareCountElement.textContent = `${shareCount} Shares`;

        alert('Post shared successfully!'); 
    });
});
