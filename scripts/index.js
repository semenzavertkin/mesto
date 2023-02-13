// Открытие попапа
const openPopup = (popupElement) => {
  popupElement.classList.add('popup_opened');
}

// Закртыие попапа
const сlosePopup = (popupElement) => {
  popupElement.classList.remove('popup_opened');
}

// 6 карточек при открытие
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

// // Попап с картинкой
const popupBigImg = document.querySelector(".popup__big-img");
const popupImg = popupBigImg.querySelector(".popup__img");
const popupText = popupBigImg.querySelector(".popup__text");
const closePopupBigImg = popupBigImg.querySelector(".popup__close_img");
closePopupBigImg.addEventListener('click', () => {
  сlosePopup(popupBigImg);
})


const cardTemplate = document.querySelector('#card-template').content;
const addCard = (name, link) => {
  const card = cardTemplate.cloneNode(true);
  card.querySelector('.card__img').src = link;
  card.querySelector('.card__img').alt = name;
  card.querySelector('.card__name').textContent = name;

  // удаление карточки
  card.querySelector('.card__delete').addEventListener('click', (evt) => {
    evt.target.closest('.card').remove();
  });

  // лайк
  card.querySelector('.card__like-button').addEventListener('click', (evt) => {
    evt.target.classList.toggle('card__like-button_active');
  });

  // открытие попапа с картинкой
  card.querySelector(".card__img").addEventListener("click", (evt) => {
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
const popupAddCard = document.querySelector('.popup__add-card');
const openPopupAddCard = document.querySelector('.profile__add-button');
const closePopupAddCard = document.querySelector('.popup__close_add-card');
const inputCardName = popupAddCard.querySelector('.popup__input_form_card-name');
const inputCardlink = popupAddCard.querySelector('.popup__input_form_card-link');

openPopupAddCard.addEventListener('click', () => {
  openPopup(popupAddCard);
});

closePopupAddCard.addEventListener('click', () => {
  сlosePopup(popupAddCard);
})

const formCard = document.querySelector('.popup__form_add-card');
const handleFormCardSubmit = (evt) => {
  evt.preventDefault();
  cardsContainer.prepend(addCard(inputCardName.value, inputCardlink.value));
  formCard.reset();
  сlosePopup(popupAddCard);
}

formCard.addEventListener('submit', handleFormCardSubmit);

// Поап редактирование профиля
const popupProfileEdit = document.querySelector('.popup__profile-edit');
const openPopupProfileEdit = document.querySelector('.profile__edit-button');
const closePopupProfileEdit = document.querySelector('.popup__close_profile-edit');
const inputUserName = popupProfileEdit.querySelector('.popup__input_form_user-name');
const inputUserJob = document.querySelector('.popup__input_form_user-job');
const nameProfile = document.querySelector('.profile__name');
const jobProfile = document.querySelector('.profile__job');
const formProfile = document.querySelector('.popup__form_profile-edit')

openPopupProfileEdit.addEventListener('click', () => {
  openPopup(popupProfileEdit);
  inputUserName.value = nameProfile.textContent;
  inputUserJob.value = jobProfile.textContent;
})
closePopupProfileEdit.addEventListener('click', () => {
  сlosePopup(popupProfileEdit);
})

const handleFormProfileSubmit = (evt) => {
  evt.preventDefault();
  nameProfile.textContent = inputUserName.value;
  jobProfile.textContent = inputUserJob.value;
  сlosePopup(popupProfileEdit);
}

formProfile.addEventListener('submit', handleFormProfileSubmit);





