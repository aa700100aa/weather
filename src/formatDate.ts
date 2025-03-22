// 曜日を日本語で取得するための配列
const weekdays = ["日", "月", "火", "水", "木", "金", "土"];
// 日付フォーマットを "3/22(土)" のようにする関数
export function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const dayOfWeek = weekdays[date.getDay()];
  return `${month}/${day}(${dayOfWeek})`;
}
