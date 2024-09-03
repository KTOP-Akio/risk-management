import React, { useState } from 'react';
import { DndContext, closestCenter } from '@dnd-kit/core';
import {
    SortableContext,
    useSortable,
    arrayMove,
    rectSortingStrategy,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import styled from "styled-components";

import Layout from "../components/Layout";
import { tradingLaddersTitleData, tradingLaddersTableData } from "../data/data";

function DraggableRow({ id, item, handleBidsChange, handleAsksChange }) {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
        setActivatorNodeRef,
    } = useSortable({ id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };

    return (
        <TableRow ref={setNodeRef} style={style} {...attributes}>
            <td ref={setActivatorNodeRef} {...listeners} style={{ cursor: 'grab' }}>
                &#x2630;
            </td>
            <td>{item.work}</td>
            <td>{item.piq}</td>
            <td>
                <NumberInput
                    type="number"
                    value={item.bids}
                    onChange={(e) => handleBidsChange(id, e.target.value)}
                    onClick={(e) => e.stopPropagation()} // Prevent dragging when clicking on the input
                    onKeyDown={(e) => e.stopPropagation()} // Prevent dragging when typing
                />
            </td>
            <td>{item.price}</td>
            <td>
                <NumberInput
                    type="number"
                    value={item.asks}
                    onChange={(e) => handleAsksChange(id, e.target.value)}
                    onClick={(e) => e.stopPropagation()} // Prevent dragging when clicking on the input
                    onKeyDown={(e) => e.stopPropagation()} // Prevent dragging when typing
                />
            </td>
            <td>{item.vap}</td>
        </TableRow>
    );
}

export default function TradingLadders() {
    const [items, setItems] = useState(tradingLaddersTableData);

    const handleDragEnd = (event) => {
        const { active, over } = event;

        if (active.id !== over.id) {
            setItems((items) => {
                const oldIndex = items.findIndex((item) => item.id === active.id);
                const newIndex = items.findIndex((item) => item.id === over.id);
                return arrayMove(items, oldIndex, newIndex);
            });
        }
    };

    const handleBidsChange = (id, newBids) => {
        setItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id ? { ...item, bids: newBids } : item
            )
        );
    };

    const handleAsksChange = (id, newAsks) => {
        setItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id ? { ...item, asks: newAsks } : item
            )
        );
    };

    return (
        <Layout>
            <Container>
                <Title>
                    Trading Ladders
                </Title>
                <DndContext
                    collisionDetection={closestCenter}
                    onDragEnd={handleDragEnd}
                >
                    <SortableContext items={items} strategy={rectSortingStrategy}>
                        <Table>
                            <thead>
                                {tradingLaddersTitleData.map((data, index) => (
                                    <TableHeader key={index}>
                                        {data.title}
                                    </TableHeader>
                                ))}
                            </thead>
                            <tbody>
                                {items.map((item, index) => (
                                    <DraggableRow
                                        key={index}
                                        id={item.id}
                                        item={item}
                                        handleBidsChange={handleBidsChange}
                                        handleAsksChange={handleAsksChange}
                                    />
                                ))}
                            </tbody>
                        </Table>
                    </SortableContext>
                </DndContext>
            </Container>
        </Layout >
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
    background-color: #edf2f4;
`
const NumberInput = styled.input`
    width: 75px;
    height: 30px;
    padding: 0 10px;
    border: none;
    outline: none;
    background-color: transparent;
    &:hover {
        background-color: white;
    }
`