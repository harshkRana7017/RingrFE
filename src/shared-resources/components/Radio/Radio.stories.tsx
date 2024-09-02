import { Meta, StoryFn } from '@storybook/react';
import React, { useState } from 'react';
import Radio from './Radio';

export default {
  title: 'Radio',
  component: Radio,
} as Meta<typeof Radio>;

const Template: StoryFn<typeof Radio> = (args) => {
  const [value, setValue] = useState<string | null>('email');

  return <Radio {...args} selected={value} onChange={setValue} />;
};

export const Basic = Template.bind({});

Basic.args = {
  options: [
    { label: 'Email', value: 'email' },
    { label: 'SMS', value: 'sms' },
  ],
};
