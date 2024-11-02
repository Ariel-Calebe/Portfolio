let textForTerminal = "";
let line;
let currentLine = 0;
let page = 2; // Começamos na Page 1
let content = document.getElementById('content'); // Conteúdo do terminal
let inputBox = document.getElementById('userInput'); // Referência ao input
const extraLines = 2; // Quantidade de quebras de linha extras para garantir espaço
let userEmail = ""; // Variável para armazenar o email do usuário
let userMessage = ""; // Variável para armazenar a mensagem do usuário
let page_4_stage = 0; 

function Working() {
    if (page == 1) {
        Page1(); // Mostra o conteúdo da Page 1
    } else if (page == 2) {
        Page2(); // Mostra o conteúdo da Page 2
    }
}

// Função que simula a escrita no terminal
function terminalWriting() {
    if (currentLine === 0) {
        content.innerText = ""; // Limpa o terminal apenas no início
    }

    if (currentLine < line.length) {
        content.innerText += line[currentLine] + '\n';
        currentLine++;

        // Faz o scroll do terminal automaticamente para o fim
        content.scrollTop = content.scrollHeight;

        setTimeout(terminalWriting, 50); // Simula a digitação
    } else {
        // Quando o texto termina de ser escrito, adiciona quebras de linha extras
        addExtraNewlines(extraLines);
    }
}

