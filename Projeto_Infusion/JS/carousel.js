function Carousel(config){
    //se for uma string recebe o document.querySelector(config.container), senão, vai ser o próprio objeto passado p parâmetro
    this.container = (typeof config.container === 'string' ) ? document.querySelector(config.container) : config.container;

    //this.container = div slideshow e this.itens = cada um dos figure em slideshow

    this.itens = (typeof config.itens === 'string') ? this.container.querySelectorAll(config.itens) : config.itens; 

    this.btnPrev = (typeof config.btnPrev === 'string') ? this.container.querySelector(config.btnPrev) : config.btnPrev;

    this.btnNext = (typeof config.btnNext === 'string') ? this.container.querySelector(config.btnNext) : config.btnNext;

    var _this = this; //this = vai representar o objeto, a instância do Carousel
    var _currentSlide = 0; //slide atual q inicia em zero

    init(); //função responsável por iniciar o carrosel

    function init(){ //irá remover qualquer elemento q tenha a classe show
        var _show = _this.container.querySelectorAll('.show'); //tudo q tenha a classe show será buscado

        Array.prototype.forEach.call(_show, function(sh){ //p remover elementos que possam ter a classe show
            sh.classList.remove('show'); 
        })

        //coloca a classe no 1º item
        _this.itens[0].classList.add('show');

        //p mostrar os botões next e prev, removendo o estilo inline display:none q estão neles lá no html
        _this.btnNext.removeAttribute('style');
        _this.btnPrev.removeAttribute('style');

        addListeners(); //dos botões

        }

        //função responsável p acrescentar os Listeners dos botões
        function addListeners(){
            _this.btnNext.addEventListener('click', showNextSlide);
            _this.btnPrev.addEventListener('click', showPrevSlide);
        }

        function showNextSlide(){ //atualiza o slide atual
            _currentSlide++; //ao clicar em showNextSlide será somado 1 ao currentSlide(slide atual)
            showSlide(); //chamo a função showSlide
        }

        function showPrevSlide(){ //atualiza o slide atual
            _currentSlide--; //ao clicar em showPrevSlide será subtraído 1 ao currentSlide(slide atual)
            showSlide(); //chamo a função showSlide
        }

        //pega o slide atual e acrescenta a classe show ao slide atual... mas antes, remove qlqr outra classe show q possa existir 
        function showSlide(){ //com sistema de módulo
            var qtd = _this.itens.length; //nº de slides que tem
            var slide = _currentSlide % qtd; // % = módulo ... módulo de quantidade
            slide = Math.abs(slide); //retorna sempre um nº real/positivo e nunca negativo, ou seja, valor absoluto

            _this.container.querySelector('.show').classList.remove('show'); //remove o elemento q tem a classe show
            _this.itens[slide].classList.add('show'); //como a classe foi removida, agora é acrescentada ao elemento q representa o nº de slide

            //resumindo: esta função showSlide movimenta os slides p direita ou esquerda com o clique nos botões Next e Prev
        }    
} 