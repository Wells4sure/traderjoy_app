import { configureStore } from "@reduxjs/toolkit";
import reducer from "./slice/RootReducer";

const store = configureStore({
  reducer: reducer,

  // [onboardingApi.reducerPath]: onboardingApi.reducerPath,

  // middleware: getDefaultMiddleware =>
  //   getDefaultMiddleware().concat(onboardingApi.middleware),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});

// setupListeners(store.dispatch);
export { store };
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
