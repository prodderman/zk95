import { injectable } from '@mixer/injectable';
import { useProperties } from '@frp-ts/react';
import { mkDesktopModel } from '../model';
import { Toolbar, Button } from './styled';
import { combineEff } from '@mixer/utils';

export const mkWidgetBar = injectable(
  mkDesktopModel,
  combineEff(({ activeWidgetId$, activeWidgets$, makeWidgetActive }) => () => {
    const [activeWidgets, activeWidgetId] = useProperties(
      activeWidgets$,
      activeWidgetId$
    );

    return (
      <Toolbar>
        {Object.values(activeWidgets).map(({ caption, iconSrc, id }) => (
          <Button
            key={id}
            active={id === activeWidgetId}
            onMouseUp={() => makeWidgetActive(id)}
          >
            <img src={iconSrc} alt="i" width={20} height={20} />
            {caption}
          </Button>
        ))}
      </Toolbar>
    );
  })
);
