import _ from 'underscore';

/**
 * This function create a new deck
 * @param {Array<String>} cardTypes ex. ['C', 'D', 'H', 'S']
 * @param {Array<String>} especialTypes ex. ['A', 'J', 'Q', 'K']
 * @returns {Array<String>} It returns a new deck. 
 */

// This function create a new deck
export const createDeck = (cardTypes, especialTypes) => {

    if (!cardTypes || cardTypes.length === 0) throw new Error('cardTypes are mandatory.');
    if (!especialTypes || especialTypes.length === 0) throw new Error('especialTypes are mandatory.');


    let deck = [];
    
    for (let i = 2; i <= 10; i++) {
        for (let type of cardTypes) {
            deck.push(i + type);
        }
    }

    for (let type of cardTypes ) {
        for( let esp of especialTypes) {
            deck.push(esp + type);
        }
    }

    return _.shuffle (deck);
};