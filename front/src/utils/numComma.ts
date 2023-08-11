/** 숫자 콤마 변환 함수 */
const numComma = (num: string | number): string => {
  return num.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
};

export default numComma;