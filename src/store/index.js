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
            description: 'Приложение для...',
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
            description: 'Приложение для...',
            tools: 'Tools: VueJS, bootstrap, custom <a href=\"https://designrevision.com/\">Designrevision</a> template'
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
            description: 'Приложение для...',
            tools: 'Использовались...'
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
        }

    }
});