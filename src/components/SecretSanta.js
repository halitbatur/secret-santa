import React from 'react';
import {Form,Button,Badge,Container,Row} from 'react-bootstrap';

function SecretSanta() {
    const [secretSantas,setSecertSantas] = React.useState([]);
    const [formInput,setFormInput] = React.useState({
        email:"",
        name:""
    });

    const handleButtonClick = (e) => {
        e.preventDefault()
        setSecertSantas([...secretSantas,formInput])
        setFormInput({email:"",name:""})
    };

    const sendEmails = () => {
        let newSantas = []
        const santasCopy = [...secretSantas];
        for(let i = 0; i < secretSantas.length; i++){
        const randomIndex = Math.floor((Math.random() * santasCopy.length))
        const randomSanta = santasCopy[randomIndex];
        if(randomSanta.email === secretSantas[i].email){
            i--;
            continue;
        }
            newSantas.push({email:secretSantas[i].email,secretSanta:randomSanta.name})
            santasCopy.splice(randomIndex,1);
        }
        console.log(newSantas)
        
        newSantas.forEach(person => {
        window.Email.send({
        Host : "smtp.elasticemail.com",
        Username : "halitfuatbatur@gmail.com",
        Password : "B661DB3F65D33FA31A24C73028A859FB9AC5",
        To : `${person.email}`,
        From : "halitfuatbatur@gmail.com",
        Subject : "testest",
        Body : `you are ${person.secretSanta}'s secret Santa ENJOOY `
        }).then(() => window.alert("sent"))
        })
    }


    
    return (
            <Container>
                <Row style={{width:"50%",margin:"auto"}}>
                    <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Enter email" value={formInput.email} onChange={(e) => setFormInput({...formInput,email:e.target.value})} />
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="text" placeholder="Name" value={formInput.name} onChange={(e) => setFormInput({...formInput,name:e.target.value})}/>
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={(e) => handleButtonClick(e)}>
                        Add a secret Santa
                    </Button>
                    </Form>
                </Row>
                <Row className="mt-3">
                <h3>Total secret santas</h3>
                <div style={{display:"flex",justifyContent:"space-between",flexWrap:"wrap",alignItems:"center"}}>
                {secretSantas.map(secretSanta => {
                    return ( 
                    <div key={secretSanta.name}>
                        <p>
                            {secretSanta.email} <Badge bg="secondary">{secretSanta.name}</Badge> <Button variant="danger" onClick={() => setSecertSantas(prevState => {
                                const copy = prevState.filter(item => item.name !== secretSanta.name);
                                return copy
                            }) }>delete</Button>
                        </p>
                    </div>
                    )
                })}
            </div>
                 
                </Row>
                <Button onClick={() => {sendEmails()}}>SEND EMAILS</Button>
            </Container>
    )
}

export default SecretSanta