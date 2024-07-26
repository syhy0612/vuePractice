<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <Nav/>
      </el-header>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </div>
</template>

<script setup>
import Nav from '@/components/nav.vue'
</script>