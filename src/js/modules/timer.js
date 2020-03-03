export default (id, deadline) => {
  const getTimeRemaining = (endtime) => {
    const mSeconds = Date.parse(endtime) - Date.parse(new Date());
    const seconds = Math.floor((mSeconds / 1000) % 60);
    const minutes = Math.floor((mSeconds / 1000 / 60) % 60);
    const hours = Math.floor((mSeconds / 1000 / 60 / 60) % 24);
    const days = Math.floor((mSeconds / 1000 / 60 / 60 / 24));

    return {
      total: mSeconds,
      days,
      hours,
      minutes,
      seconds,
    };
  };

  const addZero = (num) => {
    if (num <= 9) {
      return `0${num}`;
    }

    return num;
  };

  const setClock = (selector, endtime) => {
    const timer = document.querySelector(selector);
    const days = timer.querySelector('#days');
    const hours = timer.querySelector('#hours');
    const minutes = timer.querySelector('#minutes');
    const seconds = timer.querySelector('#seconds');

    const timeInterval = setInterval(() => {
      const t = getTimeRemaining(endtime);

      days.textContent = addZero(t.days);
      hours.textContent = addZero(t.hours);
      minutes.textContent = addZero(t.minutes);
      seconds.textContent = addZero(t.seconds);

      if (t.total === 0) {
        days.textContent = '00';
        hours.textContent = '00';
        minutes.textContent = '00';
        seconds.textContent = '00';

        clearInterval(timeInterval);
      }
    }, 1000);
  };

  setClock(id, deadline);
};
