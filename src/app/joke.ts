export class Joke{
    public question: string;
    public answear: string;
    public hide: boolean;
    constructor(question, answear) {
      // this.id = Math.round(Math.random() * 10);
      this.question = question;
      this.hide = true;
      this.answear = answear;
    }
    toggle() {
      this.hide = !this.hide;
    }
  }