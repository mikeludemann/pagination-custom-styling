var allButton = document.querySelectorAll('.btn'),
paginationWrapper = document.querySelector('.pagination--wrapper'),
bigDot = document.querySelector('.big--dot--container'),
littleDot = document.querySelector('.little--dot');

for(var i = 0; i < allButton.length; i++) {

  allButton[i].addEventListener('click', paginationClick);
  
}

function paginationClick() {

	if(this.classList.contains('btn--prev')) {

    paginationWrapper.classList.add('transition-prev');
    
	} else {

    paginationWrapper.classList.add('transition-next'); 
    
	}

  var timeout = setTimeout(updateAnimation, 500);
  
}

function updateAnimation() {

	if(paginationWrapper.classList.contains('transition-next')) {

    paginationWrapper.classList.remove('transition-next');
    
	} else if(paginationWrapper.classList.contains('transition-prev')) {

    paginationWrapper.classList.remove('transition-prev');
    
  }
  
}
