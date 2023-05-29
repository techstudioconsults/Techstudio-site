/* eslint-disable react/prop-types */
import React from 'react'
import style from './ContactSection2.module.scss'
import GoogleMapReact from 'google-map-react'
// import './map.css'
import { Icon } from '@iconify/react'

const Marker = () => (
  <div>
    <Icon width={`3rem`} color='red' icon={`entypo:location-pin`} />
  </div>
)

const Map = ({ location }) => {
  const { lat, lng, address } = location

  const defaultProps = {
    center: {
      lat,
      lng,
    },
    zoom: 17,
  }

  return (
    <div className={style.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: `AIzaSyA5aU7vSwabkvdjPeiSQ-ooJRnwPEoWAcI` }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <Marker lat={lat} lng={lng} text={address} />
      </GoogleMapReact>
    </div>
  )
}

export default Map
