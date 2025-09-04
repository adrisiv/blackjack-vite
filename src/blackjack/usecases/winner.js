import { isArray } from "underscore";

/**
 * This function determinate the winner 
 * @param {Array<String>} playersPoints This array is for the number of players in the game.
 */


export const winner = ( playersPoints ) => {
    
    if ( !playersPoints || !isArray(playersPoints) ) throw new Error('There are not enough players.')

    const [minimumPoints, aiPoints] = playersPoints;

    setTimeout( () => {

        if ( aiPoints === minimumPoints ) {
            alert('Draw!');
        } else if ( minimumPoints > 21 ) {
            alert('AI wins!');
        } else if (aiPoints > 21 ) {
            alert('You win!');
        } else {
            alert('AI wins');
        };

    }, 100);
};