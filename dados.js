let dados = [
    {
        titulo: "Kapkan", 
        descricao: "Kapkan é um agente que utiliza armadilhas e é uma adição mortal à equipe defensora. Kapkan é equipado com um Dispositivo bloqueador de entrada (EDD-MK II). Esta armadilha é uma carga de C4 compactada que aciona ao detectar movimento. Pode ser colocada em molduras de portas e janelas, negando acesso a entradas estratégicas dos atacantes.",
        link: "https://www.ubisoft.com/pt-br/game/rainbow-six/siege/game-info/operators/kapkan"
    },
    {
        titulo: "Ash",
        descricao: "Ash é uma agente atacante rápida e precisa, equipada com o Lançador de Granada Breaching Round M120 CREM. Ela utiliza suas granadas explosivas para destruir barricadas e paredes não reforçadas, permitindo rápidas entradas e flanqueios. Sua agilidade e habilidade em combate de longa e curta distância fazem dela uma escolha versátil para ofensivas dinâmicas.",
        link: "https://www.ubisoft.com/pt-br/game/rainbow-six/siege/game-info/operators/ash"
    },
    {
        titulo: "Sledge",
        descricao: "Sledge é um operador atacante que utiliza seu Martelo de Demolição Tático (The Caber) para destruir barricadas, paredes não reforçadas e outras superfícies destrutíveis. Sua habilidade permite criar novas linhas de visão e abrir caminhos para a equipe, tornando-o essencial para estratégias de penetração e surpresa.",
        link: "https://www.ubisoft.com/pt-br/game/rainbow-six/siege/game-info/operators/sledge"
    },
    {
        titulo: "Jäger",
        descricao: "Jäger é um operador defensor especializado em neutralizar ameaças aéreas. Ele é equipado com o Sistema de Defesa Ativa ADS-MKIV 'Magpie', que pode interceptar e destruir granadas e outros dispositivos lançados pelos atacantes. Sua habilidade de eliminar projéteis inimigos aumenta significativamente a segurança das áreas defendidas.",
        link: "https://www.ubisoft.com/pt-br/game/rainbow-six/siege/game-info/operators/jager"
    },
    {
        titulo: "Thatcher",
        descricao: "Thatcher é um operador atacante veterano equipado com o Dispositivo Desativador de Eletrônicos EG Mk0, que pode desativar dispositivos eletrônicos inimigos dentro de um raio específico. Ele é essencial para desmantelar defesas inimigas e criar brechas para sua equipe.",
        link: "https://www.ubisoft.com/pt-br/game/rainbow-six/siege/game-info/operators/thatcher"
    },
    {
        titulo: "Thermite",
        descricao: "Thermite é um operador atacante que utiliza o Carregador Exotérmico Brimstone BC-3, capaz de destruir paredes reforçadas e criar entradas estratégicas. Ele é fundamental para quebrar as defesas do inimigo e abrir caminho para ataques coordenados.",
        link: "https://www.ubisoft.com/pt-br/game/rainbow-six/siege/game-info/operators/thermite"
    },
    {
        titulo: "Smoke",
        descricao: "Smoke é um operador defensor equipado com granadas de gás tóxico (Gas Tóxico Compound Z8). Ele pode usar seu gás para negar acesso a áreas, retardar o avanço inimigo ou forçar os atacantes a se moverem, tornando-o uma excelente escolha para controle de área.",
        link: "https://www.ubisoft.com/pt-br/game/rainbow-six/siege/game-info/operators/smoke"
    },
    {
        titulo: "Bandit",
        descricao: "Bandit é um operador defensor que utiliza o Dispositivo de Choque CED-1, capaz de eletrificar arames farpados, escudos portáteis e reforços de parede para causar dano aos atacantes e destruir seus gadgets. Ele é crucial para dificultar o avanço dos atacantes em pontos críticos.",
        link: "https://www.ubisoft.com/pt-br/game/rainbow-six/siege/game-info/operators/bandit"
    },
    {
        titulo: "Mute",
        descricao: "Mute é um operador defensor que usa os Jammer MK-III Signal Disruptors para bloquear o controle remoto de dispositivos eletrônicos dos atacantes. Suas habilidades são vitais para impedir a coleta de informações e neutralizar ataques de drones.",
        link: "https://www.ubisoft.com/pt-br/game/rainbow-six/siege/game-info/operators/mute"
    },
    {
        titulo: "IQ",
        descricao: "IQ é uma operadora atacante que utiliza o Detector de Eletrônicos RED Mk III 'Spectre', permitindo que ela veja dispositivos eletrônicos inimigos através de paredes e superfícies. Sua habilidade é ideal para eliminar armadilhas e gadgets defensores.",
        link: "https://www.ubisoft.com/pt-br/game/rainbow-six/siege/game-info/operators/iq"
    },
    {
        titulo: "Twitch",
        descricao: "Twitch é uma operadora atacante equipada com o Drone de Choque RSD Model 1, capaz de destruir dispositivos eletrônicos inimigos e causar dano a operadores inimigos. Seu drone é silencioso e pode operar durante a fase de preparação.",
        link: "https://www.ubisoft.com/pt-br/game/rainbow-six/siege/game-info/operators/twitch"
    },
    {
        titulo: "Rook",
        descricao: "Rook é um operador defensor que fornece Armadura Corporal para seus aliados com o Dispositivo R1N 'Rhino'. A armadura adicional aumenta a sobrevivência da equipe, permitindo-lhes resistir mais a tiros e explosões.",
        link: "https://www.ubisoft.com/pt-br/game/rainbow-six/siege/game-info/operators/rook"
    },
    {
        titulo: "Fuze",
        descricao: "Fuze é um operador atacante especializado em eliminar ameaças de dentro de salas seguras usando o Cluster Charge APM-6. Este dispositivo lança uma série de granadas através de paredes, tetos ou pisos destrutíveis.",
        link: "https://www.ubisoft.com/pt-br/game/rainbow-six/siege/game-info/operators/fuze"
    },
    {
        titulo: "Pulse",
        descricao: "Pulse é um operador defensor equipado com o Sensor Cardíaco HB-5, que permite detectar batimentos cardíacos inimigos através de superfícies, fornecendo informações críticas sobre a posição dos atacantes.",
        link: "https://www.ubisoft.com/pt-br/game/rainbow-six/siege/game-info/operators/pulse"
    },
    {
        titulo: "Montagne",
        descricao: "Montagne é um operador atacante que possui o escudo balístico extensível 'Le Roc'. Quando totalmente estendido, o escudo de Montagne cobre todo o corpo, oferecendo proteção completa contra tiros frontais, tornando-o ideal para reconhecimento e proteção de equipe.",
        link: "https://www.ubisoft.com/pt-br/game/rainbow-six/siege/game-info/operators/montagne"
    },
    {
        titulo: "Glaz",
        descricao: "Glaz é um operador atacante equipado com um rifle de precisão OTs-03 que possui uma mira térmica. Sua capacidade de ver através de fumaça e destacar inimigos torna-o excelente para ataques a longa distância e suporte de precisão.",
        link: "https://www.ubisoft.com/pt-br/game/rainbow-six/siege/game-info/operators/glaz"
    },
    {
        titulo: "Castle",
        descricao: "Castle é um operador defensor especializado em fortificação. Ele utiliza Barreiras Blindadas UTP1-Universal que reforçam portas e janelas, tornando-as mais difíceis de serem destruídas e protegendo áreas críticas.",
        link: "https://www.ubisoft.com/pt-br/game/rainbow-six/siege/game-info/operators/castle"
    },
    {
        titulo: "Blackbeard",
        descricao: "Blackbeard é um operador atacante que possui um escudo de rifle TARS Mk 0, que pode ser acoplado à sua arma principal, proporcionando proteção adicional ao avançar e enfrentar inimigos em tiroteios diretos.",
        link: "https://www.ubisoft.com/pt-br/game/rainbow-six/siege/game-info/operators/blackbeard"
    },
    {
        titulo: "Valkyrie",
        descricao: "Valkyrie é uma operadora defensora equipada com câmeras 'Black Eye' que podem ser lançadas em qualquer superfície, fornecendo uma visão de 360 graus para a equipe defensora e permitindo coleta de informações valiosas.",
        link: "https://www.ubisoft.com/pt-br/game/rainbow-six/siege/game-info/operators/valkyrie"
    },
    {
        titulo: "Capitão",
        descricao: "Capitão é um operador atacante que usa o Lançador de Flechas Tático TAC Mk0, capaz de disparar flechas incendiárias e fumígenas. Ele é ideal para negar área e forçar movimentações do time inimigo.",
        link: "https://www.ubisoft.com/pt-br/game/rainbow-six/siege/game-info/operators/capitao"
    },
    {
        titulo: "Caveira",
        descricao: "Caveira é uma operadora defensora que usa o 'Silent Step', permitindo movimentos silenciosos para emboscar os atacantes. Ela também possui a habilidade 'Interrogation', que revela a localização de todos os atacantes vivos no mapa.",
        link: "https://www.ubisoft.com/pt-br/game/rainbow-six/siege/game-info/operators/caveira"
    },
    {
        titulo: "Hibana",
        descricao: "Hibana é uma operadora atacante equipada com o lançador de carga explosiva X-KAIROS. Ela pode disparar múltiplos projéteis explosivos que detonam simultaneamente, criando buracos em paredes reforçadas e oferecendo novas linhas de ataque.",
        link: "https://www.ubisoft.com/pt-br/game/rainbow-six/siege/game-info/operators/hibana"
    },
    {
        titulo: "Echo",
        descricao: "Echo é um operador defensor equipado com um drone 'Yokai' que pode se esconder no teto e emitir pulsos ultrassônicos que desorientam os atacantes. Ele é crucial para retardar avanços e negar plantio de bombas.",
        link: "https://www.ubisoft.com/pt-br/game/rainbow-six/siege/game-info/operators/echo"
    },
    {
        titulo: "Mira",
        descricao: "Mira é uma operadora defensora que usa o Espelho Negro, um painel de vidro unidirecional que pode ser colocado em paredes reforçadas, permitindo que a equipe veja os atacantes sem ser vista.",
        link: "https://www.ubisoft.com/pt-br/game/rainbow-six/siege/game-info/operators/mira"
    },
    {
        titulo: "Jackal",
        descricao: "Jackal é um operador atacante que usa o Eyenox Modelo III, um rastreador que pode detectar e revelar pegadas recentes deixadas pelos defensores, ajudando a caçar operadores inimigos escondidos.",
        link: "https://www.ubisoft.com/pt-br/game/rainbow-six/siege/game-info/operators/jackal"
    },
    {
        titulo: "Lesion",
        descricao: "Lesion é um operador defensor que usa minas Gu tóxicas, que ferem e desorientam atacantes quando acionadas. Suas minas são invisíveis e regeneram com o tempo, oferecendo controle de área prolongado.",
        link: "https://www.ubisoft.com/pt-br/game/rainbow-six/siege/game-info/operators/lesion"
    },
    {
        titulo: "Zofia",
        descricao: "Zofia é uma operadora atacante equipada com o KS79 Lifeline, um lançador que dispara tanto granadas concussivas quanto explosivas, permitindo ataques rápidos e multifuncionais contra barricadas e defensores.",
        link: "https://www.ubisoft.com/pt-br/game/rainbow-six/siege/game-info/operators/zofia"
    },
    {
        titulo: "Dokkaebi",
        descricao: "Dokkaebi é uma operadora atacante equipada com o dispositivo 'Logic Bomb', que hackeia dispositivos móveis inimigos, forçando-os a emitir sons altos e revelando a posição dos defensores.",
        link: "https://www.ubisoft.com/pt-br/game/rainbow-six/siege/game-info/operators/dokkaebi"
    },
    {
        titulo: "Maestro",
        descricao: "Maestro é um operador defensor que utiliza as câmeras blindadas 'Evil Eye', que podem disparar raios laser para danificar atacantes e dispositivos, enquanto fornecem vigilância em tempo real.",
        link: "https://www.ubisoft.com/pt-br/game/rainbow-six/siege/game-info/operators/maestro"
    },
    {
        titulo: "Alibi",
        descricao: "Alibi é uma operadora defensora que utiliza dispositivos holográficos 'Prisma' para criar ilusões de si mesma, confundindo os atacantes e revelando suas posições ao serem disparados.",
        link: "https://www.ubisoft.com/pt-br/game/rainbow-six/siege/game-info/operators/alibi"
    },
    {
        titulo: "Lion",
        descricao: "Lion é um operador atacante equipado com o dispositivo de vigilância aérea EE-ONE-D, que detecta movimentos inimigos durante o tempo de ativação, revelando a localização dos defensores que se movem.",
        link: "https://www.ubisoft.com/pt-br/game/rainbow-six/siege/game-info/operators/lion"
    },
    {
        titulo: "Finka",
        descricao: "Finka é uma operadora atacante que usa o estimulante 'Nanobot', que pode ativar remotamente para aumentar temporariamente a saúde dos aliados, reduzindo o recuo e acelerando a recuperação.",
        link: "https://www.ubisoft.com/pt-br/game/rainbow-six/siege/game-info/operators/finka"
    },
    {
        titulo: "Clash",
        descricao: "Clash é uma operadora defensora equipada com um escudo eletrônico CCE que pode atordoar e retardar atacantes com eletricidade enquanto oferece proteção para si mesma e sua equipe.",
        link: "https://www.ubisoft.com/pt-br/game/rainbow-six/siege/game-info/operators/clash"
    },
    {
        titulo: "Nomad",
        descricao: "Nomad é uma operadora atacante equipada com o Lançador de Airjab, que dispara dispositivos não letais que se fixam em superfícies e empurram inimigos próximos ao serem acionados, desorientando-os temporariamente.",
        link: "https://www.ubisoft.com/pt-br/game/rainbow-six/siege/game-info/operators/nomad"
    },
    {
        titulo: "Kaid",
        descricao: "Kaid é um operador defensor especializado em eletrocutar superfícies metálicas usando o dispositivo Rtila Electroclaw. Ele pode reforçar paredes, escotilhas e arame farpado, dificultando a entrada dos atacantes.",
        link: "https://www.ubisoft.com/pt-br/game/rainbow-six/siege/game-info/operators/kaid"
    },
    {
        titulo: "Mozzie",
        descricao: "Mozzie é um operador defensor que utiliza o 'Pest Launcher' para capturar drones dos atacantes e usá-los contra eles, fornecendo informações valiosas para sua equipe.",
        link: "https://www.ubisoft.com/pt-br/game/rainbow-six/siege/game-info/operators/mozzie"
    },
    {
        titulo: "Gridlock",
        descricao: "Gridlock é uma operadora atacante que utiliza o Trax Stingers, um dispositivo que espalha pequenas armadilhas pontiagudas para ferir e retardar o movimento dos defensores.",
        link: "https://www.ubisoft.com/pt-br/game/rainbow-six/siege/game-info/operators/gridlock"
    },
    {
        titulo: "Nøkk",
        descricao: "Nøkk é uma operadora atacante que utiliza o dispositivo HEL Presence Reduction, tornando-a quase invisível a câmeras inimigas e silenciosa ao se mover.",
        link: "https://www.ubisoft.com/pt-br/game/rainbow-six/siege/game-info/operators/nokk"
    },
    {
        titulo: "Warden",
        descricao: "Warden é um operador defensor que usa o dispositivo 'Smart Glasses' Glance, que permite ver através de fumaça e resistir a efeitos de flash enquanto estiver parado.",
        link: "https://www.ubisoft.com/pt-br/game/rainbow-six/siege/game-info/operators/warden"
    },
    {
        titulo: "Amaru",
        descricao: "Amaru é uma operadora atacante que usa o Garra Hook, um dispositivo que permite alcançar rapidamente janelas e escotilhas para ataques surpresa.",
        link: "https://www.ubisoft.com/pt-br/game/rainbow-six/siege/game-info/operators/amaru"
    },
    {
        titulo: "Goyo",
        descricao: "Goyo é um operador defensor que coloca escudos Vulcan explosivos, que podem ser detonados para causar dano e bloquear passagens.",
        link: "https://www.ubisoft.com/pt-br/game/rainbow-six/siege/game-info/operators/goyo"
    },
    {
        titulo: "Kali",
        descricao: "Kali é uma operadora atacante equipada com o lança-foguetes CSRX 300, que pode destruir dispositivos e criar buracos em superfícies reforçadas.",
        link: "https://www.ubisoft.com/pt-br/game/rainbow-six/siege/game-info/operators/kali"
    },
    {
        titulo: "Wamai",
        descricao: "Wamai é um operador defensor que usa o Sistema Mag-NET, que atrai e detona projéteis lançados por atacantes, desviando granadas e outros dispositivos.",
        link: "https://www.ubisoft.com/pt-br/game/rainbow-six/siege/game-info/operators/wamai"
    },
    {
        titulo: "Iana",
        descricao: "Iana é uma operadora atacante que utiliza o Replicador Gemini, um dispositivo que cria um holograma de si mesma para enganar os defensores.",
        link: "https://www.ubisoft.com/pt-br/game/rainbow-six/siege/game-info/operators/iana"
    },
    {
        titulo: "Oryx",
        descricao: "Oryx é um operador defensor que usa o Remah Dash para romper paredes destrutíveis e derrubar inimigos, oferecendo alta mobilidade.",
        link: "https://www.ubisoft.com/pt-br/game/rainbow-six/siege/game-info/operators/oryx"
    },
    {
        titulo: "Ace",
        descricao: "Ace é um operador atacante equipado com o S.E.L.M.A Aqua Breacher, que destrói superfícies reforçadas em três estágios com cargas hidráulicas.",
        link: "https://www.ubisoft.com/pt-br/game/rainbow-six/siege/game-info/operators/ace"
    },
    {
        titulo: "Melusi",
        descricao: "Melusi é uma operadora defensora que utiliza o Banshee Sonic Defense, um dispositivo que emite um som estridente ao detectar movimento inimigo, retardando-os.",
        link: "https://www.ubisoft.com/pt-br/game/rainbow-six/siege/game-info/operators/melusi"
    },
    {
        titulo: "Zero",
        descricao: "Zero (Sam Fisher) é um operador atacante que utiliza câmeras Argus, que podem ser disparadas em superfícies para vigiar e disparar laser.",
        link: "https://www.ubisoft.com/pt-br/game/rainbow-six/siege/game-info/operators/zero"
    },
    {
        titulo: "Aruni",
        descricao: "Aruni é uma operadora defensora que usa o Surya Gate, um dispositivo que cria barreiras de laser nas portas e janelas, causando dano a inimigos e destruindo dispositivos.",
        link: "https://www.ubisoft.com/pt-br/game/rainbow-six/siege/game-info/operators/aruni"
    },
    {
        titulo: "Flores",
        descricao: "Flores é um operador atacante que utiliza o RCE-Ratero Charge, um drone explosivo que pode ser controlado remotamente para detonar em áreas críticas.",
        link: "https://www.ubisoft.com/pt-br/game/rainbow-six/siege/game-info/operators/flores"
    },
    {
        titulo: "Thunderbird",
        descricao: "Thunderbird é uma operadora defensora que usa o Kona Station, um dispositivo que cura ou revive operadores quando se aproximam dele.",
        link: "https://www.ubisoft.com/pt-br/game/rainbow-six/siege/game-info/operators/thunderbird"
    },
    {
        titulo: "Osa",
        descricao: "Osa é uma operadora atacante equipada com o Talon-8 Clear Shield, um escudo transparente que pode ser colocado em aberturas para proteção e visibilidade.",
        link: "https://www.ubisoft.com/pt-br/game/rainbow-six/siege/game-info/operators/osa"
    },
    {
        titulo: "Thorn",
        descricao: "Thorn é uma operadora defensora que usa o Razorbloom Shell, um dispositivo explosivo que é ativado por proximidade e pode causar dano significativo aos atacantes.",
        link: "https://www.ubisoft.com/pt-br/game/rainbow-six/siege/game-info/operators/thorn"
    },
    {
        titulo: "Azami",
        descricao: "Azami é uma operadora defensora que utiliza o Kiba Barrier, um dispositivo que lança um composto expansivo para bloquear janelas, portas e buracos em paredes.",
        link: "https://www.ubisoft.com/pt-br/game/rainbow-six/siege/game-info/operators/azami"
    },
    {
        titulo: "Sens",
        descricao: "Sens é uma operadora atacante equipada com o dispositivo R.O.U. Projector, que cria uma tela de fumaça para ocultar movimento e posicionamento de sua equipe.",
        link: "https://www.ubisoft.com/pt-br/game/rainbow-six/siege/game-info/operators/sens"
    },
    {
        titulo: "Grim",
        descricao: "Grim é um operador atacante que usa o Kawan Hive Launcher, um dispositivo que libera enxames de microdrones que marcam inimigos ao serem ativados.",
        link: "https://www.ubisoft.com/pt-br/game/rainbow-six/siege/game-info/operators/grim"
    },
    {
        titulo: "Solis",
        descricao: "Solis é uma operadora defensora equipada com o SPEC-IO Electro-Sensor, que detecta dispositivos eletrônicos inimigos através de paredes e objetos.",
        link: "https://www.ubisoft.com/pt-br/game/rainbow-six/siege/game-info/operators/solis"
    },
];


