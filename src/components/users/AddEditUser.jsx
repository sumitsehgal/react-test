

import { useState } from "react"
import { useDispatch } from "react-redux"
import { addUser, updateUser } from "../../features/user/userSlice"
import { Button, Card, Form } from "react-bootstrap"
import Education from "../modals/Education"
import Experience from "../modals/Experience"


export default function AddEditUser({ onCancel, user }) {

    const dispatch = useDispatch()
    const [userData, setUserData] = useState(user)
    const [validated, setValidated] = useState(true);

    const [showEducation, setEducationShow] = useState(false);
    const handleClose = () => setEducationShow(false);
    const [education, setEducation] = useState({degree: '', college: '', startYear: '', endYear: ''})

    const [showExperience, setExperienceShow] = useState(false);
    const handleExperienceClose = () => setExperienceShow(false);
    const [experience, setExperience] = useState({companyName: '', startMonthYear: '', endMonthYear: ''})


    function showEducationModal() {
        setEducationShow(true);
    }

    function showExperienceModal() {
        setExperienceShow(true);
    }

    function gotolist() {
        onCancel()
    }

    function handleFormSubmit(event) {
        // event.preventDefault()

        const form = event.currentTarget;
    
        if (form.checkValidity() === false) {
            setValidated(false);
            event.preventDefault();
            event.stopPropagation();
            return
        }

        setValidated(true);

        if (userData.id) {
            dispatch(updateUser(userData))
        } else {
            dispatch(addUser(userData))
        }
        gotolist()
    }

    function handleUserData(field, value) {
        
        setUserData((state) => ({
            ...state,
            [field]: value
        }))
    }


    function handleExperienceChange(name, value) {
        setExperience((state) => ({
            ...state,
            [name]: value
        }))
    }


    function addExperience() {
        setUserData((state) => ({
            ...state,
            experience: [
                ...state.experience,
                experience
            ]
        }))
        handleExperienceClose()
    }

    function handleEducationChange(name, value) {
        setEducation((state) => ({
            ...state,
            [name]: value
        }))
    }

    function addEducation() {
        setUserData((state) => ({
            ...state,
            education: [
                ...state.education,
                education
            ]
        }))
        handleClose()
    }

    return (
        <div className="d-flex justify-content-center align-items-center">
            <Card style={{ width: '50rem' }}>
                <Card.Header>Add/Edit User</Card.Header>
                <Card.Body>
                    <Form noValidate validated={validated} className={!validated ? "was-validated" : ""} onSubmit={handleFormSubmit}>
                        <Form.Group className="mb-3" controlId="userform.firstName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" required placeholder="First Name" value={userData.firstName} onChange={(event) => handleUserData("firstName", event.target.value)} />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="userform.lastName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text" required placeholder="Last Name" value={userData.lastName} onChange={(event) => handleUserData("lastName", event.target.value)} />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="userform.email">
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control type="email" required  placeholder="Email Address" value={userData.email} onChange={(event) => handleUserData("email", event.target.value)} />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>


                        <Form.Group className="mb-3" controlId="userform.phone">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control type="tel" required  placeholder="Phone Number" value={userData.phone} onChange={(event) => handleUserData("phone", event.target.value)} />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>


                        <Form.Group className="mb-3" controlId="userform.dob">
                            <Form.Label>Date of Birth</Form.Label>
                            <Form.Control type="date" required  placeholder="" value={userData.dob} onChange={(event) => handleUserData("dob", event.target.value)} />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>


                        <Form.Group className="mb-3" controlId="userform.address">
                            <Form.Label>Address</Form.Label>
                            <Form.Control as="textarea" rows={3} required  placeholder="" value={userData.address} onChange={(event) => handleUserData("address", event.target.value)} />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="userform.education">
                            <Form.Label>Education</Form.Label>

                            {userData.education.length > 0 && userData.education.map((exp, index) => (
                                <div key={index}>
                                    <hr />
                                    <p><strong>Degree:</strong> {exp.degree}</p>
                                    <p><strong>College:</strong> {exp.college}</p>
                                    <p><strong>Start Year:</strong> {exp.startYear}</p>
                                    <p><strong>End Year:</strong> {exp.endYear}</p>
                                    <Button variant="danger" onClick={() => {
                                        const newEducation = userData.education.filter((_, i) => i !== index);
                                        setUserData((state) => ({
                                            ...state,
                                            education: newEducation
                                        }))
                                    }
                                    }>Delete</Button>
                                </div>
                            ))}


                            <div className="d-flex justify-content-end align-items-end">
                                <Button variant="warning" onClick={() => showEducationModal()}>Add Education</Button>
                            </div>
                            <Education show={showEducation} handleClose={handleClose} handleEducationChange={handleEducationChange} addEducation={addEducation} />
                        </Form.Group>


                        <Form.Group className="mb-3" controlId="userform.experience">
                            <Form.Label>Experience</Form.Label>

                            {userData.experience.length > 0 && userData.experience.map((exp, index) => (
                                <div key={index}>
                                    <hr />
                                    <p><strong>Company Name:</strong> {exp.companyName}</p>
                                    <p><strong>Start Month & Year:</strong> {exp.startMonthYear}</p>
                                    <p><strong>End Month & Year:</strong> {exp.endMonthYear}</p>
                                    <Button variant="danger" onClick={() => {
                                        const newExperience = userData.experience.filter((_, i) => i !== index);
                                        setUserData((state) => ({
                                            ...state,
                                            experience: newExperience
                                        }))
                                    }
                                    }>Delete</Button>
                                </div>
                            ))}


                            <div className="d-flex justify-content-end align-items-end">
                                <Button variant="warning" onClick={() => showExperienceModal()}>Add Experience</Button>
                            </div>

                            <Experience show={showExperience} handleClose={handleExperienceClose} handleExperienceChange={handleExperienceChange} addExperience={addExperience} />

                        </Form.Group>


                        <Button variant="primary" type="submit" className="me-2">
                            Submit
                        </Button>

                        <Button variant="primary" type="cancel" onClick={onCancel}>
                            Cancel
                        </Button>

                    </Form>
                </Card.Body>
            </Card>
        </div>
    )
}