import './PayNow.css'

const PayNow = () => {
    return(
        <div>
 
    <section class="bill-area">
      <div>
        <p>72nd Street<br />Jackson Heights, NY 11372</p>
      </div>
      <div>
        <a href="#"
          ><img
            src="/images/refresh.svg"
            alt="loading-svg"
            class="svg-foto"
          />Setup Auto Pay</a
        >
      </div>
      <div>
        <a href="#"
          ><img src="/images/doc.svg" alt="doc-svg" class="svg-foto" />View
          bill</a
        >
      </div>

      <div class="first-part">
        <div>
          <p>Edit Change</p>
        </div>
        <div>
          <p>Last Payment</p>
        </div>
      </div>
      <div class="second-part">
        <div>
          <p>Amount Due</p>
        </div>
        <div>
          <p>Enter Payment Amount</p>
          <input type="number" />
          <input type="button" value="Apply" class="button" />
          <span>$</span>
          <date>7/31/2022</date>
        </div>
      </div>

      <div class="bill-print">
        <img src="/images/doc.svg" alt="doc-foto" class="svg-foto" />
        <p>
          You are currently receiving Paperless E-Bill &nbsp;&nbsp;<a href="#"
            >Edit</a
          >
        </p>
      </div>
      <button class="button continue">Continue</button>
    </section>

   
    </div>
    )
}

export default PayNow;