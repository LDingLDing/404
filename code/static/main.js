let theme
window.onload = function () {
	theme = document.body.className.match('white') ? 'white' : 'dark'
}


function setLinks (links) {
	links = Array.isArray(links) ? links : [links]
	let html = `© ${new Date().getFullYear()} -`
	for (let item of links) {
		html += `<a target="${item.target || ''}" href="${item.url || 'javascript: void 0'}">${item.name}</a>`
	}
	document.getElementById('footer').innerHTML = html
}

function addClass (dom, className) {
	if (!dom) return
	let arr = dom.className.split(' ')
	if (~arr.indexOf(className)) return
	arr.push(className)
	dom.className = arr.join(' ')
}

function removeClass (dom, className) {
	if (!dom || !dom.classList.length) return
	let arr = dom.className.split(' ')
	let index = arr.indexOf(className)
	if (!~index) return
	arr.splice(index, 1)
	dom.className = arr.join(' ')
}

function switchTheme () {
	var nTheme = theme === 'white' ? 'dark' : 'white'
	removeClass(document.body, theme)
	addClass(document.body, nTheme)
	theme = nTheme
}