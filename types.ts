
export type size = "tiny" | "small" | "normal" | "large";
export interface CountDownProps {
  size?: size;
  className?: string;
  variant?: "natural" | "primary" | "secondary" | "accent" | "ghost" | "info" | "success" | "warning";
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
  size?: size
}
export enum sizeEnum {
  tiny = 50,
  small = 60,
  normal = 70,
  large = 80,

}