import { useParams } from "react-router-dom"
import servicioPagosInusuales from '../../services/pagosInusuales'
import React, { useEffect, useState, Fragment } from "react";
import NativeSelect from '@mui/material/NativeSelect';
import Button from '@mui/material/Button';
import MUIDataTable from "mui-datatables";
import TextField from '@mui/material/TextField';
import { useNavigate } from "react-router-dom";
import InputLabel from '@mui/material/InputLabel';

const MensualInusuales = (props) => {
    let params = useParams()
    const [FormFecha, setFormFecha] = useState({
 
        
    })
    const navigate = useNavigate();

    const [pagos, setPagos] = useState([''])
 
    


    
    //////////servicioCuotas





    const buscar = async (e) => {
        e.preventDefault()
        const pagos  = await servicioPagosInusuales.buscar(FormFecha)
      
        setPagos(pagos)




    }

    const columns = [
        {
            name: "mes",
            label: "Mes",

        },
        {
            name: "anio",
            label: "Año",

        },

        {
            name: "cuil_cuit",
            label: "Cuil/Cuit",
        },
        {
            name: "monto",
            label: "Monto",

        },
        {
            name: "Nombre",
            label: "Nombre/Razon",

        },
        {
            name: "id_pago",
            label: "Codigo de pago",

        },
        {
            name: "domicilio",
            label: "Direccion",

        },
      





    ];

    const handleChange = (e) => {
        buscar()
        setFormFecha({ ...FormFecha, [e.target.name]: e.target.value })
    }

   

    return (

        <Fragment>
             <form onSubmit={buscar}>
                          <InputLabel  variant="standard" htmlFor="uncontrolled-native">
                           Mes
                        </InputLabel>
                        <NativeSelect
                            defaultValue={30}
                            onChange={handleChange}
                            inputProps={{
                                name: 'mes',
                                id: 'uncontrolled-native',
                               
                            }}
                        >   <option  value={'1'}>Enero</option>
                            <option   value={'2'}>Febrero</option>
                            <option  value={'3'}>Marzo</option>
                            <option  value={'4'}>Abril</option>
                            <option   value={'5'}>Mayo</option>
                            <option  value={'6'}>Junio</option>
                            <option  value={'7'}>Julio</option>
                            <option   value={'8'}>Agosto</option>
                            <option  value={'9'}>Septiembre</option>
                            <option  value={'10'}>Octubre</option>
                            <option   value={'11'}>Noviembre</option>
                            <option  value={'12'}>Diciembre</option>
                      
                         
                        </NativeSelect> 
                        <InputLabel  variant="standard" htmlFor="uncontrolled-native">
                           Año
                        </InputLabel>
                        <NativeSelect
                            defaultValue={30}
                            onChange={handleChange}
                            inputProps={{
                                name: 'anio',
                                id: 'uncontrolled-native',
                               
                            }}
                        >   <option  value={'2015'}>2015</option>
                            <option   value={'2016'}>2016</option>
                            <option  value={'2017'}>2017</option>
                            <option   value={'2018'}>2018</option>
                            <option  value={'2019'}>2019</option>
                            <option   value={'2020'}>2020</option>
                            <option  value={'2021'}>2021</option>
                            <option  value={'2022'}>2022</option>
                            <option  value={'2023'}>2023</option>
                        </NativeSelect> 
                        

                        <Button type="submit">Enviar</Button>

                    </form>


            <div>
                <div>

                    <MUIDataTable
                        title={"Lista de Pagos Inusuales"}
                        data={pagos}
                        columns={columns}
                        actions={[
                            {
                                icon: 'save',
                                tooltip: 'Save User',
                                onClick: (event, rowData) => alert("You saved " + rowData.name)
                            }
                        ]}



                    />
                </div>
            </div>
        </Fragment>

    )


}
export default MensualInusuales