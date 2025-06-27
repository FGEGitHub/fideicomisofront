import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, GeoJSON, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./MapaConCapas.css";
import parcasLogo from "../../Assets/marcas.png"; // 
import L from "leaflet";
import serviciolotes from "../../services/lotes"; // A
import { centerOfMass, pointOnFeature, booleanPointInPolygon } from '@turf/turf';
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
const opcionesSubclasificacion = [
  "C1-Corredor de densidad 1",
  "C2-Corredor de densidad 2",
  "C3-Corredor comercial, logistico y productivo",
  "AI1-Area inferior - Densidad media baja",
  "AI2-Area inferior - Densidad baja",
  "AI3-Area inferior de densidad media baja",
  "AIE-Area inferior Especial - Densidad alta",
  "AM1-Area Mixta 1 - Densidad alta",
  "AM1-Area Mixta 2 - Densidad alta",
  "AR-Area Residencial de baja densidad",
  "ARP-Area Residencial y agroproductiva complementaria",
  "CC-Corredor Comercial mixto",
  "EDR-Equipamiento Deportivo Recreativo",
  "EP-Equipamiento Publico",
  "EVP-Espacio Verde Publico",
//PLAN ESPECIAL - ETAPA 1
  "UG1-Distrito Administrativo",  //UG: UNIDADES DE GESTION
  "UG2-Areas Residenciales y Mixtas/Conjuntos Habitacionales PROCREAR, INVICO y Lotes con Serivicios de oferta municipal",
  "UG3-Areas Residenciales, Mixtas y Paseo de borde del B° PIRAYUI",
  "UG4-Areas Recreativas, Residenciales y Mixtas - Reordenamiento Urbano y Parque de Bosque Nativo",
//PLAN ESPECIAL - ETAPA 2
  "UG1-Areas Residenciales y Mixtas/Conjuntos Habitacionales del Estado",
  "UG2-Areas Residenciales y Mixtas - Parque Metropolitano",
  "UG3-Areas Mixtas y Equipamientos generales - Zona de borde costero del Rio Parana",
  "UG4-Areas de actividades productivas y logisticas, vinculadas a residencias de baja densidad",
//PLAN ESPECIAL - ETAPA 3
  "UG1-Areas Residenciales, Mixtas y Paseo de borde del Arroyo PIRAYUI",
  "UG2-Area Residencial Suburbana y de Actividades Agro productivas y Recreativas",
  "UG3-Areas de Clubes y Equipamientos Generales",
  "UG4-Reordenamiento Urbano de Asentamientos",
//PLAN ESPECIAL - ETAPA 4
  "UG1-Area Residencial Suburbana y de Usos Recreativos, Sociales y Deportivos",
  "UG2-Area Residencial Suburbana de baja densidad y Paseo Publico",
//PLAN ESPECIAL - ETAPA 5
  "UG1-Reordenamiento Urbano y lotes con servicios en zona de interes social; y Parque Lineal Ex Via FF.CC Urquiza",
  "UG2-Areas Residenciales y Mixtas, Equipamientos Generales y Parque Lineal Ex Via FF.CC Urquiza",
//PLANIFICACION SECCION SUR
  "PIT-Parque Industrial Tecnologico - FASE 1",
  "PIT-Parque Industrial Tecnologico - FASE 2",
  "PIT-Parque Industrial Tecnologico - FASE 3",
  "PLC-Planta de Liquidos Cloacales",
  "PLC-Zona Fuelle",
  "ZPA-Zona de Proteccion Ambiental-Reserva Natural Santa Catalina",
];
const coloresPorSubclasificacion = {
 "C1-Corredor de densidad 1": "#ffbc8e",
  "C2-Corredor de densidad 2": "#efc700",
  "C3-Corredor comercial, logistico y productivo": "#fca24c",
  "AI1-Area inferior - Densidad media baja": "#6d4692",
  "AI2-Area inferior - Densidad baja": "#bda7d3",
  "AI3-Area inferior de densidad media baja": "#d64ebd",
  "AIE-Area inferior Especial - Densidad alta": "#40a7e9",
  "AM1-Area Mixta 1 - Densidad alta": "#c14e4e",
  "AM1-Area Mixta 2 - Densidad alta": "#f0abab",
  "AR-Area Residencial de baja densidad": "#debf6f",
  "ARP-Area Residencial y agroproductiva complementaria": "#e4eeb1",
  "CC-Corredor Comercial mixto": "#9bcfed",
  "EDR-Equipamiento Deportivo Recreativo": "#bfd1f0",
  "EP-Equipamiento Publico": "#dededf",
  "EVP-Espacio Verde Publico": "#afd9b7",
//PLAN ESPECIAL - ETAPA 1
  "UG1-Distrito Administrativo": "#b2a792",  //UG: UNIDADES DE GESTION
  "UG2-Areas Residenciales y Mixtas/Conjuntos Habitacionales PROCREAR, INVICO y Lotes con Serivicios de oferta municipal": "#dccfb6",
  "UG3-Areas Residenciales, Mixtas y Paseo de borde del B° PIRAYUI": "#e8e1d2",
  "UG4-Areas Recreativas, Residenciales y Mixtas - Reordenamiento Urbano y Parque de Bosque Nativo": "#f5eee0",
//PLAN ESPECIAL - ETAPA 2
  "UG1-Areas Residenciales y Mixtas/Conjuntos Habitacionales del Estado": "#c89132",
  "UG2-Areas Residenciales y Mixtas - Parque Metropolitano": "#e3a53a",
  "UG3-Areas Mixtas y Equipamientos generales - Zona de borde costero del Rio Parana": "#eeba5f",
  "UG4-Areas de actividades productivas y logisticas, vinculadas a residencias de baja densidad": "#eccb78",
//PLAN ESPECIAL - ETAPA 3
  "UG1-Areas Residenciales, Mixtas y Paseo de borde del Arroyo PIRAYUI": "#8d3774",
  "UG2-Area Residencial Suburbana y de Actividades Agro productivas y Recreativas": "#b55d9b",
  "UG3-Areas de Clubes y Equipamientos Generales": "#ca7cb3",
  "UG4-Reordenamiento Urbano de Asentamientos": "#e0a3ce",
//PLAN ESPECIAL - ETAPA 4
  "UG1-Area Residencial Suburbana y de Usos Recreativos, Sociales y Deportivos": "#ee7562",
  "UG2-Area Residencial Suburbana de baja densidad y Paseo Publico": "#f6b2a7",
//PLAN ESPECIAL - ETAPA 5
  "UG1-Reordenamiento Urbano y lotes con servicios en zona de interes social; y Parque Lineal Ex Via FF.CC Urquiza": "#8a8a8a",
  "UG2-Areas Residenciales y Mixtas, Equipamientos Generales y Parque Lineal Ex Via FF.CC Urquiza": "#c2c1c1",
//PLANIFICACION SECCION SUR
  "PIT-Parque Industrial Tecnologico - FASE 1": "#95acd1",
  "PIT-Parque Industrial Tecnologico - FASE 2": "#95acd1",
  "PIT-Parque Industrial Tecnologico - FASE 3": "#95acd1",
  "PLC-Planta de Liquidos Cloacales": "#c85b01",
  "PLC-Zona Fuelle": "#f1a465",
  "ZPA-Zona de Proteccion Ambiental-Reserva Natural Santa Catalina": "#bfe3b1",
  // Default
  "": "red",
  null: "red",
  undefined: "red"
};

    const [geojsonData, setGeojsonData] = useState({});
    const [modalAbierto, setModalAbierto] = useState(false);
    const [texto, setTexto] = useState("");
    const [idSeleccionado, setIdSeleccionado] = useState(null);
    const [nombreCapaSeleccionada, setNombreCapaSeleccionada] = useState("");
    const [centroSeleccionado, setCentroSeleccionado] = useState(null);
    const [poligonosGuardados, setPoligonosGuardados] = useState([]);
    const idsDesdeBase = (poligonosGuardados || []).map((p) => p.id_mapa);
    const [mapa, setMapa] = useState(null);
    const [subclasificacion, setSubclasificacion] = useState("");
