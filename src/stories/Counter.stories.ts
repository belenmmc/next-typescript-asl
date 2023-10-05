import { Meta, StoryObj } from '@storybook/react'

import Counter from '@/components/Counter/Counter'

const meta = {
  component: Counter,
  title: 'Components/Counter',
} satisfies Meta<typeof Counter>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args: {
    id: 1,
    step: 1,
  },
}
