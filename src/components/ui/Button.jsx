import React from 'react';
import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const buttonClasses = cva(
  'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed',
  {
    variants: {
      variant: {
        primary: 'hover:opacity-90 focus:ring-blue-500',
        secondary: 'hover:opacity-90 focus:ring-blue-300',
        outline: 'border-2 bg-transparent hover:bg-opacity-10 focus:ring-blue-500',
      },
      size: {
        small: 'text-sm px-3 py-1.5',
        medium: 'text-base px-4 py-2',
        large: 'text-lg px-6 py-3',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'medium',
    },
  }
);

const Button = ({
  // Required parameters with defaults
  text = "Download Saku",
  text_font_size = "text-base",
  text_font_family = "Inter",
  text_font_weight = "font-semibold",
  text_line_height = "leading-base",
  text_text_align = "center",
  text_color = "text-text-light",
  fill_background_color = "bg-button-primary-bg",
  border_border_radius = "rounded-lg",
  effect_box_shadow = "shadow-[0px_4px_13px_#b8d8fd]",
  
  // Optional parameters (no defaults)
  layout_gap,
  layout_width,
  padding,
  position,
  margin,
  leftImage,
  rightImage,
  
  // Standard React props
  variant,
  size,
  disabled = false,
  className,
  children,
  onClick,
  type = "button",
  ...props
}) => {
  // Safe validation for optional parameters
  const hasValidWidth = layout_width && typeof layout_width === 'string' && layout_width?.trim() !== '';
  const hasValidPadding = padding && typeof padding === 'string' && padding?.trim() !== '';
  const hasValidMargin = margin && typeof margin === 'string' && margin?.trim() !== '';
  const hasValidPosition = position && typeof position === 'string' && position?.trim() !== '';
  const hasValidGap = layout_gap && typeof layout_gap === 'string' && layout_gap?.trim() !== '';

  // Parse padding string if provided (format: "t=16px,r=24px,b=16px,l=58px")
  const parsedPadding = hasValidPadding ? padding?.split(',')?.reduce((acc, item) => {
    const [key, value] = item?.split('=');
    const trimmedValue = value?.replace('px', '');
    if (key === 't') acc.paddingTop = `${trimmedValue}px`;
    if (key === 'r') acc.paddingRight = `${trimmedValue}px`;
    if (key === 'b') acc.paddingBottom = `${trimmedValue}px`;
    if (key === 'l') acc.paddingLeft = `${trimmedValue}px`;
    return acc;
  }, {}) : {};

  // Parse margin string if provided
  const parsedMargin = hasValidMargin ? margin?.split(',')?.reduce((acc, item) => {
    const [key, value] = item?.split('=');
    const trimmedValue = value?.replace('px', '');
    if (key === 't') acc.marginTop = `${trimmedValue}px`;
    if (key === 'r') acc.marginRight = `${trimmedValue}px`;
    if (key === 'b') acc.marginBottom = `${trimmedValue}px`;
    if (key === 'l') acc.marginLeft = `${trimmedValue}px`;
    return acc;
  }, {}) : {};

  // Build optional Tailwind classes
  const optionalClasses = [
    hasValidWidth ? (layout_width === 'auto' ? 'w-auto' : `w-[${layout_width}]`) : '',
    hasValidPosition ? position : '',
    hasValidGap ? `gap-[${layout_gap}]` : '',
  ]?.filter(Boolean)?.join(' ');

  // Build inline styles for required parameters
  const buttonStyles = {
    fontFamily: text_font_family || 'Inter',
    textAlign: text_text_align || 'center',
    ...parsedPadding,
    ...parsedMargin,
  };

  // Safe click handler
  const handleClick = (event) => {
    if (disabled) return;
    if (typeof onClick === 'function') {
      onClick(event);
    }
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={handleClick}
      style={buttonStyles}
      className={twMerge(
        buttonClasses({ variant, size }),
        text_font_size,
        text_font_weight,
        text_line_height,
        text_color,
        fill_background_color,
        border_border_radius,
        effect_box_shadow,
        optionalClasses,
        className
      )}
      aria-disabled={disabled}
      {...props}
    >
      {leftImage && (
        <img 
          src={leftImage?.src} 
          alt="" 
          className="w-[24px] h-[24px]"
          width={leftImage?.width || 24}
          height={leftImage?.height || 24}
        />
      )}
      {children || text}
      {rightImage && (
        <img 
          src={rightImage?.src} 
          alt="" 
          className="w-[24px] h-[24px]"
          width={rightImage?.width || 24}
          height={rightImage?.height || 24}
        />
      )}
    </button>
  );
};

export default Button;