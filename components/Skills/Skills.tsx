import { NextPage } from 'next';
import { SkillsProps } from './Skills.props';
import stls from './Skills.module.css';
import { P } from '../P/P';
import { HTag } from '../HTag/Htag';
import { Tag } from '../Tag/Tag';

export const Skills: NextPage<SkillsProps> = ({ tags }) => {

  return (
    <div className={stls.SkillsWrapper}>
      <HTag tag='h2' className={stls.skills} > Получаемые навыки </HTag>
      {tags.map(skill => <Tag size='medium' key={skill} >{skill}</Tag>)}
    </div>
  );
}
