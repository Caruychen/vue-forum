<template>
  <div class="col-full" :class="$style.centered">
    <h1 :class="$style.headingLarge">Not Found</h1>
    <p :class="$style.textLarge">
      Oops! Page not found, why don't you go
      <router-link :to="{ name: 'PageHome' }">Home</router-link>
      instead?
    </p>
  </div>
</template>

<style module>
.headingLarge {
  font-size: 100px;
}

.textLarge {
  font-size: 50px;
  font-weight: 100;
}

.centered {
  text-align: center;
}
</style>
