import { useContext, useEffect } from 'react';
import { useMap } from 'react-leaflet';
import { DataContext } from '../../context';

export default function ChangeView() {
  const { Data, Location } = useContext(DataContext);
  const data = Data[0];
  const [location, setLocation] = Location;

  const getLocation = async () => {
    if (!data.location) return;
    setLocation([data.location.lat, data.location.lng]);
  };

  useEffect(() => {
    getLocation();
  }, [data]);

  const map = useMap();
  map.setView(location, 15);
  return null;
}
