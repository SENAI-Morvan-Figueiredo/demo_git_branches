
const rows = 10;
const cols = 10;
let correctPath = [];
let currentColumn = 0;
let timerInterval;
let seconds = 0;
let tempoValendo = false;

// Função para gerar um caminho secreto aleatório
function generatePath() {
      for (let col = 0; col < cols; col++) {
            // Gera uma linha aleatória para cada coluna
            correctPath[col] = Math.floor(Math.random() * rows) + col * cols;
      }
}

// Função para lidar com o clique na célula
function handleCellClick(event) {
      const cell = event.target;
      const cellIndex = parseInt(cell.getAttribute('data-cel'), 10) - 1;
      
      if (currentColumn < cols) {
            if (currentColumn === 0 && !tempoValendo) {
                  clearInterval(timerInterval);

                  tempoValendo = true;
                  // Reseta os segundos
                  seconds = 0;

                  // Inicia o cronômetro
                  timerInterval = setInterval(() => {
                        seconds++;
                        updateTimerDisplay();
                  }, 1000);
            }
            if (cellIndex === correctPath[currentColumn]) {
                  cell.classList.add('correct');  // Adiciona classe de sucesso
                  currentColumn++;
                  // Verifica se o caminho foi completado
                  if (currentColumn === cols) {
                        alert('Você completou o caminho secreto!'); // Pode ser removido se preferir
                  }
            } else {
                  cell.classList.add('incorrect'); // Adiciona classe de erro
                  setTimeout(resetPath, 200);                                // Redefine o caminho
            }
      }
}

// Função para redefinir o caminho
function resetPath() {
      const cells = document.querySelectorAll('div[data-cel]');
      cells.forEach(cell => {
            cell.classList.remove('correct', 'incorrect');
      });
      currentColumn = 0;
}

// Inicializa o jogo
generatePath();

// Adiciona o evento de clique a cada célula
const cells = document.querySelectorAll('div[data-cel]');
cells.forEach(cell => {
      cell.addEventListener('click', handleCellClick);
});











// Função para atualizar o display do cronômetro
function updateTimerDisplay() {
      const minutes = Math.floor(seconds / 60);
      const secs = seconds % 60;

      // Formata o tempo com dois dígitos
      const formattedTime = `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
      document.getElementById('timer').innerText = formattedTime;
}

