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
            index: 0,
            currentImg: slides[0].image,
        },

        methods: {
            nextSlide: function(){
                
                this.index++
                console.log(this.index);
                
                if(this.index === slides.length-1){
                    this.index = -1;
                };

                this.currentImg = slides[this.index].image;
                console.log(this.currentImg);
            },
            prevSlide: function(){
                
                this.index--
                console.log(this.index);

                if(this.index === -1){
                    this.index = 4;
                }

                this.currentImg = slides[this.index].image;
                console.log(this.currentImg);
                
            }
        }

})

