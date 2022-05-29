import React, { useState } from 'react'

const Search = ({ getQuery }) => {

    const [text, setText ] =useState('')

    const onChange = (q) => {
        setText(q)
        getQuery(q)
    }
    const [toggle, setToggle] = useState(true)
    return (
        <div className='box-search' onClick={() => setToggle(!toggle)}>
            {toggle ? <div className='btn-Search'>SEARCH</div> :
            <section className='search'>
                <form>
                    <input 
                        type='text'
                        className='form-control'
                        placeholders='Search Characters'
                        value={text}
                        onChange= { (e) => onChange(e.target.value)}
                        autoFocus
                    />

                </form>
            </section>}
        </div>
    )
}

export default Search
