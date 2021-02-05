function checkAssignment(year: number, month: number, day: number, hours: number, minutes: number) {

  const currentDay = new Date().getDay();
  const currentMonth = 1 + new Date().getMonth();
  const currentYear = new Date().getFullYear();
  const currentHours = new Date().getHours();
  const currentMinutes = new Date().getMinutes();

  if (currentYear > year)
    return true;
  else {
    if (currentMonth > month && currentYear === year)
      return true;
    else {
      if (currentDay > day && currentMonth === month)
        return true;
      else {
        if (currentHours > hours && currentDay === day)
          return true;
        else {
          if (currentMinutes > minutes && currentHours === hours)
            return true;
        }
      }
    }
  }

  return false;
}

export default checkAssignment;