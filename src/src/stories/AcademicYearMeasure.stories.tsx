// YourComponent.stories.tsx

import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react/types-6-0';

import AcademicYearMeasure from '../AcademicYearMeasure';

// This default export determines where your story goes in the story list
export default {
  title: 'Academic Year Measure',
  component: AcademicYearMeasure,
};

const Template: Story<ComponentProps<typeof AcademicYearMeasure>> = (args) => (
  <AcademicYearMeasure {...args} />
);

export const FirstStory = Template.bind({});
FirstStory.args = {
  name: 'SSH',
  description: 'Student Semester Hours is a measure of the study body provided instruction',
  year: 2010
};