// Função que exibe o conteúdo da Page 1
async function Page1() {
    const totalLength = 48; // Espaço disponível para o texto
    function padLine(text) {
        return text.padEnd(totalLength, ' ');
    }

    // Obter a data e hora atuais
    const now = new Date();

    // Opções de formatação
    const optionsDate = { day: '2-digit', month: 'long', year: 'numeric' };
    const optionsTime = { hour: '2-digit', minute: '2-digit' };

    // Formatar a data e hora
    const formattedDate = now.toLocaleDateString('pt-BR', optionsDate);
    const formattedTime = now.toLocaleTimeString('pt-BR', optionsTime);

    // Criar a string completa de data e hora
    const dateTimeString = `Data: ${formattedDate}, ${formattedTime}`;
    const versionLine = 'Versão: 1.0 (Interação Aprimorada)';
    const statusLine = 'Nenhum problema detectado';

    // Obter informações do navegador
    const userAgent = navigator.userAgent;
    const platform = navigator.platform;
    const language = navigator.language || navigator.userLanguage;

    // Analisar o sistema operacional a partir do userAgent
    let systemOS = 'Sistema Operacional: Desconhecido';
    if (userAgent.indexOf('Win') !== -1) systemOS = 'Sistema Operacional: Windows';
    else if (userAgent.indexOf('Mac') !== -1) systemOS = 'Sistema Operacional: macOS';
    else if (userAgent.indexOf('Linux') !== -1) systemOS = 'Sistema Operacional: Linux';
    else if (userAgent.indexOf('Android') !== -1) systemOS = 'Sistema Operacional: Android';
    else if (userAgent.indexOf('like Mac') !== -1) systemOS = 'Sistema Operacional: iOS';

    // Obter o navegador
    let browser = 'Navegador: Desconhecido';
    if (userAgent.indexOf('Chrome') !== -1) browser = 'Navegador: Chrome';
    else if (userAgent.indexOf('Firefox') !== -1) browser = 'Navegador: Firefox';
    else if (userAgent.indexOf('Safari') !== -1) browser = 'Navegador: Safari';
    else if (userAgent.indexOf('Edge') !== -1) browser = 'Navegador: Edge';
    else if (userAgent.indexOf('Opera') !== -1 || userAgent.indexOf('OPR') !== -1) browser = 'Navegador: Opera';

    // ID do usuário (pode ser um valor gerado aleatoriamente)
    const userID = 'ID do Usuário: #' + Math.floor(Math.random() * 10000).toString().padStart(4, '0');

    // Obter Endereço IP e Localização usando API externa
    let userIP = 'Endereço IP: Desconhecido';
    let location = 'Localização: Desconhecida';

    try {
        // Chamada à API externa para obter o IP
        const ipResponse = await fetch('https://api.ipify.org?format=json');
        const ipData = await ipResponse.json();
        userIP = `Endereço IP: ${ipData.ip}`;

        // Chamada à API externa para obter detalhes de localização
        const locationResponse = await fetch(`https://ipapi.co/${ipData.ip}/json/`);
        const locationData = await locationResponse.json();
        location = `Localização: ${locationData.city}, ${locationData.region}, ${locationData.country_name}`;
    } catch (error) {
        console.error('Erro ao obter IP e localização:', error);
    }

    // Outros metadados
    const lastLogin = 'Último Login: <Error>';
    const accessLevel = 'Nível de Acesso: User';
    const encryptionStatus = 'Criptografia: ??????????';
    const firewallStatus = 'Firewall: Online';

    const lines = [
        "══════════════════════════════════════════════════",
        "                                                  ",
        "INICIALIZANDO SIMULAÇÃO...                        ",
        "                                                  ",
        "[OK] Sistemas centrais online                     ",
        "                                                  ",
        "Estabelecendo ligação neural...                   ",
        "                                                  ",
        "[OK] Ligação neural estabelecida                  ",
        "                                                  ",
        "Carregando matriz de personalidade...             ",
        "                                                  ",
        "[OK] Matriz de personalidade carregada            ",
        "                                                  ",
        "Iniciando self digital...                         ",
        "                                                  ",
        "[OK] Self digital agora online                    ",
        "                                                  ",
        "══════════════════════════════════════════════════",
        "                                                  ",
        ' "Os loucos construíram a arca, os inteligentes   ',
        '  construíram o Titanic."                         ',
        "                                                  ",
        "══════════════════════════════════════════════════",
        "                                                  ",
        "> STATUS DO SISTEMA                               ",
        "                                                  ",
        "------------------------------                    ",
        "                                                  ",
        `${padLine(dateTimeString)}`,
        `${padLine(systemOS)}`,
        `${padLine(browser)}`,
        `${padLine(platform)}`,
        `${padLine(language)}`,
        `${padLine(userID)}`,
        `${padLine(userIP)}`,
        `${padLine(location)}`,
        `${padLine(lastLogin)}`,
        `${padLine(accessLevel)}`,
        `${padLine(encryptionStatus)}`,
        `${padLine(firewallStatus)}`,
        `${padLine(versionLine)}`,
        `${padLine(statusLine)}`,
        "                                                  ",
        "══════════════════════════════════════════════════",
        "         Pressione ENTER para continuar...        ",
        "══════════════════════════════════════════════════",
    ];

    // Monta o texto completo
    textForTerminal = lines.join('\n');

    // Divide o texto em linhas
    line = textForTerminal.split('\n');
    currentLine = 0;
    terminalWriting(); // Inicia a escrita no terminal
}

