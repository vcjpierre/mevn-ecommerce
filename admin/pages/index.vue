<template>
  
</template>

<script>
export default {
  // asyncData is fetching Data before nuxt page finished loading on the browser.
  // It is good for SEO because the data will be loaded first
  // authenticated: true,
  mounted: function () {
    this.$auth.loginWith('auth0')
  },
}
</script>

<style>
</style>