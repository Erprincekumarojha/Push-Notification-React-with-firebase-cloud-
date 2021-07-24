
import React from 'react';
import './App.css';
import firebase from './firebase';
function App() {

  React.useEffect(()=>{
    const msg=firebase.messaging();
    msg.requestPermission().then(()=>{
      return msg.getToken();
    }).then((data)=>{
      console.warn("token",data)
    })
  })
  return (
    <div className="">
        
          Hi My Push Notification service   

    </div>
  );
}

export default App;
