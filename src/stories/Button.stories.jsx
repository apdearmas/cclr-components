import React from 'react';
import { withDesign } from 'storybook-addon-designs'

import { Button } from './Button';

export default {
  title: 'Example/Button',
  component: Button,
  decorators: [withDesign],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};
Primary.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/svGFcl0Tt1uVASJPQjJGJ5/Starter-Project?node-id=9%3A7"
  }
}

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};
