import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faSquareFacebook } from '@fortawesome/free-brands-svg-icons'
import { faXTwitter } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
  return (
    <div>
        {/*Footer Principal*/}
        <footer className="colorPurpleFooter d-flex">
            <Container className=" p-3 pb-10 mb-5 justify-content-between ">
                <Row className='justify-content-between d-flex'>
                    <Col>
                        <h3>Atlas</h3>
                    </Col>
                    <Col>
                        <p>
                        © 2024 Atlas. Todos los derechos reservados
                        </p>
                    </Col>
                    {/*Grupo de Iconos para poner Enlaces de Apps*/}
                    <Col>
                    <FontAwesomeIcon className="iconCustom" icon={faInstagram} size="lg" style={{color: "#ffffff",}}/>
                    <FontAwesomeIcon className="iconCustom" icon={faWhatsapp} size="lg" style={{color: "#ffffff",}} />
                    <FontAwesomeIcon className="iconCustom" icon={faSquareFacebook} size="lg" style={{color: "#ffffff",}} />
                    <FontAwesomeIcon className="iconCustom" icon={faXTwitter} size="lg" style={{color: "#ffffff",}} />
                    </Col>
                </Row>
            </Container>
        </footer>
    </div>
  )
}
