import React from 'react';
import { Beer } from './Beer'
import { Card, CardHeader, CardBody } from 'react-simple-card';

export class Cards extends React.Component {
    render() {
        return (
            <Card
                style={{ width: 300, height: 'auto' }}>
                <CardHeader style={{ justifyContent: 'center', minHeight: 200 }}><Beer /></CardHeader>
                <CardBody></CardBody>
            </Card>
        )
    };
};

export default Cards