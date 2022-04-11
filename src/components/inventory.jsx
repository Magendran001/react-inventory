
  
import { useState } from 'react';
  function Inventory()
  {

   
  let [books,setchange]=useState(1);
  let [pen,penchange]=useState(2);
  let [notebooks,notebookchange]=useState(1);
  let total=books+pen+notebooks;
  

    let change=(sign,fun,items)=>{
       
        if(total>=10 && sign==1)
        {
          return
        }
        if((items+sign)<0)
        {
            return
        }
   
       return fun(sign+items)
     }
   
      return <div id='inventor'>
        
      <CHANGE func={change}  setchange={setchange} items={books} />
      <CHANGE func={change}  setchange={penchange} items={pen} />
      <CHANGE func={change}  setchange={notebookchange} items={notebooks} />

    <div>total:{total}</div>
  </div>
  }
  function CHANGE({func,setchange,items})
{
  return   <div><button onClick={()=>{func(-1,setchange,items)}}>-</button><button>items:{items}</button><button onClick={()=>{func(1,setchange,items)}}>+</button></div>
}

export default Inventory