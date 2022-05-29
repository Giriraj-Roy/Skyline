// import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Search from './Search';


const Navbar = () => {

    const [query, setQuery] = useState('');
    // const [items, setItems] = useState([]);

    useEffect( ()=> {
        const fetchItems = async () => {
        // const result = await axios (`url?name=${query}`)
        // setItems(result.data)
          //console.log(result.data)
        // setLoading(false);
    }
    fetchItems();

    }, [query])

    return (
        <div className='nav'>
            <div className='title'>
                SKYLINE
            </div>
            <Search getQuery={(q) => setQuery(q)}/>
            <div className='auth'>
                <div className='login'>LOG IN</div>
                <div className='signup'>SIGN UP</div>

            </div>
        </div>
    )
}

export default Navbar