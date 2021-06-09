import logo from './logo.svg';
import './App.css';
import ProfilePhoto from './Component/Profile/ProfilePhoto';
import FullName from './Component/Profile/FullName';
import Address from './Component/Profile/Address';
import Facebook from './Component/Profile/Facebook.jpg'

function App() {
  return (
    <div className="App">
      <ProfilePhoto></ProfilePhoto>
      <FullName></FullName>
      <Address></Address>
    </div>
  );
}

export default App;

