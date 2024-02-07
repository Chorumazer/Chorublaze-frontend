<template>
  <section
    class="absolute left-1/2 top-1/2 -m-40 flex flex-col items-center rounded bg-backgroundDarkGray px-10 py-5 text-white"
  >
    <IconsBlazeTextLogo />

    <form action="">
      <h3>Sign in to your account</h3>

      <div class="flex w-full flex-col items-center">
        <input type="email" class="w-full" />

        <div class="flex flex-col items-center">
          <input type="password" />
          <a href="" class="text-sm text-white/20">Forgot password?</a>
        </div>
      </div>

      <button>
        <span>Sign in</span>
        <svg></svg>
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
