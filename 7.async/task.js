class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.timerId = null;
  }

  addClock(time, callback, id) {
    if (id === undefined) {
      throw new Error('Параметр id не был передан');
    };

    if (this.alarmCollection.find(callObj => callObj.id === id)) {
      console.error('Звонок с данным id уже существует')
      return;
    } 
    
    this.alarmCollection.push({time, callback, id})
  }

  removeClock(id) {
    let initialLength = this.alarmCollection.length;
    let indexOfTheId = this.alarmCollection.findIndex(callObj => callObj.id === id);

    if (indexOfTheId > -1) {
      this.alarmCollection.splice(indexOfTheId, 1);
    }
    
    let currentlength = this.alarmCollection.length;
    return currentlength < initialLength;
  }

  getCurrentFormattedTime() {
    return new Date().toLocaleTimeString("ru-Ru", {
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  start() {
    let checkClock = (callObj) => {
      if (this.getCurrentFormattedTime() === callObj.time) {
        callObj.callback();
      }
    }

    if (this.timerId === null) {
      this.timerId = setInterval(() => {
        this.alarmCollection.forEach(obj => checkClock(obj)) 
      })
    }
  }
    
  stop() {
    if (this.timerId !== null) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  }

  printAlarms() {
    this.alarmCollection.forEach(obj => console.log(obj.id, obj.time))
  }  

  clearAlarms() {
    this.stop();
    this.alarmCollection.splice(0);
  }
}

let phoneAlarm = new AlarmClock();
phoneAlarm.addClock('16:50', () => console.log('Встаём'), 1);

phoneAlarm.addClock('16:51', () => {
  console.log('Встаём');
  phoneAlarm.removeClock(2);
}, 2);

phoneAlarm.addClock('16:52', () => {
  console.log('Встаём');
  phoneAlarm.stop();
  phoneAlarm.clearAlarms();
  phoneAlarm.printAlarms();
}, 3);