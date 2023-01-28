let popup = document.querySelector('.popup');
let popupOpen = document.querySelector('.profile__edit-button');
let btnClose = document.querySelector('.popup__close');
let nameInput = document.querySelector('.popup__input_name');
let jobInput = document.querySelector('.popup__input_job');
let btnSave = document.querySelector('.popup__save');
let nameProfile = document.querySelector('.profile__name');
let jobProfile = document.querySelector('.profile__job');
let formElement = popup.querySelector('.popup__form')


let popupClose = () => {
    popup.classList.remove('popup__opened');
}

popupOpen.addEventListener('click', ()=> {
    popup.classList.add('popup__opened')
    nameInput.value = nameProfile.textContent;
    jobInput.value = jobProfile.textContent;
})

btnClose.addEventListener('click', ()=> {
    popupClose();
})

function handleFormSubmit (evt) {
    evt.preventDefault(); 
    nameProfile.textContent = nameInput.value;
    jobProfile.textContent = jobInput.value;
    popupClose();
}

formElement.addEventListener('submit', handleFormSubmit); 