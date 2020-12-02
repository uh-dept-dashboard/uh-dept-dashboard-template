import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react/types-6-0';

import AYMeasureCard from '../pages/academic-year/AYMeasureCard';

// This default export determines where your story goes in the story list
export default {
  title: 'AY Measure Card',
  component: AYMeasureCard,
};

const Template: Story<ComponentProps<typeof AYMeasureCard>> = (args) => (
  <AYMeasureCard {...args} />
);

export const SSH = Template.bind({});
SSH.args = {
  name: 'SSH',
  description: 'Student Semester Hours is a measure of the study body provided instruction',
  value: 23456,
  year: 2018,
  priorDelta: 37,
  nextDelta: -21
};
