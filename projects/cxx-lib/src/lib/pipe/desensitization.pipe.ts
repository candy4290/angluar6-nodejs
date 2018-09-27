import { Pipe, PipeTransform } from '@angular/core';

/**
 * 数据脱敏
 *
 * @export
 * @class DesensitizationPipe
 * @implements {PipeTransform}
 */
@Pipe({
  name: 'CxDesensitization'
})
export class DesensitizationPipe implements PipeTransform {

  /**
   *
   *
   * @param {*} value
   * @param {*} [args] ps. Mobile phone: xxx****xxxx
   * @returns {*}
   * @memberof DesensitizationPipe
   */
  transform(value: string, rule: string): any {
    if (value == null || value.length <= 0 || rule == null || rule.length <= 0) {
      return value;
    }
    const newData = [];
    const vl = value.length;
    for (let i = 0; i < rule.length; i++) {
      const _rule = rule[i];
      let _value = _rule;
      if (vl > i) {
        _value = value[i];
      }
      if (_rule && _rule === 'x') {
        newData.push(_value);
      } else {
        newData.push(_rule);
      }
    }
    return newData.join('');
  }

}
