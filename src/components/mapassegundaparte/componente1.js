import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./MapaConCapas.css";
import parcasLogo from "../../Assets/marcas.png";; // Asegúrate de tener la imagen en tu directorio

const MapaConCapas = () => {
    const [capasActivas, setCapasActivas] = useState({
        "Manzanas": false,
        "Plan Especial": false,
        "Barrios": false,
        "Planificación Sección Sur": false,
        "Zonificación Sta Catalina": false,
        "ZRU Predios La Caja": false
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

        // Cargar nuevas capas
        const nuevasCapas = [
            { nombre: "Planificación Sección Sur", archivo: "planificacionseccionsur.geojson" },
            { nombre: "Zonificación Sta Catalina", archivo: "zonificacion_stacatalina.geojson" },
            { nombre: "ZRU Predios La Caja", archivo: "zru_prediosdelacaja.geojson" }
        ];

        nuevasCapas.forEach(capa => {
            fetch(`/${capa.archivo}`)
                .then((r) => r.json())
                .then((data) => {
                    setGeojsonData(prev => ({ ...prev, [capa.nombre]: data }));
                })
                .catch(error => console.error(`Error cargando ${capa.nombre}:`, error));
        });
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
                {/* Logo PARCAS */}
                <div className="logo-container">
                    <img src={parcasLogo} alt="Logo PARCAS" className="logo-parcas" />
                </div>

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

                {/* Nueva Capa: Planificación Sección Sur */}
                <div className="capa-principal">
                    <input
                        type="checkbox"
                        checked={!!capasActivas["Planificación Sección Sur"]}
                        onChange={() => toggleCapaPrincipal("Planificación Sección Sur")}
                    />
                    <label><strong>Planificación Sección Sur</strong></label>
                </div>

                {/* Nueva Capa: Zonificación Sta Catalina */}
                <div className="capa-principal">
                    <input
                        type="checkbox"
                        checked={!!capasActivas["Zonificación Sta Catalina"]}
                        onChange={() => toggleCapaPrincipal("Zonificación Sta Catalina")}
                    />
                    <label><strong>Zonificación Sta Catalina</strong></label>
                </div>

                {/* Nueva Capa: ZRU Predios La Caja */}
                <div className="capa-principal">
                    <input
                        type="checkbox"
                        checked={!!capasActivas["ZRU Predios La Caja"]}
                        onChange={() => toggleCapaPrincipal("ZRU Predios La Caja")}
                    />
                    <label><strong>ZRU Predios La Caja</strong></label>
                </div>
            </div>

            <MapContainer
                center={[-27.5198, -58.8144]}
                zoom={14}
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
                            fillColor: "transparent",
                            color: "blue",
                            weight: 2,
                            opacity: 1,
                            fillOpacity: 0
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

                {/* Renderizar Planificación Sección Sur */}
                {capasActivas["Planificación Sección Sur"] && geojsonData["Planificación Sección Sur"] && (
                    <GeoJSON
                        key="Planificación Sección Sur"
                        data={geojsonData["Planificación Sección Sur"]}
                        style={{
                            color: "purple",
                            weight: 2,
                            fillOpacity: 0.3,
                            fillColor: "violet"
                        }}
                    />
                )}

                {/* Renderizar Zonificación Sta Catalina */}
                {capasActivas["Zonificación Sta Catalina"] && geojsonData["Zonificación Sta Catalina"] && (
                    <GeoJSON
                        key="Zonificación Sta Catalina"
                        data={geojsonData["Zonificación Sta Catalina"]}
                        style={{
                            color: "orange",
                            weight: 2,
                            fillOpacity: 0.3,
                            fillColor: "yellow"
                        }}
                    />
                )}

                {/* Renderizar ZRU Predios La Caja */}
                {capasActivas["ZRU Predios La Caja"] && geojsonData["ZRU Predios La Caja"] && (
                    <GeoJSON
                        key="ZRU Predios La Caja"
                        data={geojsonData["ZRU Predios La Caja"]}
                        style={{
                            color: "brown",
                            weight: 2,
                            fillOpacity: 0.3,
                            fillColor: "tan"
                        }}
                    />
                )}
            </MapContainer>
        </div>
    );
};

export default MapaConCapas;