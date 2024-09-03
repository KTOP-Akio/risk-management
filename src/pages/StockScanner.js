import React from "react";
import styled from "styled-components";

import Layout from "../components/Layout";

export default function StockScanner() {
    return (
        <Layout>
            <Container>
                <Title>
                    Stock Scanner
                </Title>
            </Container>
        </Layout>
    )
}

const Container = styled.div`
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    user-select: none;
`
const Title = styled.h1`
    text-align: center;
    color: grey;
`