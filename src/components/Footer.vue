<template>
  <div id="footer" class="bg-info">
    <p class="text-white">&copy; {{ new Date().getFullYear() }}</p>
  </div>
</template>


<script>
export default {
  name: "Footer"
};
</script>

<style scoped>
#footer {
  padding: 22px;
  text-align: center;
}
</style>
