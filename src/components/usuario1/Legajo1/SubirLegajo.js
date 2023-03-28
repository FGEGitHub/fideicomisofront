import { StepButton, Stepper, Step, Stack, Button, Box } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { useState, useEffect } from "react";
import AddFoto from "./addLegajo/AddFoto";
import AddConstanciaCuil_cuit from "./addLegajo/ConstanciaCuilCuit";
import AddAfip from "./addAfip/AddAfip";
import AddDomicilio from "./addDomicilio/AddDomicilio";
import CheckIcon from '@mui/icons-material/Check';
import DjjDatosPerso from "../declaracionesJuradas/datosPersonales/AddDatos";
import DjjCalidadPep from "../declaracionesJuradas/calidadDePersonas/AddPersonas";
import DjjOrigen from "../declaracionesJuradas/origen/AddOrigen";
import AcreditacionIngresos from "./acreditacionIngresos/AcreditacionIngresos";
import ServicioUsuario1 from "../../../services/usuario1"
import OtrasConstancias from "./otrasCosntancias/OtrasConstancias";

const SubirLegajo = () => {
    const [activeStep, setActiveStep] = useState(0);
    let [steps, setSteps] = useState([
    


    ]);

    const [user, setUser] = useState([''])
    const [completo, setCompleto] = useState()
    const [listo, setListo] = useState(false)

    useEffect(() => {


        traer()

    }, [])


    const traer = async () => {
        const preba = JSON.parse(window.localStorage.getItem('loggedNoteAppUser'))
        const completoo = await ServicioUsuario1.traercompleto(preba.cuil_cuit)
        setCompleto(completoo)
        setUser(preba)
        if (preba.razon == 'Persona') {
            setSteps([
                { label: 'Fotocopia Dni', completed: completoo[0] },
                { label: 'Constancia de CUIL/CUIT', completed: completoo[1] },
                { label: 'Acreditacion de Domicilio', completed: completoo[2] },
                { label: 'DJJ Datos Personales', completed: completoo[3] },
                { label: 'DJJ Calidad de Persona(pep)', completed: completoo[4] },
                { label: 'DJJ Origen de fondos', completed: completoo[5] },
                { label: 'Acreditacion de ingresos', completed: completoo[6] },
                { label: 'Constancias de CBU', completed: completoo[7] },
                { label: 'Otras constancias', completed: false},

            ])
        } else {
            setSteps([
                { label: 'Fotocopia Dni', completed: completoo[0] },
                { label: 'Constancia de AFIP', completed: completoo[1] },
                { label: 'Acreditacion de Domicilio', completed: completoo[2] },
                { label: 'DJJ Datos Personales', completed: completoo[3] },
                { label: 'DJJ Calidad de Persona(pep)', completed: completoo[4] },
                { label: 'DJJ Origen de fondos', completed: completoo[5] },



            ])
            
        }
        setListo(true)

    };

    const checkDisabled = () => {
        if (activeStep < steps.leght - 1) return false

    }
   



    return (
        <Container sx={{ my: 4 }}>

          {listo ?  <div>
                <Stepper
                    alternativeLabel
                    nonLinear
                    activeStep={activeStep}
                    sx={{ mb: 3 }}
                >
                    {steps.map((step, index) => (
                        <Step key={step.label} completed={step.completed}>
                            <StepButton onClick={() => setActiveStep(index)}>
                                {step.label}
                            </StepButton>
                        </Step>
                    ))}


                </Stepper>
         
                </div>: <div></div> }



            <Box>
                {{
                    0: <AddFoto
                        cuil_cuit={user.cuil_cuit}
                        enviado =  {  () => { setActiveStep(activeStep => activeStep + 1)
                        }}
                        
                        />,
                    1: <AddConstanciaCuil_cuit
                        cuil_cuit={user.cuil_cuit} 
                        enviado =  {  () => { setActiveStep(activeStep => activeStep + 1)
                        }}/>,

                    2: <AddDomicilio
                        cuil_cuit={user.cuil_cuit} 
                        enviado =  {  () => { setActiveStep(activeStep => activeStep + 1)
                        }}/>,
                    3: <DjjDatosPerso
                        cuil_cuit={user.cuil_cuit} 
                        enviado =  {  () => { setActiveStep(activeStep => activeStep + 1)
                        }}/>,

                    4: <DjjCalidadPep
                        cuil_cuit={user.cuil_cuit}
                        enviado =  {  () => { setActiveStep(activeStep => activeStep + 1)
                        }} />,
                    5: <   DjjOrigen
                        cuil_cuit={user.cuil_cuit} 
                        enviado =  {  () => { setActiveStep(activeStep => activeStep + 1)
                        }}/>,
                    6: <   AcreditacionIngresos
                        cuil_cuit={user.cuil_cuit}
                        enviado =  {  () => { setActiveStep(activeStep => activeStep + 1)
                        }} />,
                     7: <   OtrasConstancias
                        cuil_cuit={user.cuil_cuit} />,





                }[activeStep]}
            </Box>
            <Stack
                direction="row"
                sx={{ pt: 2, pb: 7, justifyContent: "space-around" }}
            >
                <Button

                    disabled={!activeStep}
                    onClick={() => setActiveStep(activeStep => activeStep - 1)}
                >
                    Volver
                </Button>
                <Button
                    disabled={checkDisabled()}
                    onClick={() => setActiveStep(activeStep => activeStep + 1)}
                >
                    Siguiente
                </Button>



            </Stack>
        </Container>
    );
};

export default SubirLegajo;