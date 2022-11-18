import { FaArrowRight } from 'react-icons/fa'
import { Container, Content, Infos, Name, Function, Intro, LinkProjects, Logo, Img } from '../../styles/indexStyle'
import Link from 'next/link'
import { useEffect } from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css'
export default function Home() {
  useEffect(() => {
    Aos.init({duration:1500});
  }, []);


  return (
   <Container >
     <Content>
      <Infos data-aos="fade-up">
        <Name >Olá, sou Gustavo Felix</Name>
        <Function>Front-end Junior Developer</Function>
        <Intro>Estudante de Sistemas de Informação, 
          tenho experiência em desenvolvimento Mobile
          (Kotlin) e faço Websites em WordPress.
        </Intro>
        <Link href="projects">
          <LinkProjects>PROJETOS <FaArrowRight /></LinkProjects>
        </Link>
      </Infos>
      <Logo data-aos="fade-left">
        <Img src="/images/logo.png" alt="logo" />
      </Logo>
      

     </Content>
   </Container>

   
  )
}
