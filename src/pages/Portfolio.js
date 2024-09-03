import React from "react";
import styled from "styled-components";

import Layout from "../components/Layout";
import { portfolioTableData, portfolioTitleData } from "../data/data";

export default function Portfolio() {
    return (
        <Layout>
            <Container>
                <Title>
                    Portfolio
                </Title>
                <Table>
                    <thead>
                        {portfolioTitleData.map((data, index) => (
                            <TableHeader key={index}>
                                {data.title}
                            </TableHeader>
                        ))}
                    </thead>
                    <tbody>
                        {portfolioTableData.map((row, index) => (
                            <TableRow key={index}>
                                <td>{row.symbol}</td>
                                <td>{row.description}</td>
                                <td style={{ textAlign: "center" }}>{row.position}</td>
                                <td style={{ textAlign: "center" }}>{row.price}</td>
                                <td style={{ textAlign: "center" }}>{row.value}</td>
                            </TableRow>
                        ))}
                    </tbody>
                </Table>
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
const Table = styled.table`
    width: 1200px;
    border-collapse: collapse;
    user-select: none;
`
const TableHeader = styled.th`
    text-align: center;
    color: white;
    background-color: #1b4965;
    height: 30px;
`
const TableRow = styled.tr`
    padding: 8px;
    text-align: left;
    height: 30px;
    &:nth-child(even) {
        background-color: #edf2f4;
    }
`