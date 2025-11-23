import Mobile from './FeatMobile';
import Desktop from './FeatDesktop';
// import Tablet from './Tablet';
import { useDevice } from '../HOOKS/useDevice';

export default function Features() {
  const device = useDevice();

  if (device === 'mobile') return <Mobile />;
//   if (device === 'tablet') return <Tablet />;

  return <Desktop />;
}