import React from 'react';
import Link from 'next/link';

const errorPage = () => (
    <h1>
        <p>Something went wrong</p>
        <p>Go <Link href="/"><a>Back</a></Link></p>
    </h1>
);

export default errorPage;