import React, { Component } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import { resolve } from 'path';
import { rejects } from 'assert';

class IndexPage extends Component {
    static getInitialProps(context) {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({appName: 'Super app'});
            }, 1000);
        });

        return promise;
    }
    render() {
        return (
            <div>
                <h1>Th Main Page {this.props.appName}</h1>
                <p><Link href="/auth"><a>Go to auth</a></Link></p>
                <button onClick={() => Router.push('/auth')}>Go to auth</button>
            </div>
        );
    }
}

export default IndexPage;