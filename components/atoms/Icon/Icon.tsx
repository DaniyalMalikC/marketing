import { cn } from "@/lib/utils";
import { Icon as IconifyIcon, type IconProps as IconifyIconProps } from "@iconify/react";

interface IconProps extends Omit<IconifyIconProps, "icon"> {
  name: string;
  size?: number;
}

export function Icon({ name, size = 24, className, ...props }: IconProps) {
  return (
    <IconifyIcon
      icon={name}
      width={size}
      height={size}
      className={cn("inline-block", className)}
      {...props}
    />
  );
}
