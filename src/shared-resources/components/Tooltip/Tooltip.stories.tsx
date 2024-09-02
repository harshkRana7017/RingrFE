import { Meta, StoryFn } from '@storybook/react';
import React from 'react';
// types
import { TooltipPlacement } from 'shared-resources/types/Tooltip.type';
// components
import Tooltip from './Tooltip';

export default {
  title: 'Tooltip',
  component: Tooltip,
} as Meta<typeof Tooltip>;

const Template: StoryFn<typeof Tooltip> = (args) => (
  <Tooltip {...args}>
    <span>Tooltip</span>
  </Tooltip>
);

export const Basic = Template.bind({});

Basic.args = {
  text: 'Tooltip',
  placement: TooltipPlacement.TOP,
};
