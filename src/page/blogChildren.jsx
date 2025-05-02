import React, { useEffect, useState } from 'react'
import NewNavbar from '../components/newNavbar'
import img from "../constants/img"
import Footer from '../components/footer'
import { Tag } from "lucide-react"
import icons from '../constants/icons'
import Contact from '../components/contact'

import { createClient } from '@supabase/supabase-js';
import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom'

// Initialisation du client Supabase
const supabase = createClient(
  "https://pnnrxnhjwbmukrujawov.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBubnJ4bmhqd2JtdWtydWphd292Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYxMDc0NzYsImV4cCI6MjA2MTY4MzQ3Nn0.oPpduvPQAopXd3J2mFbeqwa4O8WFqV4gPNZgn6G0nUA"
);

export default function BlogChildren() {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const id = params.get('id');
    const [post, setPost] = useState();

    useEffect(() => {
        const fetchPost = async () => {
            const { data, error } = await supabase
                .from('blog')
                .select('*, similar1(*), similar2(*), similar3(*)')
                .eq('id', id) // Remplacez 1 par l'ID de votre article
                .single();

            if (error) {
                console.error("Erreur lors de la récupération de l'article :", error);
            } else {
                setPost(data);
            }
        };

        fetchPost();
    }
    , [id]);

  return (
    <div className='w-full bg-third' id='home'>
        <NewNavbar page="blog" />
        {
            post &&
            <div className='w-full flex justify-center items-center'>
                <div className='w-full max-w-[1200px] flex flex-col h-auto justify-center items-center mt-32'>
                    <NavLink to="/blog" className='w-full flex justify-start items-center text-gray-400 hover:text-white mb-8 '>
                        <icons.IoIosArrowBack className='h-4 w-4 mr-1' /> Retour aux articles
                    </NavLink>
                    <article className='w-full flex flex-col justify-center items-center px-1 lg:px-16'>
                        <header className='lg:mt-8 flex flex-col justify-center items-start w-full'>
                            <h1 className='text-2xl lg:text-4xl font-bold text-white max-w-[800px]'>{post.title}</h1>
                            <div className='gap-2 w-full flex lg:flex-row flex-col justify-center lg:justify-start items-center mt-4'>
                                <div className='flex justify-center items-center'>
                                    <div className='flex justify-start items-center text-xs lg:text-sm'>
                                        <icons.CiCalendar className='h-4 w-4 text-gray-400' />
                                        <p className='text-gray-400 text-xs lg:text-sm ml-2'>Publié: {new Date(post.created_at).toLocaleDateString()}</p>
                                    </div>
                                    <div className='flex justify-start items-center ml-4'>
                                        <icons.MdAccessTime className='h-4 w-4 text-gray-400' />
                                        <p className='text-gray-400 text-sm ml-2'>{post.readTime} min de lecture</p>
                                    </div>
                                </div>
                                <div className="flex gap-2 ml-2 flex-wrap justify-center items-center">
                                    <Tag className="h-4 w-4 text-gray-400" />
                                    {
                                        post.tags.length && post.tags.map((tag, index) => (
                                            <p key={index} className="text-white text-sm bg-primary px-2 flex justify-center items-center rounded-full ">{tag}</p>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className='w-full flex justify-start items-center mt-8'>
                                <div className='w-16 bg-gray-500 rounded-full h-16 flex justify-center items-center'>
                                    <img src={img.pm} alt="lithyus" className='w-full h-full rounded-full' />
                                </div>
                                <div className='flex flex-col justify-center items-start ml-4'>
                                    <h2 className='text-white text-lg font-bold'>{post.author}</h2>
                                    <p className='text-gray-400 text-sm'>{post.authorDesc}</p>
                                </div>
                            </div>
                        </header>
                        <div className='w-full flex justify-center items-center mt-8'>
                            <img src={post.coverImage} alt="lithyus" className='w-full h-[400px] object-cover rounded-lg' />
                        </div>
                        <div className="prose prose-light max-w-none mb-12 text-white text-justify" dangerouslySetInnerHTML={{ __html: post.content }} />
                        <div className='w-full flex justify-between items-center mt-8 border-y-2 border-gray-500 py-2'>
                            <div className='flex justify-start items-center gap-1'>
                                <button className='border-1 border-gray-400 rounded-lg h-8 w-12 lg:w-32 text-white flex justify-center items-center mr-4 hover:bg-primary gap-1 lg:gap-2 duration-300'>
                                    <icons.LuShare2 /> 
                                    <span className='hidden lg:block'>Partager</span>
                                </button>
                                <button className='border-1 border-gray-400 rounded-lg h-8 w-12 text-xs lg:w-32 text-white flex justify-center items-center mr-4 hover:bg-primary gap-2 duration-300'>
                                    <icons.CiBookmark /> 
                                    <span className='hidden lg:block'>Sauvegarder</span>
                                </button>
                            </div>
                            {/* <div className='text-white flex justify-center items-center gap-2'>
                                35 <icons.LiaEyeSolid className='text-white text-2xl' />
                            </div> */}
                        </div>
                    </article>
                    <div className='w-full flex flex-col justify-center items-start mt-16 px-1 '>
                        <h2 className='text-2xl font-bold text-white'>Articles similaires</h2>
                        <div className='w-full grid grid-cols-1 gap-4 lg:grid-cols-3 justify-center items-center mt-4'>
                            {
                                post.similar1 &&
                                <div className='col-span-1 h-[400px] bg-white rounded-lg'>
                                    <img src={post.similar1.coverImage} alt="lithyus" className='w-full h-[60%] object-cover rounded-t-lg' />
                                    <div className='w-full flex flex-col justify-center items-start p-4'>
                                        <h2 className='text-black text-lg font-bold'>{post.similar1.title}</h2>
                                        <div className='text-gray-600 text-sm flex justify-start gap-2 items-center w-full'> <icons.CiCalendar /> {new Date(post.similar1.created_at).toLocaleDateString()}</div>
                                        <div className='text-gray-600 text-sm flex w-full justify-start items-center gap-2'><icons.MdAccessTime /> {post.similar1.readTime} min de lecture</div>
                                        <NavLink className={'text-primary border-1 border-primary text-sm rounded-lg flex justify-center items-center px-2 font-bold mt-2 h-8 duration-300  hover:bg-primary hover:text-white'} to={`/blogChildren?id=${post.similar1.id}`}>
                                            Lire l'article
                                        </NavLink>
                                    </div>
                                </div>
                            }
                            {
                                post.similar2 &&
                                <div className='col-span-1 h-[400px] bg-white rounded-lg'>
                                    <img src={post.similar2.coverImage} alt="lithyus" className='w-full h-[60%] object-cover rounded-t-lg' />
                                    <div className='w-full flex flex-col justify-center items-start p-4'>
                                        <h2 className='text-black text-lg font-bold'>{post.similar2.title}</h2>
                                        <div className='text-gray-600 text-sm flex justify-start gap-2 items-center w-full'> <icons.CiCalendar /> {new Date(post.similar2.created_at).toLocaleDateString()}</div>
                                        <div className='text-gray-600 text-sm flex w-full justify-start items-center gap-2'><icons.MdAccessTime /> {post.similar2.readTime} min de lecture</div>
                                        <NavLink className={'text-primary border-1 border-primary text-sm rounded-lg flex justify-center items-center px-2 font-bold mt-2 h-8 duration-300  hover:bg-primary hover:text-white'} to={`/blogChildren?id=${post.similar2.id}`}>
                                            Lire l'article
                                        </NavLink>
                                    </div>
                                </div>
                            }
                            {
                                post.similar3 &&
                                <div className='col-span-1 h-[400px] bg-white rounded-lg'>
                                    <img src={post.similar3.coverImage} alt="lithyus" className='w-full h-[60%] object-cover rounded-t-lg' />
                                    <div className='w-full flex flex-col justify-center items-start p-4'>
                                        <h2 className='text-black text-lg font-bold'>{post.similar3.title}</h2>
                                        <div className='text-gray-600 text-sm flex justify-start gap-2 items-center w-full'> <icons.CiCalendar /> {new Date(post.similar3.created_at).toLocaleDateString()}</div>
                                        <div className='text-gray-600 text-sm flex w-full justify-start items-center gap-2'><icons.MdAccessTime /> {post.similar3.readTime} min de lecture</div>
                                        <NavLink className={'text-primary border-1 border-primary text-sm rounded-lg flex justify-center items-center px-2 font-bold mt-2 h-8 duration-300  hover:bg-primary hover:text-white'} to={`/blogChildren?id=${post.similar3.id}`}>
                                            Lire l'article
                                        </NavLink>
                                    </div>
                                </div>
                            }
                        </div>

                    </div>
                </div>
            </div>
        }
        <Contact />
        <Footer />
      
    </div>
  )
}
