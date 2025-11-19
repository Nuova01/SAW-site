import Mobile from './Mobile';
import Desktop from './Desktop';
// import Tablet from './Tablet';
import { useDevice } from '../HOOKS/useDevice';

export default function Video() {
  const device = useDevice();

  if (device === 'mobile') return <Mobile />;
//   if (device === 'tablet') return <Tablet />;

  return <Desktop />;
}