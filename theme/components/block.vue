<template>
  <div class="bg-[#4D9E95] rounded-lg py-1 px-3 border-2 border-black custom-block ">
    <slot />
  </div>
</template>

<style scoped>
.custom-block {
  box-shadow: 4px 4px 0 0 black;
  display: inline-block;
}
</style>