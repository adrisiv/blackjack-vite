import _ from 'underscore';
import { createDeck, newCard, cardValue, winner, createCard } from "./usecases";
'use strict'


// HTML references

const btnAsk            = document.querySelector('#btn-ask-card'),
        btnStop           = document.querySelector('#btn-stop-game'),
        btnNew            = document.querySelector('#btn-new-game');

const cardDivs          = document.querySelectorAll('.card-divs'),
        smalls            = document.querySelectorAll('small');

let deck            = [];
const types         = ['C', 'D', 'H', 'S'],
    especial        = ['A', 'J', 'Q', 'K'];

let playersPoints   = [];

// This function starts the game 
const startGame = ( numOfPlayers = 2) => {
    
    deck = createDeck(types, especial);
    playersPoints = [];

    for( let i = 0; i < numOfPlayers; i++ ) {
        playersPoints.push(0);
    }

    smalls.forEach( elem => elem.innerText = 0);
    cardDivs.forEach( elem => elem.innerHTML = '');

    btnAsk.disabled = false;
    btnStop.disabled = false;
};   


const pointsCounter = ( card, turn ) => {
    
    playersPoints[turn] = playersPoints[turn] + cardValue( card );
    smalls[turn].innerText = playersPoints[turn];
    return playersPoints[turn];

};

// IA turn

const aiTurn = ( minimumPoints ) => {
    
    let aiPoints = 0;

    do {

        const card = newCard(deck);
        aiPoints = pointsCounter(card, playersPoints.length - 1);
        createCard(cardDivs, card, playersPoints.length -1 );

        if ( minimumPoints > 21 ) {
            break;
        }

    } while( (aiPoints < minimumPoints) && (minimumPoints <= 21) );

    winner( playersPoints );

};

// Events 

btnAsk.addEventListener('click', () => {

    const card = newCard(deck);
    const playerPoints = pointsCounter(card, 0);
    createCard(cardDivs, card, 0);


    if ( playerPoints > 21 ) {
        btnAsk.disabled = true;
        btnStop.disabled = true;
        aiTurn( playerPoints );
    } else if ( playerPoints === 21 ) {
        btnAsk.disabled = true;
        btnStop.disabled = true;
        aiTurn( playerPoints );
    }
});

btnStop.addEventListener('click', () => {
    btnAsk.disabled = true;
    btnStop.disabled = true;

    aiTurn( playersPoints[0] );

});

btnNew.addEventListener('click', () => {
    startGame();
});


