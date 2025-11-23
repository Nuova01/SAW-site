import Mobile from './EndMobile';
import Desktop from './EndDesktop';
// import Tablet from './Tablet';
import { useDevice } from '../HOOKS/useDevice';

export default function End() {
  const device = useDevice();

  if (device === 'mobile') return <Mobile />;
//   if (device === 'tablet') return <Tablet />;

  return <Desktop />;
}