// Função que exibe o conteúdo da Page 2
function Page2() {
    const totalLength = 66; // Ajuste conforme a largura desejada
    function padLine(text, align = 'center') {
        let paddedText = '';
        if (align === 'center') {
            const padding = Math.floor((totalLength - text.length) / 2);
            paddedText = ' '.repeat(padding) + text + ' '.repeat(totalLength - text.length - padding);
        } else if (align === 'left') {
            paddedText = text.padEnd(totalLength, ' ');
        } else if (align === 'right') {
            paddedText = text.padStart(totalLength, ' ');
        }
        return `${paddedText}`; // Removido os caracteres '║'
    }

    // Obter a data e hora atuais
    const now = new Date();
    const optionsDate = { day: '2-digit', month: '2-digit', year: 'numeric' };
    const optionsTime = { hour: '2-digit', minute: '2-digit' };
    const formattedDate = now.toLocaleDateString('pt-BR', optionsDate);
    const formattedTime = now.toLocaleTimeString('pt-BR', optionsTime);
    const dateTimeString = `${formattedDate} ${formattedTime}`;

    const lines = [
        `${'═'.repeat(totalLength)}`, // Removido os caracteres '╔' e '╗'
        padLine('', 'center'),
        padLine('█████╗ ██████╗ ██╗███████╗██╗  ', 'center'),
        padLine('██╔══██╗██╔══██╗██║██╔════╝██║ ', 'center'),
        padLine('███████║██████╔╝██║█████╗  ██║  ', 'center'),
        padLine('██╔══██║██╔══██╗██║██╔══╝  ██║    ', 'center'),
        padLine('██║  ██║██║  ██║██║███████╗███████╗ ', 'center'),
        padLine('╚═╝  ╚═╝╚═╝  ╚═╝╚═╝╚══════╝╚══════╝  ', 'center'),
        padLine('', 'center'),
        padLine(' ██████╗ █████╗ ██╗     ███████╗██████╗ ███████╗', 'center'),
        padLine('██╔════╝██╔══██╗██║     ██╔════╝██╔══██╗██╔════╝', 'center'),
        padLine('██║     ███████║██║     █████╗  ██████╔╝█████╗  ', 'center'),
        padLine('██║     ██╔══██║██║     ██╔══╝  ██╔══██╗██╔══╝  ', 'center'),
        padLine('╚██████╗██║  ██║███████╗███████╗██████╔╝███████╗', 'center'),
        padLine(' ╚═════╝╚═╝  ╚═╝╚══════╝╚══════╝╚═════╝ ╚══════╝', 'center'),
        padLine('──── Self Digital ────', 'center'),
        padLine('', 'center'),
        `${'═'.repeat(totalLength)}`, // Removido os caracteres '╚' e '╝'
        '',
        '[ MAIN MENU ]',
        '',
        '[1] > SOBRE MIM          ─ Me conheça.',
        '[2] > MINHAS HABILIDADES ─ Conheça minhas skills.',
        '[3] > MEUS PROJETOS      ─ Veja meu trabalho.',
        '[4] > CONTATO            ─ Entre em contato.',
        '[5] > GITHUB             ─ Meu repositório.',
        '[6] > SYSTEM STATUS      ─ Status do sistema.',
        '',
        'Digite sua escolha: _'
    ];

    // Monta o texto completo
    textForTerminal = lines.join('\n');

    // Divide o texto em linhas
    line = textForTerminal.split('\n');
    currentLine = 0;
    terminalWriting(); // Inicia a escrita no terminal
}

function Page3(){
    line = [
        "══════════════════════════════════════════════════",
        "                SOBRE MIM                         ",
        "══════════════════════════════════════════════════",
        "Sou estudante do Cotemig Ensino Médio, com uma",
        "paixão crescente por Marketing Digital e TI.",
        "Minha trajetória em TI me apresentou ao marketing,",
        "onde descobri não só uma área de interesse, mas uma",
        "verdadeira vocação.",
        "",
        "Valorizo a excelência e sempre busco entregar o",
        "meu melhor. Meus projetos favoritos envolvem",
        "produtos digitais e automações para marketing, onde",
        "aplico IA e conhecimentos de TI. Tenho como visão",
        "de futuro abrir minha própria empresa de Marketing",
        "Digital, trazendo soluções inovadoras.",
        "",
        "Meu diferencial está em automatizar processos,",
        "reduzindo custos e otimizando resultados para",
        "clientes e parceiros. Acredito que essa abordagem",
        "será essencial para o futuro do marketing digital.",
        "\n\n\n╔═════════════════════════════════════════════════╗",          
        "║Pressione <q> para voltar                                ",
        "╚═════════════════════════════════════════════════╝"
    ];
    currentLine = 0;
    terminalWriting();
}

