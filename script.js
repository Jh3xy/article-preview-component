

const shareIcon = document.querySelector('.share-icon')
const socialLinks = document.querySelector('.social-links')


shareIcon.addEventListener("click", ()=> {
 socialLinks.classList.toggle('active');
 console.log(socialLinks.classList)
})