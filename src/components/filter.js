import {getFilterButtonTemplate} from './filter-button';

export const getFilterTemplate = (filters) => {
  return (
    `<section class="main__filter filter container">
      ${filters.reduce((template, filter) => template + getFilterButtonTemplate(filter), ``)}
    </section>`
  );
};
