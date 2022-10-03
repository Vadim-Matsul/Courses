import { NextPage } from 'next';
import { SkillsProps } from './Skills.props';
import stls from './Skills.module.css';
import { HTag, Tag } from '..';
import React from 'react';

const Skills: NextPage<SkillsProps> = ({ tags }) => {

  return (
    <div className={stls.SkillsWrapper}>
      <HTag tag='h2' className={stls.skills} > Получаемые навыки </HTag>
      {tags.map(skill => <Tag size='medium' key={skill} >{skill}</Tag>)}
    </div>
  );
}

export default React.memo(Skills)
