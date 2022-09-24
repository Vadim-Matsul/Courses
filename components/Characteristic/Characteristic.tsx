import classNames from 'classnames';
import { NextPage } from 'next';
import { CharacteristicProps } from './Characteristic.props';
import stls from './Characteristic.module.css';

export const Characteristic: NextPage<CharacteristicProps> = ({ characteristics, className, ...props }) => {

  const CharacteristicsClass = classNames(className);

  return (
    <div className={CharacteristicsClass} {...props}>
      {characteristics.map(characteristic => (
        <div
          key={characteristic.name}
          className={stls.characteristic}
        >
          <span>{characteristic.name}</span>
          <div />
          <span>{characteristic.value}</span>
        </div>
      ))}
    </div>
  )
}