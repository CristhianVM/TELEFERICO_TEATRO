import React from "react";
import { Link } from "@inertiajs/react";

import client1 from '../assets/images/client/01.jpg'
import client2 from '../assets/images/client/02.jpg'
import client3 from '../assets/images/client/03.jpg'
import client4 from '../assets/images/client/04.jpg'
import client5 from '../assets/images/client/05.jpg'
import client6 from '../assets/images/client/06.jpg'

export default function Clients(){
    const clientData =[
        {
            image:client1,
            image1:client2,
            name:'Thomas Israel',
            name1:'Barbara McIntosh',
            desc:"I didn't know a thing about icon design until I read this book. Now I can create any icon I need in no time. Great resource!",
            desc1:"There are so many things I had to do with my old software that I just don't do at all with Mortail.Ai. Suspicious but I can't say I don't love it."
        },
        {
            image:client3,
            image1:client4,
            name:'Carl Oliver',
            name1:'Jill Webb',
            desc:"The best part about Mortail.Ai is every time I pay my employees, my bank balance doesn't go down like it used to. Looking forward to spending this extra cash when I figure out why my card is being declined.",
            desc1:"I'm trying to get a hold of someone in support, I'm in a lot of trouble right now and they are saying it has something to do with my books. Please get back to me right away."
        },
        {
            image:client5,
            image1:client6,
            name:'Barbara McIntosh',
            name1:'Janisha Doll',
            desc:"I used to have to remit tax to the EU and with Mortail.Ai I somehow don't have to do that anymore. Nervous to travel there now though.",
            desc1:"This is the fourth email I've sent to your support team. I am literally being held in jail for tax fraud. Please answer your damn emails, this is important."
        },
    ]
        return(
            <>
            <div className="container relative md:mt-24 mt-16">
                <div className="grid grid-cols-1 pb-6 text-center">
                    <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">What Our Users Say</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">Artificial intelligence makes it fast easy to create content for your blog, social media, website, and more!</p>
                </div>

                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-6 gap-6">
                    {clientData.map((item,index)=>{
                        return(
                            <div className="grid grid-cols-1 gap-6 h-fit" key={index}>
                                <div className="rounded-lg shadow dark:shadow-gray-800 p-6 border-b-4 border-amber-400 bg-white dark:bg-slate-900 h-fit">
                                    <div className="flex items-center pb-6 border-b border-gray-100 dark:border-gray-800">
                                        <img src={item.image} className="h-16 w-16 rounded-full shadow dark:shadow-gray-800" alt=""/>

                                        <div className="ps-4">
                                            <Link href="" className="text-lg hover:text-amber-400 duration-500 ease-in-out">{item.name}</Link>
                                            <p className="text-slate-400">User</p>
                                        </div>
                                    </div>

                                    <div className="mt-6">
                                        <p className="text-slate-400">{item.desc}</p>
                                        <ul className="list-none mb-0 text-amber-400 mt-2">
                                            <li className="inline"><i className="mdi mdi-star"></i></li>
                                            <li className="inline"><i className="mdi mdi-star"></i></li>
                                            <li className="inline"><i className="mdi mdi-star"></i></li>
                                            <li className="inline"><i className="mdi mdi-star"></i></li>
                                            <li className="inline"><i className="mdi mdi-star"></i></li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="rounded-lg shadow dark:shadow-gray-800 p-6 border-b-4 border-amber-400 bg-white dark:bg-slate-900 h-fit">
                                    <div className="flex items-center pb-6 border-b border-gray-100 dark:border-gray-800">
                                        <img src={item.image1} className="h-16 w-16 rounded-full shadow dark:shadow-gray-800" alt=""/>

                                        <div className="ps-4">
                                            <Link href="" className="text-lg hover:text-amber-400 duration-500 ease-in-out">{item.name1}</Link>
                                            <p className="text-slate-400">User</p>
                                        </div>
                                    </div>

                                    <div className="mt-6">
                                        <p className="text-slate-400">{item.desc1}</p>
                                        <ul className="list-none mb-0 text-amber-400 mt-2">
                                            <li className="inline"><i className="mdi mdi-star"></i></li>
                                            <li className="inline"><i className="mdi mdi-star"></i></li>
                                            <li className="inline"><i className="mdi mdi-star"></i></li>
                                            <li className="inline"><i className="mdi mdi-star"></i></li>
                                            <li className="inline"><i className="mdi mdi-star"></i></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            </>
        )
}
