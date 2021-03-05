export const state = () => ({
    products: [
        {
            title: "Мультикарта Fitness House",
            id: 1,
            alias: "multikarta-fitness-house",
            description: "Абонемент на посещение любого спортивного клуба сети Fitness House в течении 1 года но не более 100 занятий в свбодное время.",
            image: "https://cdn.pixabay.com/photo/2015/01/09/11/22/fitness-594143_960_720.jpg",
            properties: [
                {   id: 10,
                    title: "Количество занятий",
                    value: "100 занятий"
                },
                {   id: 11,
                    title: "Срок действия",
                    value: "1 год"
                }
            ],
            price: 5000
        },
        {
            title: "Абонемент Fitness House",
            id: 2,
            alias: "abonement-fitness-house",
            description: "Абонемент на посещение одного спортивного клуба сети Fitness House в течении 1 года но не более 100 занятий в утреннее время.",
            image: "https://cdn.pixabay.com/photo/2016/03/27/23/00/weight-lifting-1284616_960_720.jpg",
            properties: [
                {   id: 12,
                    title: "Количество занятий",
                    value: "100 занятий"
                },
                {   id: 13,
                    title: "Срок действия",
                    value: "1 год"
                },
                {   id: 14,
                    title: "Время посещения",
                    value: "утро"
                }
            ],
            price: 1500
        },
        {
            title: "Детская секция вода",
            id: 3,
            alias: "detskaya-sekcia-voda",
            description: "Абонемент на посещение определенного количества занятий детской секции в одном из спортивных клубов сети Fitness House с бассейном в течении 6 месяцев.",
            image: "https://cdn.pixabay.com/photo/2016/03/27/21/55/sunglasses-1284419_960_720.jpg",
            properties: [
                {   id: 15,
                    title: "Количество занятий",
                    value: "18 занятий"
                },
                {   id: 16,
                    title: "Срок действия",
                    value: "6 месяцев"
                },
                {   id: 17,
                    title: "Тип секции",
                    value: "вода"
                }
            ],
            price: 2500
        },
        {
            title: "Пакет персональных тренировок",
            id: 4,
            alias: "paket-prsonalnih-trenirovok",
            description: "Индивидуальная работа тренера с посетителем клуба, с учётом его целей и возможных ограничений.",
            image: "https://cdn.pixabay.com/photo/2017/07/02/19/24/dumbbells-2465478_960_720.jpg",
            properties: [
                {   id: 18,
                    title: "Количество занятий",
                    value: "18 занятий"
                },
                {   id: 19,
                    title: "Срок действия",
                    value: "6 месяцев"
                },
                {   id: 20,
                    title: "Категория тренера",
                    value: "мастер"
                }
            ],
            price: 2000
        },
        {
            title: "Групповые занятия",
            id: 5,
            alias: "gruppovie-zanatiya",
            description: "Абонемент на посещение одного спортивного клуба сети Fitness House в составе групповых секций в вечернее время.",
            image: "https://cdn.pixabay.com/photo/2018/04/05/17/21/kettlebell-3293475_960_720.jpg",
            properties: [
                {   id: 21,
                    title: "Количество занятий",
                    value: "36 занятий"
                },
                {   id: 22,
                    title: "Срок действия",
                    value: "1 год"
                },
                {   id: 23,
                    title: "Время посещения",
                    value: "вечер"
                }
            ],
            price: 2000
        },
        {
            title: "Мастер-класс",
            id: 6,
            alias: "master-class",
            description: "Посещение одного мастер-класса по авторской методике инструктора в одном из клубов сети Fitness House",
            image: "https://cdn.pixabay.com/photo/2016/03/27/07/08/man-1282232_960_720.jpg",
            properties: [
                {   id: 24,
                    title: "Количество занятий",
                    value: "разовое посещение"
                },
                {   id: 25,
                    title: "Срок действия",
                    value: "1 месяц"
                },
                {   id: 26,
                    title: "Категория тренера",
                    value: "профи"
                }
            ],
            price: 1000
        }
    ]

})


