// import Swiper JS
import Swiper from 'swiper';
// import Swiper styles
import 'swiper/css';

document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.swiper', {
        slidesPerView: 4,
    })

    const navigation = document.querySelector('.swiper-buttons')
    if (navigation) {
        // {target: {dataset: {action}}}
        navigation.addEventListener('click', ({target}) => {
            // console.log(target)
            // console.log(target.dataset.action)

            switch (target.dataset.action) {
                case 'prev':
                    swiper.slidePrev()
                    break;

               case 'next':
                    swiper.slideNext()
                    break; 
            }
        })
    }
})


console.log('Hello from "landing" page!')


$(document).ready(function(){
    const $slider = $('#slick').slick({
        // autoplay: true,
        slidesToShow: 4,
        arrows: false,
    });

    $('.slider-prev').on('click', function(e){
        e.preventDefault();
        $slider.slick('slickPrev');
    })

    $('.slider-next').on('click', function(e){
        e.preventDefault();
        $slider.slick('slickNext');
    })
});

const var1 = 'test'
const obj1 = {
    k1: 1,
    k2: 2,
}

let str1 = 't'
str1 = "str \"test\""
// str1 = `test ${obj1.k1}`

console.log(str1)

var cond = 5

// if (cond !== '5') {
//     console.log('true')
// } else {
//     console.log('false')
// }

for (let i = 0, x = 5 ; ; i++,x = i+2) {
    console.log(`loop ${i}, ${x}`);
    
    if (i == 5) {
        break;
    }
}

console.log(cond !== '5' ? 'true' : 'false')

// {
// const x = 10
// }
// console.log(x)


//console.log(5 - '3')

// const obj2 = obj1

// console.log(obj1)
// console.log(obj2)

// obj1.k1 = 'test'
// obj2.k2 = 'test1'

// console.log(obj1)
// console.log(obj2)

// let var2 = 123

// var var3 = 5

const f1 = function () {
    var x = 5
    console.log('hello from func')
}

const f2 = f1

f1()
f2()