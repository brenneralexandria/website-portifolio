 // Obter a altura total da página
 const body = document.body;
 const html = document.documentElement;
 const height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
 
 // Atualizar a largura da barra de progresso conforme a rolagem da página
 window.addEventListener('scroll', function() {
   const scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;
   const scrollPercent = (scrollTop / height) * 100;
   const progressBar = document.querySelector('.progress-bar');
   progressBar.style.width = `${scrollPercent}%`;
 });