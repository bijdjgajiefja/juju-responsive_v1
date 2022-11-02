import './Home.css'
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { doLogout, getCurrentUserDetail, isLoggedIn } from '../auth';
import { Button } from 'reactstrap';

const Home = () => {
  let navigate = useNavigate()
  const [login, setLogin] = useState(false)
  const [user, setUser] = useState()


  useEffect(()=>{

    setLogin(isLoggedIn())
    setUser(getCurrentUserDetail())

  }, [login])

  const logout = () => {
    doLogout(() => {
        //logged out
        setLogin(false)
        navigate("/")
    })
}

    return(
        <div>
    <section class="header">
      <div>
        <img src="/images/jujupasal.png" alt="jujupasal logo" />
      </div>

      <div class="powered-by">
        <a href="#">
          <p>Powered By:</p>
          <img src="/images/clickpay.png" alt="clickpay" />
        </a>
      </div>
      <div class="welcome">
        
               {
          login && (
            <>
            <p>Welcome,</p>
            <b>{user.email}</b>
            <Button className="button Logout red" onClick={logout}>Logout</Button>
            
            </>
            
          )
        }

{
          !login && (
            <>
            <Button className="button Logout red">Login</Button>

            </>
            
          )
        }
        
      </div>
    </section>

    <section class="second-section">
      <div class="payment-method">
        <div>
          <Link to="pay-now">Pay Now</Link>
        </div>
        <div>
          <Link to="auto-pay">Auto Pay</Link>
        </div>
        <div>
          <a href="#">Cash Payment</a>
        </div>
      </div>
      <div class="right-part-float">
        <div class="need-help">
          <a href="#">Need Help?</a>
        </div>
        <div class="account">
        
          <select name="Account-info" id="Account-info">
            <option value="rigatoni">Account</option>
            <option value="dave">My Profile</option>
            <option value="Payment History">Payment History</option>
            <option value="Payment Options">Payment Options</option>
            <option value="Add/Remove Unit">Add/Remove Unit</option>
          </select>
        </div>
      </div>
    </section>

    <Outlet />

     
    <footer>
      <div class="copyright">
        Copyright © 2022 ClickPay.All rights reserved.
      </div>
      <div class="credit-card-pay">
        <img src="/images/credit-card.png" alt="credit-card" />
        <img src="/images/credit-card.png" alt="credit-card" />
        <img src="/images/credit-card.png" alt="credit-card" />
        <img src="/images/credit-card.png" alt="credit-card" />
        <img src="/images/credit-card.png" alt="credit-card" />
      </div>
      <div class="chat-message">
        <img src="/images/chat.svg" alt="chat-message" class="svg-foto medium" />
      </div>
    </footer>
    </div>
    )
}

export default Home;