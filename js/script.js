const slides = [
    {
        image: 'img/01.jpg',
        title: 'Svezia',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    },
    {
        image: 'img/02.jpg',
        title: 'Svizzera',
        text: 'Lorem ipsum.',
    },
    {
        image: 'img/03.jpg',
        title: 'Gran Bretagna',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    },
    {
        image: 'img/04.jpg',
        title: 'Germania',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
    },
    {
        image: 'img/05.jpg',
        title: 'Paradise',
        text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.',
    }
];

console.log(slides.length-1);

const app = new Vue(
    {
        el: '#app',
        data:{
            currentSlide: 0,
            currentImg: slides[0].image,
        },

        methods: {
            nextSlide: function(){
                
                this.currentSlide++
                console.log(this.currentSlide);
                
                if(this.currentSlide === slides.length){
                    this.currentSlide = 0;
                };

                this.currentImg = slides[this.currentSlide].image;
                console.log(this.currentImg);
            },
            prevSlide: function(){
                
                this.currentSlide--
                console.log(this.currentSlide);

                if(this.currentSlide === -1){
                    this.currentSlide = slides.length-1;
                }

                this.currentImg = slides[this.currentSlide].image;
                console.log(this.currentImg);
                
            }
        }

})

