class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.timerId = null;
  }

  addClock(time, callback, id) {
    if (id === undefined) {
      throw new Error('error text');
    };

    let callObj

    if (this.alarmCollection.find(id => callObj.id === id)) {
      console.error()
      return;
    } else {
      let callObj = {};
      callObj.time = time;
      callObj.callback = callback;
      callObj.id = id;
    
      this.alarmCollection.push(callObj)
    }
  }

  removeClock(id) {
    this.alarmCollection = this.alarmCollection.filter(id => callObj.id !== id);

    for (let obj in this.alarmCollection) {
      return this.alarmCollection[obj].id !== id;
    }
  }

  getCurrentFormattedTime() {
    return (`${new Date().getHours()}:${(new Date().getMinutes() < 10 ? '0' : '') + new Date().getMinutes()}`);
  }

  start() {
    function checkClock(callObj) {
      if (getCurrentFormattedTime() === callObj.time) {
        callObj.callback();
      }
    }

    if (this.timerId === null) {
      this.timerId = setInterval(() => {
        for (let obj in this.alarmCollection) {
          checkClock(obj);
        }
      })
    }
  }
    
  stop() {
    if (this.timerId !== null) {
      // clearInterval(this.timerId);
      this.timerId = null;
    }
  }
}
