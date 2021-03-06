import React, { useEffect, useState } from 'react'
import { Map, Marker, TileLayer } from 'react-leaflet';
import mapIcon from "../utils/mapIcon";

import editIcon from '../images/edit-3.svg'
import trashIcon from '../images/trash.svg'
import noOneIcon from '../images/no-one.svg'

import SidbarApp from '../components/SidbarApp'

import '../styles/pages/dashboard.css'
import api from '../services/api';
import { LeafletMouseEvent } from 'leaflet';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

export interface OrphanagesProps {
  about: string
  id: number
  images: Array<{
    id: number
    url: string
  }>
  instructions: string
  latitude: number
  longitude: number
  name: string
  open_on_weekends: boolean
  opening_hours: string
  pending: boolean
}


const Dashboard: React.FC = () => {
  const [position, setPosition] = useState({ latitude: 0, longitude: 0 })

  const [orphanages, setOrphanages] = useState<OrphanagesProps[]>([])
  const [orphanagesPending, setOrphanagesPending] = useState<OrphanagesProps[]>([])

  useEffect(() => {
    api.get('orphanages').then(response => {
      // console.log(response.data);
      setOrphanages(response.data)
    })

  }, [])

  useEffect(() => {
    api.get('orphanage-pending').then(response => {

      setOrphanagesPending(response.data)
    })
  }, [])

  function handleMapClick(event: LeafletMouseEvent) {

    const { lat, lng } = event.latlng

    setPosition({
      latitude: lat,
      longitude: lng,
    })
  }


  return (
    <div id="page-dashboard">
      <SidbarApp />
      <main>
        <section>
          <header>
            <h1>Orfanatos cadastrados</h1>
            <span>
              {orphanages.length > 1 ? `${orphanages.length} orfanatos` : `${orphanages.length} orfanato`}
            </span>
          </header>

          <div className="cards">
            {orphanages.map(orphanage => {
              return (

                <div className="card" key={orphanage.id}>

                  <Map
                    center={[orphanage.latitude, orphanage.longitude]}
                    style={{ width: '100%', height: 227, borderRadius: 20 }}
                    zoom={15}

                  >
                    <TileLayer
                      url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                    />

                    {orphanage.latitude !== 0 && (
                      <Marker
                        interactive={false}
                        icon={mapIcon}
                        position={[orphanage.latitude, orphanage.longitude]}
                      />)}

                    {/*  */}
                  </Map>
                  <div className="options">
                    <h2>{orphanage.name}</h2>
                    <div>
                      <Link to={`/update-orphanage/${orphanage.id}`}>
                        <button type="button">
                          <img src={editIcon} alt="" />
                        </button>
                      </Link>
                      <Link to={`/delete-orphanage/${orphanage.id}`}>
                        <button type="button">
                          <img src={trashIcon} alt="" />
                        </button>
                      </Link>
                    </div>

                  </div>
                </div>
              )
            })}
          </div>
        </section>

        <section className="display-hide">
          <header>
            <h1>Cadastros Pendentes</h1>
            <span>
              {orphanagesPending.length > 1 ? `${orphanagesPending.length} orfanatos` : `${orphanagesPending.length} orfanato`}
            </span>
          </header>

          {orphanagesPending.length > 0 // if

            ? // condition

            <div className="cards">

              {orphanagesPending.map(orphanagePending => {
                return (

                  <div className="card" key={orphanagePending.id}>
                    <Map
                      center={[orphanagePending.latitude, orphanagePending.longitude]}
                      style={{ width: '100%', height: 227, borderRadius: 20 }}
                      zoom={15}
                      onclick={handleMapClick}

                    >
                      <TileLayer
                        url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                      />

                      {orphanagePending.latitude !== 0 && (
                        <Marker
                          interactive={false}
                          icon={mapIcon}
                          position={[orphanagePending.latitude, orphanagePending.longitude]}
                        />)}

                      {/*  */}
                    </Map>
                    <div className="options">
                      <h2>{orphanagePending.name}</h2>
                      <Link to={`/pending-orphanage/${orphanagePending.id}`}>
                        <button type="button" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                          <FiArrowRight size={24} color="#15C3D6" />
                        </button>
                      </Link>

                    </div>

                  </div>
                )

              })}

            </div>

            : //else

            <div className="no-one-data">
              <img src={noOneIcon} alt="Nenhum no momento" />
              <span>Nenhum no momento</span>
            </div>
          }

        </section>
      </main>
    </div>
  )
}

export default Dashboard