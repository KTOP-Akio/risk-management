import React from "react";
import styled from "styled-components";

import Layout from "../components/Layout";
import { productTitleData, productTableData } from "../data/data";

export default function Portfolio() {
    return (
        <Layout>
            <Container>
                <Title>
                    Positions
                </Title>
                <Table>
                    <thead>
                        {productTitleData.map((data, index) => (
                            <TableHeader key={index}>
                                {data.title}
                            </TableHeader>
                        ))}
                    </thead>
                    <tbody>
                        {productTableData.map((row, index) => (
                            <TableRow key={index}>
                                <td style={{ textAlign: "left" }}>{row.product}</td>
                                <td>{row.contract}</td>
                                <td>{row.netpos}</td>
                                <td>{row.pl}</td>
                                <td>{row.buyqty}</td>
                                <td>{row.sellqty}</td>
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
    text-align: center;
    height: 30px;
    &:nth-child(even) {
        background-color: #edf2f4;
    }
`