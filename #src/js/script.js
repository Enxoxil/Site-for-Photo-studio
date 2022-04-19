// START ===== INCLUDES ===== 

@@include('webpCheck.js'); // нет ошибки
@@include('burger.js');
@@include('sliderLogic.js');
@@include('spoiler.js');
@@include('smoothScroll.js');
@@include('showFeedbackModal.js');
// END ===== INCLUDES ===== 

// START =====  ===== 

const formFeedback = document.querySelector('._formFeedback');
formFeedback.onsubmit = (e) => {
    e.preventDafault;
    console.log('true');

}

// END =====  ===== 