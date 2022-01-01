import React from 'react';
import styles from "./Form.module.scss";
import Input from '../Input/Input';
import Button from '../Button/Button';
import Title from '../Title/Title';

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

                <label htmlFor={types.twitter} >
                    Twitter
                </label>
                <input
                    id={types.twitter} type="radio"
                    checked = {this.state.activeOption===types.twitter}
                    onChange={()=>this.handleRadioButtonChange(types.twitter)}
                    />
                <label htmlFor={types.article}>
                    Article
                </label>
                <input
                    id={types.article} type="radio"
                    checked = {this.state.activeOption===types.article}
                    onChange={()=>this.handleRadioButtonChange(types.article)}
                    />
                <label htmlFor={types.note}>
                Note</label>
                <input
                    id={types.note} type="radio"
                    checked = {this.state.activeOption===types.note}
                    onChange={()=>this.handleRadioButtonChange(types.note)}
                    />

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