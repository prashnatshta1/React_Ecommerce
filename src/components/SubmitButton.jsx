import { Button } from "react-bootstrap";

export const SubmitButton = ({disabled = false, icon = "fa-save", label = "Save"}) => {
    return (
        <Button type="submit" variant="dark" disabled={disabled}>
            <i className={`fa-solid ${disabled ? 'fa-spinner fa-spin' : icon} me-2`}></i>
            {label}
        </Button>
    );
};