const [descripcion, setDescripcion] = useState("");
    const [verReferencias, setVerReferencias] = useState(true);
    const [subCapasSur, setSubCapasSur] = useState({
        "PIT": false,
        "PLC-C": false,
        "PLC-F": false,
        "ZPA": false
    });
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
            /*  { nombre: "Planificación Sección Sur", archivo: "planificacionsur4.geojson" }, */
            { nombre: "Zonificación Sta Catalina", archivo: "zonificacion_stacatalina.geojson" },
            { nombre: "ZRU Predios La Caja", archivo: "zru_prediosdelacaja.geojson" }
        ];
        const capasSeccionSur = [
            { nombre: "PIT", archivo: "pitfases.geojson" },
            { nombre: "PLC-C", archivo: "plc-c.geojson" },
            { nombre: "PLC-F", archivo: "plc-f.geojson" },
            { nombre: "ZPA", archivo: "zpa.geojson" }
        ];

        capasSeccionSur.forEach(capa => {
            fetch(`/${capa.archivo}`)
                .then((r) => r.json())
                .then((data) => {
                    setGeojsonData(prev => ({ ...prev, [capa.nombre]: data }));
                })
                .catch(error => console.error(`Error cargando ${capa.nombre}:`, error));
        });
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
console.log(id)
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
        if (nombre === "Planificación Sección Sur") {
            const nuevoEstadoSubcapasSur = {};
            Object.keys(subCapasSur).forEach(key => {
                nuevoEstadoSubcapasSur[key] = nuevoEstado;
            });
            setSubCapasSur(nuevoEstadoSubcapasSur);
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
        subCapasSur,
        mostrarEtiquetas
    }) => {
        if (!mostrarEtiquetas) return null;
        return (
            <>
                {Object.entries(geojsonData).map(([nombreCapa, geojson]) => {
                    // Verificamos si está activa la capa principal o subcapa
                    const esSubcapa = nombreCapa.startsWith("planespecial");
                    const esSubcapaSur = ["PIT", "PLC-C", "PLC-F", "ZPA"].includes(nombreCapa);

                    const estaActiva = esSubcapa
                        ? subCapasActivas[nombreCapa]
                        : esSubcapaSur
                            ? subCapasSur[nombreCapa]
                            : capasActivas[nombreCapa];
                    ;

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
                                        html: `<div style="
    padding: 9px 1px;
    border-radius: 4px;
    font-size: 10px;
    font-weight: bold;
    max-width: 140px;
    white-space: nowrap;
    overflow-wrap: break-word;
    text-align: center;
">
${poligonoDB.dato1}
</div>`                                    })}
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
            // 1. Intentamos usar el centroide visual
            const centroVisual = centerOfMass(geometry);
            const [lng, lat] = centroVisual.geometry.coordinates;

            // 2. Verificamos si ese punto está adentro del polígono
            const estaDentro = booleanPointInPolygon(centroVisual, geometry);

            if (estaDentro) {
                return { lat, lng };
            }

            // 3. Si está afuera, usamos pointOnFeature como fallback
            const puntoSeguro = pointOnFeature(geometry).geometry.coordinates;
            return { lat: puntoSeguro[1], lng: puntoSeguro[0] };

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
                                    <label> <input
                                        type="checkbox"
                                        checked={!!subCapasActivas[`planespecial${num >= 1 ? num : ''}`]}
                                        onChange={() => toggleSubCapa(`planespecial${num >= 1 ? num : ''}`)}
                                    />
                                        Plan Especial {num >= 1 ? num : ''}</label>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Capa Barrios */}
                <div className="capa-principal">
                    <label><input
                        type="checkbox"
                        checked={!!capasActivas["Barrios"]}
                        onChange={() => toggleCapaPrincipal("Barrios")}
                    />
                        <strong>Calles</strong></label>
                </div>

                {/* Nueva Capa: Planificación Sección Sur */}
                <div className="capa-principal">
                    <input
                        type="checkbox"
                        checked={!!capasActivas["Planificación Sección Sur"]}
                        onChange={() => toggleCapaPrincipal("Planificación Sección Sur")}
                    />
                    <label><strong>Planificación Sección Sur</strong></label>

                    {capasActivas["Planificación Sección Sur"] && (
                        <div className="subcapas">
                            {Object.keys(subCapasSur).map((nombre) => (
                                <div key={nombre}>
                                    <label>
                                        <input
                                            type="checkbox"
                                            checked={!!subCapasSur[nombre]}
                                            onChange={() => setSubCapasSur(prev => ({ ...prev, [nombre]: !prev[nombre] }))}
                                        />
                                        {nombre}
                                    </label>
                                </div>
                            ))}
                        </div>
                    )}
                </div>


                {/* Nueva Capa: Zonificación Sta Catalina */}
                <div className="capa-principal">
                    <label> <input
                        type="checkbox"
                        checked={!!capasActivas["Zonificación Sta Catalina"]}
                        onChange={() => toggleCapaPrincipal("Zonificación Sta Catalina")}
                    />
                        <strong>Zonificación Sta Catalina</strong></label>
                </div>

                {/* Nueva Capa: ZRU Predios La Caja */}
                <div className="capa-principal">
                    <label> <input
                        type="checkbox"
                        checked={!!capasActivas["ZRU Predios La Caja"]}
                        onChange={() => toggleCapaPrincipal("ZRU Predios La Caja")}
                    />
                        <strong>ZRU Predios La Caja</strong></label>
                </div>
                <hr />
                <div className="capa-principal">
                    <label>  <input
                        type="checkbox"
                        checked={verReferencias}
                        onChange={() => setVerReferencias(prev => !prev)}
                    />
                        <strong>Ver referencias</strong></label>
                </div>
            </div>

            <MapContainer
                center={[-27.5298, -58.8044]}
                zoom={14}
                style={{ height: "100vh", width: "100%" }}
            >

                {/* etiqueta que marca el texto de fondo de los poligonos */}
                <EtiquetasPoligonos
                    geojsonData={geojsonData}
                    poligonosGuardados={poligonosGuardados}
                    capasActivas={capasActivas}
                    subCapasActivas={subCapasActivas}
                    subCapasSur={subCapasSur}
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
                                html: `<div style="padding:2px;border-radius:4px;">${p.dato1}</div>`,
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
  const poligono = poligonosGuardados.find(p => p.id_mapa === id);

  let fillColor = "white"; // color por defecto
  let fillOpacity = 0.2;   // opacidad por defecto

  if (poligono) {
    const sub = poligono.subclasificacion;
    fillColor = coloresPorSubclasificacion[sub] || "gray";
    fillOpacity = 0.8; // más opaco si está guardado
  }

  return {
    fillColor,
    weight: 1,
    opacity: 0.5,
    color: "black",
    fillOpacity,
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
                                fillColor: "none",
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
  const poligono = poligonosGuardados.find(p => p.id_mapa === id);

  let fillColor = "white"; // color por defecto
  let fillOpacity = 0.2;   // opacidad por defecto

  if (poligono) {
    const sub = poligono.subclasificacion;
    fillColor = coloresPorSubclasificacion[sub] || "gray";
    fillOpacity = 0.8; // más opaco si está guardado
  }

  return {
    fillColor,
    weight: 1,
    opacity: 0.5,
    color: "black",
    fillOpacity,
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
  const poligono = poligonosGuardados.find(p => p.id_mapa === id);

  let fillColor = "white"; // color por defecto
  let fillOpacity = 0.2;   // opacidad por defecto

  if (poligono) {
    const sub = poligono.subclasificacion;
    fillColor = coloresPorSubclasificacion[sub] || "gray";
    fillOpacity = 0.8; // más opaco si está guardado
  }

  return {
    fillColor,
    weight: 1,
    opacity: 0.5,
    color: "black",
    fillOpacity,
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
                {Object.entries(subCapasSur).map(([nombre, activa]) => (
                    activa && geojsonData[nombre] && (
                        <GeoJSON
                            key={nombre}
                            data={geojsonData[nombre]}
                            style={(feature) => {
  const id = feature.properties?.id;
  const poligono = poligonosGuardados.find(p => p.id_mapa === id);

  let fillColor = "white"; // color por defecto
  let fillOpacity = 0.2;   // opacidad por defecto

  if (poligono) {
    const sub = poligono.subclasificacion;
    fillColor = coloresPorSubclasificacion[sub] || "gray";
    fillOpacity = 0.8; // más opaco si está guardado
  }

  return {
    fillColor,
    weight: 1,
    opacity: 0.5,
    color: "black",
    fillOpacity,
  };
}}
                            eventHandlers={{
                                click: handleFeatureClick,
                            }}
                            onEachFeature={onEachFeature}
                        />
                    )
                ))}

            </MapContainer>
            {modalAbierto && (
                <div className="modal-overlay" onClick={() => setModalAbierto(false)}>
                    <div className="modal-contenido" onClick={(e) => e.stopPropagation()}>
                        <h3>Ingrese un dato para la zona ID {idSeleccionado}</h3>

                        <label>Dato:</label>
                        <input
                            type="text"
                            value={texto}
                            onChange={(e) => setTexto(e.target.value)}
                        />

<label>Subclasificación:</label>
<select
    value={subclasificacion}
    onChange={(e) => setSubclasificacion(e.target.value)}
>
    <option value="">Selecciona una opción</option>
    {opcionesSubclasificacion.map((opcion, index) => (
        <option key={index} value={opcion}>{opcion}</option>
    ))}
</select>
  <label>Descripción:</label>
            <input
                type="text"
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
            />
                        <button onClick={async () => {
                            await serviciolotes.guardarpoligono({
                                id_mapa: idSeleccionado,
                                dato1: texto,
                                 descripcion,
                                subclasificacion, // 
                                capa: nombreCapaSeleccionada
                            });
                            const nuevos = await serviciolotes.poligonosguardados();
                            setPoligonosGuardados(nuevos);
                            setModalAbierto(false);
                            setTexto("");
                            setSubclasificacion(""); // limpiamos
                        }}>Guardar</button>

                        <button onClick={() => setModalAbierto(false)}>Cancelar</button>
                    </div>
                </div>
            )}

        </div>
    );
};

export default MapaConCapas;