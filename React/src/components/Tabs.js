import { TabButton } from "./TabButton";
import { TabArea } from "./TabArea";
import { useState } from "react";

import "../styles.css";

export const Tabs = (props) => {
  // Precisa do setSelected para fazer a separação de get/set
  const [selected, setSelected] = useState(0);

  return (
    <div className="tabs">
      {props.tabs.map((tab, i) => (
        <TabButton
          name={tab.name}
          selected={i === selected}
          onClick={() => setSelected(i)}
          key={i}
        />
      ))}

      <TabArea content={props.tabs[selected].content} />
    </div>
  );
};
