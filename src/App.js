import Header from './components/Header';
import Main from './components/Main';
import Map from './components/Section';
import { InfoProvider } from './context';
import './style.css';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

function App() {
  return (
    <InfoProvider>
      <Header />
      <Main />
      <Map />
    </InfoProvider>
  );
}

export default App;
