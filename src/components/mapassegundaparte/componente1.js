import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./MapaConCapas.css";

const MapaConCapas = () => {
    const [capasActivas, setCapasActivas] = useState({
        "Manzanas": false,
        "Plan Especial": false,
        "Barrios": false
    });

    const [subCapasActivas, setSubCapasActivas] = useState({
        "planespecial": false,
        "planespecial2": false,
        "planespecial3": false,
        "planespecial4": false,
        "planespecial5": false
    });

    const [geojsonData, setGeojsonData] = useState({});

    // Carga inicial de datos
    useEffect(() => {
        // Cargar manzanas
        fetch("/manazanasmates.geojson")
            .then((r) => r.json())
            .then((data) => {
                setGeojsonData(prev => ({ ...prev, "Manzanas": data }));
            })
            .catch(console.error);

        // Cargar planes especiales
        const planesEspeciales = [
            "planespecial", "planespecial2", "planespecial3",
            "planespecial4", "planespecial5"
        ];

        planesEspeciales.forEach(plan => {
            fetch(`/${plan}.geojson`)
                .then((r) => r.json())
                .then((data) => {
                    setGeojsonData(prev => ({ ...prev, [plan]: data }));
                })
                .catch(error => console.error(`Error cargando ${plan}:`, error));
        });

        // Cargar barrios
        fetch("/calles.geojson")
            .then((r) => r.json())
            .then((data) => {
                setGeojsonData(prev => ({ ...prev, "Barrios": data }));
            })
            .catch(console.error);
    }, []);

    const toggleCapaPrincipal = (nombre) => {
        const nuevoEstado = !capasActivas[nombre];
        setCapasActivas(prev => ({ ...prev, [nombre]: nuevoEstado }));

        // Si es Plan Especial, activar/desactivar todas sus subcapas
        if (nombre === "Plan Especial") {
            const nuevoEstadoSubcapas = {};
            Object.keys(subCapasActivas).forEach(key => {
                nuevoEstadoSubcapas[key] = nuevoEstado;
            });
            setSubCapasActivas(nuevoEstadoSubcapas);
        }
    };

    const toggleSubCapa = (nombre) => {
        setSubCapasActivas(prev => ({ ...prev, [nombre]: !prev[nombre] }));

        // Si todas las subcapas están activas, activar la capa principal
        if (Object.values(subCapasActivas).every(val => val)) {
            setCapasActivas(prev => ({ ...prev, "Plan Especial": true }));
        }
    };

    return (
        <div className="mapa-contenedor">
            <div className="panel-lateral">
                <h3>Capas disponibles</h3>

                {/* Capa Manzanas */}
                <div className="capa-principal">
                    <input
                        type="checkbox"
                        checked={!!capasActivas["Manzanas"]}
                        onChange={() => toggleCapaPrincipal("Manzanas")}
                    />
                    <label><strong>Manzanas</strong></label>
                </div>

                {/* Capa Plan Especial */}
                <div className="capa-principal">
                    <input
                        type="checkbox"
                        checked={!!capasActivas["Plan Especial"]}
                        onChange={() => toggleCapaPrincipal("Plan Especial")}
                    />
                    <label><strong>Plan Especial</strong></label>

                    {capasActivas["Plan Especial"] && (
                        <div className="subcapas">
                            {[1, 2, 3, 4, 5].map(num => (
                                <div key={`planespecial${num}`}>
                                    <input
                                        type="checkbox"
                                        checked={!!subCapasActivas[`planespecial${num > 1 ? num : ''}`]}
                                        onChange={() => toggleSubCapa(`planespecial${num > 1 ? num : ''}`)}
                                    />
                                    <label>Plan Especial {num > 1 ? num : ''}</label>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Capa Barrios */}
                <div className="capa-principal">
                    <input
                        type="checkbox"
                        checked={!!capasActivas["Barrios"]}
                        onChange={() => toggleCapaPrincipal("Barrios")}
                    />
                    <label><strong>Calles</strong></label>
                </div>
            </div>

            <MapContainer
                center={[-27.4698, -58.8344]}
                zoom={13}
                style={{ height: "100vh", width: "100%" }}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {/* Renderizar Manzanas */}
                {capasActivas["Manzanas"] && geojsonData["Manzanas"] && (
                    <GeoJSON
                        key="Manzanas"
                        data={geojsonData["Manzanas"]}
                        style={{
                            fillColor: "transparent",  // Sin relleno
                            color: "blue",            // Color del borde
                            weight: 2,                // Grosor del borde
                            opacity: 1,               // Opacidad del borde
                            fillOpacity: 0            // Opacidad del relleno (0 = transparente)
                        }}
                    />
                )}

                {/* Renderizar Planes Especiales */}
                {Object.entries(subCapasActivas).map(([nombre, activa]) => (
                    activa && geojsonData[nombre] && (
                        <GeoJSON
                            key={nombre}
                            data={geojsonData[nombre]}
                            style={{
                                color: "red",
                                weight: 2,
                                fillOpacity: 0.5
                            }}
                        />
                    )
                ))}

                {/* Renderizar Barrios */}
                {capasActivas["Barrios"] && geojsonData["Barrios"] && (
                    <GeoJSON
                        key="Barrios"
                        data={geojsonData["Barrios"]}
                        style={{
                            color: "green",
                            weight: 3,
                            dashArray: '5, 5'
                        }}
                    />
                )}
            </MapContainer>
        </div>
    );
};

export default MapaConCapas;