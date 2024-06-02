export function formatDate(dateString: string) {
  let date = dateString.split("-");
  const birthday = new Date(dateString);
  const now = new Date();
  let age = now.getFullYear() - birthday.getFullYear();
  let newDate = `${date[2]} / ${date[1]} / ${date[0]} (age ${age})`;
  return newDate;
}

export function age(dateString: string) {
  let date = dateString.split('-');
  const birthday = new Date(dateString);
  const now = new Date();
  let age = now.getFullYear() - birthday.getFullYear();
  return age;
}