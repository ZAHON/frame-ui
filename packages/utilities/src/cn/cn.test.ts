import { describe, it, expect } from 'vitest';
import { cn } from '.';

describe('cn', () => {
  it('should merge basic classes without conflicts', () => {
    expect(cn('p-4 text-red-500')).toBe('p-4 text-red-500');
  });

  it('should merge classes and resolve conflicts using twMerge', () => {
    expect(cn('text-red-500', 'text-blue-500')).toBe('text-blue-500');
  });

  it('should handle multiple class inputs correctly', () => {
    expect(cn('p-4', 'text-red-500', 'bg-blue-500')).toBe('p-4 text-red-500 bg-blue-500');
  });

  it('should resolve conflicts between custom and standard Tailwind classes', () => {
    expect(cn('text-sm', 'text-1')).toBe('text-1');
    expect(cn('text-5', 'text-lg')).toBe('text-lg');
  });

  it('should handle conditional classes passed as arguments', () => {
    const isActive = true;
    const isDisabled = false;

    expect(cn('p-2', isActive && 'text-green-500', isDisabled && 'opacity-50')).toBe('p-2 text-green-500');
  });

  it('should return an empty string when no classes are provided', () => {
    expect(cn()).toBe('');
  });

  it('should handle null or undefined inputs gracefully', () => {
    expect(cn('p-4', null, 'text-blue-500', undefined)).toBe('p-4 text-blue-500');
  });

  it('should merge classes with arbitrary values', () => {
    expect(cn('p-4', 'text-[1.2rem]', 'bg-[#fff]')).toBe('p-4 text-[1.2rem] bg-[#fff]');
    expect(cn('text-sm', 'text-[1.2rem]')).toBe('text-[1.2rem]');
  });

  it('should correctly merge when standard Tailwind classes have priority over custom ones in specific cases', () => {
    expect(cn('leading-tight', 'leading-level-3')).toBe('leading-level-3');
  });

  it('should handle complex combinations of custom and standard classes', () => {
    expect(
      cn(
        'flex',
        'items-center',
        'text-1',
        'leading-normal',
        'tracking-2',
        'rounded-md',
        'shadow-sm',
        'text-5',
        'leading-level-4',
        'bg-blue-500'
      )
    ).toBe('flex items-center tracking-2 rounded-md shadow-sm text-5 leading-level-4 bg-blue-500');
  });

  it('should merge multiple custom class conflicts together', () => {
    expect(
      cn('text-1 leading-level-1 tracking-1 rounded-1 shadow-1', 'text-5 leading-level-3 tracking-2 rounded-4 shadow-6')
    ).toBe('text-5 leading-level-3 tracking-2 rounded-4 shadow-6');
  });

  it('should preserve non-conflicting classes while resolving conflicts', () => {
    expect(cn('p-4 text-1 m-2 text-5 bg-red-500')).toBe('p-4 m-2 text-5 bg-red-500');
  });
});
