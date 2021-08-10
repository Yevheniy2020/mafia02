"use strict";


let counterArray = 0;
let allPlayer = 1;
const pics = [
    'https://paramartha.ru/wp-content/uploads/sonnik-ezhik.jpg',
    'https://img1.liveinternet.ru/images/attach/c/7/94/675/94675753_ezhik_prikolnuyy.jpg',
    'https://ziva-club.ru/wp-content/uploads/2019/03/%D0%B5%D0%B6%D0%B8%D0%BA.jpg',
    'https://cs9.pikabu.ru/post_img/2016/09/24/4/1474695850179867159.jpg',
    'https://mmaoctagon.ru/wp-content/uploads/iblock/1fd/57c9b683a68e1.png',
    'https://st4.depositphotos.com/4350129/23938/i/600/depositphotos_239381082-stock-photo-little-cartoon-hedgehog.jpg'
];



const
    label = document.querySelector('label'),
    btnPlay = document.querySelector('.play-link'),
    play = document.querySelector('.begin-link'),
    btnRole = document.querySelector('.btn-role'),
    btnBack = document.querySelector('.btn-back'),
    imgRole = document.querySelector('.game-info__img'),
    inputPlayer = document.querySelector('.input-p'),
    inputMafia = document.querySelector('.input-m'),
    inputDoctor = document.querySelector('.input-d'),
    inputSheriff = document.querySelector('.input-s');

let arrayMafia = [],
    arrayDoctor = [],
    arraySheriff = [],
    arrayPlayer = [],
    arrayAll = [],
    arrayResult = [];



function shuffleArray(array) {

    const data = array.slice();
    for (let i = data.length - 1; i > 0; i--) {

        const j = Math.floor(Math.random() * (i + 1));

        [data[i], data[j]] = [data[j], data[i]];
    }

    return data;

}


play.addEventListener('click', function (e) {

    e.preventDefault();



    document.querySelector('.begin').classList.add('begin-active');
    for (let i = 0; i < inputMafia.value; i++) {
        arrayMafia[i] = 'mafia';
    }
    for (let i = 0; i < inputDoctor.value; i++) {
        arrayDoctor[i] = 'doctor';
    }
    for (let i = 0; i < inputSheriff.value; i++) {
        arraySheriff[i] = 'sheriff';
    }
    for (let i = 0; i < inputPlayer.value; i++) {
        arrayPlayer[i] = 'player';
    }
    arrayAll = [...arrayMafia, ...arrayDoctor, ...arraySheriff, ...arrayPlayer];

    arrayResult = shuffleArray(arrayAll);

    counterArray = 0;
});


btnPlay.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('.play').classList.add('play-active');

});



btnRole.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('.game-info__text').textContent = `You ${arrayResult[counterArray]}`;

    if (allPlayer > arrayAll.length) {
        btnRole.removeEventListener('click');
    } else {
        document.querySelector('.counter-player').textContent = `${allPlayer}/${arrayAll.length}`;
    }


    if (arrayResult[counterArray] == "mafia") {
        imgRole.style.background = `url('${pics[3]}') no-repeat 50% / cover`;
    } else if (arrayResult[counterArray] == "doctor") {
        imgRole.style.background = `url('${pics[1]}') no-repeat 50% / cover`;
    } else if (arrayResult[counterArray] == "sheriff") {
        imgRole.style.background = `url('${pics[0]}') no-repeat 50% / cover`;
    } else if (arrayResult[counterArray] == "player") {
        imgRole.style.background = `url('${pics[2]}') no-repeat 50% / cover`;
    } else {
        document.querySelector('.game-info__text').textContent = `no more roles`;
        imgRole.style.background = `url('${pics[5]}') no-repeat 50% / cover`;
    }
    allPlayer++;
    counterArray++;


});

btnBack.addEventListener('click', function (e) {

    e.preventDefault();

    imgRole.style.background = `url('${pics[4]}') no-repeat 50% / cover`;
    document.querySelector('.game-info__text').textContent = "";
});