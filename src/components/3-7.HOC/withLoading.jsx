import React, {useState} from 'react'
import { useEffect } from 'react';

export default function withLoading(Component) {
  const WithLoadingComponent = (props) => {
    const [loading, setLoding] = useState(true);
  
    useEffect(() => {
      const timer = setTimeout(() => setLoding(false), 3000);
  
      return () => clearTimeout(timer);
    },[]);
    
    return loading ? <p>Loading...</p> : <Component {...props} />;
  }

  return WithLoadingComponent;
}
