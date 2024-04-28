import { Outlet } from 'react-router-dom';
import MainHeader from '../Navigation/MainHeader';
import SessionContextProvider from '../store/session-context-ts';

export default function Root() {
  return (
    <>
      {/* Todo: Add Header */}
      <SessionContextProvider>
      <MainHeader/>
      <Outlet />  {/** render child component of Routes */}
      </SessionContextProvider>
    </>
  );
}
