import { StepButton, Stepper, Step, Stack, Button, Box } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { useState, useEffect} from "react";
import AddDatos from "./datosPersonales/AddDatos";
import AddPersonas from "./calidadDePersonas/AddPersonas";
import AddOrigen from "./origen/AddOrigen";
const StepperDJ = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [steps, setSteps] = useState([
        {label: 'Datos Personales', completed:false},
        {label: 'Calidad de Persona', completed:false},
        {label: 'Origen', completed:false},
      
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
                    0: <AddDatos
                    cuil_cuit = {user.cuil_cuit} />,
                    1: <AddPersonas 
                    cuil_cuit = {user.cuil_cuit}/>,
                    2: <AddOrigen 
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

export default StepperDJ;