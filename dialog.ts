export class Dialog {

    id: string;
    title:string;
    body:string;
    textConf:string;
    textCancel:string;
    button:string;
    style:string;

    constructor(id:string, title:string, body:string, textConf:string, textCancel:string, button:string, style:string = "info") {
        this.id = id;
        this.title = title;
        this.body = body;
        this.textConf = textConf;
        this.textCancel = textCancel;
        this.button = button;
        this.style = style;
    }


}
