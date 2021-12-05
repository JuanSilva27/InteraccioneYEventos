window.onload = function(){
    let body = document.querySelector('body');
    let moviesListTitulo = document.querySelector('.moviesListTitulo');

    /* let modo = confirm('Desea modo oscuro');
    if(modo){
        body.style.backgroundColor = '#7f7f7f'
        body.classList.add('fondoMoviesList');
    } */
    
    console.log(body);
    moviesListTitulo.innerHTML = 'LISTADO DE PELÍCULAS';
    moviesListTitulo.style.color ='white';
    moviesListTitulo.style.backgroundColor = 'teal';
    moviesListTitulo.style.padding = '20px';


    let logoDH = document.querySelector("figure")
    logoDH.addEventListener("mouseover",()=>{
        body.style.backgroundColor = '#7f7f7f'
        body.classList.add('fondoMoviesList');
    })
    let addPeli = document.querySelector(".botonAgregar")
    addPeli.addEventListener("mouseover",()=>{
        addPeli.style.backgroundColor="greenYellow"
    })

    addPeli.addEventListener("mouseleave",()=>{
        addPeli.style.backgroundColor="green"
    })
}