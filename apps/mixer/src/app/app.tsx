import { useEffect, useState } from 'react';
import { AppBar, Handle, Toolbar } from 'react95';

import { injectable } from '@mixer/injectable';
import { mkWalletConnect } from '@mixer/wallet-connect';
import { mkDesktop } from '@mixer/desktop';

import { Footer, InfoFrame, Main, Root } from './styled';
import { mkWidgetsConfig } from './widgets';

export const mkApp = injectable(
  mkWidgetsConfig,
  mkDesktop,
  mkWalletConnect,
  (WIDGETS_CONFIG, Desktop, WalletConnect) => () => {
    return (
      <Root>
        <Main>
          <Desktop widgetsConfig={WIDGETS_CONFIG} />
        </Main>
        <Footer>
          <AppBar
            position="static"
            style={{
              display: 'grid',
              gridTemplateColumns: 'max-content 1fr min-content max-content',
            }}
          >
            <WalletConnect />
            <div />
            <Handle />
            <Toolbar>
              <InfoFrame variant="status">
                <Clock />
              </InfoFrame>
            </Toolbar>
          </AppBar>
        </Footer>
      </Root>
    );
  }
);

const Clock = () => {
  const now = () =>
    new Date().toLocaleString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    });

  const [time, setTime] = useState(now());

  useEffect(() => {
    const id = window.setInterval(() => {
      setTime(now());
    }, 1000);

    return () => {
      window.clearInterval(id);
    };
  }, []);

  return <span>{time}</span>;
};
