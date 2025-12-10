import React, { useEffect, useState } from "react";
const UseEffectComponent = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Priyadharshini");
  useEffect(() => {
    console.log("Piyadharshini ESHWAR AGH");
  }, [count,name]);
  return (
    <div style={{ background: 'white', color: 'black', minHeight: '100vh', padding: '20px' }}>
      <h1 style={{ color: 'black' }}>UseEffect</h1>
      <button onClick={() => setCount(count + 1)} style={{ background: 'black', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '4px', cursor: 'pointer', marginRight: '10px' }}>Increment</button>
      <input
        type="text"
        style={{ padding: '10px', border: '2px solid black', borderRadius: '4px', background: 'white', color: 'black' }}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
    </div>
  );
};
export default UseEffectComponent;