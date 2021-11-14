export function formatCity (item) {
  const city = item.City ? item.City : item.Address.substr(0, 3)
  return city
}

export function formatDate (time) {
  const d = new Date(time)
  let month = '' + (d.getMonth() + 1)
  let day = '' + d.getDate()
  const year = '' + d.getFullYear()
  if (month.length < 2) {
    month = '0' + month
  }
  if (day.length < 2) {
    day = '0' + day
  }
  return [year, month, day].join('/')
}
