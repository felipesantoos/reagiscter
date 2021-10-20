import { useState } from 'react';
import Switch from 'react-switch';

import '../styles/components/AppSwitch.css';

interface AppSwitchProps {
    label: string;
    action(value: boolean): void;
}

function AppSwitch({ label, action }: AppSwitchProps) {

    const [value, setValue] = useState(false);

    return (
        <div className="app-switch">
            <label>{label}</label>
            <Switch 
                checked={value} 
                onChange={() => {
                    setValue(!value);
                    action(!value);
                }}
            />
        </div>
    );
}

export default AppSwitch;