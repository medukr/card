<template>
    <div class="card">
        <div class="card-header project-header" :id="headingId" data-toggle="collapse" :data-target="'#' + collapseId" aria-expanded="true" :aria-controls="collapseId">
            <h5 class="mb-0 card-title">{{element.title}}</h5>
        </div>

        <div :id="collapseId" :class="['collapse', isShowClass]" :aria-labelledby="headingId" data-parent="#accordion">
            <div class="card-header">
                <p class="card-text">{{element.description}}</p>
                <a class="nav-link__project m-0" :href="element.git.repo" target="_blank"><i class="fab fa-github"></i></a>
                <a class="nav-link__project m-0" :href="element.site.url" target="_blank"><i class="fab fa-internet-explorer"></i></a>
            </div>
            <div class="card-body">


                <!--Carousel Begin-->
                <div :id="carouselIndicatorsId" class="carousel slide" data-ride="carousel">


                    <!--Carousel Indicators Begin-->
                    <ol class="carousel-indicators">
                        <li v-for="n in element.images.count"
                            :data-target="'#'+carouselIndicatorsId"
                            :data-slide-to="n - 1"
                            :class="[(n === 1 ? 'active' : ''), 'bg-dark']"
                        ></li>
                    </ol>
                    <!--Carousel Indicators END-->



                    <!--Carousel Images Begin-->
                    <div class="carousel-inner">
                        <div v-for="n in element.images.count" :class="['carousel-item', (n === 1 ? 'active' : '')]" >
                            <img
                                    class="d-block w-100"
                                    :src="'/assets/images/'+ element.images.dir + '/' + 'img' + n + '.png'"
                                    :alt="'slide-' + n">
                        </div>
                    </div>
                    <!--Carousel Images END-->


                    <!--Carousel Controls Begin-->
                    <a class="carousel-control-prev" :href="'#' + carouselIndicatorsId" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon bg-dark" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" :href="'#' + carouselIndicatorsId" role="button" data-slide="next">
                        <span class="carousel-control-next-icon bg-dark" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                    <!--Carousel Controls End-->

                </div>
                <!--Carousel END-->


            </div>
            <div class="card-footer">
                <p class="card-text" :id="'tools'+id">Tools...
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "card",
        props: {
            id: {
                type: [String, Number],
                required: true
            },
            show : {
                type: Boolean,
                default: false
            },
            element: {
                type: Object,
                required: true
            },
            countImages: {
                type: Number,
                default: 0
            }
        },
        computed : {
            headingId(){
                return 'heading' + this.id
            },
            collapseId(){
                return 'collapse' + this.id
            },
            carouselIndicatorsId(){
                return 'carouselIndicators' + this.id
            },
            isShowClass(){
                return this.show ? 'show': ''
            }
        },
        mounted() {
            this.$el.querySelector('#tools' + this.id).innerHTML = this.element.tools
        }
    }
</script>

<style scoped>

</style>