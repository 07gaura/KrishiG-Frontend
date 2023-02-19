import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Address from './Address';
import Paymentmethod from './Paymentmethod';
import {useState} from "react"
import Confirmorder from './Confirmorder';
import configData from '../../config.json'
import { Outlet, Link,useNavigate } from "react-router-dom";
const steps = ['Address', 'Payment Method', 'Confirm'];


export default function HorizontalLinearStepper() {
  const navigate = useNavigate()
  const [fullname,setFullname]=useState("")
  const [mobileno,setMobileno]=useState("")
  const [email,setEmail]=useState("")
  const [address,setAddress]=useState("")
  const [pincode,setPincode]=useState("")
  const [city,setCity]=useState("")
  const [district, setDistrict] = useState("")
  const [state,setState]=useState("")
  const [payment,setPayment]=useState(1)
  var product_id_arr = []
  var cart_storage_str= localStorage.getItem("cart_details")
  var cart_storage_obj = JSON.parse(cart_storage_str)
  for(let item of cart_storage_obj){
    product_id_arr.push(item.productId)
  }
  var raw = {
    "fullName":fullname,
    "mobileNo":mobileno,
    "emailId":email,
    "address":address,
    "pincode":pincode,
    "city":city,
    "tehsil":district,
    "state": state,
    "payment":payment,
    
};
  const onChangeFullname=(e)=>{
    setFullname(e.target.value)
  }

  const onChangeMobileno=(e)=>{
    setMobileno(e.target.value)
  }
  const onChangeEmail=(e)=>{
    setEmail(e.target.value)
  }

  const onChangeAddress = (e)=>{
    setAddress(e.target.value)
  }

  const onChangePincode=(e)=>{
    setPincode(e.target.value)
  }

  const onChangeCity=(e)=>{
    setCity(e.target.value)
  }

  const onChangeDistrict=(e)=>{
    setDistrict(e.target.value)
  }

  const onChangeState=(e)=>{
    setState(e.target.value)
  }

  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  const calc_amount=()=>{
    let amount=0;
    for(let item of cart_storage_obj){
      amount=amount+item.actualPrice*item.quantity
      
    }
    return amount
  }
  const placeOrder=async()=>{
    var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw_body = JSON.stringify({
        "userId":1,
        "customerReqDto": raw,
        "paymentReqDto":{
          "paymentType":"cash on delivery"
        },
        "productsId":product_id_arr,
        "totalPrice":calc_amount()
    });

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw_body,
        redirect: 'follow',
      };
      const url = "http://"+configData.spring_api+":"+configData.port+"/order/book"
      const data = await fetch(url, requestOptions)
                   .then(response => response.text())
                   .catch(error => console.log('error', error));
      //console.log(data)
      navigate('/order_placed?order_id='+data,{replace:true})
  }
  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep} >
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
        //   if (isStepOptional(index)) {
        //     labelProps.optional = (
        //       <Typography variant="caption">Optional</Typography>
        //     );
        //   }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps} >
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
            
          {/* <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography> */}
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
            {activeStep===0&&<Address 
              fullname={fullname}
              mobileno={mobileno}
              email={email}
              address={address}
              pincode={pincode}
              city={city}
              district={district}
              state={state}
              onChangeFullname={onChangeFullname}
              onChangeEmail={onChangeEmail}
              onChangeMobileno={onChangeMobileno}
              onChangeAddress={onChangeAddress}
              onChangeCity={onChangeCity}
              onChangeDistrict={onChangeDistrict}
              onChangePincode={onChangePincode}
              onChangeState={onChangeState}
            />}
            {activeStep===1&&<Paymentmethod raw={raw}/>}
            {activeStep===2&&<Confirmorder raw={raw} calc_amount={calc_amount}/>}
          {/* <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography> */}
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            
            {activeStep === steps.length - 1&&<Button onClick={placeOrder}>Finish</Button>}
            {activeStep != steps.length - 1&&<Button onClick={handleNext}>Next</Button>}
            {/* <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button> */}
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}