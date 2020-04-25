<template>
    <a-carousel autoplay>
        <div><img src='../../assets/img/01.jpg' /></div>
        <div><img src='../../assets/img/02.jpg' /></div>
        <div><img src='../../assets/img/03.png' /></div>
        <div><h1>Fourth 4</h1></div>
    </a-carousel>
</template>

<script>
export default {
  name: 'ImageCarousel'
}
</script>

<style scoped>
    .ant-carousel >>> .slick-slide {
        text-align: center;
        height: 400px;
        line-height: 400px;
        background: #4e56dc;
        color: azure;
        overflow: hidden;
    }
</style>
