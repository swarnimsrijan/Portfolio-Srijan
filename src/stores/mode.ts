import { defineStore } from "pinia";

export const useModeStore = defineStore("mode", {
  state: () => ({
    mode: "normal" as "normal" | "redball" | "riddle"
  }),
});
