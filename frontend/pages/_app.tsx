import 'bootstrap/dist/css/bootstrap.min.css';
import 'shards-ui/dist/css/shards.min.css';

import App from 'next/app';
import Head from 'next/head';
import * as React from 'react';

export default class MyApp extends App {
    public render() {
        const { Component, pageProps } = this.props

        return (
            <>
                <Head>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <title>Example Login</title>
                </Head>
                <Component {...pageProps} />
            </>
        )
    }
}