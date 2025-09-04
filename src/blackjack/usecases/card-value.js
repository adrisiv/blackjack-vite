/**
 * This function obtains the card value.
 * @param {String} card 
 * @returns {Number} is the value of the card.
 */

export const cardValue = ( card ) => {
    
    const value = card.substring(0, card.length - 1);

    if( isNaN(value)) {
        return card = (value === 'A' ? 11 : 10);
    } else {
        return card = value * 1;
    }

};