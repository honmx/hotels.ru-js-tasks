class Clock {
  constructor({ template }) {
    this.template = template;
  }

  render() {
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = '0' + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = '0' + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = '0' + secs;

    let output = this.template
      .replace('h', hours)
      .replace('m', mins)
      .replace('s', secs);

    console.log(output);
  }

  stop() {
    clearInterval(this.timer);
  }

  start() {
    this.render();
    this.timer = setInterval(this.render.bind(this), 1000);
  }
}

class ExtendedClock extends Clock {

  constructor(template, precision = 1000) {
    super(template);
    this.precision = precision;
  }

  start() {
    this.render();
    this.timer = setInterval(this.render.bind(this), this.precision);
  }
}

const extendedClock = new ExtendedClock({ template: 'h:m:s' });
console.log(extendedClock);
extendedClock.start();