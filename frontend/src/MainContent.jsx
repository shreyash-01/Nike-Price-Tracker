import { useState } from "react";
import axios from 'axios';
export default function MainContent(){
    const [inputText,setInputText]=useState('');

    const [finalResponse,setFinalResponse]=useState(null);

    function handleChange(event){
        var text=event.target.value;
        setInputText(text);
    }

    const handleClick=async ()=>{
      
        const data={url:inputText}

        axios.post('http://localhost:8000/api/products', data, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((response) => {   
            setInputText('');            
            const json=response.data;
            if (response.status === 200)
            {
                axios.post("http://localhost:8081/api/products", json, {
                    headers: {
                        'Content-Type': 'application/json'
                }
                })
                .then((response) => {
                    const confirmResponse=response.data;
                    if(response.status === 200){
                        // JSON Product Object
                        console.log(confirmResponse);
                        setFinalResponse(confirmResponse);
                    }
                    else {
                        console.error('Request failed');
                    }
                })
                .catch((error)=>{
                    console.error(error.response.data.error);
                })
            }
            else{
                console.error('Request failed');
            }
        })
        .catch((error) => {
            console.error(error.response.data.error);
        });
    }

    return (
        <div className="flex justify-center items-center w-full h-screen bg-slate-400">
        {
            finalResponse &&
            <div className="absolute top-20 w-40 h-10 rounded-sm shadow-lg bg-green-400 text-md text-white flex justify-center items-center">
            ✓ Succesfully Added
            </div>
        }
        <div className="w-[50rem] h-[30rem] shadow-md bg-gray-300 flex justify-center flex-col items-center">
            <h1 className="relative bottom-10 font-bold text-3xl">Enter Nike Product URL</h1>
            <input onChange={handleChange} value={inputText} className="bg-transparent outline-none left-10 mt-10 mr-10 mb-10 text h-[2rem] w-[38rem] border-black border-b-[1px] rounded-sm ml-10 small:w-20 small:left-0" placeholder="Enter URL"></input>
            <button onClick={handleClick} className="w-[11rem] h-[3rem] mt-10 mb-10 text-center text-md rounded-full bg-gradient-to-r from-yellow-400 to-yellow-200 hover:from-yellow-200 hover:to-yellow-400">Search</button>
        </div>

        </div>
    )
}