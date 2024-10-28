function cor() {
  const gerarInputColor = document.createElement('input');
  gerarInputColor.type = 'color';
  const criarCor = document.getElementById('criarCor')
  
  criarCor.innerHTML = '';
  criarCor.appendChild(gerarInputColor);
}

function criarQuartos() {
  const NumeroQuartos = document.getElementById('NumeroQuartos').value;
  const NumeroAndares = document.getElementById('NumeroAndares').value;
  const quarto = document.getElementById('quarto');

  // Limpa o container antes de adicionar novas caixas
  quarto.innerHTML = '';

  // Cria a quantidade de caixas de texto especificada
  for (let i = 0; i < NumeroQuartos * NumeroAndares; i++) {
    const criarQuartos = document.createElement('input');
    criarQuartos.type = 'number';
    criarQuartos.name = 'quarto' + (i + 1);
    criarQuartos.id = 'quarto' + (i + 1);
    criarQuartos.className = 'box';
    criarQuartos.placeholder = i + 1;
    

    quarto.appendChild(criarQuartos);
    
    if ((i + 1) % NumeroQuartos === 0) {
          quarto.appendChild(document.createElement('br'));
        }
  }
}