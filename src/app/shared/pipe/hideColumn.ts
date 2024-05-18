import { Pipe } from "@angular/core";

@Pipe({
    name: 'hideColumn',
})
export class HideColumn {

    transform(objects: any[]): any[] {
        if(objects) {
            return objects.filter(object => {
                return object.hide === false;
            });
        }

        return objects;
    }

}