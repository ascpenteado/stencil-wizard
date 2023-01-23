import { pascalCase } from "pascal-case";

export default async function createStorybookTemplate(component: string) {
  const componentClassName = pascalCase(component);
  const storybookTemplate = `
  import { h } from '@stencil/core';
  import { StoryObj, StoryFn } from '@storybook/web-components';
  export default {
    title: '${componentClassName}',
  };
  
  const Template: StoryFn = (args) => {
    return (
      <${component} {...args} ></${component}>
    );
  };
  
  export const Default: StoryObj = {
    render: Template,
    args: {}
  };

`;
  return storybookTemplate;
}
