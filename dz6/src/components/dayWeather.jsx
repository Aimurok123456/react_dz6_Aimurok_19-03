function DayWeather({ day }) {
  return (
    <div>
      <div>{day.dt_txt}</div>
      <div>
        <p>Температура:{day.main.temp.toFixed(1)}</p>
        <p>Минимум:  {day.main.temp_min.toFixed(1)}</p>
        <p> Максимум: {day.main.temp_max.toFixed(1)}</p>
      </div>
      <div><p>Чувствуется как:{day.main.feels_like.toFixed(1)}</p></div>
      <div><p>Ветер:{day.wind.speed}</p></div>
      <div><p>Влажность:{day.main.humidity}</p></div>
    </div>
  )
}

export default DayWeather