export default class DateTime {
  static getDay (currentDayNum) {
    let currentDayString;
    switch (currentDayNum) {
      case 1:
        currentDayString = "Senin"
        break
      case 2:
        currentDayString = "Selasa"
        break
      case 3:
        currentDayString = "Rabu"
        break
      case 4:
        currentDayString = "Kamis"
        break
      case 5:
        currentDayString = "Jumat"
        break
      case 6:
        currentDayString = "Sabtu"
        break
      case 0:
        currentDayString = "Minggu"
        break
    }
    return currentDayString
  }
}