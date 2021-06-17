export default class Benefit {
  title: string;
  description: string;
  type: 'service' | 'product' = 'service';

  constructor(title: string, description: string, type: 'service' | 'product') {
    this.title = title;
    this.description = description;
    this.type = type;
  }
}
