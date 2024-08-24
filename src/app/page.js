"use client"
import React from "react";
import { useState } from "react";
function HomePage() {
const [file, setFile] = useState();

  return (
    <div>
      <form onSubmit={async(e) =>{
        e.preventDefault()
        if (!file) return 
        const form = new FormData()
        form.set('file',file)

        //envio del archivo
       const res=await fetch ('/api/upload',{
        method:"POST",
        body:form
       })
       const data = await res.json()
       console.log(data)
      }}>
        <label>Subir Archivo:</label>
        <input type="file"
        onChange={(e)=>{
           setFile(e.target.files[0])
        }}
        />
        <button className="bg-white text-black">Subir</button>
      </form>
    </div>
  );
}

export default HomePage;
