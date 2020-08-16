<template>
  <div id="footer">
    <p class="mt-5 mb-3 text-muted">&copy; {{ new Date().getFullYear() }}</p>
  </div>
</template>


<script>
export default {
  name: "Footer",

};
</script>

<style scoped>
.footer {
    position: absolute;
    bottom: 0;
}
</style>