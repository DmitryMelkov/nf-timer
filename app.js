window.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('.btn-js');
  const time = document.querySelector('.time-js');
  const timeSpan = document.querySelector('.time-span-js');
  const link = document.querySelector('.link-js');
  const linkCopy = document.querySelector('.link-btn-copy-js ');
  let count = timeSpan.innerHTML;

  btn.addEventListener('click', () => {
    time.classList.add('active');
    btn.classList.add('active');
    const timer = setInterval(() => {
      count = count - 1;
      timeSpan.innerHTML = count;
      if (count == 0) {
        clearInterval(timer);
        time.classList.remove('active');
        link.classList.add('active');
      }
    }, 1000);
  });

  //копирование содержимого ссылки
  const copy = () => {
    const linkValue = document.querySelector('.link-value-js');
    linkValue.select();
    document.execCommand('copy');
  };

  linkCopy.addEventListener('click', (e) => {
    e.preventDefault();
    copy();
  });
});
