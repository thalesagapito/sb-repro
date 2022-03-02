<template>
  <p
    class="font-proxima-nova font-medium"
    :class="{
      [color]: true,
      inline: !truncated,
      'truncate rounded': truncated,
    }"
  >
    <span class="rounded px-2 py-px" :class="[color, background]">
      <slot />
    </span>
  </p>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api';

type PillboxType = 'success' | 'warn' | 'info' | 'muted' | undefined;

export default defineComponent({
  name: 'VPillbox',
  props: {
    type: {
      type: String as PropType<PillboxType>,
      default: '',
      validator(v: PillboxType) {
        return !v || ['success', 'warn', 'info', 'muted'].indexOf(v) >= 0;
      },
    },
    truncated: Boolean,
  },
  computed: {
    color(): string {
      switch (this.type) {
        case 'success':
          return 'text-green-800';
        case 'warn':
          return 'text-yellow-800';
        case 'info':
          return 'text-wunder-indigo-500';
        default:
          return 'text-neutral-500';
      }
    },
    background(): string {
      switch (this.type) {
        case 'success':
          return 'bg-green-100';
        case 'warn':
          return 'bg-yellow-100';
        case 'info':
          return 'bg-wunder-indigo-50';
        default:
          return 'bg-wunder-blue-200';
      }
    },
  },
});
</script>
