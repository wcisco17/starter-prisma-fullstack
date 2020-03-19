import * as React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Layout: React.FC = ({ children }) => {
    return (
        <Container style={{ backgroundColor: '#ededed', height: '100vh' }} className="dr-example-container">
            {children}
        </Container>
    )
}
export default Layout;