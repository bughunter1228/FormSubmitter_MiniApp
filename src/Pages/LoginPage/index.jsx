import { useState } from 'react';
import { toast } from 'react-toastify';

import './index.css';

import Loading from './Loading';

const LoginPage = () => {

    const [agent, setAgent] = useState('none');
    const [resortTouring, setResortTouring] = useState('Westgate');
    const [tourDate, setTourDate] = useState('');
    const [tourTime, setTourTime] = useState({ hour: '1', minute: '00', period: 'AM' });
    const [maritalStatus, setMaritalStatus] = useState('Married');
    const [creditDebit, setCreditDebit] = useState('Credit Card');
    const [guest1, setGuest1] = useState('');
    const [guest2, setGuest2] = useState('');
    const [phoneGuest1, setPhoneGuest1] = useState('');
    const [phoneGuest2, setPhoneGuest2] = useState('');
    const [streetAddress, setStreetAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [email, setEmail] = useState('');
    const [deposit, setDeposit] = useState('');
    const [gifts, setGifts] = useState('');
    const [opc, setOpc] = useState('');
    const [greeter, setGreeter] = useState('');
    const [locationBooked, setLocationBooked] = useState('Silver City');
    const [notes, setNotes] = useState('');
    const [zipCode, setZipCode] = useState('');

    const [isLoading, setIsLoading] = useState(false);

    const submit = async () => {

        if (agent === 'none') {
            toast.error("Please select an agent!");
            return;
        }

        const data = {
            'agent': agent,
            'resort_touring': resortTouring,
            'tour_date': tourDate,
            'tour_time': `${tourTime.hour}:${tourTime.minute} ${tourTime.period}`,
            'marital_status': maritalStatus,
            'credit_debit': creditDebit,
            'guest1': guest1,
            'guest2': guest2,
            'pn_guest1': phoneGuest1,
            'pn_guest2': phoneGuest2,
            'street_address': streetAddress,
            'city': city,
            'state': state,
            'email': email,
            'deposit': deposit,
            'gifts': gifts,
            'opc_name': opc,
            'greeter_name': greeter,
            'location_booked': locationBooked,
            'notes': notes,
            'zip_code': zipCode
        }

        setIsLoading(true);

        const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/send`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        setIsLoading(false);

        if (res.status === 200) {
            toast.success("Form submitted successfully!")
        } else {
            toast.error("Server Error!")
        }
    }

    const clear = () => {
        setAgent('none');
        setResortTouring('Westgate');
        setTourDate('');
        setTourTime({ hour: '1', minute: '00', period: 'AM' });
        setMaritalStatus('Married');
        setCreditDebit('Credit Card');
        setGuest1('');
        setGuest2('');
        setPhoneGuest1('');
        setPhoneGuest2('');
        setStreetAddress('');
        setCity('');
        setState('');
        setEmail('');
        setDeposit('');
        setGifts('');
        setOpc('');
        setGreeter('');
        setLocationBooked('Silver City');
        setNotes('');
    }

    return (
        <div class='box'>
            {isLoading && <Loading />}
            <div class='box-form'>
                <div class='box-login-tab'></div>
                <div class='box-login-title'>
                    <div class='i i-login'></div>
                    <h2>Form</h2>
                </div>
                <div class='box-login' style={{ overflow: 'auto', height: '80vh' }}>
                    <div class='fieldset-body' id='login_form'>
                        <p class='field'>
                            <label for='agent'>Agent</label>
                            <select value={agent} onChange={(e) => { setAgent(e.target.value) }} id='agent' name='agent' title='agent'>
                                <option value='none'>Select Agent</option>
                                <option value='Tamkia Ayala'>Tamkia Ayala</option>
                                <option value='Chris Zepeda'>Chris Zepeda</option>
                                <option value='Lenore McAndrew'>Lenore McAndrew</option>
                                <option value='Lilly Yacin'>Lilly Yacin</option>
                                <option value='Scott Ritter'>Scott Ritter</option>
                                <option value='Charles Taylor'>Charles Taylor</option>
                                <option value='Robert Enriquez'>Robert Enriquez</option>
                                <option value='Tania Palacios'>Tania Palacios</option>
                                <option value='Marsha Souma'>Marsha Souma</option>
                                <option value='Rodney Arnold'>Rodney Arnold</option>
                            </select>
                        </p>
                        <p class='field'>
                            <label for='resort_touring'>Resort Touring</label>
                            <select value={resortTouring} onChange={(e) => { setResortTouring(e.target.value) }} id='resort_touring' name='resort_touring' title='resort_touring'>
                                <option value='Westgate'>Westgate</option>
                                <option value='Tahiti Village'>Tahiti Village</option>
                                <option value='Grandview'>Grandview</option>
                                <option value='VI/Carriage House'>VI/Carriage House</option>
                                <option value='Wyndham'>Wyndham</option>
                                <option value='Grandview'>Grandview</option>
                                <option value='Bluegreen/Hilton'>Bluegreen/Hilton</option>
                            </select>
                        </p>
                        <p class='field'>
                            <label for='tour_date'>Tour Date</label>
                            <input value={tourDate} onChange={(e) => { setTourDate(e.target.value) }} type='date' id='tour_date' name='tour_date' title='tour_date' />
                        </p>
                        <p class='field' style={{ display: 'flex', flexDirection: 'column' }}>
                            <label for='tour_time'>Tour Time</label>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                                <select value={tourTime.hour} onChange={(e) => { setTourTime({ ...tourTime, hour: e.target.value }) }} id='tour_time_h' name='tour_time_h' title='tour_time_h'>
                                    <option value='1'>1</option>
                                    <option value='2'>2</option>
                                    <option value='3'>3</option>
                                    <option value='4'>4</option>
                                    <option value='5'>5</option>
                                    <option value='6'>6</option>
                                    <option value='7'>7</option>
                                    <option value='8'>8</option>
                                    <option value='9'>9</option>
                                    <option value='10'>10</option>
                                    <option value='11'>11</option>
                                    <option value='12'>12</option>
                                </select>
                                <span>:</span>
                                <select value={tourTime.minute} onChange={(e) => { setTourTime({ ...tourTime, minute: e.target.value }) }} id='tour_time_h' name='tour_time_h' title='tour_time_h'>
                                    <option value='00'>00</option>
                                    <option value='30'>30</option>
                                </select>
                                <span>:</span>
                                <select value={tourTime.period} onChange={(e) => { setTourTime({ ...tourTime, period: e.target.value }) }} id='tour_time_h' name='tour_time_h' title='tour_time_h'>
                                    <option value='AM'>AM</option>
                                    <option value='PM'>PM</option>
                                </select>
                            </div>
                        </p>
                        <p class='field'>
                            <label for='martial_status'>Marital Status</label>
                            <select value={maritalStatus} onChange={(e) => { setMaritalStatus(e.target.value) }} id='martial_status' name='martial_status' title='martial_status'>
                                <option value='Married'>Married</option>
                                <option value='Cohabitating'>Cohabitating</option>
                                <option value='Single'>Single</option>
                            </select>
                        </p>
                        <p class='field'>
                            <label for='credit_debit'>Credit Card or Debit Card</label>
                            <select value={creditDebit} onChange={(e) => { setCreditDebit(e.target.value) }} id='credit_debit' name='credit_debit' title='credit_debit'>
                                <option value='Credit Card'>Credit Card</option>
                                <option value='Debit Card'>Debit Card</option>
                            </select>
                        </p>
                        <p class='field'>
                            <label for='guest1'>Guest #1 - First and Last Name (no nicknames)</label>
                            <input value={guest1} onChange={(e) => { setGuest1(e.target.value) }} type='text' id='guest1' name='guest1' title='guest1' />
                        </p>
                        <p class='field'>
                            <label for='guest2'>Guest #2 - First and Last Name (no nicknames)</label>
                            <input value={guest2} onChange={(e) => { setGuest2(e.target.value) }} type='text' id='guest2' name='guest2' title='guest2' />
                        </p>
                        <p class='field'>
                            <label for='pn-guest1'>Phone number Guest #1</label>
                            <input value={phoneGuest1} onChange={(e) => { setPhoneGuest1(e.target.value) }} type='text' id='pn-guest1' name='pn-guest1' title='pn-guest1' />
                        </p>
                        <p class='field'>
                            <label for='pn-guest2'>Phone number Guest #2</label>
                            <input value={phoneGuest2} onChange={(e) => { setPhoneGuest2(e.target.value) }} type='text' id='pn-guest2' name='pn-guest2' title='pn-guest2' />
                        </p>
                        <p class='field'>
                            <label for='street_address'>Street Address (that is listed on ID)</label>
                            <input value={streetAddress} onChange={(e) => { setStreetAddress(e.target.value) }} type='text' id='street_address' name='street_address' title='street_address' />
                        </p>
                        <p class='field'>
                            <label for='city'>City</label>
                            <input value={city} onChange={(e) => { setCity(e.target.value) }} type='text' id='city' name='city' title='city' />
                        </p>
                        <p class='field'>
                            <label for='state'>State</label>
                            <input value={state} onChange={(e) => { setState(e.target.value) }} type='text' id='state' name='state' title='state' />
                        </p>
                        <p class='field'>
                            <label for='zip_code'>Zip Code</label>
                            <input value={zipCode} onChange={(e) => { setZipCode(e.target.value) }} type='text' id='zip_code' name='zip_code' title='zip_code' />
                        </p>
                        <p class='field'>
                            <label for='email'>Email</label>
                            <input value={email} onChange={(e) => { setEmail(e.target.value) }} type='text' id='email' name='email' title='email' />
                        </p>
                        <p class='field'>
                            <label for='deposit'>Deposit</label>
                            <input value={deposit} onChange={(e) => { setDeposit(e.target.value) }} type='text' id='deposit' name='deposit' title='deposit' />
                        </p>
                        <p class='field'>
                            <label for='gifts'>Gifts</label>
                            <input value={gifts} onChange={(e) => { setGifts(e.target.value) }} type='text' id='gifts' name='gifts' title='gifts' />
                        </p>
                        <p class='field'>
                            <label for='opc'>OPC Name</label>
                            <input value={opc} onChange={(e) => { setOpc(e.target.value) }} type='text' id='opc' name='opc' title='opc' />
                        </p>
                        <p class='field'>
                            <label for='greeter'>Greeter Name</label>
                            <input value={greeter} onChange={(e) => { setGreeter(e.target.value) }} type='text' id='greeter' name='greeter' title='greeter' />
                        </p>
                        <p class='field'>
                            <label for='location_booked'>Location Booked</label>
                            <select value={locationBooked} onChange={(e) => { setLocationBooked(e.target.value) }} id='location_booked' name='location_booked' title='location_booked'>
                                <option value='Silver City'>Silver City</option>
                                <option value='Planet 13'>Planet 13</option>
                                <option value='Forum Shops'>Forum Shops</option>
                                <option value='ATV Booth'>ATV Booth</option>
                                <option value='South Outlet'>South Outlet</option>
                                <option value='Street Tour'>Street Tour</option>
                            </select>
                        </p>
                        <p class='field'>
                            <label for='notes'>Notes</label>
                            <input value={notes} onChange={(e) => { setNotes(e.target.value) }} type='text' id='notes' name='notes' title='notes' />
                        </p>
                        <br></br>
                        <br></br>
                        <br></br>
                    </div>
                </div>
                <div style={{ display: 'flex', gap: '5px' }}>
                    <input type='submit' id='do_login' value='Submit' title='Get Started' onClick={submit} />
                    <input type='submit' id='do_login' value='Clear' title='Get Started' onClick={clear} />
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
