# Component Creation Guide for ngx-tailwind-flex-ui

This guide outlines the process and best practices for creating new components in our Angular UI library with Tailwind CSS.

> **Reference Implementation:** For a complete working example, see our [Card Component PR #51](https://github.com/iarunsaragadam/ngx-tailwind-flex-ui/pull/51) which demonstrates all the concepts described in this guide.

## Component Development Workflow

1. **Plan Your Component**
   - Define the component's purpose and use cases
   - Identify required props/inputs
   - Consider variants and customization options
   - Plan for accessibility

2. **Create Library Component Files**
   ```
   libs/ngx-tailwind-flex-ui/src/lib/[component-name]/
   ├── [component-name].component.ts        # Main component logic
   ├── [component-name].component.html      # Component template
   ├── [component-name].component.spec.ts   # Unit tests
   ├── [component-name].component.stories.ts  # Storybook documentation
   └── index.ts                             # Barrel file for exports
   ```

3. **Implement Component Structure**
   - Create a standalone Angular component
   - Define inputs for customization
   - Use `@HostBinding('class')` for Tailwind classes
   - Keep the HTML template minimal

4. **Add Storybook Documentation**
   - Document all inputs with descriptions
   - Create stories for each variant/use case
   - Show examples of customization

5. **Create Demo Component**
   - Showcase real-world examples in the playground app
   - Demonstrate component in different contexts
   - Show integration with other components

6. **Update Library Exports**
   - Export the component from the library's index.ts file

## Component Architecture Best Practices

### Use Tailwind Effectively
- Use Tailwind for all styling (no component CSS files)
- Leverage `@HostBinding('class')` for dynamic classes
- Provide sensible defaults while allowing customization

### Component API Design
- Keep inputs simple and focused
- Use TypeScript enums or union types for variants
- Accept a custom `class` input for overrides
- Use content projection for flexible layout

### Component Testing
- Test component creation
- Test variant class assignment
- Test custom class input
- Test input validation (if applicable)

### Documentation
- Document all inputs in Storybook
- Provide examples of common use cases
- Show integration with other components

## Example Component Implementation

The Card component included in this PR demonstrates these practices:

```typescript
@Component({
  selector: 'lib-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styles: [], // No inline styles; Tailwind handles it
})
export class CardComponent {
  @Input() variant: 'default' | 'outlined' | 'elevated' = 'default';
  @Input() padding: 'none' | 'small' | 'medium' | 'large' = 'medium';
  @Input() rounded: 'none' | 'small' | 'medium' | 'large' | 'full' = 'medium';
  @Input() class = ''; // Allow users to pass custom Tailwind classes

  @HostBinding('class') get hostClasses() {
    // Base classes
    const baseClasses = 'block overflow-hidden';
    
    // Variant classes
    const variantClasses = {
      default: 'bg-white',
      outlined: 'bg-white border border-gray-200',
      elevated: 'bg-white shadow-md'
    };
    
    // Padding classes
    const paddingClasses = {
      none: 'p-0',
      small: 'p-2',
      medium: 'p-4',
      large: 'p-6'
    };
    
    // Rounded classes
    const roundedClasses = {
      none: 'rounded-none',
      small: 'rounded-sm',
      medium: 'rounded',
      large: 'rounded-lg',
      full: 'rounded-full'
    };

    return `${baseClasses} ${variantClasses[this.variant]} ${paddingClasses[this.padding]} ${roundedClasses[this.rounded]} ${this.class}`.trim();
  }
}
```

## Next Steps After Creating a Component

1. Add the component to the library exports in `index.ts`
2. Update documentation to include the new component
3. Consider adding e2e tests for complex interactions
4. Add to the component showcase in the playground app

## Resources

- [Angular Component Documentation](https://angular.io/guide/component-overview)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Storybook Documentation](https://storybook.js.org/docs/angular/get-started/introduction)
