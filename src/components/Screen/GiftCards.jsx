import React from 'react'

function GiftCards() {
    return (
        <div>
            <div className='flex gap-5 text-sm items-center pl-7 border-gray-400'>
                <div className='hover:underline cursor-pointer hover:text-blue-800 '>Gift cards</div>
                <div className='hover:underline cursor-pointer hover:text-blue-800'>Redeem Gift cards</div>
                <div className='hover:underline cursor-pointer hover:text-blue-800'>View Your Balance</div>
                <div className='hover:underline cursor-pointer hover:text-blue-800'>Reload Your Balance</div>
                <div className='hover:underline cursor-pointer hover:text-blue-800'>For Business</div>
                <div className='hover:underline cursor-pointer hover:text-blue-800'>Be Informed</div>
                <div className='hover:underline cursor-pointer hover:text-blue-800'>Find a Gift</div>
                <div className='hover:underline cursor-pointer hover:text-blue-800'> Registry & Gifting</div>
            </div>
        </div>
    )
}

export default GiftCards