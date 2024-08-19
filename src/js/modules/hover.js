function hover() {
    const backgroundBlock = document.getElementById('background-block');
    const buttons = document.querySelectorAll('.hover-button');

    buttons.forEach(button => {
        button.addEventListener('mouseover', function () {
            const imageUrl = this.getAttribute('data-image');
            backgroundBlock.style.backgroundImage = imageUrl;
        });
    });
}

export default hover;