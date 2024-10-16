
import { useState, useCallback, useEffect,useRef } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [Length, setLength] = useState(8       );
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    
    if (numAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*";

    for (let i = 0; i < Length; i++) {
      const charIndex = Math.floor(Math.random() * str.length);
      pass += str.charAt(charIndex);
    }

    setPassword(pass);
  }, [Length, numAllowed, charAllowed,setPassword]);
  const copycode=useCallback(()=>{
    window.navigator.clipboard.writeText(password)

  },[password])
  useEffect(()=>{passwordGenerator();},[Length, numAllowed, charAllowed,passwordGenerator]);

  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md px-4 my-8 py-4 rounded-lg text-orange-500 bg-gray-400'>
      <h1 className='text-center text-white text-4xl mb-4'>PasswordGenerator </h1>
      <div className='flex-shadow rounded-lg overflow-hidden mb-1'>
        <input type="text"
        value={password}
        className='outline-none w-full py-1 px-3'
        placeholder='password'
        readOnly 
        ref={passwordRef}/>
        <button
        onClick={copycode}
        className='text-white outline-none bg-blue-600
        px-3 py-0.5 shrink-0'>Copy</button>
      </div>
      <div className=' flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input type="range"
          min={6}
          max={100}
          value={Length}
          className='cursor-pointer'
          onChange={(e)=>{
            setLength(e.target.value)
          }}
          />

          <label className='text-white text-2xl'>Length:{Length}</label>
          
        </div>
        <div className='flex items-center gap-x-1'>
          <input
          type='checkbox'
          defaultChecked={numAllowed}
          onChange={()=>{
            setNumAllowed((prev)=>!prev);
          }}/>
          <label className='text-white ml' >Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input
          type='checkbox'
          defaultChecked={charAllowed}
          onChange={()=>{
            setCharAllowed((prev)=>!prev);
          }}/>
          <label className='text-white text-1xl ' >Character</label>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;

// import { useState, useCallback, useEffect } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
// import './App.css';

// function App() {
//   const [Length, setLength] = useState(8);
//   const [numAllowed, setNumAllowed] = useState(false);
//   const [charAllowed, setCharAllowed] = useState(false);
//   const [password, setPassword] = useState("");

//   const passwordGenerator = useCallback(() => {
//     let pass = "";
//     let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    
//     if (numAllowed) str += "0123456789";
//     if (charAllowed) str += "!@#$%^&*";

//     for (let i = 0; i < Length; i++) {
//       const charIndex = Math.floor(Math.random() * str.length);
//       pass += str.charAt(charIndex);
//     }

//     setPassword(pass);
//   }, [Length, numAllowed, charAllowed]);

//   useEffect(() => {
//     passwordGenerator();
//   }, [Length, numAllowed, charAllowed, passwordGenerator]);

//   return (
//     <>
//       <div className='w-full max-w-md mx-auto shadow-md px-4 my-8 py-4 rounded-lg text-orange-500 bg-gray-400'>
//         <h1 className='text-center text-white text-4xl mb-4'>Password Generator</h1>
//         <div className='flex-shadow rounded-lg overflow-hidden mb-1'>
//           <input type="text"
//             value={password}
//             className='outline-none w-full py-1 px-3'
//             placeholder='password'
//             readOnly />
//           <button className='text-white outline-none bg-blue-600
//             px-3 py-0.5 shrink-0'>Copy</button>
//         </div>
//         <div className='flex text-sm gap-x-2'>
//           <div className='flex items-center gap-x-1'>
//             <input type="range"
//               min={6}
//               max={100}
//               value={Length}
//               className='cursor-pointer'
//               onChange={(e) => setLength(Number(e.target.value))}
//             />
//             <label className='text-white text-2xl'>Length: {Length}</label>
//           </div>
//           <div className='flex items-center gap-x-1'>
//             <input
//               type='checkbox'
//               checked={numAllowed}
//               onChange={() => setNumAllowed(prev => !prev)}
//             />
//             <label className='text-white ml'>Numbers</label>
//           </div>
//           <div className='flex items-center gap-x-1'>
//             <input
//               type='checkbox'
//               checked={charAllowed}
//               onChange={() => setCharAllowed(prev => !prev)}
//             />
//             <label className='text-white text-1xl'>Special Characters</label>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;
