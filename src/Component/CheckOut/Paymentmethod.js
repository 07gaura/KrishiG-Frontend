import React from 'react'

function Paymentmethod({test}) {

  return (
    <div className='container'>
      <div className='row m-3'>
        <div className='col-12 p-2 m-1 bg-warning'>
            <input class="form-check-input text-secondary m-1" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
            <label class="form-check-label mx-1" for="flexRadioDefault2">
                Cash on Dilevery
            </label>
        </div>
        <div className='col-12 p-2 m-1 bg-warning'>
            <input class="form-check-input text-secondary m-1" type="radio" name="flexRadioDefault" id="flexRadioDefault2" disabled />
            <label class="form-check-label mx-1" for="flexRadioDefault2">
                Online Payment
            </label>
        </div>
      </div>
    </div>
  )
}

export default Paymentmethod
