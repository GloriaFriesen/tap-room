import {Pipe, PipeTransform} from '@angular/core';
import {Keg} from './keg.model';

@Pipe ({
  name: "emptiness",
  pure: false
})

export class EmptinessPipe implements PipeTransform {
  transform(input: Keg[], kegVolume) {
    var output: Keg[] = [];
    if (kegVolume === "tappedKegs") {
      for (var i=0; i < input.length; i++) {
        if (input[i].empty === false) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (kegVolume === "emptyKegs") {
      for (var i=0; i < input.length; i++) {
        if (input[i].empty === true) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
