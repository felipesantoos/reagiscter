import FormGroup from '../components/FormGroup';
import Button from '../components/Button';
import '../styles/pages/FormPage.css';
import React, { useEffect, useState } from 'react';

function FormPage() {

    const [isForeignPerson, setIsForeignPerson] = useState(false);

    useEffect(() => {
        console.log(isForeignPerson);
    }, [isForeignPerson]);

    return (
        <form id="form-page">
            <legend>Cadastro</legend>
            <FormGroup
                label="Nome"
                inputId="name"
                inputName="name"
                inputType="text"
                inputPlaceholder="Insira seu nome..."
            />

            <FormGroup
                label="Data de nascimento"
                inputId="birth-date"
                inputName="birth-date"
                inputType="date"
            />

            <FormGroup
                label="Idade"
                inputId="age"
                inputName="age"
                inputType="number"
                inputPlaceholder="Insira sua idade..."
            />

            <div className="form-group-checkbox">
                <input
                    id="foreign-person"
                    type="checkbox"
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setIsForeignPerson(event.target.checked);
                    }}
                />
                <label htmlFor="foreign-person">
                    Você é estrangeiro?
                </label>
            </div>

            {
                !isForeignPerson && (
                    <>
                        <FormGroup
                            label="Endereço"
                            inputId="address"
                            inputName="address"
                            inputType="text"
                            inputPlaceholder="Insira seu endereço..."
                        />

                        <FormGroup
                            label="Complemento"
                            inputId="complement"
                            inputName="complement"
                            inputType="text"
                            inputPlaceholder="Insira um complemento..."
                        />
                    </>
                )
            }

            <div className="action-btns">
                <Button type="error">Cancelar</Button>
                <Button type="success">Finalizar</Button>
            </div>
        </form>
    );
}

export default FormPage;
