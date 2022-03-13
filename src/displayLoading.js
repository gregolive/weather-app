import Loading from './loading.gif';

const displayLoading = () => {
  const wrapper = document.querySelector('.results-wrapper');
  const info = document.querySelector('.results-info');
  const img = document.createElement('img');

  img.src = Loading;
  img.alt = 'loading';
  info.textContent = '';
  wrapper.textContent = '';
  wrapper.appendChild(img);
};

export default displayLoading;
