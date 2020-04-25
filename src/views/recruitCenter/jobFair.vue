<template>
    <div>
        <nav-menu />
        <h1>This is my first job work!</h1>
        <footer-menu />
    </div>
</template>

<script>
import NavMenu from '@/components/common/NavMenu'
import FooterMenu from '@/components/common/FooterMenu'
export default {
  name: 'jobFair',
  components: { FooterMenu, NavMenu }
}
</script>

<style scoped>

</style>
