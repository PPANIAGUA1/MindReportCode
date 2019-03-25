import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {

  const resultPosts = [];
  // if (arg.length < 3) {
  //   return value;
  // }
  for (const post of value) {
     if (arg === '' ||  post.IssueKey.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
       console.log('Sip') ;
       resultPosts.push(post);

     }

  }
  return resultPosts ;
  }

}
