//import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [inputvalue, setInputValue] = useState('');
  const [item,setItem] = useState([]);
  const addItem = ()=>{
    if(!inputvalue){
      
    }else{
      setItem([...item,inputvalue])
      setInputValue('')
      console.log(item)
    }
    
    
  }
  const deleteItem =(id) => {
    const afterDeletedItem = item.filter((ele,ind)=>{
      return(
        ind !== id
      )
    })
    //setItem([])
    setItem(afterDeletedItem)
    
  }
  const removeall = ()=>{
    setItem([])
  }
 
  return (
    <> 
    <div className="App">
      <h1>To DO List....</h1>
      <div>
      <input type='text' title='add' value={inputvalue} onChange={(e)=>setInputValue(e.target.value)}/>
      <button className='btn btn-success size' onClick={addItem}>Add</button>
      <button className='btn btn-primary' onClick={removeall}>RemoveAll</button>
      </div>
      
      <div>
        {
          
          item.map((ele,ind)=>{
              return( 
                <div key={ind}>{ele} <button onClick={()=>deleteItem(ind)}>remove</button></div>
                )
          })
        }
        </div>
      
    </div>
    
<div className="container text-center">
  <div className="row">
    <div className="col">
    <div className="card" >
  <img src="https://picsum.photos/200/301" className="card-img-top" alt="..." height= "200px" />
  <div className="card-body">
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
    </div>
    <div className="col">
    <div className="card" >
  <img src="https://picsum.photos/201/300" className="card-img-top" alt="..." height= "200px"/>
  <div className="card-body">
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
    </div>
    <div className="col">
    <div className="card" >
  <img src="https://picsum.photos/200/302" className="card-img-top" alt="..." height= "200px"/>
  <div className="card-body">
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
    </div>
  </div>
</div>
</>
    
    
  );
}

export default App;
