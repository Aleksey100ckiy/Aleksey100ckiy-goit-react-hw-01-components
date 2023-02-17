// import clsx from "clsx";
import PropTypes from 'prop-types';
import css from 'components/Statistics/Statistics.module.css';
import { getRandomHexColor } from './HexColor';

export const Statistics = ({ title, stats }) => {
  return <section className={css.statistics}>
        <h2 className={css.title}>{title}</h2>

  <ul className={css.statList}>
    {stats.map(d => (
      <li key={d.id} className={css.item} style={{
      backgroundColor: getRandomHexColor()
   }} >
      <span className={css.label}>{d.label} </span>
      <span className={css.percentage}>{d.percentage}%</span>
    </li>))}
  </ul>
</section>
}
 
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  )
};