import classNames from 'classnames';
import { NextPage } from 'next';
import { HhDataProps } from './HhData.props';
import { Card } from '../Card/Card';
import { HhDataGroup } from '../../types/page.types';
import stls from './HhData.module.css';
import { Rating } from '../svg';

export const HhData: NextPage<HhDataProps> = ({ count, juniorSalary, middleSalary, seniorSalary, updatedAt, _id, ...props }) => {

  const formatter = new Intl.NumberFormat('ru', { style: 'currency', currency: 'RUB', minimumFractionDigits: 0 });

  const HhDataGroups: HhDataGroup[] = [
    { title: 'Начальный', number: formatter.format(juniorSalary), rating: 1 },
    { title: 'Средний', number: formatter.format(middleSalary), rating: 2 },
    { title: 'Профессионал', number: formatter.format(seniorSalary), rating: 3 }
  ];

  return (
    <div className={stls.hhData} {...props}>
      <Card className={stls.hhTotalVacancies}>
        <span>Всего вакансий</span>
        <span>{count}</span>
      </Card>
      <Card className={stls.levelVacancies} >
        {HhDataGroups.map(card => (
          <div key={card.title} className={stls.vacancies}>
            <span>{card.title}</span>
            <span>{card.number}</span>
            <span className={stls.wrapperRating}>
              {HhDataGroups.map((rating, i) => {
                const RatingClass = classNames(stls.rating, {
                  [stls.ratingFill]: i < card.rating
                })
                return <Rating key={rating.title} className={RatingClass} />
              })}
            </span>
          </div>
        )
        )}
      </Card>
    </div>
  );
};
