import { useRef } from 'react';

// fork note: this reverts changes from https://github.com/sendbird/sendbird-uikit-react/pull/1094/
// because our custom scroll bug fixes has deviated too much from upstream

/**
 * @description This hook is designed to prevent scroll flickering caused by duplicate calls of onEndReached and onTopReached.
 * It controls the loading of messages to ensure a single request for message retrieval.
 * */
export const usePreventDuplicateRequest = () => {
  const context = useRef({ locked: false, count: 0 }).current;

  return {
    lock() {
      context.locked = true;
    },
    async run(callback: any) {
      if (context.locked && context.count > 0) return;

      try {
        context.count++;
        await callback();
      } catch {
        // noop
      }
    },
    release() {
      context.locked = false;
      context.count = 0;
    },
  };
};