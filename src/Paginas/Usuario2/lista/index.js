import React, { useState, useEffect } from "react";
// import DeleteModal from "./DeleteModal";
import { useNavigate } from "react-router-dom";
import { Button, Card, CardContent, Typography } from "@mui/material";
import usuariosService from '../../../services/usuarios'
import  useNoti from '../../../hooks/useNoti'

const Lista = () => {
    const [usuarios, setUsuarios] = useState([]);
    const navigate = useNavigate();

    const Leer = async () => {
     
        try {
            const data = await usuariosService.usuarios({

            })
            console.log(data)
            setUsuarios(data)

            
        } catch (error) {
            console.error(error);
            console.log('error ')
        }
        ;
    }
    //




    useEffect(() => {
        Leer();
 
    }, []);

    return (
        <>
            
           
            {usuarios.map((usuario) => (
                <Card
                    style={{
                        marginBottom: ".7rem",
                        backgroundColor: "#1e272e",
                    }}
                >
                    <CardContent
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                        }}
                    >
                        <div
                            style={{
                                color: "white",
                            }}
                        >
                            <Typography>{usuario.cuil_cuit}</Typography>
                            <Typography>{usuario.id}</Typography>
                        </div>
                        <div>
                            <Button
                                variant="contained"
                                color="inherit"
                                onClick={() => navigate(`/tasks/${usuario.id}/edit`)}
                            >
                                Edit
                            </Button>
                            <Button
                                variant="contained"
                                color="warning"

                                style={{ marginLeft: ".5rem" }}
                            >
                                Delete
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            ))}
        </>
    );
};

export default Lista;