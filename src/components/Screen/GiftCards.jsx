import React from 'react'
import GiftOne from '../../assets/GiftOne.png'
import GiftTwo from '../../assets/GiftTwo.png'
import GiftThree from '../../assets/GiftThree.png'
import GiftFour from '../../assets/GiftFour.jpg'

function GiftCards() {
    return (
        <div>
            <div className='flex gap-5 text-sm items-center pl-7 border-b border-gray-400 h-8'>
                <div className='hover:underline cursor-pointer hover:text-blue-800 '>Gift cards</div>
                <div className='hover:underline cursor-pointer hover:text-blue-800'>Redeem Gift cards</div>
                <div className='hover:underline cursor-pointer hover:text-blue-800'>View Your Balance</div>
                <div className='hover:underline cursor-pointer hover:text-blue-800'>Reload Your Balance</div>
                <div className='hover:underline cursor-pointer hover:text-blue-800'>For Business</div>
                <div className='hover:underline cursor-pointer hover:text-blue-800'>Be Informed</div>
                <div className='hover:underline cursor-pointer hover:text-blue-800'>Find a Gift</div>
                <div className='hover:underline cursor-pointer hover:text-blue-800'> Registry & Gifting</div>
            </div>
            <div>
                <h1 className='font-bold text-2xl mt-4'>Shop gift cards by delivery type</h1>
                <div className='flex gap-3'>
                    <img
                        className='h-80 pt-4 hover:cursor-pointer'
                        src={GiftOne} alt="" />
                    <img
                        className='h-80 pt-4 hover:cursor-pointer'
                        src={GiftTwo} alt="" />
                    <img
                        className='h-80 pt-4 hover:cursor-pointer'
                        src={GiftThree} alt="" />
                </div>
                <div className='flex gap-3 pt-7'>
                    <img
                        className='h-40 w-[600px] ml-5'
                        src={GiftFour} alt="" />
                    <img
                        className='h-40 w-[600px]'
                        src={GiftFour} alt="" />
                </div>
                <div className='gap-x-20'>
                    <h1 className='font-bold text-3xl'>Frequently Asked Questions</h1>
                    <p className='font-bold pt-4'>What can Amazon Gift Cards be redeemed towards?</p>
                    <p className='pt-4'>Amazon Gift Cards are redeemable towards the purchase of millions of eligible goods and services provided by Amazon.com Services LLC and its affiliates on www.amazon.com, or certain of its affiliated properties. Eligible goods and services are subject to change in our sole discretion.</p>
                    <p className='font-bold pt-4'>Are there any shipping costs on Amazon Gift Cards?</p>
                    <p className='pt-4'>Physical Amazon.com gift cards (except Anytime Gift Cards) are delivered with FREE One-Day shipping when you select One-Day shipping at checkout. For more information, check this page.</p>
                    <p className='font-bold pt-4'>Are there any fees or expiration date to use Amazon Gift Cards?</p>
                    <p className='pt-4'>Amazon Gift Cards have no fees and no expiration date.</p>
                    <p className='font-bold pt-4'>Someone has asked me to pay them with a gift card. Is this a scam?</p>
                    <p className='pt-4'>Beware of gift card scams. Do not provide any gift card details (such as the claim code) to someone you do not know or trust. Never use Amazon.com Gift Cards for payment outside of Amazon or its affiliated stores, and never use gift cards for other retailers and brands outside of their stores. Please visit this page for information or if you think you have been the target of a gift card scam.</p>
                    <p className='font-bold pt-4'>Where can I get other gift card-related questions answered?</p>
                    <p className='pt-4 pb-14'>Please visit our Gift Card Help Page.</p>
                </div>
            </div>
        </div>
    )
}

export default GiftCards