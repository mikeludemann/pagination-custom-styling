const container = document.querySelector('.container');
const indexAll = Array.from(document.querySelectorAll('.index'));

let currentPosition = -1;

indexAll.forEach((index, i) => {

	index.addEventListener('click', (e) => {

    container.className = 'container';
    
    void container.offsetWidth;
    
		container.classList.add('open');
    container.classList.add(`element--${i + 1}`);
    
		if (currentPosition > i) {
			container.classList.add('flip');
    }
    
    currentPosition = i
    
  });
  
});