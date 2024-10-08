"use client"
import React from "react";
import { useState } from "react";
import Image from "next/image";

function HomePage() {
const [file, setFile] = useState();

  return (
    <div className="flex h-screen justify-center items-center">
      <div className="bg-zinc-950 p-5"> 
        <h1 className="text-center text-4xl my-4">Subir archivo</h1>
     
    
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
      }} >
        
        
        <input type="file"className="bg-zinc-900 text-zinc-100 p-2 rounded block mb-2"
        onChange={(e)=>{
           setFile(e.target.files[0])
        }} 
        />
        <button className="bg-green-500 text-zinc-100 text-xl p-1 rounded-sm block w-full disabled:opacity-50"
        disabled={!file}
       >Subir</button>
      </form>
      {
        file && (
          <Image src ={URL.createObjectURL(file)} alt ="upload file"
          className="w-64 h-64 object-cover mx-auto"
          width={256}
          height={256}/>
        )

      }</div>
    </div>
  );
}

export default HomePage;
