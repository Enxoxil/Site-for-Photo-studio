// _fullText
// textBlock__button

let btn = document.querySelector('.textBlock__button').onclick = () => {
    document.querySelector('.textBlock__content').classList.toggle('_fullText');
    document.querySelector('.textBlock__button').classList.toggle('_activeButtonSpoiler');
}