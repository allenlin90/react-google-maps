import { createContext, SetStateAction, Dispatch } from 'react';

export type SetChecked = Dispatch<SetStateAction<boolean>>;

export interface CheckboxInterfaceType {
  checked: boolean;
  setChecked: SetChecked;
}

export const CheckboxInterface = createContext<CheckboxInterfaceType | null>(
  null
);
