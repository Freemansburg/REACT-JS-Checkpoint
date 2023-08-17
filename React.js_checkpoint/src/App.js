import React from "react";
import { Navbar, Nav, Card, Container} from "react-bootstrap";
import man1 from './img1.jpg';
import pic2 from './img2.png';
import gal3 from './img3.jpg';



function App(){
    return(
        <>
        <div className="App">
            {/* Declaration of the navbar */}
            <Navbar bg='dark' variant='dark'>
                <Navbar.Brand href="#home">My react-bootsrap Navbar</Navbar.Brand>
                {/* the nav inside the navbar */}
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
            </Navbar>
            <Container>
                {/* This container contains the whole of the card */}
                <h1>My React.js Checkpoint</h1>
                <div className="card-container" style = {{width :'20rem', display: "grid", gridTemplateColumns: "1fr 1fr 1fr"}}>  
                        <Card className="m-3" style = {{width: '20rem', height: '25rem' }}>
                            <Card.Img className="h-30" variant="top" src={man1}></Card.Img>
                            <Card.Body>
                                <Card.Title>First Card</Card.Title>

                                <Card.Text >This is the content of the first card</Card.Text>
                            </Card.Body>
                            </Card> 
                        <Card className="m-3" style = {{width: '20rem'}}>
                        <Card.Img className="h-30" variant="top" src={pic2}></Card.Img>
                            <Card.Body>
                                <Card.Title>Second Card</Card.Title>
                                <Card.Text>This is the content of the second card</Card.Text>
                            </Card.Body>
                            </Card> 
                        <Card className="m-3" style = {{width: '20rem'}}>
                        <Card.Img className="h-30" variant="top" src={gal3}></Card.Img>
                            <Card.Body>
                                <Card.Title>Third Card</Card.Title>
                                <Card.Text>This is the content of the third card</Card.Text>
                            </Card.Body>
                        </Card>
                </div>
            </Container>
        </div>
        </>
    )
}
// Since it was not included in the checkpoint criteria to create components for the card, navbar and nav, i declared everything inside the app component.

export default App;