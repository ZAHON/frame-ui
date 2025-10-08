import { vi, afterEach, describe, it, expect } from 'vitest';
import { disableAnimation } from '.';

vi.useFakeTimers();

afterEach(() => {
  vi.advanceTimersToNextTimer();
  vi.advanceTimersToNextTimer();

  document.head.innerHTML = '';
});

describe('disableAnimation', () => {
  const NONCE_VALUE = 'test-nonce-123';

  const getStyleElements = () => document.head.querySelectorAll('style');
  const expectedCss =
    '*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}';

  it('should inject a <style> element into document.head', () => {
    const cleanup = disableAnimation();

    const styles = getStyleElements();
    expect(styles).toHaveLength(1);
    expect(styles[0].textContent).toBe(expectedCss);

    cleanup();
  });

  it('should set the nonce attribute on the <style> element if provided', () => {
    const cleanup = disableAnimation(NONCE_VALUE);

    const styleElement = getStyleElements()[0];
    expect(styleElement.getAttribute('nonce')).toBe(NONCE_VALUE);

    cleanup();
  });

  it('should remove the <style> element when the cleanup function is called', () => {
    const cleanup = disableAnimation();
    expect(getStyleElements()).toHaveLength(1);

    cleanup();

    vi.advanceTimersToNextTimer();
    vi.advanceTimersToNextTimer();

    expect(getStyleElements()).toHaveLength(0);
  });

  it('should force a style recalculation before cleanup', () => {
    const spy = vi.spyOn(window, 'getComputedStyle');
    const cleanup = disableAnimation();

    cleanup();

    expect(spy).toHaveBeenCalledWith(document.body);

    vi.restoreAllMocks();
    vi.advanceTimersToNextTimer();
    vi.advanceTimersToNextTimer();
  });
});
