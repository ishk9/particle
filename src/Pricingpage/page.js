import React from 'react'
import Card from '../components/Card.js'

const plans = [
    {'id': 0, 'title': 'Hobby', 'price': 'Free', 'description': 'Free plan for all users', 'button': 'Get Started Free'},
    {'id': 1, 'title': 'Pro', 'price': '20', 'description': 'Ideal for individual developers', 'button': 'Get Pro plan'},
    {'id': 2, 'title': 'Enterprise', 'price':'40', 'description': 'Ideal for startups', 'button': 'Request a trial'},
]

function PricingPage() {
    return (
        <div className='h-screen w-screen flex flex-col justify-center items-center'>
            <h1 className='text-zinc-200 text-[5em] font-semibold tracking-tight'>Pricing</h1>

            <div className='flex h-full w-full justify-center items-center py-5'>
                {
                    plans.map((items) => (
                        <Card key={items.id} props={items}/>
                    ))

                }
            </div>
        </div>
    )
}

export default PricingPage
