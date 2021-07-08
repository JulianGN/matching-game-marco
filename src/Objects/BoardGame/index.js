// Objects são componentes estruturais

import CardGame from "../../components/CardGame";

export default function BoardGame(amountCards){
    // const cards = [];
    // while(amountCards > cards.length){
    //     cards.push(CardGame());
    // }
    const $htmlBoardGame = CardGame().repeat(amountCards)

    return /*html*/`
        ${$htmlBoardGame}
    `
}