<template>
    <div>
    <div class="text-center page-title">
        <h3>Projects</h3>
    </div>
    <!--Accordion Begin-->
    <div id="accordion">

        <!--Card Begin-->
        <c-card
        id="Fit"
        :show="true"
        :element="myfitinfo">
        </c-card>
        <!--Card End-->

        <c-card
            id="Radio"
            :element="radio"
        >
        </c-card>


        <c-card
                id="Radio_api"
                :element="radio_api"
        >
        </c-card>

        <!--Card Begin-->
<!--        <div class="card">-->
<!--            <div class="card-header" id="heading3">-->
<!--                <h5 class="mb-0">-->
<!--                    <button class="btn btn-link" data-toggle="collapse" data-target="#collapse3" aria-expanded="true" aria-controls="collapse3">-->
<!--                        Other-->
<!--                    </button>-->
<!--                </h5>-->
<!--            </div>-->

<!--            <div id="collapse3" class="collapse" aria-labelledby="heading3" data-parent="#accordion">-->
<!--                <div class="card-header">-->
<!--                    <a class="nav-link" href="#"><i class="fab fa-github"></i></a>-->
<!--                </div>-->
<!--                <div class="card-body">-->


<!--                    &lt;!&ndash;Carousel Begin&ndash;&gt;-->
<!--                    <div id="carouselExampleIndicators3" class="carousel slide" data-ride="carousel">-->


<!--                        &lt;!&ndash;Carousel Indicators Begin&ndash;&gt;-->
<!--                        <ol class="carousel-indicators">-->
<!--                            <li data-target="#carouselExampleIndicators3" data-slide-to="0" class="active"></li>-->
<!--                            <li data-target="#carouselExampleIndicators3" data-slide-to="1"></li>-->
<!--                            <li data-target="#carouselExampleIndicators3" data-slide-to="2"></li>-->
<!--                            <li data-target="#carouselExampleIndicators3" data-slide-to="3"></li>-->
<!--                            <li data-target="#carouselExampleIndicators3" data-slide-to="4"></li>-->
<!--                            <li data-target="#carouselExampleIndicators3" data-slide-to="5"></li>-->
<!--                            <li data-target="#carouselExampleIndicators3" data-slide-to="6"></li>-->
<!--                        </ol>-->
<!--                        &lt;!&ndash;Carousel Indicators END&ndash;&gt;-->



<!--                        &lt;!&ndash;Carousel Images Begin&ndash;&gt;-->
<!--                        <div class="carousel-inner">-->
<!--                            <div class="carousel-item active">-->
<!--                                <img class="d-block w-100" src="/assets/images/myfitinfo/Screenshot%20from%202019-06-05%2022-26-14.png" alt="First slide">-->
<!--                            </div>-->
<!--                            <div class="carousel-item">-->
<!--                                <img class="d-block w-100" src="/assets/images/myfitinfo/Screenshot%20from%202019-06-05%2022-27-03.png" alt="Second slide">-->
<!--                            </div>-->
<!--                            <div class="carousel-item">-->
<!--                                <img class="d-block w-100" src="/assets/images/myfitinfo/Screenshot%20from%202019-06-05%2022-27-11.png" alt="Third slide">-->
<!--                            </div>-->
<!--                            <div class="carousel-item">-->
<!--                                <img class="d-block w-100" src="/assets/images/myfitinfo/Screenshot%20from%202019-06-05%2022-27-27.png" alt="Third slide">-->
<!--                            </div>-->
<!--                            <div class="carousel-item">-->
<!--                                <img class="d-block w-100" src="/assets/images/myfitinfo/Screenshot%20from%202019-06-05%2022-27-42.png" alt="Third slide">-->
<!--                            </div>-->
<!--                            <div class="carousel-item">-->
<!--                                <img class="d-block w-100" src="/assets/images/myfitinfo/Screenshot%20from%202019-06-05%2022-28-07.png" alt="Third slide">-->
<!--                            </div>-->
<!--                            <div class="carousel-item">-->
<!--                                <img class="d-block w-100" src="/assets/images/myfitinfo/Screenshot%20from%202019-06-05%2022-28-31.png" alt="Third slide">-->
<!--                            </div>-->
<!--                        </div>-->
<!--                        &lt;!&ndash;Carousel Images END&ndash;&gt;-->


<!--                        &lt;!&ndash;Carousel Controls Begin&ndash;&gt;-->
<!--                        <a class="carousel-control-prev" href="#carouselExampleIndicators3" role="button" data-slide="prev">-->
<!--                            <span class="carousel-control-prev-icon bg-dark" aria-hidden="true"></span>-->
<!--                            <span class="sr-only">Previous</span>-->
<!--                        </a>-->
<!--                        <a class="carousel-control-next" href="#carouselExampleIndicators3" role="button" data-slide="next">-->
<!--                            <span class="carousel-control-next-icon bg-dark" aria-hidden="true"></span>-->
<!--                            <span class="sr-only">Next</span>-->
<!--                        </a>-->
<!--                        &lt;!&ndash;Carousel Controls End&ndash;&gt;-->

<!--                    </div>-->
<!--                    &lt;!&ndash;Carousel END&ndash;&gt;-->


<!--                </div>-->
<!--                <div class="card-footer">-->
<!--                    <div class="card-text text-muted">-->
<!--                        <p>Tools: php, js, css, mysql, yii2, bootstrap, jquery, custom <a href="https://designrevision.com/">Designrevision</a> template,-->
<!--                            <a href="https://www.chartjs.org/">Chart.js</a></p>-->
<!--                    </div>-->
<!--                </div>-->
<!--            </div>-->
<!--        </div>-->
        <!--Card End-->

    </div>
    <!--Accordion EDN-->
    </div>
</template>

<script>
    import CCard from './card'
    import {mapGetters} from 'vuex'


    export default {
        components: {
            CCard
        },
        name: "acccordion",
        computed: {
            ...mapGetters([
                'myfitinfo',
                'radio',
                "radio_api",
                'other'
            ]),
        }
    }
</script>

<style scoped>

</style>