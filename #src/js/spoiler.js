// _fullText
// textBlock__button

let btn = document.querySelector('.article__button').onclick = () => {
    document.querySelector('.article__content').classList.toggle('_fullText');
    document.querySelector('.article__button').classList.toggle('_activeButtonSpoiler');
}