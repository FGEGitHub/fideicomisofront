import { useState, useEffect } from "react";
import MUIDataTable from "mui-datatables";
import axios from "axios";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
const ListaAws = () => {
    //1 - configuramos Los hooks
    const navigate = useNavigate();
    const [products, setProducts] = useState([])
    const [act, setAct] = useState(false)



    //2 - fcion para mostrar los datos con axios
    const endpoint = "http://localhost:4000/usuario1/all-files"


    const getData = async () => {
        await axios.get(endpoint).then((response) => {
            const data = response.data
            console.log(data)
            setProducts(data)
        })
    }



    useEffect(() => {
        getData()
    }, [])


    /* const downloadFile = async (index) => {
        const filename = (products[index].key)
    
        const link = await axios.get(`http://localhost:8080/get-object-url/`+filename).then(res => {
            
        } */

        async function download(index, rowIndex, data) {
            const filename = (products[index].key)
          
           
           
            const  link = await axios.get(`http://localhost:4000/usuario1/get-object-url/` + (filename))
            console.log(link.data)
            const etc =  link.data
            window.open(link.data)
      
            setAct(true)

        }


     function downloadFile(index, rowIndex, data) {

        /* const filename = (products[index].key)
        console.log(filename)
        const link = await axios.get(`http://localhost:4000/usuario1/get-object-url/` + filename)
        console.log(link.data)
        setAct(true) */
        return (
            <>
                
                  <Button
                        onClick={() => download(index)}
                    >Boton</Button> 


            </>
        );
    }






    //3 - Definimos las columns
    const columns = [
        {
            name: "key",
            label: "KEY"

        },
        {
            name: "size",
            label: "TAMAÑO"
        },
        {
            name: "descargar",
            options: {
                customBodyRenderLite: (index, getData, rowindex) =>
                    downloadFile(
                        index,
                        rowindex,
                        getData,
                        // overbookingData,
                        // handleEditOpen
                    )
            },
        }
    ]
    //4 - renderizamos la datatable
    return (
        <div>
            <MUIDataTable
                title={"Documentacion del Cliente"}
                data={products}
                columns={columns}
            />



        </div>
    )

}


export default ListaAws;