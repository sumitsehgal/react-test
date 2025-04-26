import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


export default function Experience({ experience, show, handleClose, handleExperienceChange, addExperience }) {

    const [startMonthYear, setStartMonthYear] = useState(null);
    const [endMonthYear, setEndMonthYear] = useState(null);

    function handleStartMonthYear(date) {
        setStartMonthYear(date);
        let dObj = new Date(date)
        let interestedStr = dObj.getMonth() + 1 + "/" + dObj.getFullYear()
        handleExperienceChange("startMonthYear", interestedStr)
    }

    function handleEndMonthYear(date) {
        setEndMonthYear(date);
        let dObj = new Date(date)
        let interestedStr = dObj.getMonth() + 1 + "/" + dObj.getFullYear()
        handleExperienceChange("endMonthYear", interestedStr)
    }


    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Experience</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form.Group className="mb-3" controlId="userform.companyName">
                <Form.Label>Company Name</Form.Label>
                <Form.Select aria-label="Select Degree" name="companyName" onChange={(event) => handleExperienceChange("companyName", event.target.value)} >
                    <option>Open this select menu</option>
                    <option value="company-1">company-1</option>
                    <option value="company-2">company-2</option>
                    <option value="company-3">company-3</option>
                </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="userform.companyName">
                <Form.Label>Start Month and Year</Form.Label>

                <DatePicker
                    selected={startMonthYear}
                    onChange={(date) => handleStartMonthYear(date)}
                    dateFormat="MM/yyyy"
                    showMonthYearPicker
                    showFullMonthYearPicker
                />

            </Form.Group>


            <Form.Group className="mb-3" controlId="userform.companyName">
                <Form.Label>End Month and Year</Form.Label>

                <DatePicker
                    selected={endMonthYear}
                    onChange={(date) => handleEndMonthYear(date)}
                    dateFormat="MM/yyyy"
                    showMonthYearPicker
                    showFullMonthYearPicker
                />

            </Form.Group>


            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={addExperience}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    )


}