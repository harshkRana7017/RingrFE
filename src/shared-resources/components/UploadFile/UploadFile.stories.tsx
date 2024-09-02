import { Meta, StoryFn } from '@storybook/react';
import React from 'react';
// components
import UploadFile from './UploadFileMain';

export default {
  title: 'Upload file',
  component: UploadFile,
} as Meta<typeof UploadFile>;

const Template: StoryFn<typeof UploadFile> = (args) => <UploadFile {...args} />;

export const Basic = Template.bind({});

Basic.args = {};
