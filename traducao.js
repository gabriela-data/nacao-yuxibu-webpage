/* translate.js
   Tradução dinâmica usando data-i18n.
   - Mantém textos originais como fallback.
   - Salva idioma no localStorage (key: 'site_lang').
   - Detecta navigator.language na primeira visita.
*/

(function () {
  // Dicionário de traduções.
  // As chaves devem corresponder aos valores de data-i18n no HTML.
  const translations = {
    pt: {
      "meta.title": "Plataforma Livre da Nação Yuxibu",
      "site.title": "Plataforma Livre da Nação Yuxibu",
      "section1.title": "INÍCIO",
      "section1.heading": "<span class='linha-hero-1'>Plataforma Livre</span><span class='linha-hero-2'>Nação Yuxibu</span>",
      "section1.lead": "Verdade na unidade: do coração da floresta para o mundo!",
      "section1.cta": "Apoie o desenvolvimento da plataforma",
      "section2.title": "MANIFESTO",
      "section2.p1": "O ciberespaço também é território!",
      "section2.p2": "Defendemos que os povos indígenas ocupem e transformem o ambiente digital com base em seus próprios saberes, fortalecendo suas tradições, modos de vida e luta por direitos.",
      "section2.p3": "Ao ser desenvolvido como Software Livre, a Plataforma Livre da Nação Yuxibu afirma a liderança indígena e demonstra como tecnologias digitais podem ser usadas de forma inclusiva, com autonomia, identidade e saberes ancestrais no centro.",
      "section3.title": "O COLETIVO Nação Yuxibu",
      "section3.p1": "O Coletivo da Nação Yuxibu é um grupo de pessoas que apoiam a liderança indígena reunindo saberes ancestrais, cuidado ético e colaboração cultural, educativa e tecnológica.",
      "section3.p2": "Promove apoio respeitoso, experiências imersivas e iniciativas comprometidas com as tradições e valores do povo Huni Kuĩ.",
      "section3.p3": "O projeto de extensão da Plataforma Livre da Nação Yuxibu foi iniciado por meio do Coletivo da Nação Yuxibu.",
      "section3.p4": "O trabalho do Coletivo se baseia em cinco pilares, ilustrados na imagem abaixo.",
      "pillar.support.title": "APOIO INDÍGENA E HOSPITALIDADE",
      "pillar.support.p": "Garantem condições apropriadas, seguras e respeitosas para a participação dos povos indígenas em trocas interculturais, preservando sua autonomia e modos tradicionais de conduzir atividades.",
      "pillar.ceremonies.title": "CERIMONIAS TRADICIONAIS",
      "pillar.ceremonies.p": "As cerimônias lideradas pelo povo Huni Kuĩ são rituais ancestrais para aprendizagem e reconexão com saberes indígenas e o sagrado.",
      "pillar.integrative.title": "EXPERIÊNCIA INTEGRATIVA YUXIBU NATION",
      "pillar.integrative.p": "Experiências integrativas são atividades guiadas que preparam o espaço físico, emocional e relacional dos participantes antes das cerimônias, facilitando a integração profunda da experiência.",
      "pillar.care.title": "CUIDADO E ÉTICA",
      "pillar.care.p": "O cuidado é guiado por princípios éticos e práticas de prevenção de riscos, com respeito ao bem-estar físico e emocional, incluindo avaliações de histórico de saúde e entrevistas conduzidas por profissionais.",
      "pillar.cultural.title": "COLABORAÇÃO CULTURAL",
      "pillar.cultural.p": "Promove a troca entre saberes tradicionais indígenas, instituições educativas e sociedade civil, incentivando produção artística e difusão de saberes indígenas por meio de redes, pesquisas e projetos.",
      "section3.follow": "Siga o Coletivo da Nação Yuxibu no Instagram:",
      "section4.title": "A PLATAFORMA",
      "section4.p1": "A Plataforma Livre da Nação Yuxibu é uma plataforma online desenvolvida como Software Livre. Por meio de tecnologias digitais, visa apoiar o povo indígena Huni Kuĩ a compartilhar a visão de mundo do seu povo sobre modos de vida humana e os direitos da natureza.",
      "section4.p2": "Em observância aos direitos constitucionais dos povos indígenas, garantidos pelo Art. 231 da Constituição de 1988, a plataforma foca em um grupo étnico para que possa expressar sua visão de mundo, organização social, costumes, línguas, crenças e tradições.",
      "section4.article231": "Art. 231. Os povos indígenas são reconhecidos como detentores de sua organização social, costumes, línguas, crenças e tradições, e dos direitos originários sobre as terras que tradicionalmente ocupam. À União cabe demarcar tais terras e proteger e garantir o respeito a todas as suas posessões.",
      "section4.p3": "As funcionalidades da Plataforma Livre da Nação Yuxibu estão organizadas em quatro áreas essenciais: cultural, socioambiental, educativa e financeira.",
      "section4.cultural.title": "CULTURAL",
      "section4.cultural.p": "Publicação da programação de atividades culturais planejadas e criação de um arquivo que documente práticas e atividades realizadas.",
      "section4.socio.title": "SOCIOAMBIENTAL",
      "section4.socio.p": "Interação entre membros para troca de serviços e experiências, fortalecendo relações interculturais e o relacionamento com a natureza.",
      "section4.educational.title": "EDUCACIONAL",
      "section4.educational.p": "Espaço para aulas ministradas por indígenas, bem como formação de colaboradores.",
      "section4.financial.title": "FINANCEIRO",
      "section4.financial.p": "Espaço livre e seguro para que indígenas vendam sua arte e artesanato através de um marketplace, e recebam doações, em conformidade com princípios de economia criativa e sustentável.",
      "section4.whyfree.title": "POR QUE SOFTWARE LIVRE?",
      "section4.whyfree.p1": "O acesso à educação e informação, e a difusão de conhecimento, estão relacionados a movimentos de tecnologia aberta. O Software Livre se destaca por permitir uso, estudo, cópia e distribuição, podendo ser modificado para atender realidades culturais específicas.",
      "section4.whyfree.p2": "O Software Livre oferece às comunidades indígenas a oportunidade de customizar tecnologia conforme suas realidades, fortalecendo redes colaborativas e oferecendo alternativa ao colonialismo digital.",
      "section4.whyfree.p3": "A Plataforma Livre está sendo desenvolvida como Software Livre com servidor próprio — um espaço de armazenamento dedicado em servidor da UFBA — para fins específicos, exemplificando outra forma de uso das tecnologias digitais, com autonomia no centro.",
      "section4.research.title": "PESQUISA E PROJETO DE EXTENSÃO UNIVERSITÁRIA",
      "section4.research.p": "Estamos pesquisando um modelo de design semio-participativo para garantir que a plataforma atenda às necessidades específicas dos usuários, respeite práticas culturais e promova ambiente colaborativo — um processo de \"co-projetar\" com os povos tradicionais.",
      "section4.research.p2": "O projeto é apoiado pelas chamadas PAEx 2025 e Pibiex 2025 da UFBA, que financiam bolsas de extensão universitária.",
      "section5.title": "EQUIPE",
      "section5.p": "O projeto está sendo desenvolvido por equipe de pesquisadores, estudantes e voluntários do Onda Digital — Grupo de Pesquisa e Extensão em Computação, Educação e Sociedade — no Instituto de Computação da UFBA.",
      "team.allan.name": "ALLAN THALES",
      "team.allan.role": "Analista de TI — Analista de infraestrutura, desenvolvedor de Software Livre e voluntário no projeto.",
      "team.aurelio.name": "AURÉLIO HECKERT",
      "team.aurelio.role": "Programador — Engenheiro de software, especialista front-end, desenvolvedor de Software Livre e voluntário.",
      "team.valeria.name": "VALÉRIA ROSA",
      "team.valeria.role": "Pesquisadora em IHC — Professora com doutorado e integrante do grupo de pesquisa.",
      "section6.title": "APOIE-NOS",
      "section6.p1": "O projeto avançou em diversas áreas, mas precisamos ampliar parcerias para acelerar desenvolvimento, financiar a participação de indígenas e viabilizar visitas de campo.",
      "section6.getin.title": "ENTRE EM CONTATO",
      "form.name": "Nome completo — Seu nome",
      "form.email": "Email — seu@email.com",
      "form.phone": "Telefone",
      "form.city": "Cidade/Estado — Ex: Salvador, BA",
      "form.message": "Mensagem — Conte como gostaria de ajudar…",
      "form.submit": "Enviar",
      "section6.email": "Prefere falar diretamente? Envie email para nacaoyuxibu@ufba.br",
      "footer.copyright": "© 2025 Plataforma Livre da Nação Yuxibu"
    },

    en: {
      "meta.title": "Yuxibu Nation Free Platform",
      "site.title": "Yuxibu Nation Free Platform",
      "section1.title": "HOME",
      "section1.heading": "<span class='linha-hero-1'>Yuxibu Nation</span><span class='linha-hero-2'>Free Platform</span>",
      "section1.lead": "Truth in unity: from the heart of the forest to the world!",
      "section1.cta": "Support the development of the platform",
      "section2.title": "MANIFEST",
      "section2.p1": "Cyberspace is territory too!",
      "section2.p2": "We advocate for Indigenous peoples to occupy and transform the digital environment based on their own knowledge, strengthening their traditions, ways of life, and struggle for rights.",
      "section2.p3": "By being developed as Free Software, the Yuxibu Nation Free Platform affirms Indigenous leadership and demonstrates how digital technologies can be used inclusively, with autonomy, identity, and ancestral knowledge at their core.",
      "section3.title": "THE COLLECTIVE",
      "section3.p1": "The Yuxibu Nation Collective is a group of people who support Indigenous leadership by bringing together ancestral knowledge, ethical care, and cultural, educational, and technological collaboration.",
      "section3.p2": "It promotes respectful support, immersive experiences, and initiatives committed to the traditions and values of the Huni Kuĩ people.",
      "section3.p3": "The Yuxibu Nation Free Platform extension project was initiated through the Yuxibu Nation Collective.",
      "section3.p4": "The Yuxibu Nation Collective’s work is based on five pillars, illustrated in the image below.",
      "pillar.support.title": "INDIGENOUS SUPPORT AND HOSPITALITY",
      "pillar.support.p": "Indigenous support and hospitality ensure appropriate, safe, and respectful conditions for the participation of Indigenous peoples in intercultural exchange, while preserving their autonomy and traditional ways of conducting their activities. The entire process is guided by responsibility and ethics.",
      "pillar.ceremonies.title": "TRADITIONAL CEREMONIES",
      "pillar.ceremonies.p": "The ceremonies led by the Huni Kuĩ people are ancestral rituals for learning and reconnecting with Indigenous knowledge and the sacred. Each ceremony is grounded in living tradition, responsibility, and a commitment to collective care.",
      "pillar.integrative.title": "YUXIBU NATION INTEGRATIVE EXPERIENCE",
      "pillar.integrative.p": "The integrative experiences are carefully guided activities that prepare and organize participants’ physical, emotional, and relational space before the ceremonies. Through body-based, sensory, and awareness practices, they facilitate grounding, perceptual openness, and the deep integration of the experience that participants will have during the traditional Huni Kuĩ ceremony.",
      "pillar.care.title": "CARE AND ETHICS",
      "pillar.care.p": "Care for participants is guided by ethical principles and risk-prevention practices, with respect for physical and emotional well-being. Before the ceremonies, health-history assessments and interviews are conducted with attentive and responsible listening by qualified professionals. This ensures the confidentiality of information, an understanding of individual limits, and appropriate support throughout the entire process.",
      "pillar.cultural.title": "CULTURAL COLLABORATION",
      "pillar.cultural.p": "Cultural collaboration promotes exchange among traditional Indigenous knowledge, educational institutions, and civil society. Its purpose is to encourage artistic production and the dissemination of Indigenous peoples’ knowledge by building networks and developing research and extension projects, presentations, exhibitions, classes, and immersive experiences that foster the exchange of studies and experiences.",
      "section3.follow": "Follow the Yuxibu Nation Collective on Instagram:",
      "section4.title": "THE PLATFORM",
      "section4.p1": "The Yuxibu Nation Free Platform is an online platform being developed as Free Software. Through digital technologies, it aims to support Indigenous people of the Huni Kuĩ ethnic group in sharing their people’s worldview concerning human ways of life and the rights of nature.",
      "section4.p2": "In observance of the constitutional rights of Indigenous peoples, guaranteed by Article 231 of Chapter VIII of Brazil’s 1988 Constitution, the platform focuses on one ethnic group so that it can express its people’s worldview, social organization, customs, languages, beliefs, and traditions.",
      "section4.article231": "Article 231. Indigenous peoples are recognized as having their own social organization, customs, languages, beliefs, and traditions, as well as original rights to the lands they traditionally occupy. The Federal Government is responsible for demarcating these lands and for protecting and ensuring respect for all their property.",
      "section4.p3": "The features of the Yuxibu Nation Free Platform are organized into four essential areas: cultural, socio-environmental, educational, and financial.",
      "section4.cultural.title": "CULTURAL",
      "section4.cultural.p": "Publication of the schedule of planned cultural activities and creation of an archive documenting the practices and activities carried out.",
      "section4.socio.title": "SOCIO-ENVIRONMENTAL",
      "section4.socio.p": "Interaction among members for the exchange of services and experiences, strengthening intercultural relationships that create new forms of social relationships and relationships with nature.",
      "section4.educational.title": "EDUCATIONAL",
      "section4.educational.p": "A space for classes taught by Indigenous people themselves, as well as for training collaborators.",
      "section4.financial.title": "FINANCIAL",
      "section4.financial.p": "A free and secure space where Indigenous people can sell their art, handicrafts, and other items through a marketplace, as well as receive donations, in accordance with the principles of a creative and sustainable economy.",


      "section4.whyfree.title": "WHY FREE SOFTWARE?",

      "section4.whyfree.p1": "Access to education and information, as well as the dissemination of knowledge, are fundamentally connected to open-technology movements. Among these, the Free Software movement stands out. The adoption of Free Software in support of equitable and inclusive human development is considered an alternative for democratizing access to technology.",

      "section4.whyfree.p2": "Free Software offers Indigenous communities and other marginalized groups a powerful opportunity to customize technology according to their cultural and social realities. Its use can also strengthen collaborative networks, since its development is often based on sharing knowledge and cooperation among different peoples and cultures.",

      "section4.whyfree.p3": "In a social context dominated by the platformization of human life, the Yuxibu Nation Free Platform is being developed as Free Software with its own data server—a dedicated storage space on a UFBA server—and for specific purposes. It offers an important example of another way to use digital technologies, one in which autonomy is central.",

      "section4.research.title": "RESEARCH AND UNIVERSITY EXTENSION PROJECT",

      "section4.research.p": "We are conducting research into the adoption of a semio-participatory design model to ensure that the Yuxibu Nation Free Platform not only meets users’ specific needs, but also respects their cultural practices and promotes a collaborative environment. Building an interface based on the semio-participatory design methodology goes beyond the process of “designing for” and moves toward a process of “designing with.”",

      "section4.research.p2": "The project is supported by UFBA’s PAEx 2025 and Pibiex 2025 calls for proposals, which fund two university extension scholarships.",


      "section5.title": "TEAM",
      "section5.p": "This project is being developed by a team of researchers, students, and volunteers from Onda Digital—the Research and University Extension Group in Computing, Education, and Society—within the Department of Interdisciplinary Computing at UFBA’s Institute of Computing.",

      "team.allan.name": "ALLAN THALES",
      "team.allan.function": "IT Analyst",
      "team.allan.role": "Infrastructure analyst, Free Software developer, and volunteer with the Yuxibu Nation Free Platform.",

      "team.aurelio.name": "AURÉLIO HECKERT",
      "team.aurelio.function": "Programmer",
      "team.aurelio.role": "Software engineer, front-end specialist, Free Software developer, and volunteer with the Yuxibu Nation Free Platform.",

      "team.caio.name": "CAIO ALMEIDA",
      "team.caio.function": "Software Engineer",
      "team.caio.role": "Holds bachelor’s and master’s degrees in Computer Science from the Federal University of Bahia. Software engineer and volunteer with the Yuxibu Nation Free Platform.",

      "team.debora.name": "DÉBORA ABDALLA SANTOS",
      "team.debora.function": "General Coordinator",
      "team.debora.role": "Full Professor with a PhD in the Department of Interdisciplinary Computing at the Institute of Computing of the Federal University of Bahia, and a permanent faculty member of the Graduate Program in Knowledge Dissemination. Coordinator of the Yuxibu Nation Free Platform research and university extension project and leader of the Onda Digital research and extension group.",

      "team.diego.name": "DIEGO ZABOT",
      "team.diego.function": "HCI Researcher",
      "team.diego.role": "Assistant Professor in UFBA’s Department of Interdisciplinary Computing and a researcher in Human–Computer Interaction, with an emphasis on participatory design and educational technologies.",

      "team.gabriela.name": "GABRIELA ALMEIDA",
      "team.gabriela.function": "University Extension Scholarship Recipient",
      "team.gabriela.role": "Researcher in Onda Digital’s Yuxibu Nation Free Platform development group.",

      "team.ise.name": "ISE PRAZERES",
      "team.ise.function": "Graphic Designer",
      "team.ise.role": "Designer and marketing professional with 15 years of creative experience. Throughout her career, she has developed graphic projects that combine strategy, sensitivity, and aesthetics.",

      "team.pedro.name": "PEDRO TUPINAMBÁ",
      "team.pedro.function": "University Extension Scholarship Recipient",
      "team.pedro.role": "Researcher in Onda Digital’s Yuxibu Nation Free Platform development group.",

      "team.solon.name": "SOLON",
      "team.ise.function": "Product Owner",
      "team.solon.role": "Cultural facilitator and Product Owner of the Yuxibu Nation Platform. Trained in Ecopsychology by the Brazilian Institute of Ecopsychology (IBE), he acts as a bridge between Huni Kuĩ communities in Acre and urban society, bringing together ancestral knowledge, Free Software, and practices for reconnecting with nature.",

      "team.thiago.name": "THIAGO MAGALHÃES DA SILVA",
      "team.thiago.function": "lawyer",
      "team.thiago.role": "Holds a bachelor’s degree in Law and a teaching degree in Philosophy from the State University of Santa Cruz (UESC/BA). Attorney registered with the Bahia Chapter of the Brazilian Bar Association under OAB/BA No. 40748 and a member of the Yuxibu Nation Free Platform research group.",

      "team.tulio.name": "TÚLIO AUGUSTOS",
      "team.tulio.function": "University Extension Scholarship Recipient",
      "team.tulio.role": "Systems analyst and co-design researcher who works with the Yuxibu Nation Free Platform’s Design and Development group.",

      "team.valeria.name": "VALÉRIA ROSA",
      "team.valeria.function": "HCI Researcher",
      "team.valeria.role": "Professor with a PhD at UESB and a member of the Yuxibu Nation Free Platform research group.",

      "section6.title": "SUPPORT US",
      "section6.p1": "The project has made progress in important areas, particularly in establishing a solid technical foundation. At this stage, we need to expand our partnerships.",
      "section6.getin.title": "GET IN TOUCH",
      "form.name": "Full name — Your name",
      "form.email": "Email — your@email.com",
      "form.phone": "Phone",
      "form.city": "City/State — Example: Salvador, BA",
      "form.message": "Message — Tell us how you would like to help…",
      "form.submit": "Submit",
      "section6.email": "Would you rather speak with us directly? Email us at nacaoyuxibu@ufba.br",
      "footer.copyright": "© 2025 Yuxibu Nation Free Platform"
    },

    es: {
      // Espaço para traduções em espanhol
      "meta.title": "Plataforma Libre de la Nación Yuxibu",
      "site.title": "Plataforma Libre de la Nación Yuxibu",
      "section1.title": "INICIO",
      "section1.heading": "<span class='linha-hero-1'>Plataforma Libre</span><span class='linha-hero-2'>Nación Yuxibu</span>",
      "section1.lead": "Verdad en la unidad: ¡del corazón del bosque al mundo!",
      "section1.cta": "Apoya el desarrollo de la plataforma"
    }
  };

  const LANG_KEY = 'site_lang';
  const defaultLang = 'pt';
  const availableLangs = Object.keys(translations);
  // Mapa de bandeiras para exibição no seletor
  const flagMap = { pt: '🇧🇷', en: '🇬🇧', es: '🇪🇸' };

  // Helper: obter idioma salvo ou detectar do navegador
  function detectLanguage() {
    const saved = localStorage.getItem(LANG_KEY);
    if (saved && availableLangs.includes(saved)) return saved;

    const nav = navigator.language || navigator.userLanguage || '';
    const code = nav.toLowerCase();
    if (code.startsWith('pt')) return 'pt';
    if (code.startsWith('es')) return 'es';
    if (code.startsWith('en')) return 'en';
    return defaultLang;
  }

  // Salva o texto original presente no HTML como fallback
  function cacheOriginalText() {
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      // Armazena apenas uma vez
      if (!el.dataset.originalText) {
        // Usa innerHTML para preservar marcação interna (se houver).
        el.dataset.originalText = el.innerHTML.trim();
      }
    });
  }

  // Aplica traduções para todos os elementos com data-i18n
  function applyTranslations(lang) {
    const dict = translations[lang] || {};
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      const translated = dict[key];

      if (translated !== undefined && translated !== null) {
        // Preserva markup se o tradutor contiver HTML (use innerHTML conscientemente)
        el.innerHTML = translated;
      } else {
        // Fallback para texto original presente no HTML (ou para chave vazia)
        el.innerHTML = el.dataset.originalText || '';
      }
    });

    // Ajusta atributo lang do documento para acessibilidade/SEO
    if (lang === 'pt') {
      document.documentElement.lang = 'pt-BR';
    } else if (lang === 'es') {
      document.documentElement.lang = 'es';
    } else if (lang === 'en') {
      document.documentElement.lang = 'en';
    } else {
      document.documentElement.lang = lang;
    }

    // Atualiza botões de idioma
    document.querySelectorAll('.lang-btn').forEach((btn) => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    // Atualiza o botão de idioma atual, se presente
    const idiomaAtualBtn = document.getElementById('idiomaAtual');
    if (idiomaAtualBtn) {
      const flag = flagMap[lang] || '';
      idiomaAtualBtn.innerHTML = `<span class="bandeira">${flag}</span> ${lang.toUpperCase()}`;
    }
  }

  // Muda idioma e persiste escolha
  function setLanguage(lang) {
    if (!availableLangs.includes(lang)) lang = defaultLang;
    localStorage.setItem(LANG_KEY, lang);
    applyTranslations(lang);
  }

  // Inicialização
  function init() {
    cacheOriginalText();

    // Preenche a lista de idiomas no seletor (se existir no HTML)
    const idiomaAtualBtn = document.getElementById('idiomaAtual');
    const lista = document.getElementById('listaIdiomas');
    if (lista) {
      lista.innerHTML = '';
      availableLangs.forEach((l) => {
        const li = document.createElement('li');
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'lang-btn';
        btn.dataset.lang = l;
        btn.innerHTML = `<span class="bandeira">${flagMap[l] || ''}</span> ${l.toUpperCase()}`;
        li.appendChild(btn);
        lista.appendChild(li);
      });
    }

    // Ligando eventos aos botões (ou qualquer seletor de idioma que o site usar)
    document.querySelectorAll('.lang-btn').forEach((btn) => {
      btn.addEventListener('click', function () {
        const lang = btn.dataset.lang;
        setLanguage(lang);
        if (lista) lista.style.display = 'none';
      });
    });

    // Abre/fecha lista ao clicar no botão de idioma atual
    if (idiomaAtualBtn && lista) {
      idiomaAtualBtn.addEventListener('click', () => {
        lista.style.display = lista.style.display === 'block' ? 'none' : 'block';
      });
      // Fecha ao clicar fora
      document.addEventListener('click', (e) => {
        if (!idiomaAtualBtn.contains(e.target) && !lista.contains(e.target)) {
          lista.style.display = 'none';
        }
      });
    }

    // Detecta idioma inicial e aplica
    const initial = detectLanguage();
    setLanguage(initial);
  }

  // Aguarda o DOM estar pronto
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();