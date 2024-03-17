import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardMedia, Container, Grid } from '@mui/material';
import { Pagination } from '@mui/material';
import imgCaja from '../../Assets/imagencaja.png'
import imgLegajo from '../../Assets/legajo.webp'

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleIndexChange = (index) => {
    setActiveIndex(index);
  };

  const images = [
    { src: imgCaja,  link: 'https://cmpcorrientes.com.ar/' },
    { src: imgLegajo, link: 'http://santacatalina.com/usuario/legajos' },
    { src: 'https://example.com/image3.jpg', link: 'https://example.com/page3' },
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, []); // Este efecto se ejecutará una vez al montar el componente

  return (
    <Container>
      <Grid container spacing={2} justifyContent="center" alignItems="center" position="relative">
        <Grid item xs={12}>
          <Card>
            <a href={images[activeIndex].link} target="_blank" rel="noopener noreferrer">
              <CardMedia
                component="img"
                style={{ width: '20%', height: 'auto' }}
                image={images[activeIndex].src}
                alt={`Image ${activeIndex + 1}`}
              />
            </a>
            <CardContent>
              {/* Additional content if needed */}
            </CardContent>
            <div style={{ position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)', display: 'flex' }}>
              {images.map((image, index) => (
                <PaginationDot key={index} active={index === activeIndex} onClick={() => handleIndexChange(index)} />
              ))}
            </div>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

const PaginationDot = ({ active, onClick }) => {
  return (
    <div
      style={{
        width: 10,
        height: 10,
        borderRadius: '50%',
        background: active ? 'blue' : 'gray',
        margin: 5,
        cursor: 'pointer',
      }}
      onClick={onClick}
    />
  );
};

export default Carousel;
