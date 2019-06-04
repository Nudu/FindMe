'use strict'


const horoBluff = {
    bluff1: 'todays your chance to stand up to family members who want to exert too much control over your love life Its time to bang your fist on the table and say,Enoughs enough, Ill love who I want to. When you insist that well-meaning relatives respect your choices, youll tap into a new well of self-respect.',
    bluff2: 'Do you feel caught between the desire to participate fully in the world and the equally strong desire to remain in your dream world, even at the risk of feeling a little out of it? Who says that these two worlds are incompatible? If you look closely, you will see that you dont need to choose one or the other.',
    bluff3: 'Youre being called upon to make a commitment or promise, most likely relating to your love life. Will you take that decisive step? Thats the question today. Over the next few days you will doubtless have to prove what youre made of. The challenge most likely emanates from your romantic relationships. There is no running away this time, Capricorn. Its time to take a stand.',
}

function init() {
    if (loadFromStorage('ChoosenColor')) {
        $('body').css('background-color', loadFromStorage('ChoosenColor'))
        $('.BGcolor').val(loadFromStorage('ChoosenColor'))
    }
}

function onAgeChange() {
    $('.age-span').text($('.age').val())
}

$('.submit').click(function (event) {
    event.preventDefault()
    var horoscope = getRandomIntInclusive(1, 3)
    $('body').css('background-color', $('.BGcolor').val())
    $('.horoscope').text(horoBluff['bluff' + horoscope])
    saveToStorage('ChoosenColor', ($('.BGcolor').val()))
    saveToStorage('DateBorn', (($('.date').val())))
    saveToStorage('Age', (($('.age').val())))
    saveToStorage('Email', (($('.email').val())))
    saveToStorage('Horoscope', (($('.horoscope').text())))
})



