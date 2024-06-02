import { DateRange } from 'react-date-range';
import {useState} from 'react'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import "./dateSelector.css"

const DateSelector = () => {
    
    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: null,
          key: 'selection'
        }
      ]);
  return (
    <div>
    <DateRange
    editableDateInputs={true}
    onChange={item => setDate([item.selection])}
    moveRangeOnFirstSelection={false}
    ranges={date}
    className="date"
    />
    </div>
    
  )
}

export default DateSelector