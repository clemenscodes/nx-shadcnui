import { Footer, Header } from '@components';
import { cn } from '@utils';
import { NextPage } from 'next';

export type HomeProps = React.ComponentPropsWithoutRef<'div'>;

export const Home: NextPage<HomeProps> = ({ ...props }) => {
    return (
        <div className={cn('flex h-screen flex-col justify-between')} {...props}>
            <Header />
            <main className={cn('mx-6 mb-auto mt-24 md:mx-12 xl:mx-24')} />
            <Footer />
        </div>
    );
};

export default Home;
