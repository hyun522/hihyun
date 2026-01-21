// tailwind.config.ts
import type { Config } from 'tailwindcss';

export default {
  theme: {
    extend: {
      fontFamily: {
        nanum_gothic: ['var(--font-nanum-gothic)', 'system-ui', 'sans-serif'],
        roboto_slab: ['var(--font-roboto-slab)', 'serif'],
      },
    },
  },
} satisfies Config;
