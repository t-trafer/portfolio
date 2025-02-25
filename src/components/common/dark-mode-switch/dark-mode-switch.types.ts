type SVGProps = Omit<React.HTMLAttributes<HTMLOrSVGElement>, 'onChange'>;

export interface Props extends SVGProps {
  style?: React.CSSProperties;
  size?: number | string;
  moonColor?: string;
  sunColor?: string;
}
