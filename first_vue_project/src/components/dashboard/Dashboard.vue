<template>
  <div>
    <h1>Dashboard</h1>
    {{msg}}
    <Header @atualizar="novaMsg" :nome="msg"></Header>
  </div>
</template>

<script src="./dashboard.js"></script>
<style src="./dashboard.css"></style>