import React from 'react';

const StatisticLine = ({ text, value }) => {
  if(text === "positive") {
   return (
     <tr><td>{ text } { value } %</td></tr>
  )
}
return (
      <tr><td>{ text } { value }</td></tr>
  )
}
export default StatisticLine;
