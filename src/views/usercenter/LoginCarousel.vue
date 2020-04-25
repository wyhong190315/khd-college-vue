<template>
    <div>
        <a-carousel autoplay>
            <div><h1>First 1</h1></div>
            <div><h1>Second 2</h1></div>
            <div><h1>Third 3</h1></div>
            <div><h1>Fourth 4</h1></div>
        </a-carousel>
        <div style="position:fixed;width:350px;height:450px;background: #666;right: 100px;top:80px;">login</div>
    </div>
</template>

<script>
export default {
  name: 'LoginCarousel'
}
</script>

<style scoped>
    .ant-carousel >>> .slick-slide {
        text-align: center;
        height: 540px;
        line-height: 540px;
        background: #ff6a14;
        color: azure;
        overflow: hidden;
    }
</style>
