import Mobile from './DescMobile';
import Desktop from './DescDesktop';
// import Tablet from './Tablet';
import { useDevice } from '../HOOKS/useDevice';

export default function Description() {
  const device = useDevice();

  if (device === 'mobile') return <Mobile />;
//   if (device === 'tablet') return <Tablet />;

  return <Desktop />;
}