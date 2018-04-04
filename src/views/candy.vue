<template>
  <div class="candy">
     <span>{{id}}: {{item}}</span>
  </div>
</template>

<script>
export default {
  props: {
    item: String,
    id: Number,
    items: Array
  }

}
</script>

<style>

</style>
