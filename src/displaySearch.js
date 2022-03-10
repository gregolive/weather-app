const updateResultsInfo = (query, results) => {
  const info = document.querySelector('.results-info');
  if (results.cod === '404') {
    info.textContent = `0 search results for ${query}`;
  } else {
    info.textContent = `1 search result for ${query}`;
  }
};

const cardHeading = (city, country) => {
  const heading = document.createElement('h2');
  heading.textContent = `${city}, ${country}`;

  return heading;
};

const displayCard = (results) => {
  const card = document.createElement('article');
  card.className = 'results-card';
  card.appendChild(cardHeading(results.name, results.sys.country));

  return card;
};

const displaySearch = (query, results) => {
  console.log(results);
  updateResultsInfo(query, results);
  if (results.cod !== '404') {
    const wrapper = document.querySelector('.results-wrapper');
    wrapper.appendChild(displayCard(results));
  }
};

export default displaySearch;
