import React, { useState, useEffect } from "react";
import Circle from './components/Circle'
import { updateState, test } from './Functions'
function App() {
    return (
      <div id="bg" className={`bg${updateState()}`}>
        <Circle />
      </div>
    );
}


export default App;