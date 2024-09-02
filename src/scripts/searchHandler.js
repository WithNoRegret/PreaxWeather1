const setupSearch = () => {
  const searchForm = document.querySelector('#city-search-form');
  const searchInput = document.querySelector('#city-search-input');

  searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(searchInput.value);
    searchInput.value = '';
  });
};

export default setupSearch;
