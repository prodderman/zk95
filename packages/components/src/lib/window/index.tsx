import { PropsWithChildren } from 'react';
import { Button } from 'react95';
import {
  WindowHeader,
  StyledWindow,
  WindowContent,
  WindowTitle,
} from './styled';
import { CloseIcon } from '../close-icon';

type Props = {
  className?: string;
  title?: string;
  iconSrc?: string;
  active?: boolean;
  onClose?: () => void;
};

export const Window = ({
  title,
  iconSrc,
  className,
  active,
  children,
  onClose,
}: PropsWithChildren<Props>) => {
  return (
    <StyledWindow>
      <WindowHeader className={className} active={active}>
        <WindowTitle>
          {iconSrc && <img width={20} height={20} src={iconSrc} alt="icon" />}
          {title}
        </WindowTitle>
        {onClose && (
          <Button
            onMouseDown={(event) => event.stopPropagation()}
            onClick={onClose}
          >
            <CloseIcon />
          </Button>
        )}
      </WindowHeader>
      <WindowContent>{children}</WindowContent>
    </StyledWindow>
  );
};
