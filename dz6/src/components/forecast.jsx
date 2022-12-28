
import React from "react";
import axios from "axios";
import style from "./forecast.module.css"
import DayWeather from "./dayWeather";



class Forecast extends React.Component {
    constructor() {
        super()
        this.state = {
            cityName: 'Bishkek',
            data: []
        }
        this.changeCityName = this.changeCityName.bind(this)
    }
    changeCityName = (e) => {
        this.setState({ cityName: e.target.value })
        console.log(this.state.cityName);
    }

    componentDidMount = () =>{
    // onClick = () => {
        const response = axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${this.state.cityName}&units=metric&lang=ru&appid=b7cc8ffd3ad31a44a89a0b3440826757`)
            .then(res => {const data = res.data.list.filter(item => item.dt_txt.includes('12:00:00'))
            this.setState({data: data})
        } 
        )
    // }
}
    render() {
        return (
            <div className={style.container}>
                <div className={style.search}>
                    <input className={style.value}
                        value={this.state.cityName}
                        onChange={this.changeCityName}
                        type="text"
                        placeholder="Введите название города" />
                    <button className={style.btn} onClick={this.componentDidMount}>Поиск</button>
                </div>
                <div className={style.posts}>
                    <ul className ={style.box}>{this.state.data
                        &&
                        this.state.data.map((day ) =>
                        <div>
                            <li key={day.dt_txt.includes} className={style.forecastList}>
                                <DayWeather day={day}/>
                            </li>
                        </div>
                        )
                    }
                    </ul>
                </div>
            </div>
        )
    }

}
export default Forecast

{/* <DayWeather day={day} i={i} /> */ }
//  componentDidMount = () => {
//         const response = axios.get(
//             https://api.openweathermap.org/data/2.5/forecast?q=${this.state.cityName}&units=metric&lang=ru&appid=b7cc8ffd3ad31a44a89a0b3440826757)
//             .then(res => this.setState({ data: [res.data.list] }))


//     }

