let val;

val = document.querySelectorAll('li');

const oddLi = document.querySelectorAll('li:nth-child(odd)');

const evenLi = document.querySelectorAll('li:nth-child(even)');

//document.querySelector('li:nth-child(odd)').style.background = 'black';
// document.querySelector('li:nth-child(odd)').style.background = 'black';

document.querySelector('body').style.background = 'gray';

// document.querySelector('li:nth-child(even)').style.background = 'white';

oddLi.forEach(function(li){
	 console.log(li); // võib asendada ka muu tegevusega
	 li.style.background = 'gray';
})

for(let i = 0;i <= evenLi.length; i++ ){
	 evenLi[i].style.background = "#f4f4f4";
}

// console.log(oddLi);