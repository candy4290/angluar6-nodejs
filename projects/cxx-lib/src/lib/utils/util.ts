import { NzMessageService } from 'ng-zorro-antd';

export class Util {

  /**
   * Checkbox单选值
   *
   * @static
   * @param {any[]} datas
   * @param {*} data
   * @returns
   * @memberof Utils
   */
  static refreshCheckbox(datas: any[], data: any) {
    datas.filter(value => !value.disabled && value.checked).forEach(val => {
      if (val !== data) {
        val.checked = false;
      }
    });
    if (data.checked) {
      return data;
    } else {
      return null;
    }
  }

  // 日期格式化  -> yy-MM-dd
  static formateDate(transferDate: any) {
    if (!transferDate) {
      return '';
    }
    const date: any = new Date(transferDate);
    const year: any = date.getFullYear();
    let month: any = date.getMonth() + 1;
    let day: any = date.getDate();
    if (month < 10) {
      month = '0' + month;
    }
    if (day < 10) {
      day = '0' + day;
    }
    return year + '-' + month + '-' + day;
  }

  static dataURLtoFile(id, dataurl, filename) {// 将base64转换为文件
    const arr = dataurl.split(','),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    const temp = new File([u8arr], filename, { type: mime });
    temp['thumbUrl'] = dataurl;
    temp['uid'] = id;
    return temp;
  }

  /**
   *图片转为base64
   *
   * @static
   * @param {File} img
   * @param {(img: {}) => void} callback
   * @memberof Utils
   */
  static getBase64(img: File, callback: (img: {}) => void): void {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  }

  /**
   *检查传入的文件格式及大小
   *
   * @param {*} file
   * @returns
   * @memberof FormComponent
   */
  static fileCheck(message: NzMessageService, file: any) {
    const isJPGOrPNG = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJPGOrPNG) {
      message.error('只可以上传JPG/PNG格式的图片!');
      return false;
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('图片大小需小于2M!');
      return false;
    }
    return true;
  }

  /**
   *调换数组array中两个索引分别为index1，index2两个元素的位置
   *
   * @static
   * @param {any[]} arr
   * @param {number} index1
   * @param {number} index2
   * @memberof Util
   */
  static swapArray(arr: any[], index1: number, index2: number) {
    arr[index1] = arr.splice(index2, 1, arr[index1])[0];
    return arr;
  }

}