function Page4() {
    const lines = [
        "═════════════════════════════════════════════════════════",
        "||    ||   |||   ||||||  || ||      || ||||||    |||   ||||||  ||||||  ||||||                    ",
        "||    ||  || ||  ||   || || ||      || ||   ||  || ||  ||   || ||     ||",
        "|||||||| ||   || ||||||  || ||      || ||   || ||   || ||   || |||||   |||||                     ",
        "||    || ||||||| ||   || || ||      || ||   || ||||||| ||   || ||          || ",
        "||    || ||   || ||||||  || ||||||| || ||||||  ||   || ||||||  |||||| ||||||",
        "═════════════════════════════════════════════════════════\n\n",
        
        "╔══ MARKETING ═╣ Iniciante ╠══════════════════════════════════════╗",
        "║                                                              ",
        "║  E-Mail Marketing         ║█████████████████████░░░░░░░░ ═╣ 2100 XP ║ ",
        "║  ────────────────────────────────────────────────────  ",
        "║  Copy                     ║████████████████░░░░░░░░░░░░░ ═╣ 1600 XP ║",
        "║  ────────────────────────────────────────────────────   ",
        "║  Análise de Dados         ║██████████████░░░░░░░░░░░░░░░ ═╣ 1400 XP ║",
        "║  ────────────────────────────────────────────────────   ",
        "║  Tráfego Pago             ║███████░░░░░░░░░░░░░░░░░░░░░░ ═╣ 0700 XP ║",
        "║  ────────────────────────────────────────────────────   ",
        "║                                                         ",
        "╚═══════════════════════════════════════════════════════════╝\n",
        "╔══ CHATGPT  ═╣ Iniciante ╠═══════════════════════════════════════╗",
        "║                                                              ",
        "║  Chatbots Conversacionais ║███████████████████████████░░ ═╣ 2500 XP ║ ",
        "║  ────────────────────────────────────────────────────  ",
        "║  NLP                      ║████████████████████████░░░░░ ═╣ 2200 XP ║",
        "║  ────────────────────────────────────────────────────   ",
        "║  Integração API           ║███████░░░░░░░░░░░░░░░░░░░░░░ ═╣ 0700 XP ║",
        "║  ────────────────────────────────────────────────────   ",
        "║  Fine-Tuning              ║█░░░░░░░░░░░░░░░░░░░░░░░░░░░░ ═╣ 0100 XP ║",
        "║  ────────────────────────────────────────────────────   ",
        "║                                                         ",
        "╚═══════════════════════════════════════════════════════════╝\n",

        "╔══ DEV       ═╣ Intermediário ╠═══════════════════════════════════╗",
        "║                                                              ",
        "║  C#                       ║█████████████████████░░░░░░░░ ═╣ 2100 XP ║ ",
        "║  ────────────────────────────────────────────────────  ",
        "║  Python                   ║███░░░░░░░░░░░░░░░░░░░░░░░░░░ ═╣ 0300 XP ║",
        "║  ────────────────────────────────────────────────────   ",
        "║  HTML                     ║███████████░░░░░░░░░░░░░░░░░░ ═╣ 1400 XP ║",
        "║  ────────────────────────────────────────────────────   ",
        "║  CSS                      ║███████░░░░░░░░░░░░░░░░░░░░░░ ═╣ 0700 XP ║",
        "║  ────────────────────────────────────────────────────   ",
        "║  Java Script              ║██████████░░░░░░░░░░░░░░░░░░░ ═╣ 1000 XP ║",
        "║  ────────────────────────────────────────────────────   ",
        "║  MySQL                    ║████████████░░░░░░░░░░░░░░░░░ ═╣ 0900 XP ║",
        "║  ────────────────────────────────────────────────────   ",
        "║                                                         ",
        "╚═══════════════════════════════════════════════════════════╝\n\n\n",
         
        
        
        
        
        
        "╔══════════════════════════════════════════════════════════╗",          
        "║ Pressione <Q> para voltar                                ",
        "╚══════════════════════════════════════════════════════════╝",
    ];

    textForTerminal = lines.join('\n');
    line = textForTerminal.split('\n');
    currentLine = 0;
    terminalWriting();
}

// Função que exibe o conteúdo da Page 5
// Função para mostrar a animação de carregamento dentro do div "content"
// Função para mostrar a animação de carregamento dentro do div "content"
// Função que exibe o conteúdo da Page 5 com animação de carregamento e estrutura de diretório
let firstLoadPage5 = true; // Variável para controlar o carregamento inicial

