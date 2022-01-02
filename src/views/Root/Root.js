import React from 'react';
import './index.css';
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import NotesView from '../NotesView/NotesView';
import ArticlesView from '../ArticlesView/ArticlesView';
import TwittersView from '../TwittersView/TwittersView';
import Header from '../../Components/Header/Header';
import Modal from '../../Components/Modal/Modal';
import AppContext from '../../context';


class App extends React.Component {
    state = {
        items:{
            twitters: [],
            articles: [],
            notes: [],
        },
        isModalOpen:false,
    }

    addItem = (e) => {
        e.preventDefault();

        const newItem = {
            name:e.target[0].value,
            twitterLink: e.target[1].value,
            image:e.target[2].value,
            description: e.target[3].value,
        }

        this.setState(prevState=>({items: [...prevState.items, newItem],}));

        e.target.reset();
    };

    openModal = () => {
        this.setState(
            {
                isModalOpen: true,
            }
        )
    }

    closeModal = () => {
        this.setState(
            {
                isModalOpen: false,
            }
        )
    }

    render() {

        const {isModalOpen} = this.state;
        const contextElements = {
            ...this.state,
            addItem: this.addItem}

        return(
          
          <BrowserRouter>
          <AppContext.Provider>
          <Header openModalFn = {contextElements}/>
            <Routes>
                <Route path = "/" element = {<TwittersView/>} />
                <Route path = "/notes" element = {<NotesView/>} />
                <Route path = "/articles" element = {<ArticlesView/>} />
            </Routes>
            {isModalOpen && <Modal closeModalFn = {this.closeModal}/>}
            </AppContext.Provider>
            </BrowserRouter>
        );
    }
}


export default App;
