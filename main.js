import './src/styles/settings/colors.css'; // estrutura de pastas do itcss (settings, etc: https://developer.helpscout.com/seed/glossary/itcss/)
import './src/styles/generic/reset.css'; // reset padrão do Eric Meyers
import './src/styles/elements/base.css';

import BoardGame from './src/Objects/BoardGame';
import PlayerName from './src/components/PlayerName';

const $root = document.querySelector('#root');
const $board = BoardGame(6);
const $htmlPlayerName = PlayerName('Player 1') + PlayerName('Player 2');

$root.insertAdjacentHTML('beforebegin',$htmlPlayerName);

$root.insertAdjacentHTML('afterbegin',$board);

const cards = document.querySelectorAll('.card');

cards.forEach((card) => {
    card.addEventListener('click',() => {
        card.classList.toggle('active')
    })
})