<template>
  <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
    <span class="navbar-brand ps-2">TodoList App</span>
    <button class="navbar-toggler" type="button" @click="isNavShow = !isNavShow">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div :class="isNavShow ? 'collapse navbar-collapse show' : 'collapse navbar-collapse'">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link" to="/"> Home </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/about"> About </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/post"> 게시판 </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/team"> 팀 </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/messages/list"> 쪽지 </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/project"> 프로젝트 </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/reports/write"> 신고 </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/reports"> 신고 리스트 </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/login"> Login </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/users"> Users </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/admin"> Admins </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import {ref} from "vue";

const isNavShow = ref(false);
</script>
