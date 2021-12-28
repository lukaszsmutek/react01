import React from 'react';
import ListWrapper from './Components/ListWrapper/ListWrapper';
import Form from './Components/Form/Form'
import './index.css'

const initialStateItems = [{
    image: 'https://d2eip9sf3oo6c2.cloudfront.net/instructors/avatars/000/000/032/medium/oapgW_Fp_400x400.jpg',
    name: 'Dan Abramov',
    description: 'Working on @reactjs. The demo guy.',
    twitterLink: 'https://twitter.com/dan_abramov',
},
{
    image: 'https://pbs.twimg.com/profile_images/1344410501309030403/L2rNpO6h_400x400.jpg',
    name: 'Ryan Florence',
    description: 'Making React accessible for users and developers at https://reach.tech . Online learning, workshops, OSS, and consulting.',
    twitterLink: 'https://twitter.com/ryanflorence',
},
{
    image: 'https://pbs.twimg.com/profile_images/1095819845382299649/zG-2_UHS_400x400.jpg',
    name: 'Michael Jackson',
    description: 'Maker. Co-author of React Router. Working on @ReactTraining. Created @unpkg. Head over heels for @cari.',
    twitterLink: 'https://twitter.com/mjackson',
},
{
    image: 'https://pbs.twimg.com/profile_images/1444988463216922631/IDffhy4i_400x400.jpg',
    name: 'Kent C. Dodds',
    description: 'Making software development more accessible · Husband, Father, Latter-day Saint, Teacher, OSS, GDE, @TC39 · @PayPalEng @eggheadio @FrontendMasters · #JS',
    twitterLink: 'https://twitter.com/kentcdodds',
},];

class App extends React.Component {
    state = {
        items:[...initialStateItems],
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
    }

    render() {
        return(
         <div>
          <ListWrapper
              items={this.state.items}
          />
          <Form submitFn={this.addItem}/>
         </div>
        )
    }
}


export default App;
