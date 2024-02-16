<script setup>
import { ModalState } from "./ModalState";
</script>

<template>
  <div
    v-if="ModalState.state.isLoginActive"
    class="absolute grid h-screen w-full place-items-center bg-black/20"
  >
    <section
      class="flex size-full flex-col items-center space-y-4 rounded bg-backgroundDarkGray px-7 py-4 text-white lg:h-auto lg:w-1/4"
    >
      <IconsBlazeTextLogo class="size-40" />

      <form action="" class="flex w-full flex-col items-center justify-center space-y-3">
        <h3 class="font-SofiaSans text-2xl font-medium">Faça login na sua conta</h3>

        <div class="flex w-full flex-col items-center space-y-3">
          <InputForm input-type="email" placeholder-text="Email" for-text="email-input" />

          <InputForm
            input-type="password"
            placeholder-text="Senha"
            for-text="password-input"
          />

          <a href="" class="w-full text-start text-sm font-extralight text-white/60"
            >Esqueceu a senha?</a
          >
        </div>

        <button class="w-full rounded bg-accent py-3 text-sm">
          <span>Entrar</span>
        </button>
      </form>

      <div class="w-full">
        <div class="flex items-center justify-between">
          <span class="h-[1px] w-full bg-white/10" />
          <p class="mx-4 text-sm font-bold uppercase text-white/30">ou</p>
          <span class="h-[1px] w-full bg-white/10" />
        </div>

        <a href="">Google</a>
        <a href="">Steam</a>
        <a href="">Twitter</a>

        <div class="flex items-center space-x-1 text-sm text-white/30">
          <p>Não tem conta ainda?</p>

          <button class="text-accent" @click="switchToRegister">Crie uma agora!</button>
        </div>
      </div>
    </section>
  </div>
</template>
