import * as React from 'react';
import { useParams } from "react-router-dom"
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState, useEffect } from "react";
import servicioNivel3 from '../../../services/nivel3'
import servicioAdmin from '../../../services/Administracion'
import MUIDataTable from "mui-datatables";
import EditIcon from "@material-ui/icons/Edit";
import SearchIcon from '@mui/icons-material/Search';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

export default function Ingresos() {
    let params = useParams()


    const [usuarios, setUsuarios] = useState([]);





    useEffect(() => {
        traer()
    }, [])
    const traer = async () => {
 console.log('Historial')
        const historial = await servicioNivel3.traerUsuarios()
       
  
        setUsuarios(historial)
        // 

    };
    const borrar = async (cuil_cuit) => {
        
        const rta = await servicioAdmin.borrarusuario(cuil_cuit)
        alert(rta)
        traer()
    }

    function CutomButtonsRenderer(dataIndex, rowIndex, data, onClick) {
        return (
          <>
            <EditIcon
           
              style={{ marginRight: "10px", cursor: "pointer" }}
            />
             <SearchIcon
            
              style={{ marginRight: "10px", cursor: "pointer" }}
            />

            <DeleteForeverIcon   onClick={() =>  borrar(usuarios[dataIndex].cuil_cuit)}
            
            />

           
          </>
        );
      }
    const columns = [
        {
            name: "cuil_cuit",
            label: "cuil_cuit",

        },
        {
            name: "nombre",
            label: "nombre",
        },
        {
            name: "nivel",
            label: "nivel",

        },


        {
            name: "Actions",
            options: {
                customBodyRenderLite: (dataIndex, rowIndex) =>
                    CutomButtonsRenderer(
                        dataIndex,
                        rowIndex,
                        // overbookingData,
                        // handleEditOpen
                    )
            }

        },


    ];



    return (
        <div>

 
                <MUIDataTable

                    title={"Lista de usuarios"}
                    data={usuarios}
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
    );
}
