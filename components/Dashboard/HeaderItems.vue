<script setup>
import { ModalState } from "../Modal/ModalState";
</script>

<template>
  <header class="border-b border-white/20 bg-background grid-in-header">
    <button @click="() => (ModalState.state.isLoginActive = true)">Entrar</button>
  </header>
</template>
