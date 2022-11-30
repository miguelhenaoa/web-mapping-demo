import { useEffect, useRef } from 'react';
import MapView from '@arcgis/core/views/MapView';
import SceneView from '@arcgis/core/views/SceneView';

import styles from '../styles/EsriMap.module.css'

interface Props {
  view: MapView | SceneView
}

function EsriMap({ view }: Props) {
  const mapDiv = useRef(null)
  useEffect(() => {
    if (mapDiv.current) {
      view.container = mapDiv.current
    }
  }, [view])
  return <div className={styles.mapDiv} ref={mapDiv}></div>
}

export default EsriMap
