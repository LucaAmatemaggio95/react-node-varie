import React, {Component} from 'react';
import Link from 'next/link';
import Router from 'next/router';

class IndexPage extends Component {

    static async getInitialProps(context) {// fetch props from API call
        console.log(context);
        const promise = new Promise((resolve, reject) => {
            setTimeout(()=>{resolve({appname: 'superapp'})},1000)
        });
        
        return promise;
    }

    render () {
        return (
<h1>
        <p>The main page of {this.props.appname}</p>
        <p>Go to <Link href="/auth"><a>Auth</a></Link></p>
        <button onClick={() => Router.push('/auth')}>go to auth</button>
    </h1>
        )
    }
}

export default IndexPage;