import { useState } from "react";
import ListGroup from "./components/ListGroup";

function App() {
  const items = ["New York", "Los Angeles", "San Fancisco"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  }
  return (
    <div>
      <ListGroup heading="Miami" items={items} onSelectItem={handleSelectItem}/>
    </div>
  );
}
export default App;
