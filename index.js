const modalWindow= document.querySelector('.modal')
const closeBtn = document.querySelector('.close-btn')
const burguerMenu = document.getElementById('burger-menu')
//console.log(burguerMenu)

setTimeout(function(){
    modalWindow.style.display='block'
},1500)



closeBtn.addEventListener('click', function(){
    modalWindow.style.display='none';
})
