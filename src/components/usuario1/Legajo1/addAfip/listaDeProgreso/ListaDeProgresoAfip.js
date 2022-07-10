import { ImageList } from "@mui/material";
import React from "react";
import AfipFirebase from "./AfipFirebase";

const ListaDeProgreso = ({files}) => {
    return (
        <ImageList rowHeight={250}
        sx={{
            "&.MuiImageList-root": {
                gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))!important",
        },
        }}

        >
            {files.map((file, index) => (
                <AfipFirebase key={index} file={file} />
            ))}
        </ImageList>
    );
};

export default ListaDeProgreso;