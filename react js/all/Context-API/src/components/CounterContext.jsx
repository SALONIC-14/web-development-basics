import React, { createContext, useState } from 'react'

export let DataContext=createContext()
export let ThemeContext=createContext()

const CounterContext = ({children }) => {
    const [Count, setCount] = useState(0)
    let Bus_counter={Count,setCount}
    const [Theme, setTheme] = useState('red')
    let Bus_theme={Theme,setTheme}

  return (
    <DataContext.Provider value={Bus_counter}>
      <ThemeContext.Provider value={Bus_theme}>
        {children}
      </ThemeContext.Provider>
    </DataContext.Provider>
  )
}

export default CounterContext
