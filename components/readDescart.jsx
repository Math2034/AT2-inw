import { useState,useEffect} from 'react'

//importar a config do firebase
import { database } from '../services/firebase'
import { collection, getDocs, orderBy, query, doc, deleteDoc, updateDoc, getDoc} from 'firebase/firestore';

//configurar o Firebase do projeto
const produto = collection(database,'produto')

export default function Descart() {

    const [descartLista,setDescartLista] = useState([])
    const read = ()=>{
    getDocs(query(produto,orderBy("validade")))
    .then((data)=>{
        setDescartLista(data.docs.map((item)=>{
        return{...item.data(), id:item.id}
      }))
    })
  }

  useEffect(()=>{
    read()
  },[])

    return(
        <>
        <div class="d-grid gap-2 col-6 mx-auto">
        <main className='container'>
        <h3 className='text-center'>Descartados</h3>
        {descartLista.map((lista)=>{
          return(
            <ul class="list-group cProductsList"> 
                <li class="list-group-item d-flex"><h4 class="p-0 m-0 flex-grow-1">{lista.alimento} {lista.validade}</h4></li>
            </ul> 
            )
        })}
        </main>
        </div>
        </>
    )
}