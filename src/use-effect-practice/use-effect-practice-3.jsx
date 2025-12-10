import React, { useEffect, useState } from "react";
import axios from "axios";

const LoadingSpinner = () => {
  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      padding: '20px' 
    }}>
      <div style={{
        border: '4px solid #f3f3f3',
        borderTop: '4px solid #3498db',
        borderRadius: '50%',
        width: '40px',
        height: '40px',
        animation: 'spin 2s linear infinite'
      }}>
      </div>
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
};

const UseEffectPracticeThree = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fun1 = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setData(response.data);
        console.log("Fetched data:", response.data);
      } catch (err) {
        console.log("Error while fetching data:", err);
      }
      setLoading(false);
    };
    fun1();
    console.log("the data:", data);
  }, []);
  //   if (loading) {
  //     return <LoadingSpinner />;
  //   }
  return (
    <div style={{ background: 'white', color: 'black', minHeight: '100vh', padding: '20px' }}>
      <h1 style={{ color: 'black' }}>UseEffect Practice 3</h1>
      {loading ? (
        <LoadingSpinner />
      ) : (
        data.map((item) => (
          <div key={item.id} style={{ marginBottom: "20px", padding: '10px' }}>
            <h3 style={{ color: 'black' }}>{item.title}</h3>
            <p style={{ color: 'black' }}>{item.body}</p>
          </div>
        ))
      )}
    </div>
  );
};
export default UseEffectPracticeThree;