import React, { useEffect, useState } from 'react'
import NewNavbar from '../components/newNavbar'
import img from "../constants/img"
import Footer from '../components/footer'
import icons from '../constants/icons'
import Contact from '../components/contact'

import { createClient } from '@supabase/supabase-js';
import { NavLink } from 'react-router-dom'

const supabase = createClient(
  "https://pnnrxnhjwbmukrujawov.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBubnJ4bmhqd2JtdWtydWphd292Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYxMDc0NzYsImV4cCI6MjA2MTY4MzQ3Nn0.oPpduvPQAopXd3J2mFbeqwa4O8WFqV4gPNZgn6G0nUA"
);


export default function Blog() {
    const [post, setPost] = useState();
    const [aLaUne, setALaUne] = useState()

    useEffect(() => {
        const fetchPost = async () => {
            const { data, error } = await supabase
                .from('blog')
                .select('*')

            if (error) {
                console.error("Erreur lors de la récupération de l'article :", error);
            } else {
                setPost(data);
                data.forEach((item) => {
                    if (item.isALaUne) {
                       return setALaUne(item)
                    }
                })
            }
        };

        fetchPost();
    }, []);

    return (
        <div className='w-full bg-third' id='home flex'>
            <NewNavbar page="blog" />
            <div className='w-full flex flex-col items-center justify-center mt-28'>
                <div className='w-full flex flex-col items-center justify-center max-w-[1200px]'>
                    <header className="mb-12 text-center w-full flex flex-col justify-center items-center">
                        <h1 className="text-4xl text-white font-bold tracking-tight mb-4">Blog Cybersécurité</h1>
                        <p className="text-gray-300 text-xl text-muted-foreground max-w-2xl mx-auto">
                            Analyses, conseils et réflexions sur les enjeux de la cybersécurité dans notre monde connecté
                        </p>
                    </header>
                    <div className='grid grid-cols-1 px-1 lg:grid-cols-3 gap-4 w-full'>
                        <div className='col-span-2 flex flex-col items-start justify-start'>
                            {
                                aLaUne &&
                                <div className='w-full flex bg-white flex-col border-1 rounded-xl items-start justify-start gap-4 p-2'>
                                    <img src={aLaUne.coverImage} alt="Blog Post" className='w-full h-[400px] object-cover rounded-xl' />
                                    <div className='w-full flex flex-col items-start justify-start'>
                                        <div className='flex w-[150px] py-1 bg-primary text-white justify-center items-center rounded-full'>
                                            A la une
                                        </div>
                                        {
                                            post &&
                                            <div className='w-full flex flex-col justify-center items-start p-4'>
                                                <h2 className='text-black text-lg  font-bold max-w-[400px]'>{aLaUne.title}</h2>
                                                <div className='text-gray-600 text-sm flex justify-start gap-2 items-center w-full'> <icons.CiCalendar /> {new Date(aLaUne.created_at).toLocaleDateString()}</div>
                                                <div className='text-gray-600 text-sm flex w-full justify-start items-center gap-2'><icons.MdAccessTime /> {aLaUne.readTime} min de lecture</div>
                                            </div>

                                        }
                                        <NavLink to={"/blogChildren?id=" + aLaUne.id} className='bg-primary text-white py-2 px-4 rounded-lg transition duration-300 ease-in-out'>
                                            Lire l'article
                                        </NavLink>
                                    </div>
                                </div>
                            }
                            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 w-full mt-8'>
                                {
                                    post &&
                                    post.map((item, index) =>
                                        <div key={index} className='w-full flex bg-white flex-col border-1 rounded-xl items-start justify-start gap-4 p-1 lg:p-2'>
                                            <img src={item.coverImage} alt="Blog Post" className='w-full h-[400px] object-cover rounded-xl' />
                                            <div className='w-full flex flex-col items-start justify-start'>
                                                <div className='w-full flex flex-col justify-center items-start p-1 lg:p-4'>
                                                    <h2 className='text-black text-sm lg:text-lg font-bold max-w-[400px]'>{item.title}</h2>
                                                    <div className='text-gray-600 text-sm flex justify-start gap-2 items-center w-full'> <icons.CiCalendar /> {new Date(item.created_at).toLocaleDateString()}</div>
                                                    <div className='text-gray-600 text-sm flex w-full justify-start items-center gap-2'><icons.MdAccessTime /> {item.readTime} min de lecture</div>
                                                </div>
                                                <NavLink to={"/blogChildren?id=" + item.id} className='border-1 border-primary text-primary py-2 w-full px-4 rounded-lg hover:bg-primary hover:text-white transition duration-300 ease-in-out'>
                                                    Lire l'article
                                                </NavLink>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                        <div className='col-span-1 flex flex-col items-start justify-start'>
                            <div className='w-full flex flex-col border-1 rounded-xl items-start justify-start gap-4 p-2'>
                                <h1 className='text-white font-bold text-xl'>A propos de moi</h1>
                                <div className='w-full flex flex-col items-center justify-center p-2'>
                                    <div className='h-16 w-16 rounded-full bg-primary flex justify-center items-center'>
                                        <img src={img.pm} alt="PEZONGO Mickael" className='w-16 h-16 rounded-full' />
                                    </div>
                                    <h1 className='text-white font-bold mt-8'>PEZONGO Mickael</h1>
                                    <p className='text-gray-500'>Etudiant en Cybersécurité</p>
                                    <p className='text-white text-xs text-center'>Actuellement en stage PFE au sein du groupe Michelin Bourges et étudiant en 5ᵉ année
                                        d'ingénierie en cybersécurité, passionné par la protection des systèmes d'informations.
                                        Compétent en tests d'intrusion, gestion des systèmes d'informations, sécurité réseau et création
                                        d’applications web et mobiles. Je cherche à contribuer à des projets innovants et ambitieux.
                                    </p>
                                </div>
                                
                            </div>
                            <div className='w-full flex flex-col border-1 rounded-xl items-start justify-start gap-4 p-2 mt-8'>
                                <h1 className='text-white font-bold'>Catégories</h1>
                                <div className='w-full flex-wrap flex gap-2 justify-start items-center'>
                                    {
                                        aLaUne && aLaUne.tags.map((item, index) =>
                                            <div className='flex gap-2 items-center justify-center bg-primary text-white px-2 rounded-full'>
                                                <span className='text-sm'>{item}</span>
                                            </div>
                                        )
                                    }

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Contact />
            <Footer />
        </div>
    )
}
