import { useCallback, useEffect, useRef, useState } from 'react'

function App() {

const [passLength, setPassLength] = useState(8);
const [numAllow, setNumAllow] = useState(false);
const [charAllow, setCharAllow] = useState(false);
const [password, setPassword] = useState("");

const passwordRef = useRef("");
const passwordGenerator = useCallback(() => {
  let pass = "";
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  if(numAllow) str+= "0123456789";
  if(charAllow) str+= "!@#$%&*()_[]";

  for(let i=1; i<=passLength; i++){
    let char = Math.floor(Math.random() * str.length + 1);
    pass += str.charAt(char);
  }
  setPassword(pass);
}, [passLength, numAllow, charAllow, setPassword])

const copyPasswordToClipBoard = useCallback(() => {
  passwordRef.current?.select();
  passwordRef.current?.setSelectionRange(0,999);
  window.navigator.clipboard.writeText(password)
}, [password])
useEffect( () => {
  passwordGenerator()
}, [passLength, numAllow, charAllow, setPassword]);

  return (
    <>
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
     <h1 className='text-white text-center my-3'>Password generator</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
         
        />
       <button onClick={copyPasswordToClipBoard} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>
        Copy
       </button>
        
    </div>
     <div className='flex text-sm gap-x-2'>
       <div className='flex items-center gap-x-1'>
          <input className="cursor-pointer" type="range" min={6} max={100} onChange={(e) => setPassLength(e.target.value)} />
          <label>Length: {passLength}</label>
       </div>
       <div className='flex items-center gap-x-1'>
          <input id="numberInput" type="checkbox" defaultChecked={numAllow} onChange={() => setNumAllow((prev) => !prev)} />
          <label>Numbers</label>
           
       </div>
       <div className='flex items-center gap-x-1'>
          <input id="charInput" type="checkbox" defaultChecked={charAllow} onChange={() => setCharAllow((prev) => !prev)} />
          <label>Characters</label>
         
       </div>
     </div>
     </div>
    </>
  )
}

export default App
