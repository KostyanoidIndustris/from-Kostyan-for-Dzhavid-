document.querySelectorAll('.txt').forEach(e => {
  var chars = e.textContent.split("");
  e.innerHTML = '<span>' + chars.join('</span><span>') + '</span>';
});



document.addEventListener('DOMContentLoaded', () => {
  // инициализация слайдера
  new ItcSimpleSlider('.itcss', {
    loop: true,
    autoplay: false,
    interval: 2500,
    swipe: true,
  });
});

document.addEventListener('DOMContentLoaded', () => {
  // инициализация слайдера
  const slider = new ItcSimpleSlider('.itcss');
  // назначим обработчик при нажатии на кнопку .btn-prev
  document.querySelector('.btn-prev').onclick = () => {
    // перейдём к предыдущему слайду
    slider.prev();
  }
  // назначим обработчик при нажатии на кнопку .btn-next
  document.querySelector('.btn-next').onclick = () => {
    // перейдём к следующему слайду
    slider.next();
  }
});