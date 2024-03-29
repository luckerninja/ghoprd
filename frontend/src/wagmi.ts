import { createConfig } from "wagmi";
import { getDefaultConfig } from "connectkit";

import { goerli } from '@wagmi/core/chains'

export const config = createConfig(
  getDefaultConfig({
    // Required API Keys
    alchemyId: import.meta.env.VITE_WC_PROJECT_ID, // or infuraId
    walletConnectProjectId: import.meta.env.VITE_WC_PROJECT_ID,

    appName: "ghobet",
    chains: [goerli],

    // Optional
    appDescription: "Your App Description",
    appUrl: "https://family.co", // your app's url
    appIcon: "https://family.co/logo.png", // your app's icon, no bigger than 1024x1024px (max. 1MB)
  }),
);

declare module 'wagmi' {
  interface Register {
    config: typeof config
  }
}
