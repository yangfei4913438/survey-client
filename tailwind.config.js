/** @type {import('tailwindcss').Config} */
const config = {
  content: ['./src/**/*.{jsx,tsx,scss}'],
  corePlugins: {
    preflight: false, // 避免和antd冲突
  },
  safelist: [
    'text-left',
    'text-center',
    'text-right',
    'text-2xl',
    'text-xl',
    'text-lg',
    'text-base',
    'text-sm',
  ],
};

module.exports = config;
