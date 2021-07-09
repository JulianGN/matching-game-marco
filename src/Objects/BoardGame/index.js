// Objects são componentes estruturais
import './style.css'
import CardGame from "../../components/CardGame";

export default function BoardGame(amountCards){
    // const cards = [];
    // while(amountCards > cards.length){
    //     cards.push(CardGame());
    // }
    const $htmlBoardGame = CardGame().repeat(amountCards)

    return /*html*/`
    <section class="board-game">
        ${$htmlBoardGame}
    </section>
    `
}