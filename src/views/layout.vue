<template>
    <AppTopnav></AppTopnav>
    <header>
        头部
    </header>
    <main>
        <RouterView></RouterView>
    </main>
    <footer>
        底部
    </footer>
</template>

<script>
import AppTopnav from '@/components/app-topnav.vue'
export default {
  name: 'xtx-layout',
  components: { AppTopnav }
}
</script>

<style>
</style>
