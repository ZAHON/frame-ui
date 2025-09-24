import { cva as classVarianceAuthority } from 'class-variance-authority';

/**
 * A core utility function for creating reusable component variants within the `frame-ui` library.
 *
 * This is a direct re-export of the `class-variance-authority` library, providing a type-safe
 * and powerful way to define component variants based on props. It allows you to specify
 * a base set of classes and then conditionally apply different classes based on a set of
 * predefined variants and their values.
 *
 * It is a fundamental building block for styling components in a consistent and scalable
 * manner, ensuring that component styles remain predictable across different use cases.
 */
export const cva = classVarianceAuthority;
