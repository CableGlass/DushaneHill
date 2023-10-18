import { useState } from 'react';
import fetch from 'node-fetch';
import { useHistory } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RegistrationComplete from './RegistrationComplete';
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/registration-complete" component={RegistrationComplete} />
        {/* other routes... */}
      </Switch>
    </Router>
  );
}

export default function RegistrationForm() {
  const [firstName, setFirstName] = useState('');
  const [surname, setSurname] = useState('');
  const [yearJoined, setYearJoined] = useState('');
  const [mobileOS, setMobileOS] = useState('');
  const [mobileDeviceModel, setMobileDeviceModel] = useState('');
  const [registrationComplete, setRegistrationComplete] = useState(false);
  const history = useHistory();


  const handleSubmit = async (event) => {
    event.preventDefault();
    // Handle form submission here
    const response = await fetch('/api/_register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ firstName, surname, yearJoined, mobileOS, mobileDeviceModel}),
      })
      .catch(error => {
        console.error('Network error:', error);
      });
    
      if (response.ok) {
        console.log('User registered successfully: ', registrationComplete);
        setRegistrationComplete(true);
        history.push('/registration-complete');
      } else {
        console.error('An error occurred');
      }
  };

  return (
    <form onSubmit={handleSubmit} className="text-center mt-5">
      <h1 className="h3 mb-3 fw-normal">PrimeLink Registeration</h1>
      <div className="form-floating">
        <input type="text" className="form-control" id="firstName" value={firstName} onChange={e => setFirstName(e.target.value)} placeholder="First Name" required />
        <label htmlFor="firstName">First Name</label>
      </div>
      <div className="form-floating">
        <input type="text" className="form-control" id="surname" value={surname} onChange={e => setSurname(e.target.value)} placeholder="Surname" required />
        <label htmlFor="surname">Surname</label>
      </div>
      <div className="form-floating">
        <input type="number" className="form-control" id="yearJoined" value={yearJoined} onChange={e => setYearJoined(e.target.value)} placeholder="Year Joined" required />
        <label htmlFor="yearJoined">Year you joined the corpoartion</label>
      </div>
      <div className="form-floating">
        <input type="text" className="form-control" id="mobileOS" value={mobileOS} onChange={e => setMobileOS(e.target.value)} placeholder="Mobile Device's Operating System" required />
        <label htmlFor="mobileOS">Mobile Device's Operating System</label>
      </div>
      <div className="form-floating">
      <input type="text" className="form-control" id="mobileOS" value={mobileDeviceModel} onChange={e => setMobileDeviceModel(e.target.value)} placeholder="Mobile Device's Operating System" required />
        <label htmlFor="mobileDeviceModel">Mobile Device's Model</label>
      </div>
      <button className="w-100 btn btn-lg btn-primary" type="submit">Register</button>
      {registrationComplete ? <p>Registration Complete</p> : null}
    </form>
  );
}
