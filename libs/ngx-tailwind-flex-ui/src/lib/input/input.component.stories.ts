import { Meta, StoryObj } from '@storybook/angular';
import { InputComponent } from './input.component';

const meta: Meta<InputComponent> = {
  title: 'Components/Input',
  component: InputComponent,
  argTypes: {
    type: { control: 'text' },
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
    readonly: { control: 'boolean' },
    maxLength: { control: 'number' },
    prefix: { control: 'text' },
    suffix: { control: 'text' },
    appearance: { control: 'radio', options: ['outline', 'filled', 'standard'] },
    errorMessage: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<InputComponent>;

export const Default: Story = {
  args: {
    type: 'text',
    placeholder: 'Enter text',
  },
};

export const WithPrefixSuffix: Story = {
  args: {
    type: 'text',
    placeholder: 'Enter text',
    prefix: '$',
    suffix: '.00',
  },
  render: (args) => {
    console.log('Storybook Args:', args); // Debugging
    return {
      props: args,
    };
  },
};

export const WithError: Story = {
  args: {
    type: 'text',
    placeholder: 'Enter text',
    errorMessage: 'This field is required',
  },
};

export const WithMaxLength: Story = {
  args: {
    type: 'text',
    placeholder: 'Enter text',
    maxLength: 10,
  },
};