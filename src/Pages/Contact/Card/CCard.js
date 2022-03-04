import React from 'react'
import './CCard.css'
function CCard(parse) {
  return (
    <div className='contact-box'>
        <div className='post-ribbon'>
            {parse.post}
        </div>
        <div className='contact-details'>
            <div className='Contact-person'>
                <span className='left-line'>Contact Person:</span> {parse.CName}   
            </div>
            <div className='phone-number'>
                <span className='left-line'>Phone Number:</span> {parse.PHNo}
            </div>
            <div className='e-mail'>
                <span className='left-line'>E-Mail:</span> {parse.Email}
            </div>
            <div className='purpose'>
                <span className='left-line'>Purpose:</span> {parse.Purpose}
            </div>
        </div>
    </div>
  )
}

export default CCard