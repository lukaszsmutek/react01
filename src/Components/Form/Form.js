import React from 'react';
import styles from "./Form.module.scss";
import Input from '../Input/Input';
import Button from '../Button/Button';
import Title from '../Title/Title';
import Radio from './FormRadio';

const types = {
twitter:'twitter',
article:'article',
note:'note',
};

const descriptions = {
    twitter: 'favorite Twitter account',
    article: 'Article',
    note:'note',
}

class Form extends React.Component{

    state={
        activeOption:types.twitter, 
    }

    handleRadioButtonChange = (type) => {
        this.setState({activeOption:type,})
    }
    render(){
        return(
        <div className={styles.wrapper}>
               <Title>Add new {descriptions[this.state.activeOption]}</Title>
                <form 
                    className={styles.form} onSubmit={this.props.submitFn}
                    autoComplete='off'
                >
        <div className={styles.formOptions}>

                <Radio
                id={types.twitter}
                checked={this.state.activeOption === types.twitter}
                changeFn={()=>this.handleRadioButtonChange(types.twitter)}>
                    Twitter
                </Radio>
                <Radio
                id={types.article}
                checked={this.state.activeOption === types.article}
                changeFn={()=>this.handleRadioButtonChange(types.article)}>
                    Article
                </Radio>
                <Radio
                id={types.note}
                checked={this.state.activeOption === types.note}
                changeFn={()=>this.handleRadioButtonChange(types.note)}>
                    Note
                </Radio>

        </div>
              
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
        )
    }
} 







export default Form;