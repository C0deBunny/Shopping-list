// Get html items
const inputWindow = document.querySelector(".inputWindow")
const addItem = document.querySelector(".addItem")
const list = document.querySelector(".list")

// Button event
inputWindow.addEventListener("keypress", (event) => {
	if (event.key === "Enter") {
		addItem.click()
	}
})
addItem.addEventListener("click", enter)

// Button function
function enter() {
	let savedValue = document.querySelector(".inputWindow").value
	document.querySelector(".inputWindow").value = ""

	let li = document.createElement("li")
	list.appendChild(li)

	let span = document.createElement("span")
	li.appendChild(span)
	span.textContent = "‣    " + savedValue

	let btn = document.createElement("button")
	li.appendChild(btn)
	btn.addEventListener("click", (e) => {
		e.target.parentNode.remove()
	})

	//style list
	li.style.display = "flex"
	li.style.justifyContent = "space-between"
	li.style.alignContent = "center"
	li.style.marginLeft = "20px"
	li.style.marginRight = "20px"

	//style button
	btn.textContent = "Delete"
	btn.style.backgroundColor = "#282b30"
	btn.style.color = "white"
	btn.style.borderRadius = "10px"
	btn.style.width = "80px"
	btn.style.height = "40px"

	inputWindow.focus()
}

inputWindow.focus()
