type SVGProps = Omit<React.HTMLAttributes<HTMLOrSVGElement>, 'onChange'>;

export interface Props extends SVGProps {
  onChange?: (checked: boolean) => void;
  style?: React.CSSProperties;
  size?: number | string;
  moonColor?: string;
  sunColor?: string;
}
