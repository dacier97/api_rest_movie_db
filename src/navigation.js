searchFormBtn.addEventListener('click',()=>{

  location.hash = '#search=' + searchFormInput.value;
});
trendingBtn.addEventListener('click',()=>{

  location.hash = '#trends=';
})

arrowBtn.addEventListener('click',()=>{

  history.back();

  //location.hash = '#home';
})



window.addEventListener('DOMContentLoaded',navigator,false);
window.addEventListener('hashchange',navigator,false);

function navigator(){

  console.log({location})

  if(location.hash.startsWith('#trends')){

    trendsPage();

  }else if(location.hash.startsWith('#search')){

    searchPage();
    
  }else if(location.hash.startsWith('#movie')){

    movieDetailsPage();
    
  }else if(location.hash.startsWith('#category')){

    categoryPage();

  }else{
    
    homePage();
    
  }
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function trendsPage(){

  console.log('trends!!')

  headerSection.classList.remove('header-container--long');
  headerSection.style.background = '';
  arrowBtn.classList.remove('inactive');
  arrowBtn.classList.remove('header-arrow--white')
  headerTitle.classList.add('inactive');
  headerCategoryTitle.classList.remove('inactive');
  searchForm.classList.add('inactive');

  trendingPreviewSection.classList.add('inactive');
  categoriesPreviewSection.classList.add('inactive');
  genericSection.classList.remove('inactive');
  movieDetailSection.classList.add('inactive');

  headerCategoryTitle.innerHTML = 'Tendencias';

  getTrendingMovies()
}
function  searchPage(){

  console.log('search!!')

  headerSection.classList.remove('header-container--long');
  headerSection.style.background = '';
  arrowBtn.classList.remove('inactive');
  arrowBtn.classList.remove('header-arrow--white')
  headerTitle.classList.add('inactive');
  headerCategoryTitle.classList.add('inactive');
  searchForm.classList.remove('inactive');

  trendingPreviewSection.classList.add('inactive');
  categoriesPreviewSection.classList.add('inactive');
  genericSection.classList.remove('inactive');
  movieDetailSection.classList.add('inactive');

  //['#search','lo buscado']

  const [_,query] = location.hash.split('=');
  getMoviesBySearch(query);

}
function  movieDetailsPage(){

  console.log('movie!!')

  headerSection.classList.add('header-container--long');
  //headerSection.style.background = '';
  arrowBtn.classList.remove('inactive');
  arrowBtn.classList.add('header-arrow--white')
  headerTitle.classList.add('inactive');
  headerCategoryTitle.classList.add('inactive');
  searchForm.classList.add('inactive');

  trendingPreviewSection.classList.add('inactive');
  categoriesPreviewSection.classList.add('inactive');
  genericSection.classList.add('inactive');
  movieDetailSection.classList.remove('inactive');

  //['#movie','id movie']

  const [_,movieId] = location.hash.split('=');
  getMovieById(movieId);

}
function  categoryPage(){

  console.log('category!!')

  headerSection.classList.remove('header-container--long');
  headerSection.style.background = '';
  arrowBtn.classList.remove('inactive');
  arrowBtn.classList.remove('header-arrow--white')
  headerTitle.classList.add('inactive');
  headerCategoryTitle.classList.remove('inactive');
  searchForm.classList.add('inactive');

  trendingPreviewSection.classList.add('inactive');
  categoriesPreviewSection.classList.add('inactive');
  genericSection.classList.remove('inactive');
  movieDetailSection.classList.add('inactive');

  //['#category','id-name']

  const [_,category_data] = location.hash.split('=');
  const [category_id,category_name] = category_data.split('-');

  headerCategoryTitle.innerHTML = category_name
  getMoviesByCategory(category_id);

}
function  homePage(){

    headerSection.classList.remove('header-container--long');
    headerSection.style.background = '';
    arrowBtn.classList.add('inactive');
    arrowBtn.classList.remove('header-arrow--white')
    headerTitle.classList.remove('inactive');
    headerCategoryTitle.classList.add('inactive');
    searchForm.classList.remove('inactive');

    trendingPreviewSection.classList.remove('inactive');
    categoriesPreviewSection.classList.remove('inactive');
    genericSection.classList.add('inactive');
    movieDetailSection.classList.add('inactive');

    getTrendingMoviesPreview();
    getCategoriesMoviesPreview();
}