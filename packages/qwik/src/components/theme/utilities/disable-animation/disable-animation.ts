/**
 * Globally disables all CSS transitions and animations on the page by injecting a
 * `<style>` tag into the document head. The optional `nonce` string can be provided
 * to set the `nonce` attribute on the style tag for Content Security Policy (CSP) compliance.
 *
 * The function returns a cleanup function that should be called to re-enable animations.
 */
export const disableAnimation = (nonce?: string) => {
  const css = document.createElement('style');

  if (nonce) {
    css.setAttribute('nonce', nonce);
  }

  css.appendChild(
    document.createTextNode(
      `*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}`
    )
  );

  document.head.appendChild(css);

  return () => {
    (() => window.getComputedStyle(document.body))();

    requestAnimationFrame(() => {
      setTimeout(() => {
        document.head.removeChild(css);
      }, 1);
    });
  };
};
