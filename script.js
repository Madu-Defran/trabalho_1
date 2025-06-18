const botao = document.getElementById('botao');
const mensagemDiv = document.getElementById('mensagem');

botao.addEventListener('click', function() {
    mensagemDiv.textContent = 'Se voce só é bom em uma coisa, torne-se mestre nela. Demon Slayer.';
    mensagemDiv.style.display = 'block';    
    
 });
