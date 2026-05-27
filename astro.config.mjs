// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import mdx from '@astrojs/mdx';
export default defineConfig({
  site: 'https://jhl-labs.github.io',
  base: '/jvim-public',
  outDir: './docs',
  // submodule 루트가 'public/'이라 Astro 기본 publicDir(public)과 이름 충돌.
  // 정적 자산은 'public-assets/'에 두고 빌드 시 docs/ 루트로 복사.
  publicDir: './public-assets',
  trailingSlash: 'always',
  integrations: [
    starlight({
      title: 'jvim',
      description: 'Terminal markdown editor with familiar shortcuts, file-tree navigation, and optional AI.',
      logo: { src: './src/assets/images/favicon-j.svg' },
      favicon: '/favicon.svg',
      defaultLocale: 'en',
      locales: {
        en: { label: 'English', lang: 'en' },
        ko: { label: '한국어', lang: 'ko' },
      },
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/jhl-labs/jvim-public' },
      ],
      customCss: ['./src/styles/custom.css'],
      // 다크 모드 강제 (jvim 자체가 TUI 다크 톤이므로 사이트도 일관)
      components: {
        ThemeSelect: './src/components/ThemeSelect.astro',
      },
      head: [
        {
          tag: 'meta',
          attrs: { property: 'og:image', content: 'https://raw.githubusercontent.com/jhl-labs/jvim-public/main/jvm_demo_compact.gif' },
        },
        {
          tag: 'script',
          content: `
            (function () {
              try {
                document.documentElement.dataset.theme = 'dark';
                localStorage.setItem('starlight-theme', 'dark');
              } catch (e) { /* private mode */ }
            })();
          `,
        },
      ],
      sidebar: [
        { label: 'Getting started', link: '/getting-started/' },
        { label: 'Install', link: '/install/' },
        {
          label: 'Tool notes',
          items: [
            { label: 'Notepad', link: '/migrate-from/notepad/' },
            { label: 'vim', link: '/migrate-from/vim/' },
            { label: 'Obsidian', link: '/migrate-from/obsidian/' },
          ],
        },
        {
          label: 'Usage',
          items: [
            { label: 'Editor basics', link: '/usage/editor-basics/' },
            { label: 'File tree', link: '/usage/file-tree/' },
            { label: 'Navigation', link: '/usage/navigation/' },
            { label: 'Find & replace', link: '/usage/find-replace/' },
            { label: 'Formatting', link: '/usage/formatting/' },
            { label: 'Vault search', link: '/usage/vault-search/' },
            { label: 'Semantic index', link: '/usage/semantic-index/' },
            { label: 'Tags', link: '/usage/tags/' },
            { label: 'Wikilinks', link: '/usage/wikilinks/' },
            { label: 'AI overlay', link: '/usage/ai-overlay/' },
            { label: 'Git', link: '/usage/git/' },
            { label: 'Buffers & tabs', link: '/usage/buffers-tabs/' },
            { label: 'Settings', link: '/usage/settings/' },
          ],
        },
        {
          label: 'Keymap',
          items: [
            { label: 'Essentials (10)', link: '/keymap/essentials/' },
            { label: 'Full reference', link: '/keymap/full/' },
            { label: 'Cheatsheet', link: '/keymap/cheatsheet/' },
          ],
        },
        { label: 'FAQ', link: '/faq/' },
        {
          label: 'About',
          items: [
            { label: 'Transparency', link: '/transparency/' },
            { label: 'Release policy', link: '/release-policy/' },
            { label: 'Security', link: '/security/' },
            { label: 'License', link: '/license/' },
          ],
        },
      ],
    }),
    mdx(),
  ],
});
