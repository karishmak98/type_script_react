
import './App.css'
// import Button from './components/Button'
// import Container from './components/Container';
import { useRef } from 'react';
import Form,{type FormHandle} from './components/UI/Form';
import Input from './components/UI/Input';


function App() {
  const customForm=useRef<FormHandle>(null)
  // const input=useRef<HTMLInputElement>(null);
  function handleSave(data:unknown){
    const extractedData=data as {
   name:string, age:string
    }
   
    customForm.current?.clear();
     console.log(extractedData)
  }

  return (
    <main>

      {/* <Input label="name" id="name" type="text"/>
      <Input label="number" id="name" type="number"/> */}
   {/* <p>
    <Button target='' className='button' >
    A Button
    </Button>
   </p>
   <p>
    <Button className='anchor' 
    href='https://google.com' >
    A Link
    </Button>
   </p> */}
   {/* <Container  as={Button} onClick={()=>{}}>Click Me</Container> */}

   {/* <Input label='Test' id='test' ref={input}/> */}
   <Form onSave={handleSave} ref={customForm}>
   <Input type="text"  id="name" label="Name"/>
   <Input type="number"  id="age" label="Age"/>
   </Form>
    </main>
  )
}

export default App
