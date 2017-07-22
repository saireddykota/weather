import{Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name:'sort'//by the use of Pipe class we can create our custom pipes
})
//now we will export pipe to use in other classes
export class SortPipe implements PipeTransform{
    transform(value: any[], args: string): any{
     if (args ==='ascending'){
         return value.sort(); 
     }   else if(args ==='descending'){

     
     return value.sort().reverse();
}}}