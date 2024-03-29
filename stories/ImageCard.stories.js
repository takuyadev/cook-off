import React from 'react';
import ImageCard from '../comps/ImageCard';
import ImageCardWithBadge from "../comps/ImageCardWithBadge";

export default {
  title: 'Inputs/ImageCard',
  component: ImageCard,
};

const Template = (args) => <ImageCard {...args} />;
const SecondTemplate = (args) => <ImageCardWithBadge {...args} />;

export const PrimaryImageButton = SecondTemplate.bind({});
export const SecondaryImageButton = Template.bind({});

PrimaryImageButton.args = {
  title: "Default Title",
  viewers: 1000,
  date: "XX/XX/2020 XPM",
  user: "Default User"
  
}

SecondaryImageButton.args = {
  text: "Default Text"
}