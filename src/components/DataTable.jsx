import { useEffect, useState } from "react";
import { Col, Form, Row, Table } from "react-bootstrap";

export const DataTable = ({ data = [], searchable = [] }) => {
    const [term, setTerm] = useState('');
    const [filtered, setFiltered] = useState(data);

    useEffect(() => {
        if (term.length > 0) {
            let temp = data.filter(item => {
                for (let k of searchable) {
                    if (k in item && item[k].toString().toLowerCase().includes(term.toLowerCase())) {
                        return true;
                    }
                }
                return false;
            });
            setFiltered(temp);
        } else {
            setFiltered(data);
        }
    }, [data, term, searchable]);

    return (
        <Row>
            <Col md={4} className="ms-auto my-3">
                <Form.Control
                    type="search"
                    value={term}
                    onChange={ev => setTerm(ev.target.value)}
                    placeholder="Search"
                />
            </Col>
            <Col xs={12}>
                {filtered.length > 0 ? (
                    <Table striped hover bordered size="sm">
                        <thead className="table-dark">
                            <tr>
                                {Object.keys(data[0]).map((k, index) => (
                                    <th key={index}>{k}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {filtered.map((item, rowIndex) => (
                                <tr key={rowIndex}>
                                    {Object.values(item).map((val, colIndex) => (
                                        <td key={colIndex}>{val}</td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                ) : (
                    <h5>No Data Found</h5>
                )}
            </Col>
        </Row>
    );
};