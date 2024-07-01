import { Form } from "react-bootstrap";

export const InputField = ({ formik, as, label, name, type = 'text', required = false }) => {
    return (
        <Form.Group className="mb-3">
            <Form.Label htmlFor={name}>{label}</Form.Label>
            <Form.Control
                as={as}
                type={type}  
                name={name}  
                id={name}    
                required={required}
                value={type != 'password' ? formik.values[name] : undefined}  
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                isInvalid={formik.touched[name] && formik.errors[name]}
            />
            {formik.touched[name] && formik.errors[name] && (
                <Form.Control.Feedback type="invalid">
                    {formik.errors[name]}
                </Form.Control.Feedback>
            )}
        </Form.Group>
    );
};