import React from 'react';
import PricePlansOne from '../../../assets/images/plans-prices-1.png';
import PricePlansTwo from '../../../assets/images/plans-prices-2.png'
import TypesItem from './TypesItem';

const DATA = [
    {
        id: 1,
        image: PricePlansOne,
        title: 'Plans & Prices 1'
    },
    {
        id: 2,
        image: PricePlansTwo,
        title: 'Plans & Prices 2'
    }
]

const TypesList = (props) => {

    function titleGet(event) {
        console.log(event.currentTarget.title)
        props.scroll(event.currentTarget.title);
    }

    return (
        DATA.map(projects => {
            return <div className='m-0 p-0 click-type' key={projects.id} id={projects.id} title={projects.title} onClick={titleGet}>
                <TypesItem
                    key={projects.id}
                    id={projects.id}
                    image={projects.image}
                    title={projects.title}>
                </TypesItem>
            </div>

        })
    )
}

export default TypesList