import * as React from 'react';
import { ChakraProvider } from "@chakra-ui/react";
import TypeName from "./TypeName.tsx";

function App() {
  return (
    <div>
      <ChakraProvider>
        <TypeName />
      </ChakraProvider>
    </div>
  );
}

export default App;
