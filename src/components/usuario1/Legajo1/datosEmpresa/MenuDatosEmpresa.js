import { StepButton, Stepper, Step, Stack, Button, Box } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { useState, useEffect } from "react";
import UltimosBal from "../../ingresosDeclarados/ultimosBalances/AddBalances";
import DjIva from "../../ingresosDeclarados/ultimasDeclaraciones/AddDeclaraciones";
import PagosPrev from "../../ingresosDeclarados/pagosPrevisionales/AddPrevisionales";
import AddEstatuto from "../addEstatuto/AddEstatuto";
import AddActa from "../addActa/AddActa";
import IIBB from "../iibb/IIBB";
import ReferenciasComerciales from "../referenciascomerciales/ReferenciasComerciale";
import ServicioUsuario1 from "../../../../services/usuario1"


const MenuDatosEmpresa = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [steps, setSteps] = useState([
        { label: 'Ultimos Balances', completed: false },
        { label: 'DJ IVA', completed: false },
        { label: 'Pagos Previsionales', completed: false },
        { label: 'Estatuto Social', completed: false },
        { label: 'Acta del organo decisorio', completed: false },
        { label: 'Referencias comerciales', completed: false },
        { label: 'IIBB', completed: false },



    ]);

    const [user, setUser] = useState([''])
    const [completo, setCompleto] = useState()

    useEffect(() => {
        traer()
        const preba = JSON.parse(window.localStorage.getItem('loggedNoteAppUser'))

        setUser(preba)

    }, [])
    const checkDisabled = () => {
        if (activeStep < steps.leght - 1) return false

    }

    const traer = async () => {
        const preba = JSON.parse(window.localStorage.getItem('loggedNoteAppUser'))
        const completoo = await ServicioUsuario1.traercompleto(preba.cuil_cuit)
        setCompleto(completoo)
        setUser(preba)
        if (preba.razon == 'Persona') {
            setSteps([



            ])
        } else {
            setSteps([
                { label: 'Ultimos Balances', completed: completoo[6] },
                { label: 'DJ IVA', completed: completoo[7] },
                { label: 'Pagos Previsionales', completed: completoo[8] },
                { label: 'Estatuto Social', completed: completoo[9] },
                { label: 'Acta del organo decisorio', completed: completoo[10] },
                { label: 'Referencias comerciales', completed: completoo[11] },
                { label: 'IIBBs', completed: false },



            ])

        }


    };




    return (
        <Container sx={{ my: 4 }}>
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
            <Box>
                {{
                    0: <UltimosBal
                        cuil_cuit={user.cuil_cuit} />,
                    1: <DjIva
                        cuil_cuit={user.cuil_cuit}
                    />,
                    2: <PagosPrev
                        cuil_cuit={user.cuil_cuit} />,
                    3: <AddEstatuto
                        cuil_cuit={user.cuil_cuit} />,
                    4: <AddActa
                        cuil_cuit={user.cuil_cuit} />,
                    5: <ReferenciasComerciales
                        cuil_cuit={user.cuil_cuit} />,
                   6: <ReferenciasComerciales
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

export default MenuDatosEmpresa;