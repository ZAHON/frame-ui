import { describe, it, expect } from 'vitest';
import { twMerge } from '.';

describe('twMerge', () => {
  it('should merge basic classes without conflicts', () => {
    expect(twMerge('p-4 text-red-500')).toBe('p-4 text-red-500');
  });

  // Tests for custom font-size (text-1 to text-9)
  it('should handle custom text size conflicts', () => {
    expect(twMerge('text-1 text-5')).toBe('text-5');
    expect(twMerge('text-9 text-2')).toBe('text-2');
    expect(twMerge('text-sm text-3')).toBe('text-3');
  });

  it('should merge custom text sizes with standard Tailwind text classes', () => {
    expect(twMerge('text-lg text-4')).toBe('text-4');
    expect(twMerge('text-xl text-7 text-2xl')).toBe('text-2xl');
    expect(twMerge('text-base text-1 text-sm')).toBe('text-sm');
  });

  // Tests for custom leading (leading-level-1 to leading-level-9)
  it('should handle custom leading conflicts', () => {
    expect(twMerge('leading-level-1 leading-level-5')).toBe('leading-level-5');
    expect(twMerge('leading-level-9 leading-level-2')).toBe('leading-level-2');
  });

  it('should merge custom leading with standard Tailwind leading classes', () => {
    expect(twMerge('leading-tight leading-level-3')).toBe('leading-level-3');
    expect(twMerge('leading-level-4 leading-loose')).toBe('leading-loose');
    expect(twMerge('leading-6 leading-level-1 leading-normal')).toBe('leading-normal');
  });

  // Tests for custom tracking (tracking-1 to tracking-9)
  it('should handle custom tracking conflicts', () => {
    expect(twMerge('tracking-1 tracking-5')).toBe('tracking-5');
    expect(twMerge('tracking-9 tracking-2')).toBe('tracking-2');
  });

  it('should merge custom tracking with standard Tailwind tracking classes', () => {
    expect(twMerge('tracking-tight tracking-3')).toBe('tracking-3');
    expect(twMerge('tracking-5 tracking-wide')).toBe('tracking-wide');
    expect(twMerge('tracking-normal tracking-1 tracking-wider')).toBe('tracking-wider');
  });

  // Tests for custom rounded (rounded-1 to rounded-6)
  it('should handle custom rounded conflicts', () => {
    expect(twMerge('rounded-1 rounded-5')).toBe('rounded-5');
    expect(twMerge('rounded-6 rounded-2')).toBe('rounded-2');
  });

  it('should merge custom rounded with standard Tailwind rounded classes', () => {
    expect(twMerge('rounded-sm rounded-3')).toBe('rounded-3');
    expect(twMerge('rounded-4 rounded-lg')).toBe('rounded-lg');
    expect(twMerge('rounded-md rounded-1 rounded-full')).toBe('rounded-full');
    expect(twMerge('rounded rounded-2')).toBe('rounded-2');
  });

  // Tests for custom shadow (shadow-1 to shadow-6)
  it('should handle custom shadow conflicts', () => {
    expect(twMerge('shadow-1 shadow-5')).toBe('shadow-5');
    expect(twMerge('shadow-6 shadow-2')).toBe('shadow-2');
  });

  it('should merge custom shadow with standard Tailwind shadow classes', () => {
    expect(twMerge('shadow-sm shadow-3')).toBe('shadow-3');
    expect(twMerge('shadow-4 shadow-lg')).toBe('shadow-lg');
    expect(twMerge('shadow-md shadow-1 shadow-2xl')).toBe('shadow-2xl');
    expect(twMerge('shadow shadow-2')).toBe('shadow-2');
  });

  // Tests for combining different custom classes
  it('should handle multiple custom class conflicts together', () => {
    expect(
      twMerge(
        'text-1 leading-level-1 tracking-1 rounded-1 shadow-1 text-5 leading-level-3 tracking-2 rounded-4 shadow-6'
      )
    ).toBe('text-5 leading-level-3 tracking-2 rounded-4 shadow-6');
  });

  it('should preserve non-conflicting classes while resolving conflicts', () => {
    expect(twMerge('p-4 text-1 m-2 text-5 bg-red-500')).toBe('p-4 m-2 text-5 bg-red-500');

    expect(twMerge('flex items-center rounded-1 justify-between rounded-3 space-x-2')).toBe(
      'flex items-center justify-between rounded-3 space-x-2'
    );
  });

  // Edge cases tests
  it('should handle empty string', () => {
    expect(twMerge('')).toBe('');
  });

  it('should handle single class', () => {
    expect(twMerge('text-3')).toBe('text-3');
    expect(twMerge('leading-level-5')).toBe('leading-level-5');
  });

  it('should handle duplicate classes', () => {
    expect(twMerge('text-1 text-1')).toBe('text-1');
    expect(twMerge('shadow-2 shadow-2 shadow-2')).toBe('shadow-2');
  });

  it('should handle mixed standard and custom classes', () => {
    expect(twMerge('text-lg text-3 text-xl leading-tight leading-level-2 tracking-wide tracking-5')).toBe(
      'text-xl leading-level-2 tracking-5'
    );
  });

  it('should handle arbitrary values mixed with all custom classes', () => {
    expect(
      twMerge(
        'text-1 text-[1.2rem] leading-level-2 leading-[1.8] tracking-3 tracking-[0.1em] rounded-2 rounded-[8px] shadow-1 shadow-[0_4px_8px_black]'
      )
    ).toBe('text-[1.2rem] leading-[1.8] tracking-[0.1em] rounded-[8px] shadow-[0_4px_8px_black]');
  });

  it('should handle complex arbitrary values scenarios', () => {
    const complexArbitraryClasses = twMerge(
      'px-4 py-2 text-primary-solid-5 bg-[rgba(255,0,0,0.5)] rounded-2 shadow-[0_2px_4px_black]',
      'text-[#333333] bg-success-alpha-8 rounded-[1rem] shadow-3',
      'text-[color:var(--text-color)] bg-[hsl(200,50%,80%)] rounded-[12px] shadow-[inset_0_1px_2px_gray]'
    );
    expect(complexArbitraryClasses).toBe(
      'px-4 py-2 text-[color:var(--text-color)] bg-[hsl(200,50%,80%)] rounded-[12px] shadow-[inset_0_1px_2px_gray]'
    );
  });

  // Tests for complex scenarios
  it('should handle complex real-world scenarios', () => {
    const buttonClasses = twMerge(
      'px-4 py-2 text-1 rounded-1 shadow-1 bg-blue-500 hover:bg-blue-600',
      'text-3 rounded-3 shadow-4 bg-red-500'
    );
    expect(buttonClasses).toBe('px-4 py-2 hover:bg-blue-600 text-3 rounded-3 shadow-4 bg-red-500');
  });

  it('should handle conditional classes', () => {
    const isActive = true;
    const classes = twMerge('text-2 rounded-2', isActive && 'text-5 bg-blue-500', 'shadow-3');
    expect(classes).toBe('rounded-2 text-5 bg-blue-500 shadow-3');
  });

  // Tests for value boundary validation
  it('should handle boundary values for custom classes', () => {
    expect(twMerge('text-1 text-9')).toBe('text-9');
    expect(twMerge('leading-level-1 leading-level-9')).toBe('leading-level-9');
    expect(twMerge('tracking-1 tracking-9')).toBe('tracking-9');
    expect(twMerge('rounded-1 rounded-6')).toBe('rounded-6');
    expect(twMerge('shadow-1 shadow-6')).toBe('shadow-6');
  });

  // Backward compatibility test with standard tailwind-merge
  it('should maintain standard tailwind-merge behavior for non-custom classes', () => {
    expect(twMerge('bg-red-500 bg-blue-500')).toBe('bg-blue-500');
    expect(twMerge('p-2 p-4')).toBe('p-4');
    expect(twMerge('flex block')).toBe('block');
    expect(twMerge('text-sm text-lg text-xl')).toBe('text-xl');
  });

  // Tests for layout colors (background, foreground, overlay, panel)
  it('should handle layout color conflicts for text', () => {
    expect(twMerge('text-background text-foreground')).toBe('text-foreground');
    expect(twMerge('text-overlay text-panel')).toBe('text-panel');
    expect(twMerge('text-red-500 text-background')).toBe('text-background');
  });

  it('should handle layout color conflicts for background', () => {
    expect(twMerge('bg-background bg-foreground')).toBe('bg-foreground');
    expect(twMerge('bg-overlay bg-panel')).toBe('bg-panel');
    expect(twMerge('bg-blue-500 bg-background')).toBe('bg-background');
  });

  it('should handle layout color conflicts for border', () => {
    expect(twMerge('border-background border-foreground')).toBe('border-foreground');
    expect(twMerge('border-overlay border-panel')).toBe('border-panel');
    expect(twMerge('border-gray-500 border-background')).toBe('border-background');
  });

  // Tests for default colors
  it('should handle default solid color conflicts', () => {
    expect(twMerge('text-default-solid-1 text-default-solid-12')).toBe('text-default-solid-12');
    expect(twMerge('bg-default-solid-5 bg-default-solid-9')).toBe('bg-default-solid-9');
    expect(twMerge('border-default-solid-2 border-default-solid-8')).toBe('border-default-solid-8');
  });

  it('should handle default alpha color conflicts', () => {
    expect(twMerge('text-default-alpha-1 text-default-alpha-12')).toBe('text-default-alpha-12');
    expect(twMerge('bg-default-alpha-5 bg-default-alpha-9')).toBe('bg-default-alpha-9');
    expect(twMerge('border-default-alpha-2 border-default-alpha-8')).toBe('border-default-alpha-8');
  });

  it('should handle default contrast colors', () => {
    expect(twMerge('text-default-contrast text-default-solid-5')).toBe('text-default-solid-5');
    expect(twMerge('bg-default-solid-3 bg-default-contrast')).toBe('bg-default-contrast');
  });

  it('should handle mixed default solid and alpha conflicts', () => {
    expect(twMerge('text-default-solid-5 text-default-alpha-8')).toBe('text-default-alpha-8');
    expect(twMerge('bg-default-alpha-3 bg-default-solid-10')).toBe('bg-default-solid-10');
  });

  // Tests for primary colors
  it('should handle primary solid color conflicts', () => {
    expect(twMerge('text-primary-solid-1 text-primary-solid-12')).toBe('text-primary-solid-12');
    expect(twMerge('bg-primary-solid-5 bg-primary-solid-9')).toBe('bg-primary-solid-9');
    expect(twMerge('border-primary-solid-2 border-primary-solid-8')).toBe('border-primary-solid-8');
  });

  it('should handle primary alpha color conflicts', () => {
    expect(twMerge('text-primary-alpha-1 text-primary-alpha-12')).toBe('text-primary-alpha-12');
    expect(twMerge('bg-primary-alpha-5 bg-primary-alpha-9')).toBe('bg-primary-alpha-9');
    expect(twMerge('border-primary-alpha-2 border-primary-alpha-8')).toBe('border-primary-alpha-8');
  });

  it('should handle primary contrast colors', () => {
    expect(twMerge('text-primary-contrast text-primary-solid-5')).toBe('text-primary-solid-5');
    expect(twMerge('bg-primary-solid-3 bg-primary-contrast')).toBe('bg-primary-contrast');
  });

  // Tests for success colors
  it('should handle success solid color conflicts', () => {
    expect(twMerge('text-success-solid-1 text-success-solid-12')).toBe('text-success-solid-12');
    expect(twMerge('bg-success-solid-5 bg-success-solid-9')).toBe('bg-success-solid-9');
    expect(twMerge('border-success-solid-2 border-success-solid-8')).toBe('border-success-solid-8');
  });

  it('should handle success alpha color conflicts', () => {
    expect(twMerge('text-success-alpha-1 text-success-alpha-12')).toBe('text-success-alpha-12');
    expect(twMerge('bg-success-alpha-5 bg-success-alpha-9')).toBe('bg-success-alpha-9');
    expect(twMerge('border-success-alpha-2 border-success-alpha-8')).toBe('border-success-alpha-8');
  });

  it('should handle success contrast colors', () => {
    expect(twMerge('text-success-contrast text-success-solid-5')).toBe('text-success-solid-5');
    expect(twMerge('bg-success-solid-3 bg-success-contrast')).toBe('bg-success-contrast');
  });

  // Tests for warning colors
  it('should handle warning solid color conflicts', () => {
    expect(twMerge('text-warning-solid-1 text-warning-solid-12')).toBe('text-warning-solid-12');
    expect(twMerge('bg-warning-solid-5 bg-warning-solid-9')).toBe('bg-warning-solid-9');
    expect(twMerge('border-warning-solid-2 border-warning-solid-8')).toBe('border-warning-solid-8');
  });

  it('should handle warning alpha color conflicts', () => {
    expect(twMerge('text-warning-alpha-1 text-warning-alpha-12')).toBe('text-warning-alpha-12');
    expect(twMerge('bg-warning-alpha-5 bg-warning-alpha-9')).toBe('bg-warning-alpha-9');
    expect(twMerge('border-warning-alpha-2 border-warning-alpha-8')).toBe('border-warning-alpha-8');
  });

  it('should handle warning contrast colors', () => {
    expect(twMerge('text-warning-contrast text-warning-solid-5')).toBe('text-warning-solid-5');
    expect(twMerge('bg-warning-solid-3 bg-warning-contrast')).toBe('bg-warning-contrast');
  });

  // Tests for danger colors
  it('should handle danger solid color conflicts', () => {
    expect(twMerge('text-danger-solid-1 text-danger-solid-12')).toBe('text-danger-solid-12');
    expect(twMerge('bg-danger-solid-5 bg-danger-solid-9')).toBe('bg-danger-solid-9');
    expect(twMerge('border-danger-solid-2 border-danger-solid-8')).toBe('border-danger-solid-8');
  });

  it('should handle danger alpha color conflicts', () => {
    expect(twMerge('text-danger-alpha-1 text-danger-alpha-12')).toBe('text-danger-alpha-12');
    expect(twMerge('bg-danger-alpha-5 bg-danger-alpha-9')).toBe('bg-danger-alpha-9');
    expect(twMerge('border-danger-alpha-2 border-danger-alpha-8')).toBe('border-danger-alpha-8');
  });

  it('should handle danger contrast colors', () => {
    expect(twMerge('text-danger-contrast text-danger-solid-5')).toBe('text-danger-solid-5');
    expect(twMerge('bg-danger-solid-3 bg-danger-contrast')).toBe('bg-danger-contrast');
  });

  // Tests for black colors
  it('should handle black color conflicts', () => {
    expect(twMerge('text-black-solid text-black-alpha-5')).toBe('text-black-alpha-5');
    expect(twMerge('bg-black-alpha-1 bg-black-solid')).toBe('bg-black-solid');
    expect(twMerge('border-black-alpha-12 border-black-alpha-3')).toBe('border-black-alpha-3');
    expect(twMerge('text-black text-black-solid')).toBe('text-black-solid');
  });

  // Tests for white colors
  it('should handle white color conflicts', () => {
    expect(twMerge('text-white-solid text-white-alpha-5')).toBe('text-white-alpha-5');
    expect(twMerge('bg-white-alpha-1 bg-white-solid')).toBe('bg-white-solid');
    expect(twMerge('border-white-alpha-12 border-white-alpha-3')).toBe('border-white-alpha-3');
    expect(twMerge('text-white text-white-solid')).toBe('text-white-solid');
  });

  // Tests for cross-color conflicts
  it('should handle conflicts between different color types', () => {
    expect(twMerge('text-primary-solid-5 text-danger-alpha-8')).toBe('text-danger-alpha-8');
    expect(twMerge('bg-success-solid-3 bg-warning-alpha-10')).toBe('bg-warning-alpha-10');
    expect(twMerge('border-default-solid-7 border-primary-contrast')).toBe('border-primary-contrast');
  });

  it('should handle custom colors mixed with standard Tailwind colors', () => {
    expect(twMerge('text-red-500 text-primary-solid-5')).toBe('text-primary-solid-5');
    expect(twMerge('bg-blue-600 bg-success-alpha-8')).toBe('bg-success-alpha-8');
    expect(twMerge('border-gray-300 border-danger-solid-10')).toBe('border-danger-solid-10');
    expect(twMerge('text-primary-solid-3 text-green-400')).toBe('text-green-400');
  });

  // Tests for complex custom color scenarios
  it('should handle complex custom color scenarios', () => {
    const complexClasses = twMerge(
      'px-4 py-2 text-primary-solid-5 bg-default-alpha-3 border-success-solid-8',
      'text-danger-alpha-10 bg-warning-solid-6 border-black-alpha-5',
      'rounded-3 shadow-4'
    );
    expect(complexClasses).toBe(
      'px-4 py-2 text-danger-alpha-10 bg-warning-solid-6 border-black-alpha-5 rounded-3 shadow-4'
    );
  });

  it('should handle all custom properties together', () => {
    const allCustomClasses = twMerge(
      'text-1 leading-level-1 tracking-1 rounded-1 shadow-1 text-default-solid-1 bg-primary-alpha-1 border-success-solid-1',
      'text-5 leading-level-5 tracking-5 rounded-5 shadow-5 text-danger-alpha-10 bg-warning-solid-8 border-black-alpha-12'
    );
    expect(allCustomClasses).toBe(
      'text-5 leading-level-5 tracking-5 rounded-5 shadow-5 text-danger-alpha-10 bg-warning-solid-8 border-black-alpha-12'
    );
  });

  // Edge cases tests for custom colors
  it('should handle boundary values for custom colors', () => {
    expect(twMerge('text-default-solid-1 text-default-solid-12')).toBe('text-default-solid-12');
    expect(twMerge('bg-primary-alpha-1 bg-primary-alpha-12')).toBe('bg-primary-alpha-12');
    expect(twMerge('border-black-alpha-1 border-black-alpha-12')).toBe('border-black-alpha-12');
  });

  // Real-world scenario with custom colors
  it('should handle real-world button component with custom colors', () => {
    const buttonVariants = twMerge(
      // base classes
      'px-4 py-2 rounded-2 shadow-2 text-default-solid-12 bg-primary-solid-9 border-primary-solid-10',
      // hover state override
      'hover:bg-primary-solid-10 hover:border-primary-solid-11',
      // variant override (danger)
      'bg-danger-solid-9 border-danger-solid-10 text-white-solid'
    );
    expect(buttonVariants).toBe(
      'px-4 py-2 rounded-2 shadow-2 hover:bg-primary-solid-10 hover:border-primary-solid-11 bg-danger-solid-9 border-danger-solid-10 text-white-solid'
    );
  });

  // Tests for custom ease functions
  it('should handle custom ease conflicts', () => {
    expect(twMerge('ease-smooth ease-in-quad')).toBe('ease-in-quad');
    expect(twMerge('ease-in-cubic ease-out-cubic')).toBe('ease-out-cubic');
    expect(twMerge('ease-in-out-quint ease-in-expo')).toBe('ease-in-expo');
    expect(twMerge('ease-out-circ ease-smooth')).toBe('ease-smooth');
  });

  it('should merge custom ease with standard Tailwind ease classes', () => {
    expect(twMerge('ease-in ease-smooth')).toBe('ease-smooth');
    expect(twMerge('ease-out ease-in-quad')).toBe('ease-in-quad');
    expect(twMerge('ease-in-out ease-out-cubic')).toBe('ease-out-cubic');
    expect(twMerge('ease-smooth ease-linear')).toBe('ease-linear');
    expect(twMerge('ease-out ease-in-quart')).toBe('ease-in-quart');
    expect(twMerge('ease-smooth ease-initial')).toBe('ease-initial');
  });

  it('should handle all custom ease function types', () => {
    // Test all quad easing functions
    expect(twMerge('ease-in-quad ease-out-quad')).toBe('ease-out-quad');
    expect(twMerge('ease-out-quad ease-in-out-quad')).toBe('ease-in-out-quad');

    // Test all cubic easing functions
    expect(twMerge('ease-in-cubic ease-out-cubic')).toBe('ease-out-cubic');
    expect(twMerge('ease-out-cubic ease-in-out-cubic')).toBe('ease-in-out-cubic');

    // Test all quart easing functions
    expect(twMerge('ease-in-quart ease-out-quart')).toBe('ease-out-quart');
    expect(twMerge('ease-out-quart ease-in-out-quart')).toBe('ease-in-out-quart');

    // Test all quint easing functions
    expect(twMerge('ease-in-quint ease-out-quint')).toBe('ease-out-quint');
    expect(twMerge('ease-out-quint ease-in-out-quint')).toBe('ease-in-out-quint');

    // Test all expo easing functions
    expect(twMerge('ease-in-expo ease-out-expo')).toBe('ease-out-expo');
    expect(twMerge('ease-out-expo ease-in-out-expo')).toBe('ease-in-out-expo');

    // Test all circ easing functions
    expect(twMerge('ease-in-circ ease-out-circ')).toBe('ease-out-circ');
    expect(twMerge('ease-out-circ ease-in-out-circ')).toBe('ease-in-out-circ');
  });

  it('should handle ease-smooth as a special case', () => {
    expect(twMerge('ease-smooth ease-in-quad')).toBe('ease-in-quad');
    expect(twMerge('ease-in-cubic ease-smooth')).toBe('ease-smooth');
    expect(twMerge('ease-linear ease-smooth')).toBe('ease-smooth');
    expect(twMerge('ease-smooth ease-out')).toBe('ease-out');
  });

  it('should handle complex ease function conflicts', () => {
    expect(twMerge('ease-in-quad ease-out-cubic ease-in-out-quart ease-in-quint ease-smooth')).toBe('ease-smooth');

    expect(twMerge('ease-smooth ease-in-expo ease-out-circ ease-in-out-quad ease-linear')).toBe('ease-linear');
  });

  it('should handle ease functions with other transition properties', () => {
    expect(twMerge('transition-all duration-300 ease-in-quad ease-out-cubic')).toBe(
      'transition-all duration-300 ease-out-cubic'
    );

    expect(twMerge('transition-colors duration-500 ease-smooth delay-100 ease-in-out-quint')).toBe(
      'transition-colors duration-500 delay-100 ease-in-out-quint'
    );
  });

  it('should handle ease functions in real-world animation scenarios', () => {
    const animationClasses = twMerge(
      'transform transition-all duration-300 ease-in-quad scale-100 opacity-100',
      'ease-out-cubic scale-110 opacity-90',
      'hover:scale-125 hover:opacity-75 ease-in-out-quart'
    );
    expect(animationClasses).toBe(
      'transform transition-all duration-300 scale-110 opacity-90 hover:scale-125 hover:opacity-75 ease-in-out-quart'
    );
  });

  it('should handle ease functions with arbitrary values', () => {
    expect(twMerge('ease-in-quad ease-[cubic-bezier(0.4,0,0.2,1)]')).toBe('ease-[cubic-bezier(0.4,0,0.2,1)]');

    expect(twMerge('ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ease-smooth')).toBe('ease-smooth');

    expect(twMerge('ease-out-circ ease-[steps(4,end)]')).toBe('ease-[steps(4,end)]');
  });

  it('should handle edge cases with ease functions', () => {
    // Empty string
    expect(twMerge('')).toBe('');

    // Single ease class
    expect(twMerge('ease-smooth')).toBe('ease-smooth');
    expect(twMerge('ease-in-out-expo')).toBe('ease-in-out-expo');

    // Duplicate ease classes
    expect(twMerge('ease-in-quad ease-in-quad')).toBe('ease-in-quad');
    expect(twMerge('ease-smooth ease-smooth ease-smooth')).toBe('ease-smooth');
  });

  it('should maintain backward compatibility for standard ease classes', () => {
    expect(twMerge('ease-in ease-out')).toBe('ease-out');
    expect(twMerge('ease-in-out ease-linear')).toBe('ease-linear');
    expect(twMerge('ease-initial ease-in')).toBe('ease-in');
  });
});
