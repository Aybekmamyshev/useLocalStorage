import useLocalStorage from "./hook/useLocalStorage";
import * as React from "react";



function App() {
    const [token, {changeToken, removeToken}] = useLocalStorage('token')
  return (
      <div>
        <p>
          Твой токен: {token}
        </p>
        <div>
          <button onClick={() => changeToken('new-token')}>
            Задать токен
          </button>
          <button onClick={() => removeToken()}>
            Удалить токен
          </button>
        </div>
      </div>
  );
}

export default App;
