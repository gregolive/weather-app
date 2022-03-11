import { celciusToF, fahrenheitToC } from './convert';

/* eslint no-param-reassign: ["error", { "props": false }] */

const updateTemp = (toggle, node, temp) => {
  if (toggle === false) {
    const newTemp = fahrenheitToC(temp);
    node.textContent = node.textContent.replace(`${temp}°F`, `${newTemp}°C`);
  } else {
    const newTemp = celciusToF(temp);
    node.textContent = node.textContent.replace(`${temp}°C`, `${newTemp}°F`);
  }
};

const updateData = (toggle, card, targetClass) => {
  const desc = card.querySelector(targetClass);
  const temp = desc.textContent.replace(/[^0-9]/g, '');

  updateTemp(toggle, desc, temp);
};

const updateSearch = (toggle, cards) => {
  cards.forEach((card) => {
    updateData(toggle, card, '.weather-description');
    updateData(toggle, card, '.temperature');
  });
};

export default updateSearch;
