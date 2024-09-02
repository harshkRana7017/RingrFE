import { Meta, StoryFn } from '@storybook/react';
import React, { useState } from 'react';
import PhoneInput from './PhoneInput';

export default {
  title: 'Phone Input',
  component: PhoneInput,
} as Meta<typeof PhoneInput>;

const Template: StoryFn<typeof PhoneInput> = (args) => {
  const [value, setValue] = useState<string | null>();

  return <PhoneInput {...args} value={value} onChange={setValue} />;
};

export const Basic = Template.bind({});

Basic.args = {
  countryCodeEditable: false,
  enableCountrySearch: true,
};

export const WithErrorState = Template.bind({});

WithErrorState.args = {
  error: 'Error',
};
