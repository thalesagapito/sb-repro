import { ArgTypes, StoryFn } from '@storybook/vue';

type ArgTypeControl = {
  type: 'text' | 'boolean' | 'inline-radio' | 'number' | 'select' | 'color' | 'date';
  disable?: boolean;
};

type ArgTypeTable = {
  category: 'props' | 'slots';
  type?: {
    summary?: string | number;
    detail?: string | number;
  } | null;
  defaultValue?: {
    summary?: string | number;
    detail?: string | number;
  } | null;
  disable?: boolean;
};

type ArgType<T> = {
  name: string;
  description?: string;
  defaultValue?: T;
  control: ArgTypeControl | false;
  options?: string[];
  type?: { name: string; required: boolean };
  table: ArgTypeTable;
};

type DefineComponentStoriesOptions = {
  title: string;
  argTypes: Record<string, ArgType<unknown>>;
};

type DefineStoryOptions<StoryArgs> = {
  args?: Partial<StoryArgs>;
  argTypes?: Partial<ArgTypes<StoryArgs>>;
  description?: string;
};

export function defineComponentStories<StoryArgs extends Record<string, unknown>>(
  config: DefineComponentStoriesOptions
) {
  return {
    config,
    defineStoryTemplate: (fn: StoryFn<StoryArgs>) => fn,
    defineStory: (template: StoryFn<StoryArgs>, { args, argTypes }: DefineStoryOptions<StoryArgs>) => {
      const story = template.bind({});
      if (args) story.args = args;
      if (argTypes) story.argTypes = argTypes;
      return story;
    },
  };
}
