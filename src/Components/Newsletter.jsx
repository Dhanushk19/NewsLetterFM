import "../css/Newsletter.css";

import { useState } from "react";

import { Link } from "react-router-dom";
function Newsletter()
{
    const [email, setEmail] = useState('');
  const [error, setError] = useState(null);

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleChange = event => {
    if (!isValidEmail(event.target.value)) {
      setError('Valid email required');
    } else {
      setError(null);
    }

    setEmail(event.target.value);
  };
    return (
        <div className="full-card">
           <div className="content">
                <h1 className="StayUpdated">Stay updated!</h1>
                <p className="text">Join 60,000+ product managers receiving monthly updates on:</p>
                <div className="list-full">
                  <ul>
                  <li className="list">Product discovery and building what matters</li>
                    <li className="list">
                    Measuring to ensure updates are a success
                    </li>
                    
                    <li className="list">And much more</li>
                  </ul>
                
                </div>
                <div className="emailaddress">
                <label htmlFor="emailadd">Email address</label> {error && <span style={{color: 'red',marginLeft:"30%"}}>{error}</span>}<br></br>
                <input type="email" id="emailaddd" placeholder="email@company.com" value={email} className={error==null ? "black" :"red" }        onChange={handleChange} />
                

      

                </div>

                { error===null ?
                                  <Link to="/success"><button className="button"  >Subscribe to monthly newsletter{localStorage.setItem("email",email)}</button></Link>
                  :
                  <Link to="/"><button className="button"  >Subscribe to monthly newsletter{localStorage.setItem("email",email)}</button></Link>

                }
                
           </div>
           <div className="image">

           </div>
        </div>
    )
}

export default Newsletter;