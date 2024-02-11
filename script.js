// Read More button functionality

const readMore = document.querySelector('#read-more');
const readMoreImg = document.querySelector('#read-more img');
const hiddenTextList = document.getElementsByClassName('hidden-text');

readMore.addEventListener('click', () => {
  console.log('clicked');

  for (let i = 0; i < hiddenTextList.length; i++) {
    const hiddenText = hiddenTextList[i];
    const readMoreImg = document.querySelector('#read-more img');

    if (
      hiddenText &&
      (hiddenText.style.display === 'none' || hiddenText.style.display === '')
    ) {
      hiddenText.style.display = 'block';
      readMore.innerHTML = '<img src="ic/arrow-up.svg" alt="">Скрыть';
      readMore.style.marginTop = '10px';
    } else {
      hiddenText.style.display = 'none';
      readMore.innerHTML = '<img src="ic/arrow-down.svg" alt="">Читать далее';
      readMore.style.marginTop = '0px';
    }
  }
});

// Show More Brands button functionality

let showMoreBrandsBtn = document.querySelector('.show-all-brands');
const brandsList = document.querySelectorAll(
  '.brands__logos__hidden__container div'
);
let isClickedBtn = true;

let showMoreBrands = function () {
  if (isClickedBtn) {
    brandsList.forEach(function (brand) {
      brand.style.display = 'flex';
      brand.style.marginTop = '20px';
      showMoreBrandsBtn.style.marginTop = '-10px';
      showMoreBrandsBtn.innerHTML = '<img src="ic/arrow-up.svg" alt="">Скрыть';
    });
    isClickedBtn = false;
  } else {
    brandsList.forEach(function (brand) {
      brand.style.display = 'none';
      showMoreBrandsBtn.style.marginTop = '10px';
      showMoreBrandsBtn.innerHTML =
        '<img src="ic/arrow-down.svg" alt="">Показать все';
    });
    isClickedBtn = true;
  }
};

// Show More Devices button functionality

let showMoreDevicesBtn = document.querySelector('.show-all-devices');
const devicesList = document.querySelectorAll('.devices__boxes__hidden');
let isClicked = true;

let showMoreDevices = function () {
  if (isClicked) {
    devicesList.forEach(function (device) {
      device.style.display = 'flex';
      device.style.marginTop = '20px';
      showMoreDevicesBtn.innerHTML = '<img src="ic/arrow-up.svg" alt="">Скрыть';
    });
    isClicked = false;
  } else {
    devicesList.forEach(function (device) {
      device.style.display = 'none';
      showMoreDevicesBtn.innerHTML =
        '<img src="ic/arrow-down.svg" alt="">Показать все';
    });
    isClicked = true;
  }
};

window.onload = function () {
  devicesList.forEach(function (device) {
    device.style.display = 'none';
  });
};

// Open menu functionality (phone) & (tablet)

const openMenuBtn = document.querySelector('.header__white__left-burger');
const closeMenuBtn = document.querySelector('.close-burger');
const menuWrapper = document.querySelector('.sidebar-wrapper');
const menu = document.querySelector('.sidebar');
const main = document.querySelector('main');
const shadow = document.querySelector('.sidebar-wrapper > div');

openMenuBtn.addEventListener('click', () => {
  menu.style.display = 'block';
  menuWrapper.style.display = 'block';
  shadow.style.display = 'block';
  main.style.display = 'block';
});

closeMenuBtn.addEventListener('click', () => {
  menu.style.display = 'none';
  menuWrapper.style.display = 'none';
  main.style.display = 'block';
});
