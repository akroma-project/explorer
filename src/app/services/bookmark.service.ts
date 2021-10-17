import { Injectable, OnInit } from '@angular/core';
import { Bookmark } from '../models/bookmark.model';

@Injectable()
export class BookmarkService implements OnInit {
    private db: any;
    // public constructor(
    // ) {
    //     this.db = new PouchDB('bookmarks');
    // }

    async save(unsaved: Bookmark): Promise<Bookmark> {
        try {
            console.log('called: bookmarkService.save');
            const current = await this.get(unsaved._id);
            current.display = unsaved.display;
            current.notes = unsaved.notes;
            const result = await this.db.put(current);
            return current as Bookmark;
        } catch (error) {
            return Promise.reject('unable to save');
        }
    }

    async get(address: string): Promise<Bookmark> {
        console.log('called: bookmarkService.get');
        try {
            return await this.db.get(address);
        } catch (error) {
            return { _id: address };
        }
    }

    async getAll(): Promise<Bookmark[]> {
        console.log('called: bookmarkService.getAll');
        const allDocs = await this.db.allDocs({ include_docs: true });
        const results: Bookmark[] = [];
        allDocs.rows.forEach((x: { doc: Bookmark; }) => {
            console.log(x);
            results.push(x.doc as Bookmark);
        });
        return results;
    }

    ngOnInit(): void {
    }
}
