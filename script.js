function adjustTime() {
  const now = new Date(); // 現在の日時を取得
  let hours = now.getHours();
  let minutes = now.getMinutes();

  // 現在の時刻を表示
  const currentTimeElement = document.getElementById("current-time");
  currentTimeElement.textContent = `現在時刻: ${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;

  // 下一桁を取得
  const onesPlace = minutes % 10;

  if ([0,1,2,7,8,9].includes(onesPlace)) {
    // 下一桁が 0,1,2,7,8,9 の場合に次の下一桁を 5 に
    minutes = Math.floor(minutes / 10) * 10 + 5;

    // 現在時刻を超えない場合はさらに次の 5 へ繰り上げ
    if (minutes <= now.getMinutes()) {
      minutes += 10; // 次の5分へ
    }
  } else if ([3,4,5,6].includes(onesPlace)) {
    // 下一桁が3,4,5,6の場合に 次の下一桁を 0 に
    minutes = Math.floor(minutes / 10) * 10 + 10;
  }

  // 分が60超えないように
  if (minutes >= 60) {
    minutes -= 60;
    hours += 1;

    // 時間が24を超えないように調整
    if (hours === 24) {
      hours = 0;
    }
  }

  // 結果を表示
  const resultElement = document.getElementById("result");
  resultElement.textContent = `time: ${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;
}

// ページがロードされたときに現在時刻を表示
window.onload = function () {
  adjustTime();
};
