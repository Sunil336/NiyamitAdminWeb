import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categorysearchfilter'
})
export class CategorysearchfilterPipe implements PipeTransform {
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
        if (it.categoryName.toLowerCase().includes(searchText)|| it.categoryName.toLowerCase().includes(searchText)) {
            results.push(it);
        
        }
      });
      return results;
  }
}