// Função que exibe o conteúdo da Page 5 com ou sem animação de carregamento
function Page5() {
    const content = document.getElementById("content");
    content.innerText = ""; // Limpa o terminal

    if (firstLoadPage5) {
        // Exibe a animação de carregamento na primeira vez
        showLoadingAnimation();
        firstLoadPage5 = false; // Define como falso após a primeira execução
    } else {
        // Exibe diretamente a estrutura de diretório sem carregamento
        displayDirectoryStructure();
    }
}

// Função para mostrar a animação de carregamento dentro do div "content"
function showLoadingAnimation() {
    const content = document.getElementById("content");
    const symbols = ["-", "\\", "|", "/"];
    let index = 0;

    // Atualiza o caractere de carregamento a cada 200ms
    const interval = setInterval(() => {
        content.innerText = symbols[index];
        index = (index + 1) % symbols.length;
    }, 200);

    // Após 2 segundos, para a animação e exibe a estrutura de diretório
    setTimeout(() => {
        clearInterval(interval); // Para a animação
        displayDirectoryStructure(); // Exibe a estrutura de diretório
    }, 2000);
}

// Função para exibir a estrutura de diretório na Page 5
function displayDirectoryStructure() {
    const directoryStructure = [
        "/home/usuario",
        "├── [1] IA",
        "└── [2] Front End",
        "\n\n\n╔══════════════════════════════════════════════════════════╗",          
        "║ Selecione a pasta | Pressione <q> para voltar                                ",
        "╚══════════════════════════════════════════════════════════╝",
    ];

    // Divide o texto em linhas e prepara para exibição com terminalWriting
    line = directoryStructure;
    currentLine = 0;
    terminalWriting(); // Inicia a exibição da estrutura de diretório
}

function PageContato() {
    line = [
        "══════════════════════════════════════════════════",
        "              FORMULÁRIO DE CONTATO               ",
        "══════════════════════════════════════════════════",
        "Digite seu email e pressione <Enter>, ou pressione <q> para voltar:",
    ];
    currentLine = 0;
    terminalWriting();
    page_4_stage = 1; // Primeiro estágio do formulário
}

// Função que exibe o conteúdo da Page 6
function Page6() {
    inputBox.style.display = 'none';
    content.innerText = "";
    page = 4;
    PageContato();
}

// Função que exibe o conteúdo da Page 7
function Page7() {
    if (confirm("[ATENÇÃO] - Você será redirecionado para fora dos nossos sistemas")) {
        window.open("https://github.com/Ariel-Calebe/", "_blank");
    }

        const lines = [
            "╔══════════════════════════════════════════════════════════╗",          
            "║Pressione <q> para voltar                                ",
            "╚══════════════════════════════════════════════════════════╝",
        ];

    textForTerminal = lines.join('\n');
    line = textForTerminal.split('\n');
    currentLine = 0;
    terminalWriting();
}

// Função que exibe o conteúdo da Page 8
let isSystemStatusActive = false; // Variável de controle

function Page8() {
    isSystemStatusActive = true; // Ativa a atualização do "System Status" ao entrar na página
    line = [
        "══════════════════════════════════════════════════",
        "                    SYSTEM STATUS                 ",
        "══════════════════════════════════════════════════",
        "Uso de CPU: --%",
        "Uso de Memória: --%",
        "Ping para 192.168.0.1: --ms",
        "Temperatura do Sistema: --°C",
        "Conexões Ativas: --",
        "══════════════════════════════════════════════════",
        "Pressione <Q> para voltar",
        "══════════════════════════════════════════════════",
    ];

    currentLine = 0;
    terminalWriting();

    // Inicia a atualização dos status em tempo real apenas para a Page 8
    updateSystemStatus();
    updatePing();
    updateTemperature();
    updateConnections();
    updateErrorLog();
}

