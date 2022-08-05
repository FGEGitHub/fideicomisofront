import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';



const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function CustomizedAccordions() {
  const navigate = useNavigate();
const irContacto = () => {
  navigate("/usuario/contacto");
}
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Typography  variant="h6" gutterBottom>
        Preguntas frecuentes
      </Typography>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
        <Typography>¿Que es Fideicomiso Santa Catalina?</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography>
          El predio de Santa Catalina se ubica al suroeste de la ciudad, en una zona de singular valor paisajístico,
          y allí están planificadas obras de viviendas sociales y residenciales, bancos, edificios públicos,
          instituciones estatales y privadas, plazas, paseos, avenidas, boulevares, redes eléctricas subterráneas, tendido de redes de agua y cloacas y un Parque Industrial. 
          Muchas de estas obras ya están en ejecución con fondos de municipales, provinciales y nacionales.
          </Typography>
        </AccordionDetails>
      </Accordion>
      
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>¿Como accedo a mi usuario web?</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography>
          El usuario web brindara informacion de pagos y acceso para administracion de datos personales. 
          Para obtener su usuario, el cliente deberá dirigirse personalmente 
          por calle 25 de Mayo 1476, donde tiene su sede la oficina administrativa del Fideicomiso Santa Catalina.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>¿Como inicio mi sesión?</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography>
          En la esquina superior derecha encontraras el boton "Ingresar". Alli deberas completar con los datos obtenidos a traves del tramite personal en Fideicomiso Santa Catalina.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
        <Typography>¿Como me informo sobre mis cuotas pagadas y a pagar?</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography>
          Una vez iniciada tu sesion, dirigirse a "Consulta tus cuotas" en el menu principal. Ahi encontraras tus cuotas por pagar y las ya abonadas con anterioridad.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
        <Typography> Ya hice el pago de mis cuotas ¿Como lo informo?</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography>
          Para informar un pago deberas hacer click en "Informar Transferencia" en el menu principal.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
        <AccordionSummary aria-controls="panel6d-content" id="panel6d-header">
        <Typography>Tengo otra consulta</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography>
          Podes contactarte con nosotros desde <Button onClick={irContacto} variant="text">Contacto</Button>

          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
