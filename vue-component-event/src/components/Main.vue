<template>
  <div>
    <h3>Main</h3>
    <div>{{ search }}</div>
    <searchComponent @searchEvent="getSearch" />
  </div>
</template>

<script>
import SearchComponent from "./SearchComponent.vue";
export default {
  components: { SearchComponent },
  data() {
    return {
      search: "",
    };
  },
  methods: {
    getSearch(data) {
      this.search = data;
    },
  },
};
</script>
