{
'use strict';


function titleClickHandler(event){
  event.preventDefault();
  const clickedElement = this;

  /* remove class 'active' from all article links  */

  const activeLinks = document.querySelectorAll('.titles a.active');

   for(let activeLink of activeLinks){
   activeLink.classList.remove('active');
}

  /* add class 'active' to the clicked link */

  clickedElement.classList.add('active');

  /* remove class 'active' from all articles */

  const activeArticles = document.querySelectorAll('.post');

   for(let activeArticle of activeArticles){
   activeArticle.classList.remove('active');
}

  /* get 'href' attribute from the clicked link */
  
  const articleSelector = clickedElement.getAttribute('href');

  /* find the correct article using the selector (value of 'href' attribute) */

  const targetArticle = document.querySelector(articleSelector);

  /* add class 'active' to the correct article */

  targetArticle.classList.add('active');
}

const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles';

function generateTitleLinks(){

  /* remove contents of titleList */

  const titleList = document.querySelector(optTitleListSelector);
   titleList.innerHTML = '';

  /* for each article */

  const articles = document.querySelectorAll(optArticleSelector);

  let html = '';

   for(let article of articles) {

    /* get the article id */

    const articleId = article.getAttribute('id');

    /* find the title element and get the tittle form the tittle element */

    const articleTitle = article.querySelector(optTitleSelector).innerHTML;

    /* create HTML of the link */

    const linkHTML = '<li><a href="#' + articleId + '"><span>'+ articleTitle +'</span></a></li>';

    /* insert link into titleList */

    html = html + linkHTML;
    
   }

   titleList.innerHTML = html;

   const links = document.querySelectorAll('.titles a');

   for(let link of links){
    link.addEventListener('click', titleClickHandler);
   }

  }

generateTitleLinks();
}