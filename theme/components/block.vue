<template>
  <div class="border-2 border-black custom-block font-extrabold">
    <slot />
  </div>
</template>

<style scoped>
.custom-block {
  box-shadow: 4px 4px 0 0 black;
  display: inline-block;
}
</style>