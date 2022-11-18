import React from 'react'
import { Container, Content } from './style'
import { FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa'
import ItemContact from '../../../components/ItemContact'

export default function Contact() {
  return (
    <Container data-aos="fade-up">
      <Content>
        <ItemContact 
          IconFa={FaLinkedin} 
          LinkContact="https://www.linkedin.com/in/gustavofssilva" 
        />
        
        <ItemContact 
          IconFa={FaInstagram} 
          LinkContact="https://www.instagram.com/gustavofelixss" 
        />
        <ItemContact 
          IconFa={FaEnvelope} 
          LinkContact="gustavofelixssilva@gmail.com" 
        />
      </Content>
    </Container>
  )
}
