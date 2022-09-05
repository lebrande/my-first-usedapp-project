import { useEthers } from '@usedapp/core';
import { Button } from './components/Button';

export const App = () => {
  const { activateBrowserWallet, account } = useEthers();

  return (
    <div>
      <div>
        <Button onClick={() => activateBrowserWallet()}>Connect</Button>
      </div>
      {account && <p>Account: {account}</p>}
    </div>
  )
}
