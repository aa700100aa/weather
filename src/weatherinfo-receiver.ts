//WeatherInfoクラスをインポート。
import { WeatherInfo } from "./WeatherInfo";

//非同期で天気情報を取得する関数。
export async function receiveWeatherInfo(url: string): Promise<WeatherInfo> {
  //URLに非同期でアクセスしてデータを取得。
  const response = await fetch(url);
  //取得したデータを非同期でJSONに変換。
  const weatherInfoJSON = await response.json();
  //取得したJSONデータをコンソールで確認したい場合は、このコメントアウトを元に戻して実行。
  console.log(weatherInfoJSON);
  //WeatherInfoオブジェクトを生成、リターン。
  const weatherInfo = new WeatherInfo(weatherInfoJSON);
  return weatherInfo;
}
