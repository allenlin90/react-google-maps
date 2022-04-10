import { NextPage } from 'next';
import {
  useState,
  useContext,
  createContext,
  FC,
  Dispatch,
  SetStateAction,
  ChangeEvent,
} from 'react';

interface UserContextProps<T = string> {
  username: T;
  setUsername: Dispatch<SetStateAction<T>>;
}

export const UserContext = createContext<UserContextProps>({
  username: '',
  setUsername: () => undefined,
});

export const ContextPage: NextPage = () => {
  const [username, setUsername] = useState<string>('');

  return (
    <>
      <UserContext.Provider value={{ username, setUsername }}>
        <Login />
        <Username />
      </UserContext.Provider>
    </>
  );
};

export default ContextPage;

export const Login: FC = () => {
  const { setUsername } = useContext(UserContext);
  console.log(setUsername);

  return (
    <div>
      <input
        type='text'
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          setUsername(event.target.value)
        }
      />
    </div>
  );
};

export const Username: FC = () => {
  const { username } = useContext(UserContext);

  return (
    <div>
      <h1>User:{username}</h1>
    </div>
  );
};
