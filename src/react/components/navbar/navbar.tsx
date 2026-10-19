import { Image, Select } from 'polpo/components';
import { FaCalendar } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

import './navbar.styles.css';

import { useForm210, useForm210FieldParams } from '@contexts';
import { PATHS, YearsForm210Data } from '@core/constants';
import { SectionLayout } from '@layouts/section-layout';

export const Navbar = () => {
  const { setData } = useForm210();
  const { value: year } = useForm210FieldParams('year');

  return (
    <SectionLayout className='navbar' fitHeightContent contentClassName='navbar-content'>
      <section className='navbar-logo'>
        <Image src='/assets/images/logo.png' alt='logo' />
      </section>

      <section className='navbar-links'>
        <NavLink className='nav-link' to={PATHS.HOME}>
          Inicio
        </NavLink>
        <NavLink className='nav-link' to={PATHS.FORM210_FORM}>
          Formulario 210
        </NavLink>
      </section>

      <section className='navbar-actions'>
        <Select
          style={{ width: '100px' }}
          leftIcon={FaCalendar}
          options={Object.keys(YearsForm210Data).toReversed()}
          name='year'
          value={`${year}`}
          multiselect={false}
          setValue={year => setData(prev => ({ ...prev, year: +(year ?? 0) }))}
        />
      </section>
    </SectionLayout>
  );
};
