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
      "header.home":"Home",
      "header.manifesto":"Manifesto",
      "header.povo": "Povo Huni Kuī",
      "header.movimento": "O Coletivo",
      "header.plataforma": "A Plataforma",
      "header.sobre": "Equipe",
      "header.publicacoes": "Publicações",
      "header.apoie": "Apoie",
      "meta.title": "Plataforma Livre da Nação Yuxibu",
      "site.title": "Plataforma Livre da Nação Yuxibu",
      "section1.title": "INÍCIO",
      "section1.heading": "<span class='linha-hero-1'>Plataforma Livre</span><span class='linha-hero-2'>Nação Yuxibu</span>",
      "section1.lead": "Verdade em unidade: do coração da floresta para o mundo!",
      "section1.cta": "Apoie a construção da plataforma",
      "section2.title": "MANIFESTO",
      "section2.p1": "O ciberespaço também é território!",
      "section2.p2": "Os povos originários devem ocupar e transformar o ambiente virtual a partir de seus próprios conhecimentos, fortalecendo suas tradições, modos de vida e luta por direitos.",
      "section2.p3": "A Plataforma Livre Nação Yuxibu, ao ser desenvolvida como Software Livre, afirma o protagonismo indígena e mostra como é possível o uso inclusivo das tecnologias digitais, nas quais a autonomia, a identidade e o saber ancestral se fazem presentes.",

      "section3.title": "O COLETIVO Nação Yuxibu",

      "section3.p1": "O coletivo Nação Yuxibu é um grupo de pessoas que apoiam o protagonismo indígena, integrando saberes ancestrais, cuidado ético e articulação cultural, educacional e tecnológica. Promove acolhimento digno, vivências e ações comprometidas com as tradições e os valores do povo Huni Kuī.",

      "section3.p2": "Foi pelo Coletivo Nação Yuxibu que iniciamos o projeto de pesquisa e extensão Plataforma Livre Nação Yuxibu.",

      "section3.p3": "O Coletivo Nação Yuxibu atua embasado em 5 pilares ilustrados na imagem a seguir:",

      "pillar.support.title": "ACOLHIMENTO INDÍGENA",
      "pillar.support.p": "O acolhimento indígena garante condições adequadas, seguras e respeitosas para a presença dos povos originários na troca intercultural, preservando a autonomia e os modos tradicionais de condução nas suas atividades. Todo o processo é orientado com responsabilidade e ética.",

      "pillar.ceremonies.title": "CERIMONIAS TRADICIONAIS",
      "pillar.ceremonies.p": "As cerimônias conduzidas pelo povo Huni Kui são rituais ancestrais de aprendizado e reconexão com os saberes originários e o sagrado. Cada cerimônia acontece a partir da tradição viva e da responsabilidade e compromisso com o cuidado coletivo.",

      "pillar.integrative.title": "VIVÊNCIA INTEGRATIVA",
      "pillar.integrative.p": "As vivências integrativas são experiências cuidadosamente conduzidas que preparam e organizam o campo físico, emocional e relacional dos participantes, anterior às cerimônias. Por meio de práticas corporais, sensoriais e de consciência, facilitam o enraizamento, a abertura perceptiva e a integração profunda da experiência que será vivida na cerimônia tradicional Huni Kui.",
      
      "pillar.care.title": "CUIDADO E ÉTICA",
      "pillar.care.p": "O cuidado com os participantes é orientado por princípios éticos e prevenção de riscos, respeitando o bem-estar físico e emocional. Antes das cerimônias, são realizadas anamneses e entrevistas com escuta atenta e responsável, conduzidas por profissionais qualificados, garantindo sigilo das informações, compreensão dos limites e suporte adequado ao longo de todo o processo.",

      "pillar.cultural.title": "ARTICULAÇÃO CULTURAL",
      "pillar.cultural.p": "A articulação cultural promove o intercâmbio entre os saberes tradicionais indígenas, as instituições educacionais e a sociedade civil, a fim de promover a produção artística e difusão dos conhecimentos dos povos originários através da construção de redes, projetos de pesquisa e extensão, apresentações, exposições, aulas e vivências que visem proporcionar uma troca de estudos e experiências.",

      "section3.follow": "Siga o Coletivo Nação Yuxibu no Instagram:",

      "section4.title": "A PLATAFORMA",
      "section4.p1": "A Plataforma Livre Nação Yuxibu consiste no desenvolvimento de uma plataforma online, na modalidade software livre, cujo propósito é apoiar, por meio de tecnologias digitais, indígenas da etnia Huni Kuĩ, no movimento de compartilhamento da cosmovisão de seu povo em relação a forma de viver humana e dos direitos da natureza.",

      "section4.p2": "Em respeito aos direitos constitucionais dos povos indígenas, garantidos no Capítulo VIII Art. 231 da  constituição de 1988, a plataforma se concentra em uma Etnia para que possa expressar a cosmovisão de cada povo, sua organização social, costumes, línguas, crenças e tradições.",
      
      "section4.article231": "Art. 231. São reconhecidos aos índios sua organização social, costumes, línguas, crenças e tradições, e os direitos originários sobre as terras que tradicionalmente ocupam, competindo à União demarcá-las, proteger e fazer respeitar todos os seus bens.",

      "section4.p3": "As funcionalidades da Plataforma Livre Nação Yuxibu são categorizadas em quatro áreas essenciais: cultural, socioambiental, educacional e financeira.",

      "section4.cultural.title": "CULTURAL",
      "section4.cultural.p": "Divulgação do cronograma de atividades culturais planejadas e a construção de um acervo para documentar práticas e atividades realizadas.",

      "section4.socio.title": "SOCIOAMBIENTAL",
      "section4.socio.p": "Interação entre os membros para trocas de serviços e experiências, fortalecendo relações interculturais que criem novas formas de relações sociais e com a natureza.",

      "section4.educational.title": "EDUCACIONAL",
      "section4.educational.p": "Espaço para a realização de aulas ministradas pelos próprios indígenas, bem como para fornecer treinamentos aos colaboradores.",

      "section4.financial.title": "FINANCEIRO",
      "section4.financial.p": "Espaço livre e seguro para os indígenas venderem sua arte, artesanato e objetos diversos (marketplace), além de viabilizar doações, em consonância aos princípios de economia criativa e sustentável.",

      "section4.whyfree.title": "POR QUE SOFTWARE LIVRE?",
      "section4.whyfree.p1": "O acesso à educação, à informação e à disseminação do conhecimento estão fundamentalmente relacionados aos movimentos de tecnologias abertas. Dentre esses movimentos, o movimento de Software Livre é o que mais se destaca. Considera-se que a adoção de softwares livres em prol do desenvolvimento humano com igualdade e equidade, é uma alternativa ao acesso democrático às tecnologias, dado que o software livre é aquele disponível com a permissão para qualquer um usá-lo, estudá-lo, copiá-lo, e distribuí-lo, seja na sua forma original ou com modificações, seja gratuitamente ou com custo (STALLMAN, 2002).",

      "section4.whyfree.p2": "O software livre oferece uma oportunidade poderosa para que as comunidades indígenas e outros grupos subalternizados personalizem a tecnologia de acordo com suas realidades culturais e sociais. Além disso, o uso do software livre pode fortalecer redes colaborativas, já que seu desenvolvimento frequentemente se baseia no compartilhamento de conhecimento e na cooperação entre diferentes povos e culturas. Dessa forma, ele se apresenta como uma alternativa viável para enfrentar as desigualdades impostas pelo chamado colonialismo digital, abrindo caminhos para uma tecnologia verdadeiramente inclusiva e participativa.",

      "section4.whyfree.p3": "Em um contexto social dominado pela plataformização do viver humano, a Plataforma Livre Nação Yuxibu, ao ser desenvolvida como software livre, com servidor de dados próprio (um espaço de disco no servidor da UFBA), para fins específicos, traz um importante resultado em mostrar como é possível uma outra forma de uso das tecnologias digitais, onde a autonomia se faz presente.",


      "section4.research.title": "PROJETO DE PESQUISA E EXTENSÃO",
      "section4.research.p": "Desenvolvemos pesquisa no processo de adoção de um modelo de design semioparticipativo para garantir que a Plataforma Livre Nação Yuxibu não só atenda às necessidades específicas dos usuários, mas também respeite suas práticas culturais e promova um ambiente colaborativo.",
      "section4.research.p2": "A construção de uma interface que segue a metodologia de design semioparticipativo vai para além do processo de “fazer para”, em direção ao processo de “fazer com”.",
      "section4.research.p3": "A plataforma está sendo concebida de forma a servir de base para que outros povos tradicionais possam utilizar do modelo desenvolvido com o mesmo propósito de difusão de suas cosmovisões.",
      "section4.research.p4": "Também, serão desenvolvidas capacitações no uso da tecnologia digital, fortalecendo o caráter extensionista do projeto.",
      "section4.research.p5": "Outro diferencial desta plataforma é ser um local seguro para acesso ao conhecimento, saberes e produtos dos povos Huni Kuĩ, por ser uma rede formada e gerida por indígenas e colaboradores que darão credibilidade ao que estará sendo publicado e difundido no ambiente digital.",
      "section4.research.p6": "O projeto conta com apoio dos Editais da UFBA PAEx 2025 e Pibiex 2025, com financiamento de 2 bolsas de extensão universitária. ",
      "section4.research.p7": "Esse projeto está sendo desenvolvido por uma equipe de pesquisadores, estudantes e voluntários integrantes do Grupo de Pesquisa e Extensão em Informática, Educação e Sociedade – Onda Digital, do Departamento de Computação Interdisciplinar do Instituto de Computação da UFBA, como atividade de pesquisa e extensão do Núcleo de Desenvolvimento de Software Livre (NuSoL) em cooperação com o SPIDeLab - Semio-Participatory Interaction Design Research Laboratory da UFBA.  ",


      // TRADUÇÃO SESSÃO EQUIPE (PORTUGUES)
      "section5.title": "EQUIPE",
      "section5.p": "Esse projeto está sendo desenvolvido por uma equipe de pesquisadores, estudantes e voluntários integrantes do Grupo de Pesquisa e Extensão em Informática, Educação e Sociedade – Onda Digital, do Departamento de Computação Interdisciplinar do Instituto de Computação da UFBA, como atividade de pesquisa e extensão do Núcleo de Desenvolvimento de Software Livre (NuSoL) em cooperação com o SPIDeLab - Semio-Participatory Interaction Design Research Laboratory da UFBA.",

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
      "footer.copyright": "© 2025 Plataforma Livre da Nação Yuxibu",
      "support.title": "Apoie a Plataforma Livre Nação Yuxibu",
      "support.p1": "O projeto avançou em áreas importantes, especialmente no que diz respeito à definição de uma base técnica sólida.",
      "support.p2": "No atual momento, precisamos expandir parcerias a fim de:",
      "support.li1": "alavancar o desenvolvimento do software por meio de uma equipe de programadores que possam trabalhar em conjunto com os bolsistas de extensão da UFBA.",
      "support.li2": "realizar viagem de imersão em pelo menos uma aldeia Huni Kuin para continuidade da pesquisa em design semioparticipativo.",
      "support.li3": "Já temos o convite para realizar esse trabalho na aldeia São Vicente, que está localizada às margens do Rio Humaitá, na Terra Indígena (TI) do Rio Humaitá, no município de Tarauacá, no estado do Acre.",
      "support.form.title": "Quero Apoiar",
      "support.form.subtitle": "Preencha o formulário abaixo e entraremos em contato.",
      "support.form.name": "Nome completo *",
      "support.form.name.placeholder": "Seu nome",
      "support.form.email": "E-mail *",
      "support.form.email.placeholder": "seu@email.com",
      "support.form.phone": "Telefone",
      "support.form.phone.placeholder": "(XX) 99999-9999",
      "support.form.city": "Cidade/Estado",
      "support.form.city.placeholder": "Ex.: Salvador – BA",
      "support.form.message": "Mensagem",
      "support.form.message.placeholder": "Conte-nos como gostaria de apoiar...",
      "support.form.submit": "Enviar",
      "support.success.title": "Mensagem enviada com sucesso!",
      "support.success.p1": "Agradecemos o interesse em apoiar a <strong>Plataforma Livre Nação Yuxibu</strong>.",
      "support.success.note": "Fique atento(a) à sua <strong>caixa de entrada</strong> e à pasta de <strong>spam/lixo eletrônico</strong>.<br>Em breve, nossa equipe responderá através do e-mail informado.",
      "support.success.instagram": "Enquanto isso, conheça mais sobre o Coletivo Nação Yuxibu através do Instagram:",
      "support.success.back": "↩ Voltar ao início",
      "publicacoes.title": "Publicações",
      "publicacoes.subtitle": "Produção acadêmica vinculada ao projeto Plataforma Livre Nação Yuxibu, apresentada em congressos, simpósios e eventos científicos.",
      "publicacoes.evento1": "VI CONGRESSO INTERNACIONAL MUNDOS INDÍGENAS, AMÉRICA: Histórias, Territorialidades e Saberes Indígenas (VI COIMI - ABYA YALA)",
      "publicacoes.titulo1": "PLATAFORMA LIVRE NAÇÃO YUXIBU",
      "publicacoes.autor1": "Débora Abdalla Santos",
      "publicacoes.resumo1": "Os povos indígenas têm demonstrado uma incrível capacidade de apropriação criativa das tecnologias digitais, transformando ferramentas modernas em aliadas na luta por reconhecimento e visibilidade. Essas tecnologias têm sido usadas para fortalecer redes de apoio, divulgar suas histórias e culturas para além de suas comunidades e documentar suas práticas e saberes ancestrais. Contudo, o uso dessas ferramentas também traz desafios, como o acesso desigual à infraestrutura digital e a necessidade de proteger suas informações e conhecimentos tradicionais da exploração indevida. A soberania digital é um passo essencial para que os povos indígenas mantenham o controle sobre suas informações e narrativas, reduzindo a dependência de sistemas que podem explorar ou invisibilizar suas vozes. O projeto Plataforma Livre Nação Yuxibu consiste no desenvolvimento de uma plataforma online, na modalidade software livre, cujo propósito é apoiar, por meio de tecnologias digitais, indígenas das etnias da Floresta Amazônica, em especial os Huni Kuin, no movimento de compartilhamento da cosmovisão de seu povo em relação à forma de viver humana e dos direitos da natureza. O projeto avançou em áreas importantes, especialmente no que diz respeito à definição de uma base técnica sólida. Adotamos uma metodologia de design semioparticipativo para construção de uma solução de design de interfaces e interação onde a responsabilidade de codificar e dispor os signos dessa interface é compartilhada entre os usuários dessa plataforma sob a perspectiva da semioparticipação. Em um contexto social dominado pela plataformização do viver humano, a Plataforma Livre Nação Yuxibu, ao ser desenvolvida como software livre, com servidor de dados próprio, para fins específicos, traz um importante resultado em mostrar como é possível uma outra forma de uso das tecnologias digitais, onde a autonomia se faz presente.",
      "publicacoes.anais1": "Anais do evento →",
      "publicacoes.evento2": "XII Conferência Latino-Americana de Interação Humano-Computador (CLICH)",
      "publicacoes.titulo2": "Codesign da Plataforma Livre Nação Yuxibu com o Povo indígena Huni Kuĩ: desafios e reflexões iniciais",
      "publicacoes.autor2": "Túlio Augustus, Diego Zabot, Valéria Rosa, José Nilson Sabóia Kaxinawá (Tuwe), Solon Dutra e Débora Abdalla",
      "publicacoes.resumo2": "Tecnologias digitais têm sido apropriadas por povos indígenas para fortalecer redes de apoio e compartilhar saberes e culturas. Este artigo discute a concepção inicial da Plataforma Livre Nação Yuxibu, voltada ao povo Huni Kuĩ para compartilhar sua cosmovisão nas dimensões cultural, socioambiental, educacional e financeira. A pesquisa adotou o design semioparticipativo para construir a interação em colaboração com a comunidade, apresentando reflexões iniciais sobre decisões técnicas e metodológicas do processo de codesign. Argumenta-se que a articulação entre software livre e cocriação pode favorecer modelos de desenvolvimento tecnológico mais alinhados ao protagonismo indígena e à autonomia de seus saberes no ambiente digital.",
      "publicacoes.anais2": "Anais do evento (em breve) →"
    },

    en: {
      "header.home":"HOME",
      "header.manifesto":"MANIFEST",
      "header.povo": "nation",
      "header.movimento": "the collective",
      "header.plataforma": "the platform",
      "header.sobre": "team",
      "header.publicacoes": "publications",
      "header.apoie": "support",


      "publicacoes.title": "Publications",
      "publicacoes.subtitle": "Academic production linked to the Yuxibu Nation Free Platform project, presented at congresses, symposia, and scientific events.",
      "publicacoes.evento1": "VI INTERNATIONAL CONGRESS OF INDIGENOUS WORLDS, AMERICA: Histories, Territorialities and Indigenous Knowledge (VI COIMI - ABYA YALA)",
      "publicacoes.titulo1": "YUXIBU NATION FREE PLATFORM",
      "publicacoes.autor1": "Débora Abdalla Santos",
      "publicacoes.resumo1": "Indigenous peoples have shown an incredible capacity for creative appropriation of digital technologies, transforming modern tools into allies in the struggle for recognition and visibility. These technologies have been used to strengthen support networks, share their histories and cultures beyond their communities, and document their practices and ancestral knowledge. However, the use of these tools also brings challenges, such as unequal access to digital infrastructure and the need to protect their information and traditional knowledge from misuse. Digital sovereignty is an essential step so that Indigenous peoples retain control over their information and narratives, reducing dependence on systems that may exploit or render their voices invisible. The Yuxibu Nation Free Platform project consists of developing an online platform, in free software mode, whose purpose is to support, through digital technologies, Indigenous peoples of the Amazon Forest, especially the Huni Kuin, in the movement to share their people’s worldview in relation to the human way of life and the rights of nature. The project advanced in important areas, especially with respect to the definition of a solid technical base. We adopted a semi-participatory design methodology to build an interface and interaction design solution where the responsibility for encoding and arranging the signs of that interface is shared among the platform users from the perspective of semi-participation. In a social context dominated by the platformization of human life, the Yuxibu Nation Free Platform, when developed as free software with its own data server for specific purposes, brings an important result by showing how another form of digital technology use is possible, where autonomy is present.",
      "publicacoes.anais1": "Event proceedings →",
      "publicacoes.evento2": "XII Latin American Conference on Human-Computer Interaction (CLICH)",
      "publicacoes.titulo2": "Codesign of the Yuxibu Nation Free Platform with the Huni Kuĩ Indigenous People: initial challenges and reflections",
      "publicacoes.autor2": "Túlio Augustus, Diego Zabot, Valéria Rosa, José Nilson Sabóia Kaxinawá (Tuwe), Solon Dutra, and Débora Abdalla",
      "publicacoes.resumo2": "Digital technologies have been appropriated by Indigenous peoples to strengthen support networks and share knowledge and culture. This article discusses the initial conception of the Yuxibu Nation Free Platform, aimed at the Huni Kuĩ people to share their worldview in the cultural, socio-environmental, educational, and financial dimensions. The research adopted semi-participatory design to build interaction in collaboration with the community, presenting initial reflections on technical and methodological decisions in the codesign process. It is argued that the articulation between free software and co-creation can foster technology development models that are better aligned with Indigenous protagonism and the autonomy of their knowledge in the digital environment.",
      "publicacoes.anais2": "Event proceedings (coming soon) →",
      
      
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


      "section3.title": "THE YUXIBU NATION COLLECTIVE",
      "section3.p1": "The Yuxibu Nation Collective is a group of people who support Indigenous leadership by bringing together ancestral knowledge, ethical care, and cultural, educational, and technological collaboration. It promotes respectful support, immersive experiences, and initiatives committed to the traditions and values of the Huni Kuĩ people.",
      
      "section3.p2": "The Yuxibu Nation Free Platform extension project was initiated through the Yuxibu Nation Collective.",

      "section3.p3": "The Yuxibu Nation Collective’s work is based on five pillars, illustrated in the image below:",

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

      "titulo.plataforma": "Platform under construction",
      "section4.title": "THE PLATFORM",
      "section4.p1": "The Yuxibu Nation Free Platform is an online platform being developed as Free Software. Through digital technologies, it aims to support Indigenous people of the Huni Kuĩ ethnic group in sharing their people’s worldview concerning human ways of life and the rights of nature.",

      "section4.p2": "In observance of the constitutional rights of Indigenous peoples, guaranteed by Article 231 of Chapter VIII of Brazil’s 1988 Constitution, the platform focuses on one ethnic group so that it can express its people’s worldview, social organization, customs, languages, beliefs, and traditions.",

      "section4.article231": "Article 231. Indigenous peoples are recognized as having their own social organization, customs, languages, beliefs, and traditions, as well as original rights to the lands they traditionally occupy. The Federal Government is responsible for demarcating these lands and for protecting and ensuring respect for all their property.",

      "section4.p3": "The features of the Yuxibu Nation Free Platform are organized into four essential areas: cultural, socio-environmental, educational, and financial.",

      "section4.cultural.title": "CULTURAL",
      "section4.cultural.p": "Publication of the schedule of planned cultural activities and creation of an archive documenting the practices and activities carried out.",

      "section4.socio.title": "SOCIO-ENVIRONMENTAL",
      "section4.socio.p": "IInteraction among members for the exchange of services and experiences, strengthening intercultural relationships that create new forms of social relationships and relationships with nature.",

      "section4.educational.title": "EDUCATIONAL",
      "section4.educational.p": "A space for classes taught by Indigenous people themselves, as well as for training collaborators.",

      "section4.financial.title": "FINANCIAL",
      "section4.financial.p": "A free and secure space where Indigenous people can sell their art, handicrafts, and other items through a marketplace, as well as receive donations, in accordance with the principles of a creative and sustainable economy.",



      "section4.whyfree.title": "WHY FREE SOFTWARE?",

      "section4.whyfree.p1": "Access to education and information, as well as the dissemination of knowledge, are fundamentally connected to open-technology movements. Among these, the Free Software movement stands out. The adoption of Free Software in support of equitable and inclusive human development is considered an alternative for democratizing access to technology, since Free Software is made available with permission for anyone to use, study, copy, and distribute it, either in its original form or with modifications, free of charge or for a fee (STALLMAN, 2002).",

      "section4.whyfree.p2": "Free Software offers Indigenous communities and other marginalized groups a powerful opportunity to customize technology according to their cultural and social realities. Its use can also strengthen collaborative networks, since its development is often based on sharing knowledge and cooperation among different peoples and cultures. It therefore provides a viable alternative for addressing the inequalities imposed by so-called digital colonialism, opening pathways toward technology that is truly inclusive and participatory.",

      "section4.whyfree.p3": "In a social context dominated by the platformization of human life, the Yuxibu Nation Free Platform is being developed as Free Software with its own data server—a dedicated storage space on a UFBA server—and for specific purposes. It offers an important example of another way to use digital technologies, one in which autonomy is central.",

      "section4.research.title": "RESEARCH AND UNIVERSITY EXTENSION PROJECT",

      "section4.research.p": "We are conducting research into the adoption of a semio-participatory design model to ensure that the Yuxibu Nation Free Platform not only meets users’ specific needs, but also respects their cultural practices and promotes a collaborative environment.",

      "section4.research.p2": "Building an interface based on the semio-participatory design methodology goes beyond the process of “designing for” and moves toward a process of “designing with.",

      "section4.research.p3": "The platform is being designed to serve as a foundation that other traditional peoples can use to apply the developed model for the same purpose: sharing their worldviews.",

      "section4.research.p4": "Training in the use of digital technology will also be provided, strengthening the project’s university extension dimension.",

      "section4.research.p5": "Another distinctive feature of the platform is that it will be a safe place to access the knowledge, wisdom, and products of the Huni Kuĩ people. As a network formed and managed by Indigenous people and collaborators, it will lend credibility to the content published and shared in the digital environment.",

      "section4.research.p6": "The project is supported by UFBA’s PAEx 2025 and Pibiex 2025 calls for proposals, which fund two university extension scholarships.",

      "section4.research.p7": "This project is being developed by a team of researchers, students, and volunteers from Onda Digital—the Research and University Extension Group in Computing, Education, and Society—within the Department of Interdisciplinary Computing at UFBA’s Institute of Computing. It is a research and university extension initiative of the Free Software Development Center (NuSoL), developed in cooperation with SPIDeLab—the Semio-Participatory Interaction Design Research Laboratory at UFBA.",

      // TRADUÇÃO SESSÃO TIME INGLÊS
      "section5.title": "TEAM",
      "section5.p": "This project is being developed by a team of researchers, students, and volunteers from Onda Digital—the Research and University Extension Group in Computing, Education, and Society—within the Department of Interdisciplinary Computing at UFBA’s Institute of Computing. It is a research and university extension initiative of the Free Software Development Center (NuSoL), developed in cooperation with SPIDeLab—the Semio-Participatory Interaction Design Research Laboratory at UFBA.",

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
      "section6.p1": "The project has made progress in important areas, particularly in establishing a solid technical foundation.",

      "section6.getin.title": "GET IN TOUCH",

      "section6.title": "Walk with us!",
      "section.apoie.financie": "FINANCE",
      "section.apoie.financie.p": "Support the hiring of programmers and trips to the village.",
      "section.apoie.colabore": "CONTRIBUTE",
      "section.apoie.colabore.p": "Promote the work of the Huni Kuī people.",



      "form.name": "Full name — Your name",
      "form.email": "Email — your@email.com",
      "form.phone": "Phone",
      "form.city": "City/State — Example: Salvador, BA",
      "form.message": "Message — Tell us how you would like to help…",
      "form.submit": "Submit",
      "section6.email": "Would you rather speak with us directly? Email us at nacaoyuxibu@ufba.br",
      "footer.copyright": "© 2025 Yuxibu Nation Free Platform",
       
      
      // TRADUÇÃO PÁGINA DE SUPORTE INGLÊS
      "realizacao": "Realization",

      "apoio": "support",

      "support.title": "Support the Yuxibu Nation Free Platform",
      "support.p1": "The project has made progress in important areas, particularly in establishing a solid technical foundation.",
      "support.p2": "At this stage, we need to expand our partnerships in order to:",

      "support.li1": "Accelerate software development through a team of programmers who can work alongside UFBA’s university extension scholarship recipients.",

      "support.li2": "Bring Huni Kuĩ Indigenous people onto the project team by providing financial support for their participation and purchasing computers so they can take part in activities remotely.",

      "support.li3": "Conduct an immersive field visit to at least one Huni Kuĩ village in order to continue the semio-participatory design research. We have already been invited to carry out this work in the village of São Vicente, located on the banks of the Humaitá River, in the Humaitá River Indigenous Territory, in the municipality of Tarauacá, state of Acre",

      "support.form.title": "I Want to Support",
      "support.form.subtitle": "Complete the form below and we will contact you",
      "support.form.name": "Full name",
      "support.form.name.placeholder": "Your name",
      "support.form.email": "E-mail",
      "support.form.email.placeholder": "your@email.com",
      "support.form.phone": "Phone",
      "support.form.phone.placeholder": "(XX) 99999-9999",
      "support.form.city": "City/State",
      "support.form.city.placeholder": "Example: Salvador – BA",
      "support.form.message": "Message",
      "support.form.message.placeholder": "Tell us how you would like to help...",
      "support.form.submit": "Submit",
      "support.success.title": "Message sent successfully!",
      "support.success.p1": "Thank you for your interest in supporting the <strong>Yuxibu Nation Free Platform</strong>.",
      "support.success.note": "Please keep an eye on your <strong>inbox</strong> and <strong>spam/junk folder</strong>.<br>Our team will respond soon through the email provided.",
      "support.success.instagram": "In the meantime, get to know the Yuxibu Nation Collective through Instagram:",
      "support.success.back": "↩ Back to home",

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
  const flagMap = { pt: '🇧🇷', en: '🇬🇧' };

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

    document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
      const key = el.getAttribute('data-i18n-placeholder');
      const translatedPlaceholder = dict[key];
      if (translatedPlaceholder !== undefined && translatedPlaceholder !== null) {
        el.setAttribute('placeholder', translatedPlaceholder);
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