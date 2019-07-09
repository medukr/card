import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        myfitinfo: {
            title: 'Your personal training log',
            images: {
                dir: 'myfitinfo',
                count: 7
            },
            git: {
                repo: 'https://github.com/medukr/myfitinfo',
            },
            site: {
                url: 'http://sparrow.in.ua'
            },
            description: "<p>Это онлайн сервис для тех, кто занимается бодибилдингом, пауэрлифтингом, фитнесом, а также другими силовыми и аэробными видами спорта.</p>\n" +
                "<p>Вы получите много полезных возможностей. Ваши записи тренировок больше никогда не потеряются, а дневник будет доступен в любом месте и в любое время!</p>\n" +
                "<p>У вас в руках появится мощный инструмент, который содержит в себе <b>журнал тренировок</b>, <b>программы тренировок</b>, большой <b>каталог упражнений</b>, <b>замеры</b>, <b>статистику</b></p>\n" +
                "<p>Благодаря статистике, можно контролировать любые отклонения в вашем прогрессе, вовремя корректировать программу тренировок и двигаться точно к цели!</p>\n" +
                "<p> А функционал замеров поможет следить за внешними изменениями и оценить эффективность тренировочного процесса</p>",


            tools: 'Tools: php, js, css, mysql, yii2, bootstrap, jquery, custom <a href=\"https://designrevision.com/\">Designrevision</a> template, <a href=\"https://www.chartjs.org/\">Chart.js</a>'
        },
        radio: {
            title: 'Online radio listener',
            images: {
                dir: 'radio',
                count: 4
            },
            git: {
                repo: 'https://github.com/medukr/radio.sparrow',
            },
            site: {
                url: 'http://radio.sparrow.in.ua'
            },
            description: '<p></p>Несколько <del>тысяч</del> радиостанций в удобном месте с любого устройсва! Фильтры по жанрам, удобный поиск.</p>',
            tools: '<p>Tools: VueJS, bootstrap, custom <a href="https://designrevision.com" target="_blank">Designrevision</a> template, API <a\n' +
                '        href="http://dirble.com" target="_blank"><del>Dirble.com</del></a>, <a href="http://get.sparrow.in.ua" target="_blank">intermediary API by myself</a>.</p>'
        },
        radio_api: {
            title: 'Online radio API service',
            images: {
                dir: 'radio_api',
                count: 2
            },
            git: {
                repo: 'https://github.com/medukr/radio.sparrow.backend',
            },
            site: {
                url: 'http://get.sparrow.in.ua'
            },
            description: '<p>Изначально, при создании <a href="http://radio.sparrow.in.ua" target="_blank">онлайн радио</a>, планировалась простая заглушка на локальном сервере, которая возвращала бы закешированные данные из\n' +
                '    <a href="http://dirble.com" target="_blank">API</a> в процессе разработки. Это было обусловленно условиями бесплатного аккаута, а именно, ограничением количества запросов в месяц, и нежеланием покупать его.</p>\n' +
                '<p>Спустя некоторое время, API престало отвечать на запросы, и заглушка переросла в отдельный проект.</p>\n' +
                '<p>Оно все еще возвращает кеш :)</p>',
            tools: 'Tools: native php'
        },
        other: {
            0: {
                title: 'title',
                images: {
                    dir: 'directory_to_imaes',
                    count: 10
                },
                git: {
                    repo: '',
                },
                site: {
                    url: ''
                },
                description: 'Приложение для...',
                tools: 'Использовалось...'
            }
        },
        contacts: {
            adress: {
                title: 'Adress',
                city : 'Kyiv',
                country: 'Ukraine'
            },
            email: {
                title: 'E-mail',
                name: 'andrii.demydiuk@gmail.com',
                link: 'mailto:andrii.demydiuk@gmail.com'
            },
            phone: {
                title: 'Cell',
                name: '+380(93)911-78-57',
                link: 'tel:+3800939117857'
            },
            skype: {
                title: 'Skype',
                name: 'andrii.demydiuk',
                link: 'skype:andrii.demydiuk?userinfo'
            },
            telegram: {
                title: 'Telegram',
                name: '@nicotinamide',
                link: 'https://t.me/nicotinamide'
            },
            github: {
                title: '',
                name: '',
                link: '',
            }


        }
    },
    getters: {
        myfitinfo(state) {
            return state.myfitinfo;
        },
        radio(state) {
            return state.radio;
        },
        radio_api(state) {
            return state.radio_api
        },
        other(state) {
            return state.other
        },
        contacts(state){
            return state.contacts;
        }

    }
});