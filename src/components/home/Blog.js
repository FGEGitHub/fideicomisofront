import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Main from './Main';
import Sidebar from './Sidebar';
import Footer from './Footer';
import post1 from './blog-post.1.md';
import post2 from './blog-post.2.md';
import post3 from './blog-post.3.md';
import imagen from '../../Assets/IMG_7194.JPG'
//import bosqueImagen from '../../Assets/BOSQUE.JPG'


const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

const sections = [
  { title: 'Inicio', url: '#' },
  { title: 'Informacion Compra de lotes', url: '#' },
  { title: 'Preguntas frecuentes', url: '#' },

];

const mainFeaturedPost = {
  title: 'Fideicomiso Santa Catalina ',
  description:
    "ingresar descipcion ",
  image: imagen,
  imgText: 'main image description',
  linkText: 'Ingresar',
};

const featuredPosts = [
  {
    title: 'Compra de lotes ',
    date: 'Nov 12',
    description:
      'Calcula el valor del lote ',
    image: 'https://www.google.com/url?sa=i&url=http%3A%2F%2Fwww.corrientesenelaire.com.ar%2Fnoticia%2F01675_santa-catalina-lotes-para-viviendas-cuestan-entre-530-mil-y-680-mil.htm&psig=AOvVaw3sT8aaGM93IXquoFNi584-&ust=1671883552386000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCNDGtdzZj_wCFQAAAAAdAAAAABAE',
    imageText: 'Image Text',
  },
  {
    title: 'ir al mapa ',
    date: 'Nov 11',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text',
  },
];

const posts = [post1, post2, post3];

const sidebar = {
  title: 'About',
  description:
    'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
  archives: [
    { title: 'March 2020', url: '#' },
    { title: 'February 2020', url: '#' },
    { title: 'January 2020', url: '#' },
    { title: 'November 1999', url: '#' },
    { title: 'October 1999', url: '#' },
    { title: 'September 1999', url: '#' },
    { title: 'August 1999', url: '#' },
    { title: 'July 1999', url: '#' },
    { title: 'June 1999', url: '#' },
    { title: 'May 1999', url: '#' },
    { title: 'April 1999', url: '#' },
  ],
  social: [
    { name: 'GitHub', icon: GitHubIcon },
    { name: 'Twitter', icon: TwitterIcon },
    { name: 'Facebook', icon: FacebookIcon },
  ],
};

export default function Blog() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="santacatalinafideicomiso.com " sections={sections} />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} className={classes.mainGrid}>
            <Main title="From the firehose" posts={posts} />
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid>
        </main>
      </Container>
      <Footer title="Footer" description="Something here to give the footer a purpose!" />
    </React.Fragment>
  );
}