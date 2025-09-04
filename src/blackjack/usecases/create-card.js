/**
 * This function creates a new HTML Div tag.
 * @param {NodeListOf<Element>} cardDivs is an HTML tag.
 * @param {String} card Is a string with the picked card.
 * @param {Array<Number>} turn This pick the player.
 */

export const createCard = ( cardDivs, card, turn ) => {

    const cardImg = document.createElement('img');
    cardImg.src = `assets/cards/${card}.png`;
    cardImg.classList.add('cards');
    cardDivs[turn].append(cardImg);

}