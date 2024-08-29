import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Button from "./components/Button";
import landingPageData from "./constant/webData";
import { data } from "autoprefixer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import ExpenseTracker from "./components/ExpenseTracker";

function App() {
  // console.log(landingPageData);
  const { header, hero, features, testimonials, callToAction } =
    landingPageData;

  const [amount, setAmount] = useState("");
  const [type, setType] = useState("Income");
  const [transaction, setTransaction] = useState([]);

  const handleAddTransaction = () => {
    setTransaction([...transaction, { amount, type }]);
    setAmount("");
    setType("Income");
  };


  // console.log("transactions =>", transaction);

  return (
    <div>
      {/* header */}

      <Header header={header} />

<ExpenseTracker setAmount={setAmount}
setType={setType}
handleAddTransaction={handleAddTransaction}
transaction={transaction}
amount={amount}
type={type} />

      {/* hero */}

      <Hero hero={hero} />

      {/* features */}

      <Features features={features} />
    </div>
  );
}

{
  /* <Button label={"Login"} onClick={() => alert("Button clicked!")}/> */
}
// onClick={onClick}
//     <><h1 className="text-3xl font-bold underline">  Hello world!</h1>
//     <div>

// <Button bgColor={'bg-black'} borderColor={'border-yellow-500'} textColor={'text-white'} label  = "Home Page" />
// <Button bgColor={'bg-blue-400'} borderColor={'border-red-400'} textColor={'text-black'} label = "About Us" />
// <Button bgColor={'bg-green-400'} borderColor={'border-yellow-400'} textColor={'text-white'} label = "Contact Us" />

//     {/* <button className='border border-blue-900 rounded-md p-3 m-4'>Home Page</button>
//     <button className='border border-blue-900 rounded-md p-3 m-4'>About Us</button>
//     <button className='border border-blue-900 rounded-md p-3 m-4'>Contact Us</button> */}
//     </div>
//     </>
export default App;
