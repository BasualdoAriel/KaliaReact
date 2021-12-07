import './Footer.css'
import { Container } from 'react-bootstrap'

export const Footer=()=>{
    return(
        <Container className="text-center">
            <section class="container pt-3">
                <nav class="navbar navbar-light bg-light d-flex bg-transparent">
                <div class="container justify-content-center">
                    <a class="navbar-brand " href="https://www.instagram.com/accesorioskalia/" target="_blank" rel="noreferrer">
                    <img src="https://cdn-icons.flaticon.com/png/512/3938/premium/3938036.png?token=exp=1638909168~hmac=5f1ca502e24ffde2c4488ce2240da8b8" alt="Logo Instagram" width="30" height="24"/>
                    </a>
                    <a class="navbar-brand" href="https://www.facebook.com/accesorioskalia" target="_blank" rel="noreferrer">
                    <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Logo Facebook" width="30" height="24"/>
                    </a>
                </div>
                </nav>
                <p class="text-center  bg-dark text-white">© 2021 KALIA, todos los derechos reservados.</p>
                <div class="position-absolute bottom-0 start-0 whatsapp">
                    <a href="https://wa.me/message/AOX4YOR5RHF4I1" class="whatsapp" target="_blank" rel="noreferrer"><img
                        src="https://cdn-icons-png.flaticon.com/512/160/160200.png" alt="Logo WhatsApp" class="whatsappImagen" width="40px" height="40px"/></a>
                </div>
            </section>
        </Container>
    )
}