import * as React from 'react';
import { Button, Card, CardBody, Form, FormInput } from 'shards-react';
import styled from 'styled-components';

const Forms = styled(Form)`
.img-con {
    p {
        text-align: center;
        font-size: 0.9rem;
        line-height: 0.8rem;
    }
    .img-container {
        margin: 0 auto;
        display: block;
        margin-bottom: 2rem;
    }
}
.button-container {
    margin: 0 auto;
    display: block;
}
`;

const logo = "https://res.cloudinary.com/dn2vvg0sz/image/upload/v1584536307/logo_2x.png"

const Login: React.FC = ({ children }) => {
    return (
        <Forms>
            <Card>
                <CardBody>
                    <div className="img-con">
                        <img className="img-container" src={logo} style={{ width: 50 }} alt="..." />
                        <p className="lead">Please Log In to Conet</p>
                    </div>
                    <FormInput style={{ marginBottom: 20 }} placeholder="Username" />
                    <FormInput style={{ marginBottom: 30 }} placeholder="Password" />
                    <Button className='button-container' theme="primary">Submit</Button>
                </CardBody>
            </Card>
        </Forms>
    )
}
export default Login;