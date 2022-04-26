// START ===== INCLUDES =====
const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(
    navigator.userAgent
)




@@include('webpCheck.js'); // нет ошибки
@@include('burger.js');
@@include('sliderLogic.js');
@@include('spoiler.js');
@@include('smoothScroll.js');
@@include('formHandler.js');
@@include('showFeedbackModal.js');
@@include('closeModalFieldHandler.js');
@@include('closeModalEscHandler.js')
@@include('closeModalBtnHandler.js')

// END ===== INCLUDES =====

// START ===== init =====

getAllForms();


// END =====  =====
