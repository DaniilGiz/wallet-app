export const calculateCardAvailable = (cardLimit: number, cardBalance: number) => {
  const difference = cardLimit - cardBalance;
  return difference.toLocaleString("en-US", { style: "currency", currency: "USD" });
};

export const formatDate = (timestamp: number) => {
  const inputDate = new Date(timestamp);

  const oneWeekAgo = new Date();
  oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

  if (inputDate > oneWeekAgo) {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayOfWeek = daysOfWeek[inputDate.getDay()];
    const hours = inputDate.getHours();
    const minutes = inputDate.getMinutes();
    const formattedTime = `${hours}:${minutes.toString().padStart(2, '0')}`;

    return { date: dayOfWeek, time: formattedTime};
  } else {
    const day = inputDate.getDate();
    const month = inputDate.getMonth() + 1;
    const year = inputDate.getFullYear();
    const hours = inputDate.getHours();
    const minutes = inputDate.getMinutes();
    const formattedTime = `${hours}:${minutes.toString().padStart(2, '0')}`;

    return { date: `${day}/${month}/${year}`, time:  formattedTime };
  }
};