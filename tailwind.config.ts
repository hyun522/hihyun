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
    screens: {
      mobile: { min: '360px', max: '539px' },
      tablet: { min: '540px', max: '1024px' },
      desktop: { min: '1025px' },
    },
  },
} satisfies Config;
