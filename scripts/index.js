// Открытие попапа
const openPopup = (popupElement) => {
  popupElement.classList.add('popup_opened');
}

// Закртыие попапа
const closePopup = (popupElement) => {
  popupElement.classList.remove('popup_opened');
}

// // Попап с картинкой
const popupBigImg = document.querySelector('.popup_type_big-img');
const popupImg = popupBigImg.querySelector('.popup__img');
const popupText = popupBigImg.querySelector('.popup__text');
const closePopupBigImg = popupBigImg.querySelector('.popup__close');
closePopupBigImg.addEventListener('click', () => {
  formCard.reset();
  closePopup(popupBigImg);
})


const cardTemplate = document.querySelector('#card-template').content;
const addCard = (name, link) => {
  const card = cardTemplate.cloneNode(true);
  const cardImg = card.querySelector('.card__img');
  const cardName = card.querySelector('.card__name');
  cardImg.src = link;
  cardImg.alt = name;
  cardName.textContent = name;

  // удаление карточки
  card.querySelector('.card__delete').addEventListener('click', (evt) => {
    evt.target.closest('.card').remove();
  });

  // лайк
  card.querySelector('.card__like-button').addEventListener('click', (evt) => {
    evt.target.classList.toggle('card__like-button_active');
  });

  // открытие попапа с картинкой
  cardImg.addEventListener('click', () => {
    popupImg.src = link;
    popupImg.alt = name;
    popupText.textContent = name;
    openPopup(popupBigImg);
  });

  return card;
}

const cardsContainer = document.querySelector('.cards__list');
cardsContainer.append(
  ...initialCards.map((card) => addCard(card.name, card.link))
);






// Поап добавления карточек
const popupAddCard = document.querySelector('.popup_type_add-card');
const openPopupAddCard = document.querySelector('.profile__add-button');
const closePopupAddCard = popupAddCard.querySelector('.popup__close');
const inputCardName = popupAddCard.querySelector('.popup__input_form_card-name');
const inputCardlink = popupAddCard.querySelector('.popup__input_form_card-link');

openPopupAddCard.addEventListener('click', () => {
  openPopup(popupAddCard);
});

closePopupAddCard.addEventListener('click', () => {
  formCard.reset();
  closePopup(popupAddCard);
})

const formCard = popupAddCard.querySelector('.popup__form');
const handleFormCardSubmit = (evt) => {
  evt.preventDefault();
  cardsContainer.prepend(addCard(inputCardName.value, inputCardlink.value));
  formCard.reset();
  closePopup(popupAddCard);
}

formCard.addEventListener('submit', handleFormCardSubmit);

// Поап редактирование профиля
const popupProfileEdit = document.querySelector('.popup_type_profile');
const openPopupProfileEditBtn = document.querySelector('.profile__edit-button');
const closePopupProfileEditBtn = popupProfileEdit.querySelector('.popup__close');
const inputUserName = popupProfileEdit.querySelector('.popup__input_form_user-name');
const inputUserJob = document.querySelector('.popup__input_form_user-job');
const nameProfile = document.querySelector('.profile__name');
const jobProfile = document.querySelector('.profile__job');
const formProfile = popupProfileEdit.querySelector('.popup__form')

openPopupProfileEditBtn.addEventListener('click', () => {
  openPopup(popupProfileEdit);
  inputUserName.value = nameProfile.textContent;
  inputUserJob.value = jobProfile.textContent;
})
closePopupProfileEditBtn.addEventListener('click', () => {
  closePopup(popupProfileEdit);
})

const handleFormProfileSubmit = (evt) => {
  evt.preventDefault();
  nameProfile.textContent = inputUserName.value;
  jobProfile.textContent = inputUserJob.value;
  closePopup(popupProfileEdit);
}

formProfile.addEventListener('submit', handleFormProfileSubmit);


// Закрытие попапа нажатием Esc
document.addEventListener('keydown', function (evt) {
  if (evt.key === 'Escape') {
    const popupActive = document.querySelector('.popup_opened');
    formCard.reset();
    closePopup(popupActive);
  }
});
// Закрытие попапа кликом на оверлей
window.addEventListener('click', function (evt) {
  const popupActive = document.querySelector('.popup_opened');
  if (evt.target == popupActive) {
    formCard.reset();
    closePopup(popupActive);
  }
})
