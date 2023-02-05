import React from 'react'

function Search() {
  return (
    <div className='container'>
        <div className='row p-2'>
            <div className='col-12 d-flex'>
                <input type="search" class="form-control mx-1" placeholder='search item'/>
                <span class="btn btn-primary"><i class="fa-solid fa-magnifying-glass"></i></span>
            </div>
        </div>
      
    </div>
  )
}

export default Search
