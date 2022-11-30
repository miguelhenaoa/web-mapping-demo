import Map from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';

import EsriMap from '../components/EsriMap';
import Layout from '../components/Layout';

export default function Home() {
  const map = new Map({
    basemap: 'hybrid'
  })
  
  const view = new MapView({
    map: map,
    center: [-74.2, 4.64],
    zoom: 5
  })
  return (
    <Layout>
      <EsriMap view={view} />
    </Layout>
  )
}
