import '../styles/components/FormGroup.css';

interface FormGroupProps {
    label: string;
    inputId: string;
    inputName: string;
    inputType: string;
    inputPlaceholder?: string;
}

function FormGroup({ 
    label, 
    inputId, 
    inputName, 
    inputType, 
    inputPlaceholder 
}: FormGroupProps) {
    return (
        <div className="form-group">
            <label htmlFor={inputId}>{label}</label>
            <input 
                id={inputId} 
                className={inputName} 
                type={inputType} 
                placeholder={inputPlaceholder} />
        </div>
    );
}

export default FormGroup;
