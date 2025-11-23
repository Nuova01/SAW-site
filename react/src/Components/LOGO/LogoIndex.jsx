import Mobile from './LogoMobile';
import Desktop from './LogoDesktop';
// import Tablet from './Tablet';
import { useDevice } from '../HOOKS/useDevice';

export default function LogoStart() {
  const device = useDevice();

  if (device === 'mobile') return <Mobile />;
//   if (device === 'tablet') return <Tablet />;

  return <Desktop />;
}