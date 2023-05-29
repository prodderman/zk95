import { Property, newAtom } from '@frp-ts/core';
import { injectable } from '@mixer/injectable';
import { makeViewModel } from '@mixer/utils';
import { mkWithdrawModel } from './model';

export type WithdrawFromViewModel = {
  note$: Property<string>;
  address$: Property<string>;
  setNote: (note: string) => void;
  setAddress: (address: string) => void;
};

export const mkWithdrawFromViewModel = injectable(
  mkWithdrawModel,
  (model) => () => {
    const note$ = newAtom<string>('');
    const address$ = newAtom<string>('');

    return makeViewModel<WithdrawFromViewModel>({
      note$,
      address$,
      setNote: note$.set,
      setAddress: address$.set,
    });
  }
);
