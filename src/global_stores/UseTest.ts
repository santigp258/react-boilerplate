import create from "zustand";
import { combine, devtools } from "zustand/middleware";

export const useTest = create(
  devtools(
    combine(
      {
        message: "Hello, Zustand config done!",
      },
      (set) => ({})
    )
  )
);
