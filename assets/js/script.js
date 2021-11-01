const produto = document.querySelector('.produtos-img')
produto.addEventListener('mousemove',(event)=>{
    let eixoX = (window.innerWidth / 1.10 - event.pageX)/90
    let eixoY = (window.innerHeight / 1.10 - event.pageY)/90
    produto.style.transform = `rotateY(${eixoX}deg) rotateX(${eixoY}deg)`
})

produto.addEventListener('mouseenter',(event)=>{
    produto.style.transition = 'none'
})

produto.addEventListener('mouseleave',(event)=>{
    produto.style.transition = 'all 0.5s ease'
    produto.style.transform = 'rotateY(0deg) rotateX(0deg)'
})