import classNames from 'classnames';
import { NextPage } from 'next';
import { HTag } from '../HTag/Htag';
import { AdvantageBlockProps } from './AdvantageBlock.props';
import stls from './AdvantageBlock.module.css';
import { CheckMark } from '../svg';

export const AdvantageBlock: NextPage<AdvantageBlockProps> = ({ advantages }) => {


  return (
    <div className={stls.aBlockWrapper} >
      <HTag tag='h2'>Преимущества</HTag>

      <div className={stls.advantageWrapper}>
        {advantages.map(advantage => (
          <section key={advantage._id}>
            <div className={stls.advantageTitle}>
              <CheckMark />
              <HTag tag='h3' >{advantage.title}</HTag>
            </div>
            <div className={stls.advantageDescription}>
              {advantage.description}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}