// Função para simular o uso de CPU e memória
function updateSystemStatus() {
    setInterval(() => {
        if (!isSystemStatusActive) return; // Sai da função se a Page 8 não estiver ativa

        const cpuUsage = Math.floor(Math.random() * 100);
        const memoryUsage = Math.floor(Math.random() * 100);

        line[3] = `Uso de CPU: ${cpuUsage}%`;
        line[4] = `Uso de Memória: ${memoryUsage}%`;
        refreshTerminal();
    }, 1000);
}

// Função para simular o ping
function updatePing() {
    setInterval(() => {
        if (!isSystemStatusActive) return; // Sai da função se a Page 8 não estiver ativa

        const pingTime = Math.floor(Math.random() * 100) + 1;

        line[5] = `Ping para 192.168.0.1: ${pingTime}ms`;
        refreshTerminal();
    }, 2000);
}

// Função para simular a temperatura do sistema
function updateTemperature() {
    setInterval(() => {
        if (!isSystemStatusActive) return; // Sai da função se a Page 8 não estiver ativa

        const temperature = (Math.random() * 20 + 40).toFixed(1);

        line[6] = `Temperatura do Sistema: ${temperature}°C`;
        refreshTerminal();
    }, 1500);
}

// Função para simular as conexões ativas
function updateConnections() {
    const connections = ["192.168.0.5", "192.168.0.6", "10.0.0.1", "10.0.0.2"];

    setInterval(() => {
        if (!isSystemStatusActive) return; // Sai da função se a Page 8 não estiver ativa

        const activeConnections = connections.filter(() => Math.random() > 0.5).join(", ");

        line[7] = `Conexões Ativas: ${activeConnections}`;
        refreshTerminal();
    }, 3000);
}

// Função para simular o log de erros
function updateErrorLog() {
    const errors = [
        "ERROR: Falha de acesso ao diretório /var/log",
        "WARNING: Limite de uso de CPU ultrapassado",
        "ERROR: Conexão perdida com o servidor de backup",
        "NOTICE: Atualização de segurança disponível"
    ];

    setInterval(() => {
        if (!isSystemStatusActive) return; // Sai da função se a Page 8 não estiver ativa

        const newError = errors[Math.floor(Math.random() * errors.length)];
        line.push(newError);
        if (line.length > 15) line.splice(8, 1); // Limita a 7 linhas de log
        refreshTerminal();
    }, 5000);
}

// Função para atualizar o terminal
function refreshTerminal() {
    content.innerText = "";
    content.innerText = line.join('\n');
    content.scrollTop = content.scrollHeight;
}

// Evento para desativar o "System Status" ao sair da página 8
document.addEventListener('keydown', (event) => {
    if (event.key.toLowerCase() === 'q' && page === 8) {
        isSystemStatusActive = false; // Desativa a atualização ao sair
        page = 2; // Retorna ao menu principal
        content.innerText = ""; // Limpa o terminal
        Working(); // Recarrega a Page 2 (menu principal)
        inputBox.style.display = 'block';
        inputBox.focus();
    }
});



// Função que adiciona quebras de linha extras
function addExtraNewlines(numLines) {
    for (let i = 0; i < numLines; i++) {
        content.innerText += '\n';
    }

    // Faz o scroll para o final para garantir que o input não sobreponha o texto
    content.scrollTop = content.scrollHeight;

    // Mostra o input e aguarda o usuário pressionar Enter
    showInput();
}

// Função que exibe o input e aguarda o usuário pressionar Enter
function showInput() {
    inputBox.style.display = 'block'; // Mostra o input
    inputBox.focus(); // Coloca o foco no input
}

// Função que detecta quando o usuário pressiona Ente

let verificationPageFive = false; // Variável para controlar o estado
let currentFolder = ''; // Variável para acompanhar a pasta atual (IA ou Front End)

