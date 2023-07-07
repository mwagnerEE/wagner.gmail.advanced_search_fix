//Gmail Advanced Search Fix - Swaps the new positions of the 'Create Filter' and 'Search' buttons in Gmail's Advanced Search back to the old way
//Copyright (C) 2023  Mike Wagner
//
//This program is free software: you can redistribute it and/or modify
//it under the terms of the GNU General Public License as published by
//the Free Software Foundation, either version 3 of the License, or
//(at your option) any later version.
//
//This program is distributed in the hope that it will be useful,
//but WITHOUT ANY WARRANTY; without even the implied warranty of
//MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
//GNU General Public License for more details.
//
//You should have received a copy of the GNU General Public License
//along with this program.  If not, see <https://www.gnu.org/licenses/>.


function swapPositions(element1, element2) {
    var copy = element2.cloneNode(true);
    element1.parentNode.insertBefore(copy, element1);
    element2.parentNode.insertBefore(element1, element2);
    element2.parentNode.replaceChild(element2, copy);
}

function swapClasses(element1, element2) {
    let temp = element2.className;
    element2.className = element1.className;
    element1.className = temp;
}

function findFirstChildOfTagThatContainsText(parentElement, tagName, childTextContent){
	let childDivs = parentElement.getElementsByTagName(tagName);
	for (let child of childDivs) {
		if (child.textContent === childTextContent) {
			return child;
		}
	}
	console.log("No matching child element found.");
}

function isElementFirstChild(parentElement, childElement){
	return 
}

function undoGooglesStupidity(){
	let searchAndFilterDivQuery = 'div.w-Nw.boo.bs0';
	let searchAndFilterDiv = document.querySelector(searchAndFilterDivQuery);
	let filterButton = findFirstChildOfTagThatContainsText(searchAndFilterDiv, 'div', 'Create filter');
	let searchButton = findFirstChildOfTagThatContainsText(searchAndFilterDiv, 'div', 'Search');
	
	if(searchAndFilterDiv.children[0] == searchButton){
		return; //Positions already corrected.
	}
	swapPositions(filterButton, searchButton);
	swapClasses(filterButton, searchButton);
}

function onAdvancedFilterButtonClick(mutationsList) {
  for (let mutation of mutationsList) {
    if (mutation.type === 'childList') {
      let addedElements = mutation.addedNodes;
      for (let element of addedElements) {
		if(element instanceof HTMLDivElement && element.className === 'ZF-Av'){
			undoGooglesStupidity();
		}
      }
    }
  }
};

function addAdvancedFilterButtonClickEventListener(){
	let observer = new MutationObserver(onAdvancedFilterButtonClick);
	let config = { childList: true, subtree: true };
	observer.observe(document, config);
}

addAdvancedFilterButtonClickEventListener();