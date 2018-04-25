import * as React from 'react';

interface Props {
  title: string;
  href: string;
}

export const Platform = ({ title, href }: Props) => (
  <a href={href} className="App-platform">
    <i
      className={`nc-icon ${
        title === 'Mac'
          ? 'nc-apple'
          : title === 'Windows'
            ? 'nc-windows'
            : title === 'Linux'
              ? 'nc-linux'
              : 'nc-window-dev'
      }`}
    />
    {title}
  </a>
);