inputBox.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        const userInput = inputBox.value.trim(); // Captura o valor do input e remove espaços extras

        if (page === 1) {
            // Transição da Page 1 para a Page 2
            inputBox.style.display = 'none';
            content.innerText = ""; // Limpa o terminal
            page = 2;
            Working(); // Inicia a Page 2
           // Adiciona as demais opções do menu
        } else if (page === 4) {
            if(page_4_stage === 1){
                try {
                    // Expressão regular para validar o formato do email
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    
                    if (!emailRegex.test(userInput)) {
                        throw new Error("Email inválido");
                    }
                    
                    userEmail = userInput;
                    content.innerText = ""; // Limpa o terminal para a próxima pergunta
                    line = [
                        "══════════════════════════════════════════════════",
                        "Email recebido!",
                        "══════════════════════════════════════════════════",
                        "Agora, escreva sua mensagem e pressione <Enter>, ou digite <q> para voltar:",
                    ];
                    currentLine = 0;
                    terminalWriting();
                    page_4_stage = 2; // Passa para a próxima etapa do formulário
            
                } catch (error) {
                    content.innerText = ""; // Limpa o terminal para o novo aviso
                    line = [
                        "══════════════════════════════════════════════════",
                        "Email inválido. Digite novamente.",
                        "══════════════════════════════════════════════════",
                    ];
                    currentLine = 0;
                    terminalWriting();
                }
            }else if(page_4_stage === 2){
                userMessage = userInput;
                content.innerText = ""; // Limpa o terminal para a confirmação final
                line = [
                    "══════════════════════════════════════════════════",
                    "              FORMULÁRIO COMPLETO                ",
                    "══════════════════════════════════════════════════",
                    `Email: ${userEmail}`,
                    `Mensagem: ${userMessage}`,
                    "\n\n\n╔════════════════════════════════════════════════════╗",          
                    "║ Pressione <q> para voltar                                ",
                    "╚════════════════════════════════════════════════════╝",
                ];
                currentLine = 0;
                terminalWriting();
                page_4_stage = 0;
            }
        } else if (page === 2) {
            // Processa as opções da Page 2
            if (userInput === '1') {
                inputBox.style.display = 'none';
                content.innerText = ""; // Limpa o terminal
                page = 3;
                Page3();
            } else if (userInput === '2') {
                inputBox.style.display = 'none';
                content.innerText = ""; // Limpa o terminal
                page = 4;
                Page4();
            } else if (userInput === '3') {
                inputBox.style.display = 'none';
                content.innerText = ""; // Limpa o terminal
                page = 5;
                Page5();
            } else if (userInput === '4') {
                inputBox.style.display = 'none';
                content.innerText = ""; // Limpa o terminal
                page = 6;
                Page6();
            } else if (userInput === '5') {
                inputBox.style.display = 'none';
                content.innerText = ""; // Limpa o terminal
                page = 7;
                Page7();
            } else if (userInput === '6') {
                inputBox.style.display = 'none';
                content.innerText = ""; // Limpa o terminal
                page = 8;
                Page8();
            }
        } else if (page === 5 && !currentFolder) {
            // Verifica a entrada do usuário na estrutura de diretório da Page 5 (somente se uma pasta não está aberta)
            if (userInput === '1') {
                verificationPageFive = true; // Habilita o retorno para a Page 5
                currentFolder = 'IA'; // Define a pasta atual como IA
                content.innerText = ""; // Limpa o terminal
                line = [
                    "/home/usuario",
                    "├── IA",
                    "│   ├── [1] Automação Email Marketing",
                    "│   └── [2] Personal Meta Chat",
                    "└── Front End",
                    "\n\n\n╔══════════════════════════════════════════════════════════╗",          
                    "║ Selecione o arquivo | Pressione <q> para voltar                                ",
                    "╚══════════════════════════════════════════════════════════╝",
                ];
                
                currentLine = 0;
                terminalWriting();
            } else if (userInput === '2') {
                verificationPageFive = true;
                currentFolder = 'Front End'; // Define a pasta atual como Front End
                content.innerText = "";
                line = [
                    "/home/usuario",
                    "├── IA",
                    "└── Front End",
                    "    ├── [1] fooz",
                    "    ├── [2] Ogani-Study",
                    "    └── [3] Potencia-Tech-iFood-Programacao-do-Zero",
                    "\n\n\n╔══════════════════════════════════════════════════════════╗",          
                    "║ Selecione o arquivo | Pressione <q> para voltar                                ",
                    "╚══════════════════════════════════════════════════════════╝",
                ];
                
                currentLine = 0;
                terminalWriting();
            } 
        } else if (page === 5 && currentFolder === 'IA') {
            // Lógica para arquivos da pasta IA
            if (userInput === '1' || userInput === '2') {
                alert("[ERROR] - Arquivo em construção");
            }
        } else if (page === 5 && currentFolder === 'Front End') {
            // Lógica para arquivos da pasta Front End
            if (userInput === '1') {
                if (confirm("[ATENÇÃO] - Você será redirecionado para fora dos nossos sistemas")) {
                    window.open("https://github.com/Ariel-Calebe/fooz", "_blank");
                }
            } else if (userInput === '2') {
                if (confirm("[ATENÇÃO] - Você será redirecionado para fora dos nossos sistemas")) {
                    window.open("https://github.com/Ariel-Calebe/Ogani-Study", "_blank");
                }
            } else if (userInput === '3') {
                if (confirm("[ATENÇÃO] - Você será redirecionado para fora dos nossos sistemas")) {
                    window.open("https://github.com/Ariel-Calebe/Potencia-Tech-iFood-Programacao-do-Zero", "_blank");
                }
            }
        }
        

        inputBox.value = ''; // Limpa o valor do input após pressionar Enter
    }

    if (event.key.toLowerCase() === 'q') {
        // Verifica se deve voltar para a Page 5 ou Page 2
        if(page ===3){
            inputBox.style.display = 'none';
            content.innerText = ""; // Limpa o terminal
            page = 2;
            Working(); // Recarrega a Page 2
            inputBox.style.display = 'block';
            inputBox.focus();
        } else if (page === 5 && verificationPageFive) {
            inputBox.style.display = 'none';
            content.innerText = ""; // Limpa o terminal
            Page5();
            verificationPageFive = false; // Reseta para evitar redirecionamento automático
            currentFolder = ''; // Reseta a pasta atual
        } else if (page === 4 || page === 6 || page === 7 || page === 8 || (page === 5 && !verificationPageFive)) {
            inputBox.style.display = 'none';
            content.innerText = ""; // Limpa o terminal
            page = 2;
            Working(); // Recarrega a Page 2
            inputBox.style.display = 'block';
            inputBox.focus();
        }
    }
});


