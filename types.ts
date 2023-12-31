
export type size = "tiny" | "small" | "normal" | "large";
export type variant = "natural" | "primary" | "secondary" | "accent" | "ghost" | "info" | "success" | "warning";
export interface CountDownProps {
  size?: size;
  className?: string;
  variant?: variant;
  expiryTimeStamp: number;
  autoStart?: boolean; onExpire: () => void;
  showTitle?: string;
  showDays?: boolean;
  showHours?: boolean;
}
export interface CircleProps {
  strokeDashoffset: number;
  title: string;
  value: number;
  color?: string;
  size?: size;
  variant?: variant;

}
export enum sizeEnum {
  tiny = 50,
  small = 60,
  normal = 70,
  large = 80,

}
export enum variantEnum {
  natural = '#4287f5',
  primary = '#bf2867',
  secondary = '#28babf',
  accent = '#27b36b',
  ghost = '#a6e8ed',
  info = '#54aaff',
  success = '#59f748',
  warning = '#ff0000',

}