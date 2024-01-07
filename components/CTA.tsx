import { cn } from '@/utils/cn';
import { Button, ButtonProps, ElementProps } from '@mantine/core';
import React from 'react';

interface Props
  extends ButtonProps,
    ElementProps<'button', keyof ButtonProps> {}

export const CTA = ({ className, fullWidth, children, ...rest }: Props) => {
  return (
    <Button
      {...rest}
      className={cn(
        'flex justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500',
        className,
      )}
      fullWidth={fullWidth}
    >
      {children}
    </Button>
  );
};