function toggleDarkMode() {
    // Alterna a classe 'dark-mode' no body
    document.body.classList.toggle('dark-mode');

    // Atualiza o texto do botão
    const button = document.getElementById('darkModeButton');
    if (document.body.classList.contains('dark-mode')) {
        button.textContent = 'Desativar Dark Mode';
    } else {
        button.textContent = 'Ativar Dark Mode';
    }
}

// Função para verificar e aplicar o modo paisagem
// Função para verificar e aplicar o modo paisagem
function checkOrientation() {
    const content = document.getElementById("content");

    if (window.innerWidth < window.innerHeight) {
        // Modo retrato: exibe a mensagem de orientação no terminal e oculta o restante
        content.innerText = "Por favor, rotacione o dispositivo", 
        "para o modo paisagem para", 
        "visualizar corretamente.";
        content.style.display = "flex";
        content.style.alignItems = "center";
        content.style.justifyContent = "center";
        content.style.fontSize = "3vh";
        document.getElementById("userInput").style.display = "none"; // Oculta o campo de entrada
    } else {
        // Modo paisagem: restaura o conteúdo do terminal e exibe o campo de entrada
        content.innerText = ""; // Limpa a mensagem de orientação
        content.style.display = ""; // Restaura o display padrão
        content.style.fontSize = ""; // Restaura o tamanho da fonte
        document.getElementById("userInput").style.display = "block"; // Exibe o campo de entrada
        Working(); // Chama a função para exibir o conteúdo normal do terminal
    }
}

// Verifica a orientação ao carregar a página e ao mudar a orientação
window.addEventListener("load", checkOrientation);
window.addEventListener("resize", checkOrientation);


// Inicia o terminal
Working();



