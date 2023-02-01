let popup = document.querySelector('.popup');
let popupOpen = document.querySelector('.profile__edit-button');
let btnClose = document.querySelector('.popup__close');
let nameInput = document.querySelector('.popup__input_form_name');
let jobInput = document.querySelector('.popup__input_form_job');
let nameProfile = document.querySelector('.profile__name');
let jobProfile = document.querySelector('.profile__job');
let formElement = popup.querySelector('.popup__form')


let сlosePopup = () => {
    popup.classList.remove('popup_opened');
}

popupOpen.addEventListener('click', ()=> {
    popup.classList.add('popup_opened')
    nameInput.value = nameProfile.textContent;
    jobInput.value = jobProfile.textContent;
})



function handleFormSubmit (evt) {
    evt.preventDefault(); 
    nameProfile.textContent = nameInput.value;
    jobProfile.textContent = jobInput.value;
    сlosePopup();
}

formElement.addEventListener('submit', handleFormSubmit);
btnClose.addEventListener('click', ()=> {
    сlosePopup();
})