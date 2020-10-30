import React, { FormEvent, useState, ChangeEvent, useEffect } from "react";
import { Map, Marker, TileLayer } from 'react-leaflet';
import { FiPlus } from "react-icons/fi";
import { LeafletMouseEvent } from 'leaflet'

import '../styles/pages/pending-orphanage.css';
import Sidbar from "../components/Sidbar";
import mapIcon from "../utils/mapIcon";
import api from "../services/api";
import { useHistory } from "react-router-dom";

export default function PendingOrphanage() {

  const history = useHistory()

  const splitOrphanage = window.location.pathname.split('/')
  const orphanageId = splitOrphanage[2]

  const [position, setPosition] = useState({ latitude: 0, longitude: 0 })

  const [name, setName] = useState('')
  const [about, setAbout] = useState('')
  const [instructions, setInstructions] = useState('')
  const [opening_hours, setOpening_hours] = useState('')
  const [open_on_weekends, setOpen_on_weekends] = useState(true)
  const pending = false
  const [images, setImages] = useState<File[]>([])
  const [previewImages, setPreviewImages] = useState<string[]>([])

  useEffect(() => {
    api.get(`orphanages/${orphanageId}`).then(response => {

      console.log(response.data);

      setName(response.data.name)
      setAbout(response.data.about)
      setInstructions(response.data.instructions)
      setOpening_hours(response.data.opening_hours)
      setOpen_on_weekends(response.data.open_on_weekends)
      setPosition({ latitude: response.data.latitude, longitude: response.data.longitude })
      setPreviewImages(response.data.images.map((image: any) => { return image.url }))
    })
  }, [orphanageId])
  function handleMapClick(event: LeafletMouseEvent) {

    const { lat, lng } = event.latlng

    setPosition({
      latitude: lat,
      longitude: lng,
    })
  }

  function handleSelectImages(event: ChangeEvent<HTMLInputElement>) {
    if (!event.target.files) {
      return;
    }

    const selectedImages = Array.from(event.target.files)

    setImages(selectedImages)

    const selectedImagesPreview = selectedImages.map(image => {
      return URL.createObjectURL(image)
    })

    setPreviewImages(selectedImagesPreview)

  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()

    // const { latitude, longitude } = position

    // const data = new FormData()

    // data.append('name', name)
    // data.append('about', about)
    // data.append('latitude', String(latitude))
    // data.append('longitude', String(longitude))
    // data.append('instructions', instructions)
    // data.append('opening_hours', opening_hours)
    // data.append('open_on_weekends', String(open_on_weekends))

    // images.forEach(image => {
    //   data.append('images', image);
    // })

    // await api.put('update-orphanage', data)

    
    
    const latitude = position.latitude
    const longitude = position.longitude
    
    const datas = {
      name,
      about,
      instructions,
      opening_hours,
      open_on_weekends,
      pending,
      latitude,
      longitude
    }
    
    await api.put(`update-orphanage/${orphanageId}`, datas)
    
    alert('Cadastro aceito com sucesso!')
    history.push('/dashboard')

    console.log(datas);

  }

  async function handleDeleteOrphanage() {

    await api.delete(`/delete-users/${orphanageId}`)
    
    alert('Cadastro recusado com sucesso!')

    history.push('/dashboard')
    
  }



  return (

    <div id="page-pending-orphanage">


      <Sidbar />

      <main>
        <form onSubmit={handleSubmit} className="pending-orphanage-form">
          <fieldset>
            <legend>Dados</legend>

            <Map
              center={[position.latitude, position.longitude]}
              style={{ width: '100%', height: 280 }}
              zoom={15}
              onclick={handleMapClick}
            >
              <TileLayer
                url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
              />

              {position.latitude !== 0 && (
                <Marker
                  interactive={false}
                  icon={mapIcon}
                  position={[position.latitude, position.longitude]}
                />)}

              {/*  */}
            </Map>

            <div className="input-block">
              <label htmlFor="name">Nome</label>
              <input
                id="name"
                value={name}
                onChange={event => setName(event.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="about">Sobre <span>Máximo de 300 caracteres</span></label>
              <textarea
                id="name"
                maxLength={300}
                value={about}
                onChange={event => setAbout(event.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="images">Fotos</label>

              <div className="images-container">
                {previewImages.map(image => {
                  return (
                    <img key={image} src={image} alt={name} />
                  )
                })}

                <label htmlFor="image[]" className="new-image">
                  <FiPlus size={24} color="#15b6d6" />
                </label>

              </div>
              <input multiple onChange={handleSelectImages} type="file" id="image[]" />

            </div>
          </fieldset>

          <fieldset>
            <legend>Visitação</legend>

            <div className="input-block">
              <label htmlFor="instructions">Instruções</label>
              <textarea
                id="instructions"
                value={instructions}
                onChange={event => setInstructions(event.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="opening_hours">Horário de funcionamento</label>
              <input
                id="opening_hours"
                value={opening_hours}
                onChange={event => setOpening_hours(event.target.value)}

              />
            </div>

            <div className="input-block">
              <label htmlFor="open_on_weekends">Atende fim de semana</label>

              <div className="button-select">
                <button
                  type="button"
                  className={open_on_weekends ? 'active' : ''}
                  onClick={() => setOpen_on_weekends(true)}
                >
                  Sim
                </button>

                <button
                  type="button"
                  className={!open_on_weekends ? 'active' : ''}
                  onClick={() => setOpen_on_weekends(false)}
                >
                  Não
                </button>
              </div>
            </div>
          </fieldset>

          <div className="button-pending">
          <button type="button" onClick={handleDeleteOrphanage}>
            Recusar
          </button>
          <button type="submit">
            Aceitar
          </button>

          </div>

        </form>
      </main>
    </div>
  );
}

// return `https://a.tile.openstreetmap.org/${z}/${x}/${y}.png`;
