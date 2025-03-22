export function getIconColor(iconCode: string): string {
  const map: { [key: string]: string } = {
    "01d": "#FFA500", // 晴れ（オレンジ）
    "01n": "#FFD700", // 晴れ夜（黄色）
    "02d": "#C0C0C0", // 曇りがち
    "02n": "#A0A0A0",
    "03d": "#A9A9A9", // 曇り
    "03n": "#A9A9A9",
    "04d": "#808080", // 厚い曇り
    "04n": "#808080",
    "09d": "#3399FF", // 小雨
    "09n": "#3399FF",
    "10d": "#1E90FF", // 雨
    "10n": "#1E90FF",
    "11d": "#800080", // 雷
    "11n": "#800080",
    "13d": "#00CED1", // 雪（水色）
    "13n": "#00CED1",
    "50d": "#D3D3D3", // 霧
    "50n": "#D3D3D3",
  };

  return map[iconCode] || "#000000"; // デフォルトは黒
}
