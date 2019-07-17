import React from "react";
import { Table, Container, Col } from "reactstrap";
import Shows from "./shows";


export default class Showss extends React.Component {
    render() {
        return (

            <Container>
                <Col>
                    <Table >
                        <thead>
                            <tr class="table-active">
                                <th scope="col">Date</th>
                                <th scope="col">Lieu </th>
                                <th scope="col">Heure</th>
                                <th scope="col">Prix</th>
                            </tr>
                        </thead>
                        <tbody>
                            <Shows />
                        </tbody>
                    </Table>
                </Col>
            </Container>

        );
    }
}
