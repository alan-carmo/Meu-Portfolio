/**
 * translations.js — Complete PT-BR / EN dictionary for the portfolio.
 * Keys mirror the structure used in each component.
 */

const translations = {
  pt: {
    // Navbar
    nav: {
      inicio: 'Início',
      sobre: 'Sobre',
      objetivo: 'Objetivo',
      competencias: 'Competências',
      projetos: 'Projetos',
      experiencia: 'Experiência',
      formacao: 'Formação',
      contato: 'Contato',
      openMenu: 'Abrir menu',
      closeMenu: 'Fechar menu',
    },

    // Hero
    hero: {
      badge: 'Disponível para oportunidades',
      title: ['Alan da Silva ', 'do Carmo'],
      subtitle: 'Desenvolvedor de Software | Python & JavaScript',
      description: {
        before: 'Profissional com experiência na área administrativa e financeira, transicionando para o desenvolvimento de software. Combinando visão de negócio com código, crio ',
        highlight1: 'automações inteligentes',
        middle: ', ',
        highlight2: 'soluções web',
        after: ' e sistemas que resolvem problemas reais, com foco em eficiência e impacto.',
      },
      ctaProjects: 'Ver Projetos',
      ctaResume: 'Baixar Currículo',
      ctaContact: 'Contato',
    },

    // About
    about: {
      tagline: 'Conheça minha trajetória',
      title: 'Sobre Mim',
      bio: [
        {
          before: 'Minha jornada profissional começou na ',
          highlight: 'administração e finanças',
          after: ', onde atuei por mais de uma década em funções de análise de crédito, mitigação de riscos e gestão de dados. Essa vivência moldou um olhar afiado para processos, métricas e tomada de decisão baseada em dados.',
        },
        {
          before: 'A busca por ',
          highlight: 'automatizar tarefas repetitivas',
          after: ' e eliminar ineficiências me levou naturalmente ao mundo da programação. Descobri no código a ferramenta perfeita para transformar ideias em soluções concretas — e não parei mais.',
        },
        {
          before: 'Hoje, como ',
          highlight: 'Desenvolvedor de Software',
          after: ', graduado em Análise e Desenvolvimento de Sistemas, combino a maturidade corporativa com habilidades técnicas em',
        },
      ],
      bioSuffix: ' para construir aplicações web, automações e sistemas que fazem a diferença no dia a dia das empresas.',
      quote: '"Minha maior força é entender a dor do negócio e traduzi-la em código eficiente."',
      highlights: [
        { title: 'Experiência Corporativa', text: '+10 anos de vivência em ambientes corporativos, desde faturamento até análise financeira.' },
        { title: 'Formação em TI', text: 'Graduado em Análise e Desenvolvimento de Sistemas, unindo teoria à prática.' },
        { title: 'Visão de Negócio', text: 'Capacidade de traduzir regras de negócio complexas em soluções tecnológicas eficientes.' },
        { title: 'Perfil Analítico', text: 'Mentalidade orientada a dados, resolução de problemas e melhoria contínua de processos.' },
      ],
    },

    // Objective
    objective: {
      tagline: 'Onde quero chegar',
      title: 'Objetivo Profissional',
      roleTitle: 'Desenvolvedor Back-end & Automações',
      p1: {
        before: 'Busco uma oportunidade como ',
        highlight: 'Desenvolvedor de Software',
        after: ' em equipes que valorizem aprendizado contínuo, boas práticas de engenharia de software e impacto real nos resultados do negócio.',
      },
      p2: {
        before: 'Meu foco está em ',
        h1: 'desenvolvimento back-end',
        m1: ', ',
        h2: 'automações com Python',
        m2: ' e ',
        h3: 'aplicações web com JavaScript',
        after: ' — áreas onde posso combinar minha experiência analítica com a capacidade técnica de criar soluções escaláveis e bem estruturadas.',
      },
      commitment: 'Estou comprometido em evoluir rapidamente, contribuir com entregas de qualidade desde o primeiro dia e agregar valor com a minha visão híbrida de negócios e tecnologia.',
    },

    // Skills
    skills: {
      tagline: 'Stack técnica',
      title: 'Competências Técnicas',
      subtitle: 'Tecnologias e habilidades que utilizo para criar soluções eficientes.',
      categories: [
        {
          title: 'Linguagens',
          skills: [
            { name: 'Python', level: 80 },
            { name: 'JavaScript (ES6+)', level: 75 },
            { name: 'C# (.NET)', level: 40 },
          ],
        },
        {
          title: 'Front-end',
          skills: [
            { name: 'HTML5', level: 85 },
            { name: 'CSS3', level: 80 },
            { name: 'React Native (Básico)', level: 30 },
          ],
        },
        {
          title: 'Banco de Dados',
          skills: [
            { name: 'MySQL', level: 65 },
            { name: 'SQL Server', level: 60 },
          ],
        },
        {
          title: 'Ferramentas',
          skills: [
            { name: 'Git', level: 75 },
            { name: 'GitHub', level: 80 },
            { name: 'VS Code', level: 90 },
            { name: 'Excel Avançado', level: 95 },
            { name: 'Power BI (Noções)', level: 35 },
          ],
        },
        {
          title: 'Soft Skills',
          skills: [
            { name: 'Resolução de Problemas' },
            { name: 'Trabalho em Equipe' },
            { name: 'Comunicação Clara' },
            { name: 'Visão de Dono' },
          ],
        },
      ],
    },

    // Projects
    projects: {
      tagline: 'O que eu construí',
      title: 'Projetos',
      subtitle: 'Aplicações reais que resolvem problemas de negócio — do conceito ao deploy.',
      viewCode: 'Ver Código',
      items: [
        {
          title: 'Sistema Web de Gestão de Indicações (RH)',
          description: 'Aplicação web desenvolvida para digitalizar o processo de indicações de promoções, substituindo planilhas manuais e automatizando regras de negócio complexas como validação de liderança e hierarquia organizacional.',
          features: ['Validação de liderança', 'Hierarquia organizacional', 'Exportação Excel', 'Geração de PDF'],
        },
        {
          title: 'Automação de Desbloqueio de Planilhas',
          description: 'Software desktop desenvolvido em Python para automatizar a remoção de proteção de planilhas legadas, focando em produtividade administrativa. Elimina tarefas manuais e garante acesso rápido a dados corporativos protegidos.',
          features: ['Desbloqueio automático', 'Interface amigável', 'Processamento em lote', 'Compatível com .xlsx'],
        },
        {
          title: 'Rio Bus — Rastreamento de Ônibus em Tempo Real',
          description: 'Aplicação Full-Stack desenvolvida para rastreamento em tempo real da frota de ônibus da cidade do Rio de Janeiro. O sistema consome dados de GPS oficiais da prefeitura via satélite e renderiza as posições, rotas e paradas em um mapa interativo, processando arquivos GTFS.',
          features: ['Mapa interativo em tempo real', 'Consumo de API GPS oficial', 'Processamento GTFS', 'Backend Proxy (CORS)', 'PWA & Service Workers'],
        },
      ],
    },

    // Experience
    experience: {
      tagline: 'Trajetória profissional',
      title: 'Experiência Profissional',
      current: 'Atual',
      timeline: [
        {
          company: 'DeMillus S.A. Indústria e Comércio',
          role: 'Assistente de Administração (Foco em Análise de Dados)',
          period: 'Mai/2024 – Atual',
          responsibilities: [
            'Manutenção lógica de tabelas salariais e estruturas de cargos',
            'Análise de dados estratégicos para gestão de pessoas',
            'Criação de dashboards e indicadores de desempenho',
            'Apoio direto à tomada de decisão gerencial',
          ],
        },
        {
          company: 'DeMillus S.A. Indústria e Comércio',
          role: 'Auxiliar de Administração II (Crédito e Risco)',
          period: 'Mai/2018 – Mai/2024',
          responsibilities: [
            'Análise financeira de clientes e portfólio de crédito',
            'Mitigação de riscos e monitoramento de inadimplência',
            'Elaboração de relatórios analíticos para diretoria',
            'Negociação e renegociação de contratos comerciais',
          ],
        },
        {
          company: 'Mastercasa Móveis e Decorações Ltda.',
          role: 'Auxiliar de Faturamento',
          period: 'Out/2013 – Jan/2017',
          responsibilities: [
            'Emissão de notas fiscais e controle de faturamento',
            'Gestão de documentação fiscal e contábil',
            'Suporte às operações administrativas e financeiras',
          ],
        },
      ],
    },

    // Education
    education: {
      tagline: 'Base acadêmica',
      title: 'Formação & Idiomas',
      academicTitle: 'Formação Acadêmica',
      languagesTitle: 'Idiomas',
      degrees: [
        { degree: 'Análise e Desenvolvimento de Sistemas', type: 'Graduação – Tecnólogo', status: 'Concluído' },
        { degree: 'Técnico em Edificações', type: 'Curso Técnico', status: 'Concluído' },
      ],
      languages: [
        { name: 'Português', level: 'Nativo', percent: 100 },
        { name: 'Inglês', level: 'Básico (Leitura Técnica)', percent: 30 },
      ],
    },

    // Contact
    contact: {
      tagline: 'Vamos conversar?',
      title: 'Contato',
      subtitle: 'Estou aberto a oportunidades, colaborações e novas conexões profissionais.',
      location: 'Localização',
      locationValue: 'Rio de Janeiro – RJ',
      sendEmail: 'Enviar Email',
      callWhatsapp: 'Chamar no WhatsApp',
    },

    // Footer
    footer: {
      brand: 'Desenvolvedor de Software focado em automações Python e aplicações web JavaScript.',
      quickLinks: 'Links Rápidos',
      socialTitle: 'Redes Sociais',
      links: [
        { label: 'Início', id: 'inicio' },
        { label: 'Sobre', id: 'sobre' },
        { label: 'Projetos', id: 'projetos' },
        { label: 'Contato', id: 'contato' },
      ],
      copyright: 'Todos os direitos reservados.',
      madeBy: 'Desenvolvido com dedicação por',
    },

    // ScrollToTop
    scrollToTop: 'Voltar ao topo',
  },

  en: {
    // Navbar
    nav: {
      inicio: 'Home',
      sobre: 'About',
      objetivo: 'Objective',
      competencias: 'Skills',
      projetos: 'Projects',
      experiencia: 'Experience',
      formacao: 'Education',
      contato: 'Contact',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
    },

    // Hero
    hero: {
      badge: 'Available for opportunities',
      title: ['Alan da Silva ', 'do Carmo'],
      subtitle: 'Software Developer | Python & JavaScript',
      description: {
        before: 'Professional with experience in administration and finance, transitioning to software development. Combining business insight with code, I create ',
        highlight1: 'intelligent automations',
        middle: ', ',
        highlight2: 'web solutions',
        after: ' and systems that solve real problems, focused on efficiency and impact.',
      },
      ctaProjects: 'View Projects',
      ctaResume: 'Download Resume',
      ctaContact: 'Contact',
    },

    // About
    about: {
      tagline: 'Get to know my journey',
      title: 'About Me',
      bio: [
        {
          before: 'My professional journey began in ',
          highlight: 'administration and finance',
          after: ', where I worked for over a decade in credit analysis, risk mitigation, and data management roles. This experience shaped a keen eye for processes, metrics, and data-driven decision making.',
        },
        {
          before: 'The drive to ',
          highlight: 'automate repetitive tasks',
          after: ' and eliminate inefficiencies naturally led me to the world of programming. I discovered in code the perfect tool to turn ideas into concrete solutions — and never stopped.',
        },
        {
          before: 'Today, as a ',
          highlight: 'Software Developer',
          after: ', with a degree in Systems Analysis and Development, I combine corporate maturity with technical skills in',
        },
      ],
      bioSuffix: ' to build web applications, automations, and systems that make a difference in everyday business.',
      quote: '"My greatest strength is understanding business pain and translating it into efficient code."',
      highlights: [
        { title: 'Corporate Experience', text: '10+ years of experience in corporate environments, from billing to financial analysis.' },
        { title: 'IT Education', text: 'Graduated in Systems Analysis and Development, combining theory with practice.' },
        { title: 'Business Vision', text: 'Ability to translate complex business rules into efficient technological solutions.' },
        { title: 'Analytical Profile', text: 'Data-driven mindset, problem-solving, and continuous process improvement.' },
      ],
    },

    // Objective
    objective: {
      tagline: 'Where I want to go',
      title: 'Professional Objective',
      roleTitle: 'Back-end Developer & Automations',
      p1: {
        before: 'I am looking for an opportunity as a ',
        highlight: 'Software Developer',
        after: ' in teams that value continuous learning, good software engineering practices, and real impact on business results.',
      },
      p2: {
        before: 'My focus is on ',
        h1: 'back-end development',
        m1: ', ',
        h2: 'Python automations',
        m2: ' and ',
        h3: 'JavaScript web applications',
        after: ' — areas where I can combine my analytical experience with the technical ability to create scalable and well-structured solutions.',
      },
      commitment: 'I am committed to evolving quickly, delivering quality from day one, and adding value with my hybrid vision of business and technology.',
    },

    // Skills
    skills: {
      tagline: 'Technical stack',
      title: 'Technical Skills',
      subtitle: 'Technologies and abilities I use to create efficient solutions.',
      categories: [
        {
          title: 'Languages',
          skills: [
            { name: 'Python', level: 80 },
            { name: 'JavaScript (ES6+)', level: 75 },
            { name: 'C# (.NET)', level: 40 },
          ],
        },
        {
          title: 'Front-end',
          skills: [
            { name: 'HTML5', level: 85 },
            { name: 'CSS3', level: 80 },
            { name: 'React Native (Basic)', level: 30 },
          ],
        },
        {
          title: 'Databases',
          skills: [
            { name: 'MySQL', level: 65 },
            { name: 'SQL Server', level: 60 },
          ],
        },
        {
          title: 'Tools',
          skills: [
            { name: 'Git', level: 75 },
            { name: 'GitHub', level: 80 },
            { name: 'VS Code', level: 90 },
            { name: 'Advanced Excel', level: 95 },
            { name: 'Power BI (Basic)', level: 35 },
          ],
        },
        {
          title: 'Soft Skills',
          skills: [
            { name: 'Problem Solving' },
            { name: 'Teamwork' },
            { name: 'Clear Communication' },
            { name: 'Ownership Mindset' },
          ],
        },
      ],
    },

    // Projects
    projects: {
      tagline: 'What I built',
      title: 'Projects',
      subtitle: 'Real applications that solve business problems — from concept to deploy.',
      viewCode: 'View Code',
      items: [
        {
          title: 'HR Nomination Management Web System',
          description: 'Web application developed to digitize the promotion nomination process, replacing manual spreadsheets and automating complex business rules such as leadership validation and organizational hierarchy.',
          features: ['Leadership validation', 'Organizational hierarchy', 'Excel export', 'PDF generation'],
        },
        {
          title: 'Spreadsheet Unlock Automation',
          description: 'Desktop software developed in Python to automate the removal of legacy spreadsheet protection, focusing on administrative productivity. Eliminates manual tasks and ensures quick access to protected corporate data.',
          features: ['Automatic unlock', 'User-friendly interface', 'Batch processing', 'Compatible with .xlsx'],
        },
        {
          title: 'Rio Bus — Real-Time Bus Tracking',
          description: 'Full-Stack application developed for real-time tracking of the bus fleet in Rio de Janeiro. The system consumes official GPS data from the city government via satellite and renders positions, routes, and stops on an interactive map, processing GTFS files.',
          features: ['Real-time interactive map', 'Official GPS API consumption', 'GTFS processing', 'Backend Proxy (CORS)', 'PWA & Service Workers'],
        },
      ],
    },

    // Experience
    experience: {
      tagline: 'Professional journey',
      title: 'Professional Experience',
      current: 'Current',
      timeline: [
        {
          company: 'DeMillus S.A. Indústria e Comércio',
          role: 'Administrative Assistant (Data Analysis Focus)',
          period: 'May/2024 – Present',
          responsibilities: [
            'Logical maintenance of salary tables and job structures',
            'Strategic data analysis for people management',
            'Creation of dashboards and performance indicators',
            'Direct support for managerial decision-making',
          ],
        },
        {
          company: 'DeMillus S.A. Indústria e Comércio',
          role: 'Administrative Assistant II (Credit & Risk)',
          period: 'May/2018 – May/2024',
          responsibilities: [
            'Financial analysis of clients and credit portfolio',
            'Risk mitigation and delinquency monitoring',
            'Preparation of analytical reports for directors',
            'Negotiation and renegotiation of commercial contracts',
          ],
        },
        {
          company: 'Mastercasa Móveis e Decorações Ltda.',
          role: 'Billing Assistant',
          period: 'Oct/2013 – Jan/2017',
          responsibilities: [
            'Invoice issuance and billing control',
            'Tax and accounting documentation management',
            'Support for administrative and financial operations',
          ],
        },
      ],
    },

    // Education
    education: {
      tagline: 'Academic background',
      title: 'Education & Languages',
      academicTitle: 'Academic Education',
      languagesTitle: 'Languages',
      degrees: [
        { degree: 'Systems Analysis and Development', type: 'Bachelor\'s Degree – Technologist', status: 'Completed' },
        { degree: 'Building Technician', type: 'Technical Course', status: 'Completed' },
      ],
      languages: [
        { name: 'Portuguese', level: 'Native', percent: 100 },
        { name: 'English', level: 'Basic (Technical Reading)', percent: 30 },
      ],
    },

    // Contact
    contact: {
      tagline: 'Let\'s talk?',
      title: 'Contact',
      subtitle: 'I am open to opportunities, collaborations, and new professional connections.',
      location: 'Location',
      locationValue: 'Rio de Janeiro – RJ',
      sendEmail: 'Send Email',
      callWhatsapp: 'Call on WhatsApp',
    },

    // Footer
    footer: {
      brand: 'Software Developer focused on Python automations and JavaScript web applications.',
      quickLinks: 'Quick Links',
      socialTitle: 'Social Media',
      links: [
        { label: 'Home', id: 'inicio' },
        { label: 'About', id: 'sobre' },
        { label: 'Projects', id: 'projetos' },
        { label: 'Contact', id: 'contato' },
      ],
      copyright: 'All rights reserved.',
      madeBy: 'Developed with dedication by',
    },

    // ScrollToTop
    scrollToTop: 'Back to top',
  },
}

export default translations
