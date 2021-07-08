// Objects são componentes estruturais

import CardGame from "../../components/CardGame";

export default function BoardGame(){
    const amountCards = 6;
    const cards = [];
    while(amountCards > cards.length){
        cards.push(CardGame());
    }
    const $htmlBoardGame = cards.join('');

    return /*html*/`
        ${$htmlBoardGame}
    `
}