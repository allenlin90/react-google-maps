import { NextPage } from 'next';
import {
  useState,
  ChangeEvent,
  FC,
  Dispatch,
  SetStateAction,
  useEffect,
  useContext,
} from 'react';

import { CheckboxInterface, CheckboxInterfaceType } from 'contexts';

type SetChecked = Dispatch<SetStateAction<boolean>>;

export const CompoundComponent: NextPage = () => {
  return (
    <Checkbox>
      <Label>Check box label</Label>
      <br />
      <div>
        <CheckboxInput />
      </div>
    </Checkbox>
  );
};

const Checkbox: FC<any> = ({ children }) => {
  const [checked, setChecked] = useState(true);

  return (
    <CheckboxInterface.Provider value={{ checked, setChecked }}>
      {children}
    </CheckboxInterface.Provider>
  );
};

const CheckboxInput: FC<{
  checked?: boolean;
  setChecked?: SetChecked;
}> = () => {
  const { checked, setChecked } = useContext(
    CheckboxInterface
  ) as CheckboxInterfaceType;

  const [_checked, _setChecked] = useState(!!checked);

  useEffect(() => {
    if (!setChecked) {
      console.warn('Should be used inside Checkbox');
    }
  }, [setChecked]);

  return (
    <input
      type='checkbox'
      checked={checked}
      onChange={(e: ChangeEvent<HTMLInputElement>) => {
        _setChecked(e.target.checked);
        setChecked && setChecked(e.target.checked);
      }}
    />
  );
};

interface LabelProps {
  checked?: boolean;
  setChecked?: SetChecked;
}

const Label: FC = ({ children }) => {
  const { setChecked } = useContext(CheckboxInterface) as CheckboxInterfaceType;

  return (
    <label onClick={() => setChecked && setChecked((state: boolean) => !state)}>
      {children}
    </label>
  );
};

export default CompoundComponent;
