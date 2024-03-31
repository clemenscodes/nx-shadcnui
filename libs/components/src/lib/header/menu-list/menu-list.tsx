import { cn } from '@utils';
import ToggleTheme from '../toggle-theme/toggle-theme';

export type MenuListProps = React.ComponentPropsWithoutRef<'ul'> & {
    isChecked: boolean;
    handleChecked: () => void;
    handleScroll: (e: React.MouseEvent<HTMLAnchorElement>) => void;
};

export const MenuList: React.FC<MenuListProps> = ({
    isChecked,
    handleChecked,
    handleScroll,
    ...props
}) => {
    return (
        <ul
            {...props}
            className={cn(
                'absolute items-center justify-center',
                'right-0 top-3/4 max-h-none',
                'list-none rounded bg-white shadow-full',
                'translate-y-3/4 transition-transform ',
                'dark:bg-dimmed-900',
                'md:static md:flex md:space-x-2',
                'md:shadow-none',
                'md:translate-y-0',
                isChecked && 'opacity-100',
                isChecked && 'animate-in fade-in',
                isChecked && 'slide-in-from-right',
                isChecked && 'md:animate-none',
                isChecked || 'hidden opacity-0',
                isChecked || 'animate-out fade-out',
                isChecked || 'slide-out-to-right',
                isChecked || 'md:animate-none md:opacity-100',
            )}
        >
            <li
                className={cn(
                    'flex flex-col items-center',
                    'rounded',
                    'md:inline-block md:items-center',
                    'xl:text-2xl',
                    isChecked || 'hidden',
                )}
            >
                <ToggleTheme />
            </li>
            <li
                className={cn(
                    'flex flex-col items-center',
                    'rounded',
                    'md:inline-block md:items-center',
                    'xl:text-2xl',
                )}
            >
            </li>
        </ul>
    );
};

export default MenuList;
