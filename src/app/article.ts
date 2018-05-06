
export class Article {
    title: string;
    body: string;
    hide: boolean;

    constructor(title: string, body: string) {
        this.title = title;
        this.body = body;
        this.hide = true;
    }

    toggle() {
        this.hide = !this.hide;
    }
}
