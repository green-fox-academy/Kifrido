import React from 'react';
import { Beers } from './Beers'
import { Card, CardHeader, CardBody, CardFooter } from 'react-simple-card';

export const Cards = () => (
    <Card
    style={{width: 200}}>
        <CardHeader><Beers /></CardHeader>
        <CardBody>Body</CardBody>
        <CardFooter>Footer</CardFooter>
    </Card>
);

export default Cards