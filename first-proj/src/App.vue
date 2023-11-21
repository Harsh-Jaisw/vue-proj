<script setup>
import HelloWorld from './components/HelloWorld.vue';

</script>

<template>
  <RouterLink to="/">HelloWorld</RouterLink>
  <br><br>
  <RouterLink to="/Mycomponent">Mycomponent</RouterLink>
  <br><br>
  <RouterLink to="/Welcome/1/harsh">Welcome</RouterLink>
  <br><br>
  <RouterView/>
  <!-- <HelloWorld :msg="2332"/> -->
</template>

<!-- <style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style> -->
