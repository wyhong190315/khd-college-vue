<template>
    <div>
        <nav-menu />
        <h1>This is my job lists!</h1>
        <footer-menu />
    </div>
</template>

<script>
import NavMenu from '@/components/common/NavMenu'
import FooterMenu from '@/components/common/FooterMenu'
export default {
  name: 'practiseJob',
  components: { FooterMenu, NavMenu }
}
</script>

<style scoped>

</style>
