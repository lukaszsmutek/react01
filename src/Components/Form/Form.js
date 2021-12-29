import React from 'react';
import styles from "./Form.module.scss";
import Input from '../Input/Input';
import Button from '../Button/Button';

const Form = ({submitFn}) => (
<div className={styles.wrapper}>
        <h2>Add new twitter account</h2>
        <form 
            className={styles.form} onSubmit={submitFn}
            autoComplete='off'
        >
            <Input
                name = "name"
                label = "Name"
                maxLength = {30}
            />
            <Input
                name = "link"
                label = "Twitter link"
            />
            <Input
                name = "image"
                label = "Image link"
            />
            <Input
                tag = "textarea"
                name = "description"
                label = "Description"
            />
            <Button
                children="add new item"
            />
        </form>
    </div>

);

export default Form;