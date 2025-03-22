// 天気情報を表すクラス。
export class WeatherInfo {
  private _forecastJSON: ForecastResponse;

  constructor(forecastJSON: ForecastResponse) {
    this._forecastJSON = forecastJSON;
  }

  // 都市名
  get cityName() {
    return this._forecastJSON.city.name;
  }

  // 各日の最初の天気（5日分）
  get dailyForecasts() {
    const list = this._forecastJSON.list;
    const uniqueDates = new Set<string>();
    const dailyData: ForecastItem[] = [];

    for (const item of list) {
      const date = item.dt_txt.split(" ")[0]; // "2025-03-22 06:00:00" → "2025-03-22"
      if (!uniqueDates.has(date)) {
        uniqueDates.add(date);
        dailyData.push(item);
      }
      if (dailyData.length === 5) break;
    }

    return dailyData;
  }
}

// APIレスポンスの型定義
interface ForecastResponse {
  cod: string;
  message: number;
  cnt: number;
  list: ForecastItem[];
  city: {
    name: string;
  };
}

interface ForecastItem {
  dt: number;
  main: {
    temp: number;
  };
  weather: {
    description: string;
    icon: string;
  }[];
  dt_txt: string; // "2025-03-22 06:00:00"
}
