import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import DatePicker from "react-datepicker";



export default function Education({ education, show, handleClose, handleEducationChange, addEducation }) {

    const [startYear, setStartYear] = useState(null);
        const [endYear, setEndYear] = useState(null);
    
        function handleStartYear(date) {
            setStartYear(date);
            let dObj = new Date(date)
            let interestedStr = dObj.getFullYear()
            handleEducationChange("startYear", interestedStr)
        }
    
        function handleEndYear(date) {
            setEndYear(date);
            let dObj = new Date(date)
            let interestedStr = dObj.getFullYear()
            handleEducationChange("endYear", interestedStr)
        }


    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Education</Modal.Title>
            </Modal.Header>
            <Modal.Body>

                <Form.Group className="mb-3" controlId="userform.firstName">
                    <Form.Label>Degree</Form.Label>
                    <Form.Select aria-label="Select Degree" onChange={(event) => handleEducationChange("degree", event.target.value)}>
                        <option>Select</option>
                        <option value="diploma">Diploma</option>
                        <option value="bachelor">Bachelors</option>
                        <option value="master">Master</option>
                    </Form.Select>
                </Form.Group>


                <Form.Group className="mb-3" controlId="userform.firstName">
                    <Form.Label>College</Form.Label>
                    <Form.Control type="text" placeholder="College Name" onChange={(event) => handleEducationChange("college", event.target.value)} />
                </Form.Group>


                <Form.Group className="mb-3" controlId="userform.companyName">
                    <Form.Label>Start Year</Form.Label>

                    <DatePicker
                        selected={startYear}
                        onChange={(date) => handleStartYear(date)}
                        dateFormat="yyyy"
                        showYearPicker
                    />

                </Form.Group>


                <Form.Group className="mb-3" controlId="userform.companyName">
                    <Form.Label>End Year</Form.Label>

                    <DatePicker
                        selected={endYear}
                        onChange={(date) => handleEndYear(date)}
                        dateFormat="yyyy"
                        showYearPicker
                    />

                </Form.Group>


            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={addEducation}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    )


}