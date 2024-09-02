import { Meta, StoryFn } from '@storybook/react';
import React, { useState } from 'react';
import Pagination from './Pagination';

export default {
  title: 'Pagination',
  component: Pagination,
} as Meta<typeof Pagination>;

const Template: StoryFn<typeof Pagination> = (args) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  return (
    <Pagination
      {...args}
      total={102}
      pageLimit={10}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
    />
  );
};
export const Basic = Template.bind({});
