(function(){
    var $body = document.querySelector('body');
    $body.classList.remove('no-js');
    $body.classList.add('js');

    //menu
    var menu = new Menu({ /*funções criadas em menu.js*/
        container: '.header__nav', 
        toggleBtn: '.header__btnMenu', /*recebe o identificador de qual é o elemento do botão*/
        widthEnabled: 1024 /*recebe um tamanho max. de onde o botão está visivel, mesmo colocado em Media Querie no CSS*/
    })

    //carrossel de imagens
    var carouselImgs = new Carousel({ //funções criadas em carousel.js
        container: '.laptop-slider .slideshow',
        itens: 'figure', //recebe quem dentro do slideshow será representado por cada um dos itens. Cada figure será 1 item p o JS
        btnPrev: '.prev',
        btnNext: '.next'
    })

    //depoimentos (parte com o verdinho de fundo) = quotes ... utiliza as mesmas funções criadas em carousel.js
    var carouselQuotes = new Carousel({ 
        container: '.quote-container',
        itens: 'figure', 
        btnPrev: '.prev',
        btnNext: '.next'
    })
    
})()