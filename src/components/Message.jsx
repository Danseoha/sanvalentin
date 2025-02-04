import React from 'react'
import {picture} from '../assets'
import Carousel from './Carousel'
import { ImageCard } from './ImageCard'
import {ArrowLeft } from './icons'
import { useNavigate } from 'react-router-dom'

function Message() {
  const navigate = useNavigate();

  // customize your own picture, title and subtext. You can also add more picture.
  const pictures = [
    { Image: picture, title: 'Febrero 4 2025', description: "Oyee gei y si me contestas en fa cuando te estes hhaciendo mensa? que grosera amor de vdd"},   
    { Image: picture, title: 'Febrero 4 2025', description: "Se que aveces puedo ser dificil,y aveces dramatico,pero no lo soyy por que quiera estarte jodiendo el dia,solamente aveces pienso que por que yo haria eso tu tambien lo harias,aunque ya se que eso no es asi,te pido perdon por darte lata"},

  ]
  return (
    <div className="min-h-screen bg-black/20 flex flex-col items-center justify-center">

      <div className="w-[90%] max-w-[400px]">
        <h1 className="text-2xl sm:text-2xl font-bold -mb-4 drop-shadow-lg text-white text-center">
            tus mensajes
          </h1>
        <Carousel>
          {pictures.map(({Image,title,description,index}) => (
            <ImageCard
              key={index}
              imageUrl={Image}
              altText="Placeholder image"
              title={title}
              description={description}
            />
          ))}
        </Carousel>

        <div className="flex justify-center w-full mt-12">
          <button
            className="px-4 py-2 flex justify-center items-center bg-white/20 gap-2 hover:bg-white/30 backdrop-blur-sm text-white text-sm border border-white/50 rounded-lg"
            onClick={() => navigate('/recap')}
          >
            <ArrowLeft /> Pagina anterior
          </button>

        </div>
      </div>
    </div>
  )
}

export default Message