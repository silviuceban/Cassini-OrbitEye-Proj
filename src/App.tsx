import React from "react";
import Layout from "./layout";
import { RouterItems } from "./routing";

function App() {
  return (
    <div className="flex w-full flex-col">
      <Layout>
        <RouterItems />
      </Layout>
    </div>
  );
}

export default App;
