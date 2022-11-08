const list = document.querySelectorAll(".main-navigation__list")

function activeLink(){
  list.forEach((item) => 
  item.classList.remove('active'))
	this.classList.add('active')
}
list.forEach((item) =>
item.addEventListener('click', activeLink))