<template>
    <div>
        <nav-menu />
        <h1>This is my first space name</h1>
        <footer-menu />
    </div>
</template>

<script>
import NavMenu from '@/components/common/NavMenu'
import FooterMenu from '@/components/common/FooterMenu'
export default {
  name: 'spaceInfo',
  components: { FooterMenu, NavMenu }
}
</script>

<style scoped>

</style>
