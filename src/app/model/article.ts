import { ThrowStmt } from '@angular/compiler';

export class Article {
    titre: string;
    url: string;
    content: string;

    constructor(titre: string, url: string) {
        this.titre = titre;
        this.url = url;
    }
}