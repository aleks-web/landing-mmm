import Modals from "./modals.js";

export const doctors = [
    {
        name: 'Иванов Павел Вячеславович',
        procedures: '1 850',
        clients: '520',
        avatar: '/modals/man-0.webp',
        selectId: ['orto'],
        modal: {
            post: 'Стоматолог-ортопед',
            stage: '5 лет',
            rating: '5.0',
            content: 'Специализируется на восстановлении утраченных и разрушенных зубов, эстетической реставрации и функциональной реабилитации. Подбирает решения, которые выглядят естественно и служат долгие годы.',
            updated: '13.01.2026',
            video: '/modals/video-0.mp4',
            videoPrev: '/modals/video-0.webp',
            education: [
                {
                    name: 'Тюменский государственный медицинский университет',
                    steps: [
                        {
                            year: '2020',
                            text: 'Стоматология',
                            moreText: 'Базовое образование'
                        }
                    ]
                }
            ],
            experience: [
                {
                    name: 'Стоматология «Ультра Дент»',
                    steps: [
                        {
                            year: '2023 — н. в.',
                            text: 'Врач-стоматолог Ортопед',
                            moreText: null
                        }
                    ]
                }
            ],
            skill: null,
        }
    },

    {
        name: 'Быржыбаев Джылдызбек Исаевич',
        procedures: '1 850',
        clients: '520',
        avatar: '/modals/man-1.webp',
        selectId: ['orto'],
        modal: {
            post: 'Стоматолог-ортопед',
            stage: '35 лет',
            rating: '4.4',
            content: 'Специализируется на восстановлении утраченных и разрушенных зубов, эстетической реставрации и функциональной реабилитации. Подбирает решения, которые выглядят естественно и служат долгие годы.',
            updated: '13.01.2026',
            video: '/modals/video-1.mp4',
            videoPrev: '/modals/video-1.webp',
            education: [
                {
                    name: 'Кыргызская государственная медицинская академия И.К.Ахунбаева',
                    steps: [
                        {
                            year: '1990',
                            text: 'Стоматология',
                            moreText: 'Базовое образование'
                        },
                        {
                            year: '1991',
                            text: 'Стоматология общей практики',
                            moreText: 'Интернатура'
                        }
                    ]
                }
            ],
            experience: [
                {
                    name: 'Стоматология «Ультра Дент»',
                    steps: [
                        {
                            year: '2019 — н. в.',
                            text: 'Стоматолог ортопед',
                            moreText: null
                        }
                    ]
                }
            ],
            skill: null,
        }
    },

    {
        name: 'Каримов Хетаг Маратович',
        procedures: '1 850',
        clients: '520',
        avatar: '/modals/man-2.webp',
        selectId: ['orto'],
        modal: {
            post: 'Стоматолог-ортопед, стоматолог',
            stage: '14 лет',
            rating: '5.0',
            content: 'Специализируется на восстановлении утраченных и разрушенных зубов, эстетической реставрации и функциональной реабилитации. Подбирает решения, которые выглядят естественно и служат долгие годы.',
            updated: '13.01.2026',
            video: '/modals/video-2.mp4',
            videoPrev: '/modals/video-2.webp',
            education: [
                {
                    name: 'Северо-Осетинская государственная медицинская академия',
                    steps: [
                        {
                            year: '2011',
                            text: 'Стоматология',
                            moreText: 'Базовое образование'
                        },
                        {
                            year: '2014',
                            text: 'Стоматология ортопедическая',
                            moreText: 'Ординатура'
                        }
                    ]
                }
            ],
            experience: [
                {
                    name: 'Стоматология «Ультра Дент»',
                    steps: [
                        {
                            year: '2024 — н. в.',
                            text: 'Стоматолог ортопед',
                            moreText: null
                        }
                    ]
                }
            ],
            skill: null,
        }
    },

    {
        name: 'Бондаренко Михаил Романович',
        procedures: '1 850',
        clients: '520',
        avatar: '/modals/man-3.webp',
        selectId: ['full'],
        modal: {
            post: 'Стоматолог-имплантолог, стоматолог-хирург',
            stage: '12 лет',
            rating: '5.0',
            content: 'Специализируется на восстановлении утраченных и разрушенных зубов, эстетической реставрации и функциональной реабилитации. Подбирает решения, которые выглядят естественно и служат долгие годы.',
            updated: '13.01.2026',
            video: '/modals/video-3.mp4',
            videoPrev: '/modals/video-3.webp',
            education: [
                {
                    name: 'Уральский государственный медицинский университет',
                    steps: [
                        {
                            year: '2013',
                            text: 'Стоматология',
                            moreText: 'Базовое образование'
                        },
                        {
                            year: '2016',
                            text: 'Стоматология хирургическая',
                            moreText: 'Повышение квалификации'
                        },
                        {
                            year: '2016',
                            text: 'Стоматология детская',
                            moreText: 'Циклы переподготовки'
                        }
                    ]
                }
            ],
            experience: [
                {
                    name: 'ООО «Стоматологическая поликлиника 3»',
                    steps: [
                        {
                            year: '2018 — 2024',
                            text: 'Стоматолог-хирург',
                            moreText: null
                        }
                    ]
                }
            ],
            skill: [
                {
                    name: 'Уральский государственный медицинский университет',
                    steps: [
                        {
                            year: '2020',
                            text: 'Стоматология детская',
                            moreText: 'Повышение квалификации'
                        },
                        {
                            year: '2020',
                            text: 'Стоматология хирургическая',
                            moreText: 'Повышение квалификации'
                        }
                    ]
                }
            ],
        }
    },


    {
        name: 'Аббасов Низами Вагиф оглы',
        procedures: '1 850',
        clients: '520',
        avatar: '/modals/man-4.webp',
        selectId: ['hir'],
        modal: {
            post: 'Стоматолог-имплантолог, стоматолог-хирург',
            stage: '15 лет',
            rating: '5.0',
            content: 'Специализируется на восстановлении утраченных и разрушенных зубов, эстетической реставрации и функциональной реабилитации. Подбирает решения, которые выглядят естественно и служат долгие годы.',
            updated: '13.01.2026',
            video: '/modals/video-4.mp4',
            videoPrev: '/modals/video-4.webp',
            education: [
                {
                    name: 'Омский государственный медицинский университет',
                    steps: [
                        {
                            year: '2010',
                            text: 'Стоматология',
                            moreText: 'Базовое образование'
                        }
                    ]
                },
                {
                    name: 'Омская государственная медицинская академия',
                    steps: [
                        {
                            year: '2011',
                            text: 'Стоматология хирургическая',
                            moreText: 'Интернатура'
                        },
                        {
                            year: '2012',
                            text: 'Стоматология хирургическая',
                            moreText: 'Ординатура'
                        }
                    ]
                }
            ],
            experience: [
                {
                    name: 'УльтраДент',
                    steps: [
                        {
                            year: '2021 — н. в.',
                            text: 'Хирург имплатолог',
                            moreText: null
                        }
                    ]
                },
                {
                    name: 'Стоматология «Спарта мед»',
                    steps: [
                        {
                            year: '2014 — 2020',
                            text: 'Хирург имплатолог',
                            moreText: null
                        }
                    ]
                },
                {
                    name: 'Городская поликлиника №4',
                    steps: [
                        {
                            year: '2011 — 2014',
                            text: 'Стоматолог хирург',
                            moreText: null
                        }
                    ]
                }
            ],
            skill: [
                {
                    name: '«Сложные клинические случае в эндодонтии - прростые пути решения»',
                    steps: [
                        {
                            year: '2014',
                        }
                    ]
                },
                {
                    name: '«Имлантация от А до Я»',
                    steps: [
                        {
                            year: '2015',
                        }
                    ]
                },
                {
                    name: '«Имплантация и протезирование на имплантатах XIVE»',
                    steps: [
                        {
                            year: '2015',
                        }
                    ]
                },
                {
                    name: '«Командный подход в дентальной имплантации. Хирургический и ортопедический взгляд. Анализ ошибок и профилактика осложнений»',
                    steps: [
                        {
                            year: '2017',
                        }
                    ]
                },
                {
                    name: '«Первый имплантологический конгресс»',
                    steps: [
                        {
                            year: '2017',
                        }
                    ]
                },
                {
                    name: '«Основы принятия решения в имплантологии: хирургические и ортопедические аспекты»',
                    steps: [
                        {
                            year: '2017',
                        }
                    ]
                },
                {
                    name: '«Avanced GBR Surgery Course of Osstem AIC»',
                    steps: [
                        {
                            year: '2017',
                        }
                    ]
                },
                {
                    name: '«Мягкие ткани. Как защитить ваш имплант?»',
                    steps: [
                        {
                            year: '2019',
                        }
                    ]
                },
                {
                    name: '«Полная реабилитация челюсти»',
                    steps: [
                        {
                            year: '2019',
                        }
                    ]
                },
                {
                    name: '«Пери-имплантит. Как не потерять ваш имплант?»',
                    steps: [
                        {
                            year: '2019',
                        }
                    ]
                },
                {
                    name: '«Костная пластика аутогенной костной тканью»',
                    steps: [
                        {
                            year: '2019',
                        }
                    ]
                },
                {
                    name: '«Алтра Конгресс по имплантологии и эстетической стоматологии»',
                    steps: [
                        {
                            year: '2020',
                        }
                    ]
                },
                {
                    name: 'Омский государственный медицинский университет',
                    steps: [
                        {
                            year: '2022',
                            text: 'Стоматология хирургическая',
                            moreText: 'Повышение квалификации'
                        }
                    ]
                },
            ],
        }
    },

    {
        name: 'Акрамов Улугбек Ахмадович',
        procedures: '1 850',
        clients: '520',
        avatar: '/modals/man-5.webp',
        selectId: ['hir'],
        modal: {
            post: 'Стоматолог-хирург',
            stage: '8 лет',
            rating: '4.7',
            content: 'Специализируется на восстановлении утраченных и разрушенных зубов, эстетической реставрации и функциональной реабилитации. Подбирает решения, которые выглядят естественно и служат долгие годы.',
            updated: '13.01.2026',
            video: '/modals/video-5.mp4',
            videoPrev: '/modals/video-5.webp',
            education: [
                {
                    name: 'Астраханский государственный медицинский университет',
                    steps: [
                        {
                            year: '2017',
                            text: 'Стоматология',
                            moreText: 'Базовое образование'
                        },
                        {
                            year: '2020',
                            text: 'Стоматология хирургическая',
                            moreText: 'Ординатура'
                        }
                    ]
                }
            ],
            experience: [],
            skill: [
                {
                    name: '«Основы принятия решений в имплантологии: хирургические и ортопедические аспекты», Компания «Nobel Biocare», г. Астрахань',
                    steps: [
                        {
                            year: '2018',
                        }
                    ]
                },
                {
                    name: '«Применение 3D компьютерной томографии в клинической практике врача-стоматолога и оториноларинголога», г. Астрахань',
                    steps: [
                        {
                            year: '2019',
                        }
                    ]
                },
                {
                    name: 'Теоритическо-практический интенсив «Синус-лифтинг», г. Москва',
                    steps: [
                        {
                            year: '2021',
                        }
                    ]
                }
            ],
        }
    },

    {
        name: 'Бебик Анна Игоревна',
        procedures: '1 850',
        clients: '520',
        avatar: '/modals/man-6.webp',
        selectId: ['gigi'],
        modal: {
            post: 'Стоматолог-гигиенист',
            stage: '5 лет',
            rating: '5.0',
            content: 'Специализируется на восстановлении утраченных и разрушенных зубов, эстетической реставрации и функциональной реабилитации. Подбирает решения, которые выглядят естественно и служат долгие годы.',
            updated: '13.01.2026',
            video: '/modals/video-6.mp4',
            videoPrev: '/modals/video-6.webp',
            education: [
                {
                    name: 'Тюменский медицинский колледж',
                    steps: [
                        {
                            year: '2020',
                            text: 'Стоматология профилактическая',
                            moreText: 'Базовое образование'
                        }
                    ]
                }
            ],
            experience: [
                {
                    name: "Стоматология Ультра-Дент",
                    steps: [
                        {
                            year: '2023 — н. в.',
                            text: 'Стоматолог-гигиенист'
                        }
                    ]
                }
            ],
            skill: null,
        }
    },

    {
        name: 'Макарова Алла Александровна',
        procedures: '1 850',
        clients: '520',
        avatar: '/modals/man-7.webp',
        selectId: ['gigi'],
        modal: {
            post: 'Стоматолог-гигиенист',
            stage: '6 лет',
            rating: '5.0',
            content: 'Специализируется на восстановлении утраченных и разрушенных зубов, эстетической реставрации и функциональной реабилитации. Подбирает решения, которые выглядят естественно и служат долгие годы.',
            updated: '13.01.2026',
            video: '/modals/video-7.mp4',
            videoPrev: '/modals/video-7.webp',
            education: [
                {
                    name: 'Тюменский медицинский колледж',
                    steps: [
                        {
                            year: '2019',
                            text: 'Стоматология профилактическая',
                            moreText: 'Базовое образование'
                        }
                    ]
                }
            ],
            experience: [
                {
                    name: "Стоматология «УльтраДент»",
                    steps: [
                        {
                            year: '2021 — н. в.',
                            text: 'Гигиенист стоматологический'
                        }
                    ]
                }
            ],
            skill: null,
        }
    },

    {
        name: 'Гофман Мария Владимировна',
        procedures: '1 850',
        clients: '520',
        avatar: '/modals/man-8.webp',
        selectId: ['gigi'],
        modal: {
            post: 'Стоматолог-гигиенист',
            stage: '2 года',
            rating: '4.9',
            content: 'Специализируется на восстановлении утраченных и разрушенных зубов, эстетической реставрации и функциональной реабилитации. Подбирает решения, которые выглядят естественно и служат долгие годы.',
            updated: '13.01.2026',
            video: '/modals/video-8.mp4',
            videoPrev: '/modals/video-8.webp',
            education: [
                {
                    name: 'Тюменский медицинский колледж',
                    steps: [
                        {
                            year: '2023',
                            text: 'Стоматология профилактическая',
                            moreText: 'Базовое образование'
                        }
                    ]
                }
            ],
            experience: [
                {
                    name: "Ультра Дент на Республике 14/7",
                    steps: [
                        {
                            year: '2023 — н. в.',
                            text: 'Гигиенист стоматологический'
                        }
                    ]
                }
            ],
            skill: null,
        }
    },

    {
        name: 'Стоян Татьяна Юрьевна',
        procedures: '1 850',
        clients: '520',
        avatar: '/modals/man-9.webp',
        selectId: ['full'],
        modal: {
            post: 'Стоматолог',
            stage: '8 лет',
            rating: '4.9',
            content: 'Специализируется на восстановлении утраченных и разрушенных зубов, эстетической реставрации и функциональной реабилитации. Подбирает решения, которые выглядят естественно и служат долгие годы.',
            updated: '13.01.2026',
            video: '/modals/video-9.mp4',
            videoPrev: '/modals/video-9.webp',
            education: [
                {
                    name: 'Кубанский государственный медицинский университет',
                    steps: [
                        {
                            year: '2017',
                            text: 'Стоматология',
                            moreText: 'Базовое образование'
                        }
                    ]
                }
            ],
            experience: [
                {
                    name: "Ультра Дент",
                    steps: [
                        {
                            year: '2025 — н. в.',
                            text: 'Врач стоматолог терапевт'
                        }
                    ]
                }
            ],
            skill: [
                {
                    name: "«Перелечивание жевательных зубов от простого к сложному», Краснодар",
                    steps: [
                        {
                            year: "2017"
                        }
                    ]
                },
                {
                    name: "«Первичная эндодонтия от А до Я», г. Краснодар",
                    steps: [
                        {
                            year: "2017"
                        }
                    ]
                },
                {
                    name: "Вебинар по эстетической реставрации",
                    steps: [
                        {
                            year: "2018"
                        }
                    ]
                },
                {
                    name: "Вебинар «Неотложные состояния в стоматологии»",
                    steps: [
                        {
                            year: "2018"
                        }
                    ]
                },
                {
                    name: "«Мир микроскопной стоматологии. Погружение в новую реальность», Лепатова Е., Тюмень",
                    steps: [
                        {
                            year: "2019"
                        }
                    ]
                },
                {
                    name: "«Реставрация боковой группы зубов», Блохина А., г. Тюмень",
                    steps: [
                        {
                            year: "2019"
                        }
                    ]
                },
                {
                    name: "«Реставрация фронтальной группы зубов», Толмачев И.",
                    steps: [
                        {
                            year: "2020"
                        }
                    ]
                },
                {
                    name: "«Дентальная фотография», Зуев Б.",
                    steps: [
                        {
                            year: "2020"
                        }
                    ]
                },
                {
                    name: "«Изоляция глубоких поддесневых дефектов. Просто о сложной изоляции», Гордийчук В.",
                    steps: [
                        {
                            year: "2020"
                        }
                    ]
                }
            ],
        }
    },

    {
        name: 'Лымар Максим Григорьевич',
        procedures: '1 850',
        clients: '520',
        avatar: '/modals/man-10.webp',
        selectId: ['full'],
        modal: {
            post: 'Стоматолог-эндодонтист',
            stage: '2 года',
            rating: '4.9',
            content: 'Специализируется на восстановлении утраченных и разрушенных зубов, эстетической реставрации и функциональной реабилитации. Подбирает решения, которые выглядят естественно и служат долгие годы.',
            updated: '13.01.2026',
            video: '/modals/video-10.mp4',
            videoPrev: '/modals/video-10.webp',
            education: [
                {
                    name: 'Тюменский государственный медицинский университет',
                    steps: [
                        {
                            year: '2023',
                            text: 'Стоматология',
                            moreText: 'Базовое образование'
                        }
                    ]
                },
                {
                    name: 'Омский государственный медицинский университет',
                    steps: [
                        {
                            year: '2025',
                            text: 'Стоматология терапевтическая',
                            moreText: 'Ординатура'
                        }
                    ]
                }
            ],
            experience: [
                {
                    name: "«Ультра-Дент»",
                    steps: [
                        {
                            year: '2024 — н. в.',
                            text: 'Стоматолог - эндодонтист'
                        }
                    ]
                },
                {
                    name: "ООО «Апполония - дент»",
                    steps: [
                        {
                            year: '2025 — 2025',
                            text: 'Врач - стоматолог'
                        }
                    ]
                },
                {
                    name: "ООО «Семейная стоматология»",
                    steps: [
                        {
                            year: '2023 — 2024',
                            text: 'Врач-стоматолог терапевт, детский стоматолог'
                        }
                    ]
                },
                {
                    name: "ООО «Семейная стоматология»",
                    steps: [
                        {
                            year: '2020 — 2023',
                            text: 'Ассистент врача-стоматолога'
                        }
                    ]
                }
            ],
            skill: [
                {
                    name: "«Эндодонтия простыми словами», Ибрагим Гамзалов",
                    steps: [
                        {
                            year: "2020"
                        }
                    ]
                },
                {
                    name: "«Знакомство с возможностями использования микроскопа в практике врача стоматолога-терапевта», Николай Батюков",
                    steps: [
                        {
                            year: "2021"
                        }
                    ]
                },
                {
                    name: "«Витальная терапия пульпы», Елена Липатова",
                    steps: [
                        {
                            year: "2023"
                        }
                    ]
                },
                {
                    name: "«Повторное эндодонтическое вмешательство», Ираида Шляхтова",
                    steps: [
                        {
                            year: "2023"
                        }
                    ]
                },
                {
                    name: "«Неотложная и экстренная помощь на амбулаторном стоматологическом приеме», Никита Баранников",
                    steps: [
                        {
                            year: "2023"
                        }
                    ]
                },
                {
                    name: "«Реставрации фронтальной и жевательной группы зубов», Жанна Хиора",
                    steps: [
                        {
                            year: "2023"
                        }
                    ]
                },
                {
                    name: "«Боль в эндодонтии», Михаил Соломонов",
                    steps: [
                        {
                            year: "2023"
                        }
                    ]
                },
                {
                    name: "«EndoKids», Катерина Кузнецова",
                    steps: [
                        {
                            year: "2023"
                        }
                    ]
                },
                {
                    name: "«Коронки в детской стоматологии», Анастасия Осокина",
                    steps: [
                        {
                            year: "2024"
                        }
                    ]
                },
                {
                    name: "«Direct anterior. Прямые реставрации фронтальной группы зубов», Роман Карпенко",
                    steps: [
                        {
                            year: "2024"
                        }
                    ]
                },
                {
                    name: "«Основные принципы проведения первичной консультации», Виталий Поволоцкий",
                    steps: [
                        {
                            year: "2024"
                        }
                    ]
                }
            ],
        }
    },

    {
        name: 'Хусаинов Азамат Минизакиевич',
        procedures: '1 850',
        clients: '520',
        avatar: '/modals/man-11.webp',
        selectId: ['full'],
        modal: {
            post: 'Стоматолог',
            stage: '16 лет',
            rating: '4.3',
            content: 'Специализируется на восстановлении утраченных и разрушенных зубов, эстетической реставрации и функциональной реабилитации. Подбирает решения, которые выглядят естественно и служат долгие годы.',
            updated: '13.01.2026',
            video: '/modals/video-11.mp4',
            videoPrev: '/modals/video-11.webp',
            education: [
                {
                    name: 'Башкирский государственный медицинский университет',
                    steps: [
                        {
                            year: '2009',
                            text: 'Стоматология',
                            moreText: 'Базовое образование'
                        }
                    ]
                },
                {
                    name: 'Тюменский государственный медицинский университет',
                    steps: [
                        {
                            year: '2010',
                            text: 'Стоматология общей практики',
                            moreText: 'Интернатура'
                        },
                        {
                            year: '2016',
                            text: 'Стоматология хирургическая',
                            moreText: 'Повышение квалификации'
                        }
                    ]
                }
            ],
            experience: [
                {
                    name: "Стоматология Ультра-дент",
                    steps: [
                        {
                            year: '2024 — н. в.',
                            text: 'Стоматолог-ортопед'
                        }
                    ]
                }
            ],
            skill: [
                {
                    name: "Семинар «Протезирование на имплантах», Учебный центр группы компаний «Имко», г. Сургут",
                    steps: [
                        {
                            year: "2011"
                        }
                    ]
                },
                {
                    name: "Семинар «Хирургический протокол по имплантации Implantium & Super Line», г. Екатеринбург",
                    steps: [
                        {
                            year: "2015"
                        }
                    ]
                },
                {
                    name: "«Система Impro. Хирургические и ортопедические протоколы. Клинические и лабораторные этапы», г. Москва",
                    steps: [
                        {
                            year: "2019"
                        }
                    ]
                },
                {
                    name: "Конференция «Евразийская неделя стоматологии», г. Москва",
                    steps: [
                        {
                            year: "2020"
                        }
                    ]
                }
            ],
        }
    }
];

