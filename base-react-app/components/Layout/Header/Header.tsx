import Link from 'next/link'
import React from 'react';

export class Header extends React.Component<any, any>{
  render(){
      return (
        <div>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
      </div>
      );
  }
}