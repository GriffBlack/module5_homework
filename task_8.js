let colors = new Map([
  ["Каждый", "Red"],
  ["Охотник", "Orange"],
  ["Желает", "Yellow"],
  ["Знать", "Green"],
  ["Где", "Blue"],
  ["Сидит", "Indigo"],
  ["Фазан", "Violet"]
]);
for (let name of colors.keys()) {
    console.log(`Ключ — ${name}, значение — ${colors.get(name)}`);
}
