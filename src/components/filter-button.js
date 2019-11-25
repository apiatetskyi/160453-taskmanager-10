export const getFilterButtonTemplate = (filter) => {
  return (
    `<input
      type="radio"
      id="${filter.id}"
      class="filter__input visually-hidden"
      name="filter"
      ${filter.isChecked ? `checked` : ``}
      ${filter.isDisabled ? `disabled` : ``}
    />
    <label for="${filter.id}" class="filter__label">
      ${filter.label} <span class="filter__all-count">${filter.value}</span></label
    >`
  );
};
