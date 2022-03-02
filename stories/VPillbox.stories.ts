import VPillbox from '@/components/elements/VPillbox.vue';
import { defineComponentStories } from './helpers';

type StoryArgs = {
  truncated?: boolean;
  defaultSlot?: string;
  type?: 'success' | 'warn' | 'info' | 'muted';
};

const { config, defineStoryTemplate, defineStory } = defineComponentStories<StoryArgs>({
  title: 'Atoms/VPillbox',
  argTypes: {
    truncated: {
      name: 'truncated',
      description: 'Whether the content should be truncated with ellipsis when it overflows.',
      control: { type: 'boolean' },
      table: { category: 'props' },
    },
    type: {
      name: 'type',
      description: 'Pillbox color.',
      control: { type: 'inline-radio' },
      options: ['success', 'warn', 'info', 'muted'],
      table: { category: 'props' },
    },
    defaultSlot: {
      name: 'default',
      description: 'Content that goes inside the pillbox.',
      control: { type: 'text' },
      table: { category: 'slots' },
    },
  },
});

export default config;

const BaseTemplate = defineStoryTemplate(({ defaultSlot, ...args }) => ({
  setup: () => ({ defaultSlot, args }),
  components: { VPillbox },
  template: `
  <div>
    <pre>{{ args }}</pre>
    <pre>{{ defaultSlot }}</pre>
    <VPillbox v-bind="args">
      {{ defaultSlot }}
    </VPillbox>
  </div>
  `,
}));

export const Base = defineStory(BaseTemplate, {
  args: {
    defaultSlot: 'My VPillbox',
    truncated: undefined,
    type: undefined,
  },
});

const LimitedWidthParentTemplate = defineStoryTemplate(({ defaultSlot, ...args }) => ({
  setup: () => ({ defaultSlot, args }),
  components: { VPillbox },
  template: `
    <div class="w-96 flex flex-col border rounded resize overflow-auto p-6 space-y-4">
      <small>Parent element with limited width</small>

      <VPillbox v-bind="args">
      {{ defaultSlot }}
      </VPillbox>
    </div>
  `,
}));

export const NotTruncated = defineStory(LimitedWidthParentTemplate, {
  args: {
    defaultSlot: 'My VPillbox with extra long content',
    truncated: false,
    type: undefined,
  },
  argTypes: {},
  description: `
  <strong>Go ahead, try resizing the parent element below:</strong>
  <br>
  Watch how the pillbox breaks and is split across lines, this is generally not the expected behavior.
  `,
});

export const Truncated = defineStory(LimitedWidthParentTemplate, {
  args: {
    defaultSlot: 'My truncated VPillbox with extra long content',
    truncated: true,
    type: undefined,
  },
  description: `
  <strong>Try resizing the parent element again:</strong>
  <br>
  Notice how the truncate prop hides the overflowing text and is useful in situations where the parent element has limited width.
  `,
});
