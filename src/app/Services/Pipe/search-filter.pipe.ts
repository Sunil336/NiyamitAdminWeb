import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    if (!items) return [];

    if (!searchText) return items;

    return this.searchItems(items, searchText.toLowerCase());
  }

  private searchItems(items: any[], searchText: string): any[] {

   let results: any[] = [];
   console.log(items);
      items.forEach(it => {
        console.log(it);
        if (it.brandName.toLowerCase().includes(searchText)|| it.brandName.toLowerCase().includes(searchText)) {
            results.push(it);
        
        }
      });
      return results;
  }

}
