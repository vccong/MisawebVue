<template>
  <div class="content">
        <router-view></router-view>
    </div>
</template>

<script>

// import CustomerList from '../../components/page/dictionary/customer/CustomerList.vue';

export default {
  name: "App",
  components: {
    // CustomerList
  },
};
</script>


<style scoped>
.content {
    position: absolute;
    top: 61px;
    left: 221px;
    width: calc(100% - 221px);
    height: calc(100vh - 61px);
    background-color: #ffffff;
}
</style>