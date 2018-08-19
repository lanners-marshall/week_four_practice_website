TweenMax.staggerFrom(".slide", 0.5, {x:-900, rotation:360}, -0.2);

class Carousel {
	constructor(bar){
		this.bar = bar;
		this.pic = this.bar.querySelectorAll('.banner');
		this.buttons = this.bar.querySelectorAll('.btn');
		let picAr = Array.from(this.pic);
		picAr[0].classList.add('current-img');
		let divNum = document.querySelector('.pic-num');
		divNum.innerText = `Pic Number 1`;
		let btnAr = Array.from(this.buttons);
		btnAr[0].addEventListener('click', () => {this.left(picAr, divNum) });
		btnAr[1].addEventListener('click', () => {this.right(picAr, divNum) });
		
	}
	left(picAr, divNum){
		let index;

		//this gets the current index when button is clicked
		//based on the current-image class
		for(let i = 0; i < picAr.length; i++){
			if(picAr[i].classList.value.indexOf('current-img') !== -1){
				index = picAr.indexOf(picAr[i]);
			}
		}

		if (index === 0) {
			divNum.innerText = 'pic Number: 6';
		} else {
			divNum.innerText = `pic Number: ${index}`;
		}

		console.log(index)

		if (index === 0){
			TweenMax.to(picAr[index], 0, {
			onComplete:changeClasses, 
			onCompleteParams: [picAr[index], picAr[5]]
			})

		} else {
			TweenMax.to(picAr[index], 0, {
			onComplete:changeClasses, 
			onCompleteParams: [picAr[index], picAr[index - 1]]
			})

		}
		function changeClasses(currentPic, nextPic){
			currentPic.classList.remove('current-img');
			nextPic.classList.add('current-img');
			TweenMax.from(nextPic, 2.5, {opacity: 0.8, x:100, rotation:5});
		}
	};
	right(picAr, divNum){
		let index;

		//this gets the current index when button is clicked
		//based on the current-image class
		for(let i = 0; i < picAr.length; i++){
			if(picAr[i].classList.value.indexOf('current-img') !== -1){
				index = picAr.indexOf(picAr[i]);
			}
		}

		if (index === 5) {
			divNum.innerText = 'pic Number: 1';
		} else {
			divNum.innerText = `pic Number: ${index + 2}`;
		}

		if (index === 5){
			TweenMax.to(picAr[index], 0, {
			onComplete:changeClasses, 
			onCompleteParams: [picAr[index], picAr[0]]
			});

		} else {
			TweenMax.to(picAr[index], 0, {
			onComplete:changeClasses, 
			onCompleteParams: [picAr[index], picAr[index + 1]]
			})
		}
		function changeClasses(currentPic, nextPic){
			currentPic.classList.remove('current-img');
			nextPic.classList.add('current-img');
			TweenMax.from(nextPic, 2.5, {opacity: .8, x:-100, rotation: -5});
		}
	}
}


let carousel = document.querySelectorAll('.slider-bar');
carousel = Array.from(carousel).map(pic => new Carousel(pic));


class TreeLink {
	constructor(tab){
		this.tab = tab;
		this.treeData = this.tab.dataset.tree;
		tab.addEventListener('click', () => {this.selectTrees(this.treeData)});

		let treeInfo = document.querySelectorAll('.tree-info');
	}

	selectTrees(treeData){

		console.log(treeData);

		let remove = document.querySelectorAll('.tree-section .trees');
		remove.forEach(function(item){
			item.classList.remove("show-trees");
		});

		let removeInfo = document.querySelectorAll('.tree-info');
		removeInfo.forEach(function(item){
			item.classList.remove('add-tree-info');
		});
		
		if (treeData === "all"){
			let toAdd = document.querySelectorAll('.tree-section .trees');
			toAdd.forEach(function(item){
				item.classList.add("show-trees");
			});

			let removeColor = document.querySelectorAll('.tree-section');
			removeColor.forEach(function(item){
				item.style.backgroundColor = 'white';
			})

			TweenMax.from(".show-trees", 1.5, {opacity: .8, rotation: 90, x:-100, scale: 1.5});
		} else {
			let toAdd = document.querySelectorAll(`.tree-section[data-tree="${treeData}"] .trees`);

			let addColor = document.querySelector(`.tree-section[data-tree="${treeData}"]`);

			toAdd.forEach(function(item) {
				item.classList.add("show-trees");
				switch(treeData){
					case "apple":
						addColor.style.backgroundColor = '#ffd0d0';
					break;
					case "maple":
						addColor.style.backgroundColor = '#ffeaaf';
					break;
					case "oak":
						addColor.style.backgroundColor = '#cdffbd';
					break;
				}
			});

			let addInfo = document.querySelectorAll(`.tree-info[data-tree="${treeData}"]`);

			addInfo.forEach(function(item) {
				item.classList.add('add-tree-info');

				switch(treeData){
					case "apple":
						item.style.backgroundColor = '#ffd0d0';
					break;
					case "maple":
						item.style.backgroundColor = '#ffeaaf';
					break;
				}

			});

			TweenMax.staggerFrom(".show-trees", 1.5, {opacity: .8, rotation: 90, x:-100, scale: 1.5}, 0.2);
		}
	}
}


let treeTabs = document.querySelectorAll('.tab');
treeTabs = Array.from(treeTabs).map(tab => new TreeLink(tab));

treeTabs[0].selectTrees(treeTabs[0].treeData);















