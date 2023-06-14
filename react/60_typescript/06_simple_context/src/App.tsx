import React from 'react';
import logo from './logo.svg';
import './App.css';
import ThemeContext,{themes,ThemeType} from './context/ThemeContext';
import { useState } from 'react';
import Headline from './components/Headline';
import Paragraph from './components/Paragraph';
import ThemeButton from './components/ThemeButton';

interface State {
  theme:ThemeType;
}

function App() {

  const [state,setState] = useState<State>({
    theme:themes.dark
  })

  const toggleTheme = () => {
    if(state.theme === themes.dark) {
      setState({
        theme:themes.light
      })
    } else {
      setState({
        theme:themes.dark
      })
    }
  }
  return (
    <ThemeContext.Provider value={state.theme}>
    <div className="App">
      <Headline>
        About this Handbook
      </Headline>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
      </Paragraph>
      <ThemeButton toggleTheme={toggleTheme}/>
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
