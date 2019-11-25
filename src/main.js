import {getBoardTemplate} from './components/board';
import {getFilterTemplate} from './components/filter';
import {getLoadMoreTemplate} from './components/load-more-button';
import {getMenuTemplate} from './components/menu';
import {getTaskTemplate} from './components/task';
import {getTaskEditTemplate} from './components/task-edit';
import {getRandomNumber, render} from './utils';

const TASK_CARDS_AMOUNT = 4;

const mainElement = document.querySelector(`.main`);
const controlsElement = document.querySelector(`.main__control`);
const filterLabels = [`All`, `Overdue`, `Today`, `Favorites`, `Repeating`, `Tags`, `Archive`];


const filters = filterLabels.map((label, index) => ({
  label,
  value: getRandomNumber(),
  id: `filter__${label.toLowerCase()}`,
  isChecked: index === 0,
  get isDisabled() {
    return this.value === 0;
  },
}));

render(controlsElement, getMenuTemplate());
render(mainElement, getFilterTemplate(filters));
render(mainElement, getBoardTemplate());

const boardElement = document.querySelector(`.board`);
const tasksElement = boardElement.querySelector(`.board__tasks`);

new Array(TASK_CARDS_AMOUNT)
  .fill(``)
  .forEach((task, index) => {
    if (index === 0) {
      render(tasksElement, getTaskEditTemplate());
    } else {
      render(tasksElement, getTaskTemplate());
    }
  });

render(boardElement, getLoadMoreTemplate());