document.addEventListener('DOMContentLoaded', () => {

    function replaceDataInModal(doctor, modal) {
        const name = modal.querySelector('[data-name]');
        const post = modal.querySelector('[data-post]');
        const stage = modal.querySelector('[data-stage]');
        const rating = modal.querySelector('[data-rating]');
        const content = modal.querySelector('[data-content]');
        const updated = modal.querySelector('[data-updated]');
        const video = modal.querySelector('[data-video]');
        const inputFormName = modal.querySelector('[data-name-input]');
        const videoPrev = modal.querySelector('.modal-doc-video__content img');
        const procedures = modal.querySelector('[data-procedures]');
        const clients = modal.querySelector('[data-clients]');
        const avatar = modal.querySelector('[data-avatar]');

        const wrList = modal.querySelector('.modal-doc__works-list');
        const wrHtml = getHtmlBlock(doctor);
        if (!wrHtml) {
            wrList.style.display = 'none';
        } else {
            wrList.innerHTML = wrHtml;
        }

        const edList = modal.querySelector('.modal-doc__education-list');
        const edHtml = getHtmlBlock(doctor, 'svg');
        edList.innerHTML = edHtml;

        const edMoreBlock = modal.querySelector('.modal-doc__education--more');
        const edMoreHtml = getHtmlBlock(doctor, 'svg2');
        if (!edMoreHtml) {
            edMoreBlock.style.display = 'none';
        } else {
            edMoreBlock.querySelector('.modal-doc__education-list').innerHTML = edMoreHtml;
        }

        name.innerText = doctor.name;
        post.innerText = doctor.modal.post;
        stage.innerText = doctor.modal.stage;
        rating.innerText = doctor.modal.rating;
        content.innerText = doctor.modal.content;
        updated.innerText = doctor.modal.updated;
        procedures.innerText = doctor.procedures;
        clients.innerText = doctor.clients;
        video.dataset.video = doctor.modal.video;
        inputFormName.value = doctor.name;
        videoPrev.setAttribute('src', doctor.modal.videoPrev);
        videoPrev.setAttribute('alt', doctor.name);
        avatar.setAttribute('src', doctor.avatar);

        return modal;
    }

    function getHtmlBlock(doctor, type = null) {
        let eds = doctor.modal.experience;

        if (type === 'svg') {
            eds = doctor.modal.education;
        }

        if (type === 'svg2') {
            eds = doctor.modal.skill;
        }

        if (!eds || !eds.length) {
            return;
        }

        let html = '';
        eds.forEach(ed => {
            html = html + `<div class="work-item ${type ? type : ''}"><div class="work-item__content">`;

            const steps = ed.steps;
            if (ed.name) { html = html + `<div class="work-item__title">${ed.name}</div>`; }

            steps.forEach((step, i) => {
                if (step.year) { html = html + `<div class="work-item__god">${step.year}</div>`; }
                if (step.text) { html = html + `<div class="work-item__post">${step.text}</div>`; }
                if (step.moreText) { html = html + `<div class="work-item__god">${step.moreText}</div>`; }

                if (steps.length > i + 1) {
                    html = html + '<span class="br"></span>';
                }
            });

            html = html + '</div></div>';
        });

        return html;
    }

    document.querySelectorAll('[data-doctor-more]').forEach(el => {

        el.addEventListener('click', (e) => {
            const index = e.currentTarget.dataset.doctorMore;
            const doctor = doctors[index];

            if (!doctor) {
                throw new Error(`doctors[${index}] - отсутствует`);
            }

            const modalDoc = replaceDataInModal(doctor, document.querySelector('.modal-doc'));
            Modals.openModal({ modalElement: modalDoc });
        });
    });

    document.querySelectorAll('[data-doctor]').forEach(el => {
        const index = el.dataset.doctor;
        const doctor = doctors[index];
        if (!doctor) {
            throw new Error(`doctors[${index}] - отсутствует`);
        }

        el.dataset.doc = JSON.stringify(doctor.selectId);

        const avatarImg = el.querySelector('.doctor__avatar img');
        avatarImg.setAttribute('src', doctor.avatar);

        const stage = el.querySelector('[data-stage]');
        stage.innerText = doctor.modal.stage;

        const post = el.querySelector('[data-post]');
        post.innerText = doctor.modal.post;

        const name = el.querySelector('[data-name]');
        name.innerText = doctor.name;

        const procedures = el.querySelector('[data-procedures]');
        procedures.innerText = doctor.procedures;

        const clients = el.querySelector('[data-clients]');
        clients.innerText = doctor.clients;

        const content = el.querySelector('[data-content]');
        content.innerText = doctor.modal.content;
    });


    document.querySelectorAll('.doctor').forEach(doctor => {
        const doctorBtn = doctor.querySelector('.doctor__btn-order');

        doctorBtn.addEventListener('click', async () => {
            await window.openModal('.modal-call');
        });
    });

});