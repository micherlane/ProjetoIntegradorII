
export const addZero = (value: number) => {
    return value < 10 ? `0${value}` : value;
};


export const formatDate = (date: Date) => {
    const day = addZero(date.getDate());
    const month = addZero(date.getMonth() + 1);
    const year = date.getFullYear();

    return `${day}-${month}-${year}`;
};

export const formatTime = (date: Date) => {
    const hours = addZero(date.getHours());
    const minutes = addZero(date.getMinutes());

    return `${hours}:${minutes}`;
};

export const formatDateToLongString = (date: Date) => {
    const months = [
      'janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho',
      'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'
    ];
  
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
  
    return `${day} de ${month} de ${year}`;
  };
