import logo from './logo.svg';
import './App.css';
import Header from "./Header";
import Subheader from "./contacts/Subheader";
import Container from "./contacts/Container";

function App() {
  const appName = 'Assistance'
    const contactsBlockName = 'Contact List'
    const contacts = [
        {
            id : 1,
            name:'jon Smith',
            tel:'222-333-44',

    },
        {
            id : 2,
            name:'jon Smith',
            tel: '222-533-44',
        },
        {
            id : 3,
            name:'jon Smith',
            tel: '222-373-44',
        }

        ]
  return (
    <div>
 <Header appName={appName}/>
        <Container
            contactsBlockName = {contactsBlockName}
            contacts={contacts}

        />
    </div>
  );
}

export default App;
