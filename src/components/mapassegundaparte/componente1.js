import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, GeoJSON, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./MapaConCapas.css";
import parcasLogo from "../../Assets/marcas.png"; // 
import L from "leaflet";
import serviciolotes from "../../services/lotes"; // A
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
        "planespecial1": false,
        "planespecial2": false,
        "planespecial3": false,
        "planespecial4": false,
        "planespecial5": false
    });

    const [geojsonData, setGeojsonData] = useState({});
    const [modalAbierto, setModalAbierto] = useState(false);
    const [texto, setTexto] = useState("");
    const [idSeleccionado, setIdSeleccionado] = useState(null);
    const [nombreCapaSeleccionada, setNombreCapaSeleccionada] = useState("");
    const [centroSeleccionado, setCentroSeleccionado] = useState(null);
    const [poligonosGuardados, setPoligonosGuardados] = useState([]);
    const idsDesdeBase = (poligonosGuardados || []).map((p) => p.id_mapa);
    const [mapa, setMapa] = useState(null);
    const [verReferencias, setVerReferencias] = useState(true);

    // Carga inicial de datos
    useEffect(() => {
        serviciolotes.poligonosguardados()
            .then(data => {
                console.log("Polígonos guardados:", data); // 👈 Verifica que tengan campo 'id'
                setPoligonosGuardados(data);
            })
            .catch(console.error);
    }, []);


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
            "planespecial1", "planespecial2", "planespecial3",
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
    const handleFeatureClick = (e) => {
        const id = e.target.feature.properties?.id || null;
        const layer = e.target;
        const center = layer.getBounds().getCenter();

        const nombreCapa = Object.entries(geojsonData).find(([_, data]) =>
            data.features.includes(e.target.feature)
        )?.[0] || "Desconocido";

        if (id) {
            // Buscar si el ID coincide con algún dato en la base
            const datosBase = poligonosGuardados.find(p => p.id === id);

            if (datosBase) {
                console.log("Datos desde la base:", datosBase);
                // podés guardar esto también en un estado para mostrarlo
            }

            setIdSeleccionado(id);
            setCentroSeleccionado(center);
            setNombreCapaSeleccionada(nombreCapa);
            setModalAbierto(true);
        }
    };


    const InstanciaDelMapa = ({ setMapa }) => {
        const map = useMap();

        useEffect(() => {
            setMapa(map);
        }, [map, setMapa]);

        return null;
    };

    const onEachFeature = (feature, layer) => {
        layer.on({
            click: handleFeatureClick
        });
    };

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
    const EtiquetasPoligonos = ({
        geojsonData,
        poligonosGuardados,
        capasActivas,
        subCapasActivas,
        mostrarEtiquetas
    }) => {
        if (!mostrarEtiquetas) return null;
        return (
            <>
                {Object.entries(geojsonData).map(([nombreCapa, geojson]) => {
                    // Verificamos si está activa la capa principal o subcapa
                    const esSubcapa = nombreCapa.startsWith("planespecial");
                    const estaActiva = esSubcapa
                        ? subCapasActivas[nombreCapa]
                        : capasActivas[nombreCapa];

                    if (!estaActiva) return null;

                    return geojson?.features?.map((feature, i) => {
                        const id = feature.properties?.id;
                        const poligonoDB = poligonosGuardados.find(p => p.id_mapa === id);

                        if (!poligonoDB || !feature.geometry) return null;

                        try {
                            const getCentroide = (coordinates) => {
                                let totalLat = 0;
                                let totalLng = 0;
                                let count = 0;

                                coordinates[0].forEach(([lng, lat]) => {
                                    totalLat += lat;
                                    totalLng += lng;
                                    count++;
                                });

                                return {
                                    lat: totalLat / count,
                                    lng: totalLng / count,
                                };
                            };

                            const coords = feature.geometry?.coordinates;
                            if (!coords || !Array.isArray(coords[0])) return null;

                            const center = getCentroideAproximado(feature.geometry);
                            if (!center) return null;
                            return (
                                <Marker
                                    key={`etiqueta-${nombreCapa}-${id}`}
                                    position={center}
                                    icon={L.divIcon({
                                        className: 'texto-poligono',
                                        html: `<div style="background:white;padding:2px 4px;border-radius:4px;font-size:12px;font-weight:bold;">${poligonoDB.dato1}</div>`,
                                    })}
                                />
                            );
                        } catch (error) {
                            console.error("Error al calcular centro:", error);
                            return null;
                        }
                    });
                })}
            </>
        );
    };

    const getCentroideAproximado = (geometry) => {
        try {
            let puntos = [];

            if (geometry.type === "Polygon") {
                puntos = geometry.coordinates[0]; // primer anillo exterior
            } else if (geometry.type === "MultiPolygon") {
                puntos = geometry.coordinates[0][0]; // primer polígono, primer anillo
            } else {
                return null;
            }

            let totalLat = 0;
            let totalLng = 0;
            let count = 0;

            for (const [lng, lat] of puntos) {
                if (typeof lat !== "number" || typeof lng !== "number") continue;
                totalLat += lat;
                totalLng += lng;
                count++;
            }

            if (count === 0) return null;

            return {
                lat: totalLat / count,
                lng: totalLng / count,
            };
        } catch (err) {
            console.error("Error calculando centroide:", err);
            return null;
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
                <hr />
                <div className="capa-principal">
                    <input
                        type="checkbox"
                        checked={verReferencias}
                        onChange={() => setVerReferencias(prev => !prev)}
                    />
                    <label><strong>Ver referencias</strong></label>
                </div>
            </div>

            <MapContainer
                center={[-27.5198, -58.8144]}
                zoom={14}
                style={{ height: "100vh", width: "100%" }}
            >

                {/* etiqueta que marca el texto de fondo de los poligonos */}
                <EtiquetasPoligonos
                    geojsonData={geojsonData}
                    poligonosGuardados={poligonosGuardados}
                    capasActivas={capasActivas}
                    subCapasActivas={subCapasActivas}
                    mostrarEtiquetas={verReferencias}
                />


                <InstanciaDelMapa setMapa={setMapa} />
                <TileLayer
                    attribution='&copy; <a href="https://fdsantacatalina.ciudaddecorrientes.gov.ar/"> Fideicomiso Santa Catalina</a> Sistemas'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {poligonosGuardados.map((p, index) => {
                    if (typeof p.lat !== "number" || typeof p.lng !== "number") return null;

                    return (
                        <Marker
                            key={index}
                            position={[p.lat, p.lng]}
                            icon={L.divIcon({
                                className: 'texto-poligono',
                                html: `<div style="background:white;padding:2px;border-radius:4px;">${p.dato1}</div>`,
                            })}
                        />
                    );
                })}



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
                        onEachFeature={onEachFeature}
                    />
                )}

                {/* Renderizar Planes Especiales */}
                {Object.entries(subCapasActivas).map(([nombre, activa]) => (
                    activa && geojsonData[nombre] && (
                        <GeoJSON
                            key={nombre}
                            data={geojsonData[nombre]}
                            style={(feature) => {
                                const id = feature.properties?.id;
                                const existeEnBase = idsDesdeBase.includes(id);

                                return {
                                    fillColor: existeEnBase ? "red" : "blue",
                                    weight: 1,
                                    opacity: 1,
                                    color: "black",
                                    fillOpacity: 0.5,
                                };
                            }}
                            eventHandlers={{
                                click: handleFeatureClick,
                            }}
                            onEachFeature={onEachFeature}
                        />
                    )
                ))}

                {/* Renderizar Barrios */}
                {capasActivas["Barrios"] && geojsonData["Barrios"] && (
                    <GeoJSON
                        key="Barrios"
                        data={geojsonData["Barrios"]}
                        style={(feature) => {
                            const id = feature.properties?.id;
                            const existeEnBase = idsDesdeBase.includes(id);

                            return {
                                fillColor: existeEnBase ? "red" : "blue",
                                weight: 1,
                                opacity: 1,
                                color: "black",
                                fillOpacity: 0.5,
                            };
                        }}
                        eventHandlers={{
                            click: handleFeatureClick,
                        }}
                        onEachFeature={onEachFeature}
                    />
                )}

                {/* Renderizar Planificación Sección Sur */}
                {capasActivas["Planificación Sección Sur"] && geojsonData["Planificación Sección Sur"] && (
                    <GeoJSON
                        key="Planificación Sección Sur"
                        data={geojsonData["Planificación Sección Sur"]}
                        style={(feature) => {
                            const id = feature.properties?.id;
                            const existeEnBase = idsDesdeBase.includes(id);

                            return {
                                fillColor: existeEnBase ? "red" : "blue",
                                weight: 1,
                                opacity: 1,
                                color: "black",
                                fillOpacity: 0.5,
                            };
                        }}
                        eventHandlers={{
                            click: handleFeatureClick,
                        }}
                        onEachFeature={onEachFeature}
                    />
                )}

                {/* Renderizar Zonificación Sta Catalina */}
                {capasActivas["Zonificación Sta Catalina"] && geojsonData["Zonificación Sta Catalina"] && (
                    <GeoJSON
                        key="Zonificación Sta Catalina"
                        data={geojsonData["Zonificación Sta Catalina"]}
                        style={(feature) => {
                            const id = feature.properties?.id;
                            const existeEnBase = idsDesdeBase.includes(id);

                            return {
                                fillColor: existeEnBase ? "red" : "blue",
                                weight: 1,
                                opacity: 1,
                                color: "black",
                                fillOpacity: 0.5,
                            };
                        }}
                        eventHandlers={{
                            click: handleFeatureClick,
                        }}
                        onEachFeature={onEachFeature}
                    />
                )}

                {/* Renderizar ZRU Predios La Caja */}
                {capasActivas["ZRU Predios La Caja"] && geojsonData["ZRU Predios La Caja"] && (
                    <GeoJSON
                        key="ZRU Predios La Caja"
                        data={geojsonData["ZRU Predios La Caja"]}
                        style={(feature) => {
                            const id = feature.properties?.id;
                            const existeEnBase = idsDesdeBase.includes(id);

                            return {
                                fillColor: existeEnBase ? "red" : "blue",
                                weight: 1,
                                opacity: 1,
                                color: "black",
                                fillOpacity: 0.5,
                            };
                        }}
                        eventHandlers={{
                            click: handleFeatureClick,
                        }}
                        onEachFeature={onEachFeature}
                    />
                )}
            </MapContainer>
            {modalAbierto && (
                <div className="modal-overlay" onClick={() => setModalAbierto(false)}>
                    <div className="modal-contenido" onClick={(e) => e.stopPropagation()}>
                        <h3>Ingrese un dato para la zona ID {idSeleccionado}</h3>
                        <input
                            type="text"
                            value={texto}
                            onChange={(e) => setTexto(e.target.value)}
                        />
                        <button onClick={async () => {
                            await serviciolotes.guardarpoligono({ id_mapa: idSeleccionado, dato1: texto, capa: nombreCapaSeleccionada });
                            const nuevos = await serviciolotes.poligonosguardados();
                            setPoligonosGuardados(nuevos);
                            setModalAbierto(false);
                            setTexto("");
                        }}>Guardar</button>
                        <button onClick={() => setModalAbierto(false)}>Cancelar</button>
                    </div>
                </div>
            )}

        </div>
    );
};

export default MapaConCapas;