import * as React from 'react';

interface Props {
  title: string;
  href: string;
}

const getPlatform: any = (title: string) => {
  switch (title) {
    case 'MacOS':
      return 'mac';
    case 'Windows':
      return 'win';
    case 'Linux':
      return 'linux';
    default:
      return 'HTML';
  }
};

export const Platform = ({ title, href }: Props) => (
  <div className="App-platform">
    <i
      className={`nc-icon ${
        title === 'MacOS'
          ? 'nc-apple'
          : title === 'Windows'
            ? 'nc-windows'
            : title === 'Linux'
              ? 'nc-linux'
              : 'nc-window-dev'
      }`}
    />
    <div className="App-platform-content">
      {getPlatform(title) === 'HTML' ? (
        <a href={href} className="App-platform-title">
          {title}
        </a>
      ) : (
        <>
          <p className="App-platform-title">{title}</p>
          <a href="https://github.com/MyCryptoHQ/MyCrypto/releases/tag/latest">32-bit</a>
          <a href="https://github.com/MyCryptoHQ/MyCrypto/releases/tag/latest">64-bit</a>
        </>
      )}
    </div>
  </div>
);
