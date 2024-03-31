import { cn } from '@utils';

export type FooterProps = React.ComponentPropsWithoutRef<'footer'>;

export const Footer: React.FC<FooterProps> = ({ ...props }) => {
    return <footer {...props} className={cn([])}></footer>;
};

export default Footer;
