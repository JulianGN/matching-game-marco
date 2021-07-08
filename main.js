import './src/styles/settings/colors.css'; // estrutura de pastas do itcss (settings, etc: https://developer.helpscout.com/seed/glossary/itcss/)
import './src/styles/generic/reset.css'; // reset padrão do Eric Meyers
import './src/styles/elements/base.css';

import BoardGame from './src/Objects/BoardGame';
import PlayerTitle from './src/components/PlayersTitle';

const $root = document.querySelector('#root');
const $board = BoardGame();
const $players = PlayerTitle(1) + PlayerTitle(2);

$root.insertAdjacentHTML('beforebegin',$players);

$root.insertAdjacentHTML('afterbegin',$board);

const cards = document.querySelectorAll('.card');

cards.forEach((card) => {
    card.addEventListener('click',() => {
        card.classList.toggle('active')
    })
})