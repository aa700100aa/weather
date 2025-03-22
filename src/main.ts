import "./style.css";
//receiveWeatherInfo関数をインポート。
import { receiveWeatherInfo } from "./weatherinfo-receiver";
// OpenWeatherのiconコード → weather-iconのクラスに変換
import { getIconClass } from "./getIconClass";
// アイコンによって色を変更
import { getIconColor } from "./getIconColor";
// 日付フォーマットを "3/22(土)" のようにする関数
import { formatDate } from "./formatDate";

const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

const weatherinfoUrl =
  `https://api.openweathermap.org/data/2.5/forecast?q=Tokyo&appid=${apiKey}&lang=ja&units=metric`;

// 🌈 メイン処理
receiveWeatherInfo(weatherinfoUrl).then((weatherInfo) => {
  const forecasts = weatherInfo.dailyForecasts;

  const app = document.querySelector<HTMLDivElement>("#app");
  if (!app) return;

  const title = document.createElement("h2");
  title.className = "weather-title";
  title.textContent = `${weatherInfo.cityName}の5日間の天気`;

  const container = document.createElement("div");
  container.className = "weather-grid";

  forecasts.forEach((item) => {
    const dateFormatted = formatDate(item.dt_txt);
    const desc = item.weather[0].description;
    const temp = item.main.temp.toFixed(1);
    const iconCode = item.weather[0].icon;
    const iconClass = getIconClass(iconCode);
    const iconColor = getIconColor(iconCode);

    const card = document.createElement("div");
    card.className = "weather-card";

    const icon = document.createElement("i");
    icon.className = `wi ${iconClass} weather-icon`;
    icon.style.color = iconColor;

    const info = document.createElement("div");
    info.className = "weather-info";
    info.innerHTML = `
      <p class="weather-date">${dateFormatted}</p>
      <p class="weather-desc">${desc}（${temp}℃）</p>
    `;

    card.appendChild(icon);
    card.appendChild(info);
    container.appendChild(card);
  });

  app.innerHTML = "";
  app.appendChild(title);
  app.appendChild(container);
});
