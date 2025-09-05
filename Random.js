function random(min, max) {
  // Math.random()が返す値は0以上1未満なので、(max - min + 1)を掛けることで
  // 0以上(max - min + 1)未満の範囲の小数になる。
  // Math.floor()で切り捨てて、minを足すことで、min以上max以下の整数になる。
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
