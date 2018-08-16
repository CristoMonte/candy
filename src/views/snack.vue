<template>
  <div class="snack">
     <span>{{id}}</span>-<span>{{item}}</span>
  </div>
</template>

<script>
export default {
  props: {
    item: String,
    id: String
  }

}
</script>

<style>

</style>
