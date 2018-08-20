import React from 'react';

const App = () => {
 const profiles = [
  { name: "taro", age: 10},
  { name: "hanako", age: 8}
]
  
 return (
  <div>
    {
      profiles.map((profile) => {
        return <User name={profile.name} age={profile.age} />
      })
    }
  </div>
 )
}

const User = (props) => {
 return <div>Hi, I am {props.name}, and {props.age} years old! </div>
}
export default App;
