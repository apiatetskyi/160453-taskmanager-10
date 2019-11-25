export const getRandomNumber = (max = 10) => Math.round(Math.random() * max);

export const render = (container, template) => {
  const fragment = document.createRange().createContextualFragment(template);
  container.appendChild(fragment);
};
