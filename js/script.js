
/* Ev tapşırığı:

1) Bütün reklam şəkillərini silin (saytın sağ tərəfində)

2) Filmin janrını "Komediya"-dan на "Drama" -ya dəyişin
Posterin arxa fon şəkilini "bg.jpg" ilə dəyişin. Şəkil "img" qovluğunda yerləşir. Bunun üçün ancaq JS-dən istifadə edin.

4) Baxılmış kinoların siyahısını JS ilə silin, əlifbaya görə sıralayın.

5) "movieDB"-də olan kino adları ilə əvəz edirik (stili HTML-dən götürün) və əlavə edilmiş kino adları nömrələnsin */

'use strict';

const movieDB = {
    movies: [
        "logan",
        "titanic",
        "Bəyin oğurlanmasi",
        "Xaç atasi",
        "Avatar 2"
    ]
};

movieDB.movies.sort();

const reklam = document.querySelectorAll('.promo__adv img');
const janr = document.querySelector('.promo__genre');
const bgimage = document.querySelector('.promo__bg');
const kinolar = document.querySelector('.promo__interactive-list')

bgimage.style.backgroundImage = 'url(../img/bg.jpg)';

kinolar.innerHTML = '';

janr.textContent = 'Dram';

reklam.forEach(item => {
    item.remove();
});

movieDB.movies.forEach((kino,i) => {
    kinolar.innerHTML += `
    <li class="promo__interactive-item">${i+1}. ${kino}
        <div class="delete"></div>
    </li>
    `;
}); 














