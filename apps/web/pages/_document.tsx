import { site } from '@config';
import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }
    render() {
        return (
            <Html lang='en' translate='no'>
                <Head>
                    <meta name='google' content='notranslate' />
                    <meta charSet='UTF-8' />
                    <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
                    <meta name='application-name' content={site.title} />
                    <meta name='apple-mobile-web-app-title' content={site.title} />
                    <meta name='apple-mobile-web-app-capable' content='yes' />
                    <meta name='apple-mobile-web-app-status-bar-style' content='default' />
                    <meta name='format-detection' content='telephone=yes' />
                    <meta name='mobile-web-app-capable' content='yes' />
                    <meta name='msapplication-config' content='/browserconfig.xml' />
                    <meta name='msapplication-TileColor' content='#603cba' />
                    <meta name='msapplication-tap-highlight' content='no' />
                    <meta name='theme-color' content='#6c63ff' />
                    <meta name='twitter:title' content={site.title} />
                    <meta property='og:type' content='website' />
                    <meta property='og:title' content={site.title} />
                    <meta property='og:site_name' content={site.title} />
                    <link rel='shortcut icon' href='/favicon.ico' />
                </Head>
                <body className='scroll-smooth bg-white font-sans antialiased dark:bg-dimmed-900 dark:text-dimmed-font'>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
