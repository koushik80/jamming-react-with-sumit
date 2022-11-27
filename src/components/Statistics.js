import Statistic from './Statistic';


const Statistics = ({clicks}) => {
  return (
    <div>
      <table>
        <tbody>
          <Statistic text='good' value={clicks.good} />
          <Statistic text='neutral' value={clicks.neutral} />
          <Statistic text='bad' value={clicks.bad} />
        </tbody>
      </table>
    </div>
  )
}

export default Statistics;
