// -------------------------------------
// vue app
// -------------------------------------
const app = Vue.createApp({
  data() {
    return {
      // the date my career started (change to yours)
      careerStartDate: 2009,

      // the date copyright started (change to yours)
      copyrightStartDate: 2021,

      // for the template theme
      appTheme: 'light_theme',
      savedTheme: null,

      // flag to toggle the preloader
      isPreloading: true,

      // toast notifications array
      notifications: [],

      // manage loading spinner status
      ajaxLoading: [],

      // for minimizing the header on scrolling down
      startMinimizingHeaderAt: 100,
      isHeaderBig: true,
      // for toggling the header on scrolling down
      lastScrollPosition: 0,
      isHeaderHidden: false,
      // for scroll to top button
      startShowingScrollTopBtnAt: 600,
      isScrollTopBtnDisplayed: false,

      // flag to toggle focus style class
      isAnyFocus: false,

      // flag to toggle nav menu
      isNavMenuOpen: false,

      // list of nav links to loop through it
      navLinks: [
        {
          url: '#hero',
          title: { en: 'Home', ar: 'الرئيسية' }
        }, {
          url: '#about',
          title: { en: 'About', ar: 'من أنا' }
        }, {
          url: '#skills',
          title: { en: 'Skills', ar: 'مهاراتي' }
        }, {
          url: '#portfolio',
          title: { en: 'Portfolio', ar: 'أعمالي' }
        }, {
          url: '#contact',
          title: { en: 'Contact', ar: 'اتصل بي' }
        }
      ],

      // flag to toggle between skills types in skills section
      skillsType: '',

      skillsItems: [
        'React',
        'Angular',
        'Vue',
        'Ionic',
        'HTML5',
        'CSS3',
        'TypeScript',
        'JavaScript',
        'NodeJS',
        'PHP',
        'jQuery',
        'Bootstrap',
        'Firebase',
        'TailwindCSS',
        'SASS'
      ],

      // list of tools items to loop through it
      toolsItems: [
        'Ajax',
        'Webpack',
        'Git',
        'Docker',
        'Figma',
        'Npm',
        'Gulp',
        'Command Line',
        'WebStorm',
        'VS Code',
        'Trello',
        'Click Up',
        'Slack',
        'Photoshop',
        'Adobe XD'
      ],

      // list of experience items to loop through it
      experienceItems: [
        {
          date: '2014',
          companyName: 'InIT - Cloud Computing Lab.',
          jobTitle: 'Networking Engineer',
          desc: 'Participated in networking project for optimizing network traffic in OpenStack.'
        }, {
          date: '2015',
          companyName: 'NJS.',
          jobTitle: 'Full Stack Engineer',
          desc: 'Led a team in several full stack web app development projects for environmental protection.',
        }, {
          date: '2018',
          companyName: 'Fitzgrp.',
          jobTitle: 'Front End Engineer',
          desc: 'Engaged in frontend development with VR environment.',
        }, {
          date: '2019',
          companyName: 'Fischer.',
          jobTitle: 'Full Stack Engineer',
          desc: 'Developed a full stack ecommerce website for wedding bands.',
        }, {
          date: '2020-3',
          companyName: '100xCoin.',
          jobTitle: 'Full Stack Engineer',
          desc: 'Developed a full stack website for blockchain.',
        }, {
          date: '2020-8',
          companyName: 'Phoenix Jewelry Mfg. Inc.',
          jobTitle: 'Full Stack Engineer',
          desc: 'Engaged in development of a fully functioning ecommerce website for class rings in North America.',
        }, {
          date: '2021',
          companyName: 'aflo.',
          jobTitle: 'Front End Engineer',
          desc: 'Collaborate with a creative and development team on developing mobile app for health.'
        }, {}, {}
      ],

      // portfolio items filter by type
      filters: ['All', 'React', 'Vue', 'HTML & PHP'],
      currentFilter: 'All',

      // list of portfolio items to loop through it
      allPortfolioItems: [
        {
          id: 1,
          url: 'single-portfolio.html?id=1',
          externalUrl: 'https://bitlectrolabs.com/',
          imgUrl: 'assets/images/portfolio/bitlectro-6.png',
          title: { en: 'Bitlectro', ar: 'هنا عنوان المشروع 1' },
          date: { en: 'September 2021', ar: 'أبريل 2021' },
          desc: {
            en: 'The Dreamers are coming. Makers of Dreamloops and Dreamers audiovisual NFTs - https://opensea.io/collection/thedreamers - http://discord.gg/bitlectro\n. Feel free to buy NFTs and unwrap them.',
            ar: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق. إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع. ومن هنا وجب على المصمم أن يضع نصوصا مؤقتة على التصميم ليظهر للعميل الشكل كاملاً، دور مولد النص العربى أن يوفر على المصمم عناء البحث عن نص بديل لا علاقة له بالموضوع الذى يتحدث عنه التصميم فيظهر بشكل لا يليق.'
          },
          category: 'React',
          tools: ['HTML', 'React', 'Next.js', 'Prismic', 'Blockchain', 'OpenSea', 'Dreamloops', 'GSAP', 'WebGL', 'Three.js', 'Bootstrap', 'AJAX', 'Vue', 'Firebase'],
          screenshots: {
            img1: {
              url: 'assets/images/portfolio/bitlectro-1.png',
              caption: { en: 'Home Page', ar: 'تسمية توضيحية 5' }
            },
            img2: {
              url: 'assets/images/portfolio/bitlectro-2.png',
              caption: { en: 'Gallery 3D View', ar: 'تسمية توضيحية 4' }
            },
            img3: {
              url: 'assets/images/portfolio/bitlectro-3.png',
              caption: { en: 'Gallery 2D View', ar: 'تسمية توضيحية 3' }
            },
            img4: {
              url: 'assets/images/portfolio/bitlectro-4.png',
              caption: { en: 'Bitlectro NFT View', ar: 'تسمية توضيحية 2' }
            },
            img5: {
              url: 'assets/images/portfolio/bitlectro-5.png',
              caption: { en: 'Bitlectro Purchases View', ar: 'تسمية توضيحية 2' }
            },
            img6: {
              url: 'assets/images/portfolio/bitlectro-6.png',
              caption: { en: 'Bitlectro Blogs', ar: 'تسمية توضيحية 2' }
            },
          }
        },
        {
          id: 2,
          url: 'single-portfolio.html?id=2',
          externalUrl: 'https://vue-admin-build.vercel.app/',
          imgUrl: 'assets/images/portfolio/admin-vue-1.png',
          title: { en: 'Admin Dashboard written in Vue', ar: 'هنا عنوان المشروع 2' },
          date: { en: 'April 2019', ar: 'أبريل 2021' },
          desc: {
            en: 'Admin dashboard of Ecommerce website for managing users, orders, products and customer reviews',
            ar: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق. إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع. ومن هنا وجب على المصمم أن يضع نصوصا مؤقتة على التصميم ليظهر للعميل الشكل كاملاً، دور مولد النص العربى أن يوفر على المصمم عناء البحث عن نص بديل لا علاقة له بالموضوع الذى يتحدث عنه التصميم فيظهر بشكل لا يليق.'
          },
          category: 'Vue',
          tools: ['Vue', 'HTML', 'Bootstrap', 'CSS'],
          screenshots: {
            img1: {
              url: 'assets/images/portfolio/admin-vue-1.png',
              caption: { en: 'Dashboard', ar: 'تسمية توضيحية 5' }
            },
            img2: {
              url: 'assets/images/portfolio/admin-vue-2.png',
              caption: { en: 'User Management', ar: 'تسمية توضيحية 4' }
            },
            img3: {
              url: 'assets/images/portfolio/admin-vue-3.png',
              caption: { en: 'Product Management', ar: 'تسمية توضيحية 3' }
            },
            img4: {
              url: 'assets/images/portfolio/admin-vue-4.png',
              caption: { en: 'Special Edition Management', ar: 'تسمية توضيحية 4' }
            },
            img5: {
              url: 'assets/images/portfolio/admin-vue-5.png',
              caption: { en: 'Order Management', ar: 'تسمية توضيحية 3' }
            },
          }
        },
        {
          id: 3,
          url: 'single-portfolio.html?id=3',
          externalUrl: 'https://bscpad.com/',
          imgUrl: 'assets/images/portfolio/bscpad-1.png',
          title: { en: 'BSCPad', ar: 'هنا عنوان المشروع 3' },
          date: { en: 'May 2021', ar: 'أبريل 2021' },
          desc: {
            en: 'BSCPAD IS THE FIRST DECENTRALIZED IDO PLATFORM FOR THE BINANCE SMART CHAIN NETWORK.',
            ar: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق. إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع. ومن هنا وجب على المصمم أن يضع نصوصا مؤقتة على التصميم ليظهر للعميل الشكل كاملاً، دور مولد النص العربى أن يوفر على المصمم عناء البحث عن نص بديل لا علاقة له بالموضوع الذى يتحدث عنه التصميم فيظهر بشكل لا يليق.'
          },
          category: 'React',
          tools: ['React', 'CSS', 'React Redux', 'Smart Contract', 'Blockchain'],
          screenshots: {
            img1: {
              url: 'assets/images/portfolio/bscpad-1.png',
              caption: { en: 'Home Page', ar: 'تسمية توضيحية 5' }
            },
            img2: {
              url: 'assets/images/portfolio/bscpad-2.png',
              caption: { en: 'Staking & Unstaking Page', ar: 'تسمية توضيحية 4' }
            },
            img3: {
              url: 'assets/images/portfolio/bscpad-3.png',
              caption: { en: 'Projects Page', ar: 'تسمية توضيحية 3' }
            },
            img4: {
              url: 'assets/images/portfolio/bscpad-4.png',
              caption: { en: 'React Component', ar: 'تسمية توضيحية 2' }
            },
            img5: {
              url: 'assets/images/portfolio/bscpad-5.png',
              caption: { en: 'Calendar View', ar: 'تسمية توضيحية 3' }
            },
            img6: {
              url: 'assets/images/portfolio/bscpad-6.png',
              caption: { en: 'Mobile View', ar: 'تسمية توضيحية 2' }
            },
          }
        },
        {
          id: 4,
          url: 'single-portfolio.html?id=4',
          externalUrl: 'https://www.fischer-trauringe.de/konfischerator/configurator',
          imgUrl: 'assets/images/portfolio/fischer-4.png',
          title: { en: 'Wedding Bands 3D Configurator', ar: 'هنا عنوان المشروع 4' },
          date: { en: 'August 2020', ar: 'أبريل 2021' },
          desc: {
            en: 'In the Fischer creative area you can design exactly the ring you desire.\n' +
                '\n' +
                'You order your rings exclusively from the jeweller, not online. And there is a good reason for that: it is essential that the rings fit. Measuring the right size is a difficult job and therefore a task for an expert.\n' +
                '\n' +
                'Now we would like to wish you lots of inspiration and fun in the design process.',
            ar: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق. إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع. ومن هنا وجب على المصمم أن يضع نصوصا مؤقتة على التصميم ليظهر للعميل الشكل كاملاً، دور مولد النص العربى أن يوفر على المصمم عناء البحث عن نص بديل لا علاقة له بالموضوع الذى يتحدث عنه التصميم فيظهر بشكل لا يليق.'
          },
          category: 'React',
          tools: ['React', 'CSS', 'WebGL', 'ThreeJS', 'Redux', 'NodeJS', 'AJAX'],
          screenshots: {
            img1: {
              url: 'assets/images/portfolio/fischer-1.png',
              caption: { en: 'Home - Profile', ar: 'تسمية توضيحية 5' }
            },
            img2: {
              url: 'assets/images/portfolio/fischer-2.png',
              caption: { en: 'Diamonds', ar: 'تسمية توضيحية 4' }
            },
            img3: {
              url: 'assets/images/portfolio/fischer-3.png',
              caption: { en: 'Engraving Texts', ar: 'تسمية توضيحية 3' }
            },
            img4: {
              url: 'assets/images/portfolio/fischer-4.png',
              caption: { en: '3D Configurator in Mobile Devices', ar: 'تسمية توضيحية 2' }
            },
            img5: {
              url: 'assets/images/portfolio/fischer-5.png',
              caption: { en: 'Zoom View of Wedding Bands', ar: 'تسمية توضيحية 1' }
            }
          }
        },
        {
          id: 5,
          url: 'single-portfolio.html?id=5',
          imgUrl: 'assets/images/portfolio/mementos-4.png',
          externalUrl: 'https://mementosjewelry.com',
          title: { en: 'Class Ring 3D Ecommerce Website', ar: 'هنا عنوان المشروع 5' },
          date: { en: 'August 2020', ar: 'أبريل 2021' },
          desc: {
            en: 'Mementos Jewelry turns high school and college moments into wearable treasures. It starts with you choosing the style expresses who you are in 3D.',
            ar: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق. إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع. ومن هنا وجب على المصمم أن يضع نصوصا مؤقتة على التصميم ليظهر للعميل الشكل كاملاً، دور مولد النص العربى أن يوفر على المصمم عناء البحث عن نص بديل لا علاقة له بالموضوع الذى يتحدث عنه التصميم فيظهر بشكل لا يليق.'
          },
          category: 'HTML & PHP',
          tools: ['HTML', 'PHP', 'MySQL', 'Ecommerce', 'WebGL', 'ThreeJS', 'Bootstrap', 'AJAX', 'SEO', 'Advertising'],
          screenshots: {
            img1: {
              url: 'assets/images/portfolio/mementos-1.png',
              caption: { en: 'Banner', ar: 'تسمية توضيحية 5' }
            },
            img2: {
              url: 'assets/images/portfolio/mementos-2.png',
              caption: { en: 'Shop', ar: 'تسمية توضيحية 4' }
            },
            img3: {
              url: 'assets/images/portfolio/mementos-3.png',
              caption: { en: '3D Configurator', ar: 'تسمية توضيحية 3' }
            },
            img4: {
              url: 'assets/images/portfolio/mementos-4.png',
              caption: { en: 'Mobile 3D Configurator', ar: 'تسمية توضيحية 2' }
            },
          }
        },
        {
          id: 6,
          url: 'single-portfolio.html?id=6',
          externalUrl: 'https://plan-grid.vercel.app/',
          imgUrl: 'assets/images/portfolio/plan-grid-1.png',
          title: { en: 'Plan Grid Annotation Website', ar: 'هنا عنوان المشروع 6' },
          date: { en: 'January 2021', ar: 'أبريل 2021' },
          desc: {
            en: 'Plan Grid is Autocad-like annotation website that enables users to draw multiple drawing tools, annotations and polygons for measurements and sharing them with partners.',
            ar: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق. إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع. ومن هنا وجب على المصمم أن يضع نصوصا مؤقتة على التصميم ليظهر للعميل الشكل كاملاً، دور مولد النص العربى أن يوفر على المصمم عناء البحث عن نص بديل لا علاقة له بالموضوع الذى يتحدث عنه التصميم فيظهر بشكل لا يليق.'
          },
          category: 'React',
          tools: ['React', 'TailwindCSS', 'AJAX', 'NodeJs', 'MongoDB', 'WebGL', 'Canvas2D'],
          screenshots: {
            img1: {
              url: 'assets/images/portfolio/plan-grid-1.png',
              caption: { en: 'Home', ar: 'تسمية توضيحية 5' }
            },
            img2: {
              url: 'assets/images/portfolio/plan-grid-2.png',
              caption: { en: 'Multiple polygons and Texts', ar: 'تسمية توضيحية 4' }
            },
            img3: {
              url: 'assets/images/portfolio/plan-grid-3.png',
              caption: { en: 'Details of Annotations', ar: 'تسمية توضيحية 3' }
            },
            img4: {
              url: 'assets/images/portfolio/plan-grid-4.png',
              caption: { en: 'Sheet Change - PDF & PNG', ar: 'تسمية توضيحية 2' }
            },
          }
        },
        {
          id: 7,
          url: 'single-portfolio.html?id=7',
          externalUrl: 'https://fwlli.com',
          imgUrl: 'assets/images/portfolio/fwlli-1.png',
          title: { en: 'FWLLI', ar: 'هنا عنوان المشروع 7' },
          date: { en: 'December 2020', ar: 'أبريل 2021' },
          desc: {
            en: 'Federal Wage and Labor Law Institute (FWLLI) helps businesses stay ahead of the ever-changing compliance standards with simplicity.',
            ar: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق. إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع. ومن هنا وجب على المصمم أن يضع نصوصا مؤقتة على التصميم ليظهر للعميل الشكل كاملاً، دور مولد النص العربى أن يوفر على المصمم عناء البحث عن نص بديل لا علاقة له بالموضوع الذى يتحدث عنه التصميم فيظهر بشكل لا يليق.'
          },
          category: 'HTML & PHP',
          tools: ['HTML', 'PHP', 'MySQL', 'Bootstrap', 'AJAX'],
          screenshots: {
            img1: {
              url: 'assets/images/portfolio/fwlli-1.png',
              caption: { en: 'Home', ar: 'تسمية توضيحية 5' }
            },
            img2: {
              url: 'assets/images/portfolio/fwlli-2.png',
              caption: { en: 'Mobile Post Search', ar: 'تسمية توضيحية 4' }
            },
            img3: {
              url: 'assets/images/portfolio/fwlli-3.png',
              caption: { en: 'Buy', ar: 'تسمية توضيحية 3' }
            },
            img4: {
              url: 'assets/images/portfolio/fwlli-4.png',
              caption: { en: 'Cart', ar: 'تسمية توضيحية 2' }
            },
            img5: {
              url: 'assets/images/portfolio/fwlli-5.png',
              caption: { en: 'Checkout', ar: 'تسمية توضيحية 1' }
            },
            img6: {
              url: 'assets/images/portfolio/fwlli-6.png',
              caption: { en: 'Search', ar: 'تسمية توضيحية 1' }
            }
          }
        },
        {
          id: 8,
          url: 'single-portfolio.html?id=8',
          externalUrl: 'https://blogs-vue-firebase.vercel.app/',
          imgUrl: 'assets/images/portfolio/blog-vue-1.jpg',
          title: { en: 'Blogs in Vue', ar: 'هنا عنوان المشروع 7' },
          date: { en: 'December 2020', ar: 'أبريل 2021' },
          desc: {
            en: 'Simple Blogging Site written in Vue.js',
            ar: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق. إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع. ومن هنا وجب على المصمم أن يضع نصوصا مؤقتة على التصميم ليظهر للعميل الشكل كاملاً، دور مولد النص العربى أن يوفر على المصمم عناء البحث عن نص بديل لا علاقة له بالموضوع الذى يتحدث عنه التصميم فيظهر بشكل لا يليق.'
          },
          category: 'Vue',
          tools: ['Vue', 'Firebase'],
          screenshots: {
            img1: {
              url: 'assets/images/portfolio/blog-vue-1.jpg',
              caption: { en: 'Home', ar: 'تسمية توضيحية 5' }
            },
            img2: {
              url: 'assets/images/portfolio/blog-vue-2.jpg',
              caption: { en: 'Login', ar: 'تسمية توضيحية 4' }
            },
            img3: {
              url: 'assets/images/portfolio/blog-vue-3.jpg',
              caption: { en: 'Profile', ar: 'تسمية توضيحية 3' }
            },
            img4: {
              url: 'assets/images/portfolio/blog-vue-4.jpg',
              caption: { en: 'Posts', ar: 'تسمية توضيحية 2' }
            },
            img5: {
              url: 'assets/images/portfolio/blog-vue-5.jpg',
              caption: { en: 'Edit Post', ar: 'تسمية توضيحية 1' }
            }
          }
        },
        {
          id: 9,
          url: 'single-portfolio.html?id=9',
          externalUrl: 'https://fire-extinguishers-nuxtjs.vercel.app',
          imgUrl: 'assets/images/portfolio/fire-nuxt-1.jpg',
          title: { en: 'Fire Extinguisher Rent Website written in NuxtJS', ar: 'هنا عنوان المشروع 7' },
          date: { en: 'August 2020 2020', ar: 'أبريل 2021' },
          desc: {
            en: 'Fire extinguisher rent website written in NuxtJS',
            ar: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق. إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع. ومن هنا وجب على المصمم أن يضع نصوصا مؤقتة على التصميم ليظهر للعميل الشكل كاملاً، دور مولد النص العربى أن يوفر على المصمم عناء البحث عن نص بديل لا علاقة له بالموضوع الذى يتحدث عنه التصميم فيظهر بشكل لا يليق.'
          },
          category: 'Vue',
          tools: ['Vue', 'NuxtJS', 'Firebase'],
          screenshots: {
            img1: {
              url: 'assets/images/portfolio/fire-nuxt-1.jpg',
              caption: { en: 'Mobile Home Page', ar: 'تسمية توضيحية 5' }
            },
            img2: {
              url: 'assets/images/portfolio/fire-nuxt-2.jpg',
              caption: { en: 'Rent Page', ar: 'تسمية توضيحية 4' }
            },
            img3: {
              url: 'assets/images/portfolio/fire-nuxt-3.jpg',
              caption: { en: 'Rent Page with Calendar', ar: 'تسمية توضيحية 3' }
            },
            img4: {
              url: 'assets/images/portfolio/fire-nuxt-4.jpg',
              caption: { en: 'Products', ar: 'تسمية توضيحية 2' }
            },
            img5: {
              url: 'assets/images/portfolio/fire-nuxt-5.jpg',
              caption: { en: 'My Rents', ar: 'تسمية توضيحية 1' }
            },
            img6: {
              url: 'assets/images/portfolio/fire-nuxt-6.jpg',
              caption: { en: 'Desktop Home Page', ar: 'تسمية توضيحية 2' }
            },
            img7: {
              url: 'assets/images/portfolio/fire-nuxt-7.jpg',
              caption: { en: 'Customer Reviews', ar: 'تسمية توضيحية 1' }
            }
          }
        },
      ].reverse(),

      // current page of portfolio items
      portfolioItemsPage: 1,

      // portfolio items per page
      itemsPerPage: 7,

      // viewed portfolio items
      portfolioItems: [],

      // portfolio archive name
      portfolioArchiveName: '',

      // list of testimonials items to loop through it
      testimonialsItems: [
        {
          imgUrl: 'assets/images/testimonials/ira.png',
          quoteContent: {
            en: 'Jeffrey simply provides amazing web development service. Their team is extremely professional and the easiest to meet I have ever worked with. I would recommend Jeffrey to anyone.',
            ar: 'محمد يقدم خدمات مذهلة في تطوير الويب، ولديه فريق محترف يجعل التعامل معهم مطمئن للغاية. أوصي بفريقهم للجميع.'
          },
          quoteAuthor: { en: 'Ira Nusbaum', ar: 'جابر العواني' },
          jobTitle: { en: 'Phoenix Jewelry Mfg Inc.', ar: 'مصور فوتوغرافي' }
        }, {
          imgUrl: 'assets/images/testimonials/ana.png',
          quoteContent: {
            en: 'Excellent developer to work with. Always positive to find the most appropriate solution. Jeffrey is one of the professional web developers that provide awesome services.',
            ar: 'فريق ممتاز للعمل معه. إيجابي دائمًا للعثور على الحل الأنسب. هم إحدى شركات تطوير الويب المحترفة التي تقدم خدمات رائعة.'
          },
          quoteAuthor: { en: 'Ana Oliveira', ar: 'حسون القلال' },
          jobTitle: { en: 'aflo-analytics', ar: 'مدير المشاريع' }
        }, {
          imgUrl: 'assets/images/testimonials/nick.png',
          quoteContent: {
            en: 'He is a fantastic developer. I absolutely loved working with him.',
            ar: 'فريق ممتاز للعمل معه. إيجابي دائمًا للعثور على الحل الأنسب. هم إحدى شركات تطوير الويب المحترفة التي تقدم خدمات رائعة.'
          },
          quoteAuthor: { en: 'Nick Bembeneck', ar: 'حسون القلال' },
          jobTitle: { en: 'bitlectro', ar: 'مدير المشاريع' }
        }, {
          imgUrl: 'assets/images/testimonials/shane.png',
          quoteContent: {
            en: 'Jeffrey Wilson has really great design resources and development principles. I’m very thrilled to be working with him.',
            ar: 'فريق ممتاز للعمل معه. إيجابي دائمًا للعثور على الحل الأنسب. هم إحدى شركات تطوير الويب المحترفة التي تقدم خدمات رائعة.'
          },
          quoteAuthor: { en: 'Shane Burkhart', ar: 'حسون القلال' },
          jobTitle: { en: 'Plan Grid', ar: 'مدير المشاريع' }
        },
      ]
    }
  },
  created() {
    // get a theme to use
    this.getAppTheme();
  },
  mounted() {
    if (window.innerWidth >= 992) {
      // initialize circle cursor
      this.initCircleCursor();

      // apply pan effect hero image
      this.heroImgPanEffect();

      // initialize VanillaTilt library in portfolio section
      this.initializeTilt();
    }

    // nav menu tab trap
    this.navMenuTabTrap();

    // hide the preloader screen after loading
    window.addEventListener('load', () => this.isPreloading = false);

    // scrolling options
    this.scrollingOptions();
    document.addEventListener('scroll', () => this.scrollingOptions());

    // initialize popper.js plugin
    document.querySelectorAll('.has-ultimate-tooltip').forEach(el => {
      Popper.createPopper(el, el.querySelector('.ultimate-tooltip'), {
        placement: 'top',
        modifiers: [{ name: 'offset', options: { offset: [0, 30] }}]
      });
    });

    // get portfolio items
    this.getPortfolioItems();

    // init glightbox plugin
    const lightbox = new GLightbox({
      autoplayVideos: false,
    });

    // initialize the first displayed type of skills
    this.initSkillsFirstType();
  },
  methods: {
    // initialize circle cursor
    initCircleCursor() {
      const app = this.$refs.appRef;
      const outer = this.$refs.circleCursorOuter;
      const inner = this.$refs.circleCursorInner;

      // return if disabled
      if (!outer || !inner) { return; }

      app.addEventListener('mousemove', e => {
        // make the circles follow the cursor
        outer.setAttribute('style', `visibility: visible; top: ${e.clientY}px; left: ${e.clientX}px;`);
        inner.setAttribute('style', `visibility: visible; top: ${e.clientY}px; left: ${e.clientX}px;`);

        // add link hover style
        (e.target.closest('a') || e.target.closest('button') || e.target.closest('.link-hover')) ? inner.classList.add('cursor-link-hover') : inner.classList.remove('cursor-link-hover');
      });

      app.addEventListener('click', () => {
        // add pulse effect on click
        inner.classList.add('cursor-click-effect');
        setTimeout(() => inner.classList.remove('cursor-click-effect'), 200);
      });
    },

    // get a theme to use
    getAppTheme() {
      // get the saved theme from the localStorage
      const storageSavedTheme = localStorage.getItem('jeffreyTheme');

      // Check to see if there a saved theme
      if (storageSavedTheme) {
        this.savedTheme = storageSavedTheme;

      } else {
        // So, try to get the browser default theme or make your own default

        // Check to see if Media-Queries are supported
        if (window.matchMedia) {

          // Check if the dark-mode Media-Query matches
          if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            this.savedTheme = 'dark_theme';
          } else { this.savedTheme = 'light_theme'; }

        } else {
          // Default (when Media-Queries are not supported)
          this.savedTheme = this.appTheme;
        }
      }

      // save the new theme in the localStorage
      localStorage.setItem('jeffreyTheme', this.savedTheme);
    },

    // detect the theme changes
    changeAppTheme() {
      (this.savedTheme === 'light_theme') ? this.savedTheme = 'dark_theme' : this.savedTheme = 'light_theme';

      // save the new theme in the localStorage
      localStorage.setItem('jeffreyTheme', this.savedTheme);
    },

    // toggle nav menu
    toggleNavMenu() {
      this.isNavMenuOpen = !this.isNavMenuOpen;
      this.isNavMenuOpen ? this.openNavMenu() : this.closeNavMenu();
    },

    // open nav menu
    openNavMenu() {
      const bodyEl = document.getElementsByTagName('body')[0];

      this.isNavMenuOpen = true;

      bodyEl.setAttribute('style', 'overflow-y: hidden;');

      // set focus on nav menu
      this.$refs.headerNav.querySelector('.desktop-menu-content').focus();
    },

    // close nav menu
    closeNavMenu() {
      const bodyEl = document.getElementsByTagName('body')[0];

      this.isNavMenuOpen = false;

      bodyEl.removeAttribute('style');

      // set focus on nav menu toggle button
      this.$refs.navMenuToggleBtn.focus();
    },

    // nav menu tab trap
    navMenuTabTrap() {
      const nav = this.$refs.headerNav;
      const focusableElementsString = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]';
      let firstTabStop;
      let lastTabStop;
      let isFirstTabStop;
      let isLastTabStop;

      document.addEventListener('keyup', e => {
        if (nav.classList.contains('menu-open')) {
          // get first & last focusable elements in the side menu for the tab trap
          const visibleFocusableEls = [...nav.querySelectorAll(focusableElementsString)]
            .filter(el => window.getComputedStyle(el).getPropertyValue('visibility') !== 'hidden');
          firstTabStop = visibleFocusableEls[0];
          lastTabStop = visibleFocusableEls[visibleFocusableEls.length -1];

          if (e.code === 'Tab') {
            if (e.shiftKey) /* shift + tab */ {
              // if this is the first item, move to the last item
              isFirstTabStop && lastTabStop.focus();
            } else /* tab */ {
              // if this is the last item, go back to the first item
              isLastTabStop && firstTabStop.focus();
            }

            // close nav menu on Escape button press
          } else if (e.code === 'Escape') { this.toggleNavMenu(); }

          // get current active element
          const activeEl = document.activeElement;

          // check if last item or not
          isLastTabStop = (activeEl === lastTabStop) ? true : false;

          // check if first item or not
          isFirstTabStop = (activeEl === firstTabStop) ? true : false;
        }
      });
    },

    // apply pan effect hero image
    heroImgPanEffect() {
      const parent = this.$refs.heroSection;

      // return if disabled
      if (!parent || !parent.getAttribute('data-paneffect')) { return; }

      const layer1 = parent.querySelectorAll('.layer')[0];
      const layer2 = parent.querySelectorAll('.layer')[1];

      parent.addEventListener('mousemove', (e) => {
        const x = ((e.x - parent.getBoundingClientRect().x) / parent.offsetWidth) * 100;
        const y = ((e.y - parent.getBoundingClientRect().y) / parent.offsetHeight) * 100;

        parent.classList.add('parallax-animation');

        layer1.setAttribute('style', `transform-origin: ${x}vw ${y}vh;`);
        layer2.setAttribute('style', `transform-origin: ${x}vw ${y}vh;`);
      });
    },

    // scrolling options
    scrollingOptions() {
      const scrollPosition = window.pageYOffset;

      // check for current scroll position to minimize the header
      this.isHeaderBig = (scrollPosition >= this.startMinimizingHeaderAt) ? false : true;

      // check for current scroll position to toggle the header
      this.isHeaderHidden = ((scrollPosition > 100) && (scrollPosition > this.lastScrollPosition)) ? true : false;
      this.lastScrollPosition = scrollPosition;

      // check for current scroll position to show the scrollTop button
      this.isScrollTopBtnDisplayed = (scrollPosition >= this.startShowingScrollTopBtnAt) ? true : false;
    },

    // scroll to top
    scrollToTop() {
      window.scroll({ top: 0, behavior: 'smooth' });
    },

    // initialize the first displayed type of skills
    initSkillsFirstType() {
      const skillsSwitchBtn = this.$refs.skillsSwitchBtn;

      // return if disabled
      if (!skillsSwitchBtn) { return; }

      this.skillsType = skillsSwitchBtn.querySelector('input').value;
    },

    // initialize VanillaTilt library in portfolio section
    initializeTilt() {
      const portfolioItems = this.$refs.portfolioItems;

      // return if disabled
      if (!portfolioItems) { return; }

      VanillaTilt.init(portfolioItems.querySelectorAll('.portfolio-item'), {
        max: 8,
        speed: 400,
        glare: true,
        'max-glare': 0.3
      });
    },

    // get portfolio items
    getPortfolioItems() {
      const itemsArr = this.allPortfolioItems
        .filter(item => {
          const urlParams = new URLSearchParams(window.location.search);
          const tax = urlParams.get('tax');

          if (tax) {
            if (tax === 'cat') {
              const cat = urlParams.get('cat');

              this.portfolioArchiveName = cat;
              return item.category === cat;

            } else if (tax === 'tools') {
              const tool = urlParams.get('tools');

              this.portfolioArchiveName = tool;
              return item.tools.includes(tool);
            }

          } else {
            return this.currentFilter === 'All' || item.category === this.currentFilter;
          }
        })
        .slice(this.filteredPortfolioItems.length, this.portfolioItemsPage * this.itemsPerPage);

      // check if have works or not
      if (itemsArr.length) {
        this.portfolioItems.push(...itemsArr);

        // initialize VanillaTilt for new items
        setTimeout(() => this.portfolioItemsPage > 1 && this.initializeTilt(), 0);

        this.portfolioItemsPage++;

      } else {

        // show message "No works" to the user
        this.setNotify({
          className: 'danger',
          msg: this.$refs.portfolioItems.getAttribute('data-no-works-msg'),
          time: 3000
        });
      }
    },

    // filter portfolio items
    filterPortfolioItems(filter) {
      this.currentFilter = filter;
      this.portfolioItemsPage = 1;

      if (this.filteredPortfolioItems.length) {
        // initialize VanillaTilt for new items
        setTimeout(() => this.initializeTilt(), 0);

      } else {
        // get new portfolio items
        this.getPortfolioItems();
      }
    },

    // contact form validation
    contactFormValidation() {

      // contact form
      const contactForm = this.$refs.contactForm;

      // form controls
      const name        = contactForm.querySelector('input[name="name"]');
      const email       = contactForm.querySelector('input[name="email"]');
      const phone       = contactForm.querySelector('input[name="phone"]');
      const message     = contactForm.querySelector('textarea');

      // form validation status
      let errors = {
        name: { required: true, minLength: true },
        email: { required: true, invalid: true },
        phone: { invalid: true },
        message: { required: true }
      };

      /* --------------- */
      /* name validation */
      /* --------------- */

      // required validation
      if (name.value === '') {
        errors.name.required = true;
        this.setNotify({
          id: 'nameRequired',
          className: 'danger',
          msg: name.closest('.control').querySelector('.errors-msgs .required').value
        });

      } else {
        errors.name.required = false;
        this.dismissNotify('nameRequired');
      }

      // minlength validation
      if (name.value.length > 0 && name.value.length < name.getAttribute('minlength')) {
        errors.name.minLength = true;
        this.setNotify({
          id: 'nameMinLength',
          className: 'danger',
          msg: name.closest('.control').querySelector('.errors-msgs .minLength').value
        });

      } else {
        errors.name.minLength = false;
        this.dismissNotify('nameMinLength');
      }

      // toggle invalid errors & style classes
      if (Object.keys(errors.name).some(err => errors.name[err] === true)) {
        name.classList.remove('valid');
        name.classList.add('invalid');
      } else {
        name.classList.remove('invalid');
        name.classList.add('valid');
      }

      /* ---------------- */
      /* email validation */
      /* ---------------- */

      // required validation
      if (email.value === '') {
        errors.email.required = true;
        this.setNotify({
          id: 'emailRequired',
          className: 'danger',
          msg: email.closest('.control').querySelector('.errors-msgs .required').value
        });

      } else {
        errors.email.required = false;
        this.dismissNotify('emailRequired');
      }

      // email validation
      if (email.value.length > 0 && !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email.value)) {
        errors.email.invalid = true;
        this.setNotify({
          id: 'emailInvalid',
          className: 'danger',
          msg: email.closest('.control').querySelector('.errors-msgs .invalid').value
        });

      } else {
        errors.email.invalid = false;
        this.dismissNotify('emailInvalid');
      }

      // toggle invalid errors & style classes
      if (Object.keys(errors.email).some(err => errors.email[err] === true)) {
        email.classList.remove('valid');
        email.classList.add('invalid');
      } else {
        email.classList.remove('invalid');
        email.classList.add('valid');
      }

      /* ---------------- */
      /* phone validation */
      /* ---------------- */

      // phone validation
      if (phone.value.length > 0 && !/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(phone.value)) {
        errors.phone.invalid = true;
        this.setNotify({
          id: 'phoneInvalid',
          className: 'danger',
          msg: phone.closest('.control').querySelector('.errors-msgs .invalid').value
        });

      } else {
        errors.phone.invalid = false;
        this.dismissNotify('phoneInvalid');
      }

      // toggle invalid errors & style classes
      if (Object.keys(errors.phone).some(err => errors.phone[err] === true)) {
        phone.classList.remove('valid');
        phone.classList.add('invalid');
      } else {
        phone.classList.remove('invalid');
        phone.classList.add('valid');
      }

      /* ------------------ */
      /* message validation */
      /* ------------------ */

      // required validation
      if (message.value === '') {
        errors.message.required = true;
        this.setNotify({
          id: 'messageRequired',
          className: 'danger',
          msg: message.closest('.control').querySelector('.errors-msgs .required').value
        });

      } else {
        errors.message.required = false;
        this.dismissNotify('messageRequired');
      }

      // toggle invalid errors & style classes
      if (Object.keys(errors.message).some(err => errors.message[err] === true)) {
        message.classList.remove('valid');
        message.classList.add('invalid');
      } else {
        message.classList.remove('invalid');
        message.classList.add('valid');
      }

      // send the message if the form is valid
      (!Object.values(errors).some(control => Object.values(control).some(Boolean))) && this.sendContactFormMessage(contactForm);
    },

    // send message from contact form
    sendContactFormMessage(form) {
      const url = form.getAttribute('action');
      const formData = new FormData(form);

      // start loading spinner
      this.startLoading();

      // send post request
      fetch(url, { method: 'POST', body: formData })
        .then(res => res.text())
        .then(data => {
          if (data === 'success') {
            // show success message
            this.setNotify({ className: 'success', msg: form.getAttribute('data-success-msg'), time: 5000 });

            // reset all form inputs
            form.reset();

            // remove inputs valid classes
            form.querySelectorAll('.valid').forEach(el => el.classList.remove('valid'));

          } else if (data === 'error') {
            // show error message
            this.setNotify({ className: 'danger', msg: form.getAttribute('data-err-msg'), time: 5000 });
          }

          // end loading spinner
          this.endLoading();

          console.log(data);
        })
        .catch(err => console.log(err));
    },

    // show messages by toast notifications
    setNotify({id, className, msg, time}) {
      const notify = {
        id: id || `${Date.now()}${this.notifications.length}`,
        className,
        msg,
        time
      };

      if (id) {
        (!this.notifications.some(e => e.id === id)) && this.notifications.push(notify);

      } else { this.notifications.push(notify); }

      // remove this notification from the array after (n) seconds
      time && setTimeout(() => this.dismissNotify(notify.id), time);
    },

    // dismiss the notifications
    dismissNotify(id) {
      const index = this.notifications.findIndex(notify => notify.id === id);
      (index > -1) && this.notifications.splice(index, 1);
    },

    // add ajax loading spinner
    startLoading() {
      this.ajaxLoading.push(true);
    },

    // remove ajax loading spinner
    endLoading() {
      this.ajaxLoading.pop();
    }
  },
  computed: {
    // flag to toggle ajax loading spinner
    isAjaxLoading() {
      return this.ajaxLoading.some(state => state === true);
    },

    // get the total years of experience
    experienceYears() {
      return new Date(new Date() - new Date(String(this.careerStartDate))).getFullYear() - 1970;
    },

    // split experience items into chunks of 3 items
    experienceChunks() {
      return [...Array(Math.ceil(this.experienceItems.length / 3))].map(() => this.experienceItems.splice(0, 3));
    },

    // filtered portfolio items
    filteredPortfolioItems() {
      const urlParams = new URLSearchParams(window.location.search);
      const tax = urlParams.get('tax');

      if (tax) {
        return this.portfolioItems;

      } else {
        return this.portfolioItems.filter(item => this.currentFilter === 'All' || item.category === this.currentFilter);
      }
    },

    // get single portfolio item
    getSinglePortfolioItem() {
      const urlParams = new URLSearchParams(window.location.search);
      const id = urlParams.get('id');

      return this.allPortfolioItems.find(item => item.id == id);
    },

    // get the total years of copyright
    copyrightDate() {
      const yearsDuration = new Date(new Date() - new Date(String(this.copyrightStartDate))).getFullYear() - 1970;
      return yearsDuration === 0 ? this.copyrightStartDate : `${this.copyrightStartDate} - ${this.copyrightStartDate + yearsDuration}`;
    }
  },
  directives: {
    // clone directive
    clone: {
      mounted(el) {
        el.parentNode.insertBefore(el.cloneNode(true), el.nextSibling);
      }
    },

    // add stagger delay to children elements
    staggerdelay: {
      mounted(el, binding) {
        [...el.children].forEach((child, i) => {
          child.setAttribute('style', `animation-delay: ${(i + 1) * (binding.value || 100)}ms`);
        });
      }
    },

    // tooltip directive
    tooltip: {
      mounted(el, binding) {
        el.classList.add('has-tooltip');
        el.insertAdjacentHTML('beforeend', `<div class="custom-tooltip custom-tooltip-${binding.value.dir}">${binding.value.text}</div>`);
      }
    }
  }
});
app.mount('#app');
