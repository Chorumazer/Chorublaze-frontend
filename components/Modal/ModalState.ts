import { createStore } from "vuex";

export const ModalState = createStore({
  state() {
    return {
      isLoginActive: false,
      isRegisterActive: false,
    };
  },
});
