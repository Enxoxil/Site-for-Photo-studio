// START ===== form handler =====

// START ===== variables =====

const url = "https://jsonplaceholder.typicode.com/todos";

// END ===== variables =====

async function sendForm(valuesForm) {
    try {
        const response = await fetch(url, {
            method: "POST",
            body: valuesForm,
        });
        const result = await response.json();
        console.log(result);
    } catch (error) {
        console.log("Error: ", error);
    } finally {
        console.log("Finally");
    }
}

function resetForm(event) {
    event.target.reset();
}

function collectionData(currentForm) {
    const formData = new FormData(currentForm);
    const formValues = Object.fromEntries(formData.entries());
    return formValues;
}

function onSubmit(currentTarget, e) {
    sendForm(collectionData(currentTarget));
    closeModal(e);
    resetForm(e);
}

function subscribeSubmitForms(forms) {
    for (currentForm of forms) {
        if (currentForm.classList.contains("_form")) {
            currentForm.addEventListener("submit", (e) => {
                e.preventDefault();
                const { currentTarget } = e;
                onSubmit(currentTarget, e);
            });
        }
    }
}

function getAllForms() {
    const forms = document.forms;
    subscribeSubmitForms(forms);
}

getAllForms();
// END ===== form handler =====

