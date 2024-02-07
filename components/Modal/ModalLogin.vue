<template>
  <section
    class="absolute left-1/2 top-1/2 -m-40 flex flex-col items-center rounded bg-backgroundDarkGray px-7 py-4 text-white"
  >
    <IconsBlazeTextLogo />

    <form action="" class="flex flex-col items-center justify-center space-y-3">
      <h3 class="font-SofiaSans text-xl font-medium">Sign in to your account</h3>

      <div class="flex w-full flex-col items-center space-y-3">
        <InputForm
          input-type="email"
          placeholder-text="Email adress"
          for-text="email-input"
        />

        <InputForm
          input-type="password"
          placeholder-text="Password"
          for-text="password-input"
        />

        <a href="" class="text-start text-sm text-white/20">Forgot password?</a>
      </div>

      <button class="w-full rounded bg-accent py-3 text-sm">
        <span>Sign in</span>
      </button>
    </form>

    <div>
      <span>or</span>

      <a href="">G</a>
      <a href="">S</a>
      <a href="">T</a>

      <div>
        <p>Don't have an account yet?</p>
        <!-- Click here switch to other modal -->
      </div>
    </div>
  </section>
</template>
