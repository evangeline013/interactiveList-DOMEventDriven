var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.getElementsByTagName("li");
var deleteButton = document.getElementsByClassName("delete");

function inputLength() {
	return input.value.length;
}

function createDltBtn() {
	let btn = document.createElement("button");
	btn.classList.add("delete");
	btn.appendChild(document.createTextNode("Delete"));
	removeListAfterClickDltBtn(btn);
	return btn;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(`${input.value} `));
	li.appendChild(createDltBtn());
	ul.appendChild(li);
	addStrikeThrough(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function addStrikeThrough(listItem) {
	listItem.addEventListener("click", function() {
		this.classList.toggle("done");
	});
}

function removeListAfterClickDltBtn(btn) {
	btn.addEventListener("click", function() {
		var parentList = btn.parentNode;
		parentList.parentNode.removeChild(parentList);
	});
}

//Add event listener (click then strike through) to all the list items in HTML files.
for (var i = 0; i < li.length; i++) {
	addStrikeThrough(li[i]);
}

//Add event listener to all the delete buttons in HTML file.
for (var i = 0; i < deleteButton.length; i++) {
	removeListAfterClickDltBtn(deleteButton[i]);
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);
