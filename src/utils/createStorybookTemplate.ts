import { pascalCase } from "pascal-case";

export default async function createStorybookTemplate(component: string) {
  const componentClassName = pascalCase(component);
  const storybookTemplate = `
import { html } from 'lit-html';
import { Story } from '@storybook/web-components';
import { withDesign } from 'storybook-addon-designs';

import { ${componentClassName} } from './${component}';
import readme from './readme.md';

export default {
  title: 'Components/${componentClassName}',
  decorators: [withDesign],
};

const Template: Story<${componentClassName}> = args => {
  return html\`
      <style>
        .sb-show-main.sb-main-padded {
          padding: 0;
        }
      </style>
      <${component}></${component}>
  \`;
};

export const Default: Story<${componentClassName}> = Template.bind({});

Default.storyName = 'Default';

Default.args = {};

Default.parameters = {
  design: {
    type: 'figma',
    url: ''
  },

  notes: { doc: readme }
};
`;
  return storybookTemplate;
}
