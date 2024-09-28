/**DEPENDENCIES*/
import type { CoreConfig } from '@code-pushup/models';
import eslintPlugin, { eslintConfigFromAllNxProjects } from '@code-pushup/eslint-plugin';

export const eslintCategories: any[] = [
  {
    slug: 'bug-prevention',
    title: 'Bug prevention',
    description: 'Lint rules that find **potential bugs** in your code.',
    refs: [{ type: 'group', plugin: 'eslint', slug: 'problems', weight: 1 }],
  },
  {
    slug: 'code-style',
    title: 'Code style',
    description:
      'Lint rules that promote **good practices** and consistency in your code.',
    refs: [{ type: 'group', plugin: 'eslint', slug: 'suggestions', weight: 1 }],
  },
];

const config: CoreConfig = {
  plugins: [
    await eslintPlugin(await eslintConfigFromAllNxProjects())
  ],
  categories:eslintCategories
};

export default config;
