/**
 * This functions allows to ask for a new card.
 * @param {Array<String>} deck is an array of Strings
 * @returns {String} Return last deck card.
 */
export const newCard = (deck) => {
    
    if (!deck || deck.length === 0) {
        throw 'There are no more cards';
    } else {
        return deck.pop();   
    }

};