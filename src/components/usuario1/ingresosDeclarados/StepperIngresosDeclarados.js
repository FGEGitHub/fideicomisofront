import { StepButton, Stepper, Step, Stack, Button, Box } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { useState, useEffect} from "react";
import AddDeclaraciones from "./ultimasDeclaraciones/AddDeclaraciones";
import AddBalances from "./ultimosBalances/AddBalances";
import AddPrevisionales from "./pagosPrevisionales/AddPrevisionales";

const StepperIngresosDeclarados = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [steps, setSteps] = useState([
        {label: 'Ultimos Balances', completed:false},
        {label: 'Ultimas declaraciones Juradas', completed:false},
        {label: 'Pagos Previsionales', completed:false},
      
    ]);
    const [user, setUser] = useState([''])
       
    useEffect(() => {
        
        const preba = JSON.parse( window.localStorage.getItem('loggedNoteAppUser'))
        
        setUser(preba)
    
    }, [])
    const checkDisabled = () =>{
        if (activeStep < steps.leght -1) return false
        
    }
    
    return (
        <Container sx={{my:4}}>
            <Stepper
            alternativeLabel
            nonLinear
            activeStep={activeStep}
            sx={{mb:3}}
          >
            {steps.map((step, index) => (
                <Step key={step.label} completed={step.completed}>
                    <StepButton onClick={() => setActiveStep(index)}>
                        {step.label}
                    </StepButton>
                </Step>
            ))}
                

            </Stepper>
            <Box>
                {{
                    0: <AddBalances 
                    cuil_cuit = {user.cuil_cuit}/>,
                    1: <AddDeclaraciones
                    cuil_cuit = {user.cuil_cuit }/>,
                    2: <AddPrevisionales 
                    cuil_cuit = {user.cuil_cuit}/>,

                }[activeStep]}
            </Box>
            <Stack
            direction="row"
            sx={{pt:2, pb:7, justifyContent:"space-around"}}
            >
                <Button
                
                disabled={!activeStep}
                onClick={()=>setActiveStep(activeStep=>activeStep -1)}
                >
                    Volver
                </Button>
                <Button
                disabled={checkDisabled()}
                onClick={()=>setActiveStep(activeStep=>activeStep +1)}
                >
                    Siguiente
                </Button>



            </Stack>
        </Container>
    );
};

export default StepperIngresosDeclarados;