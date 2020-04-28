interface NameList {
  RECORDS: Array<{ nickname: string }>;
}
/**
 * 封装处理用户名部分隐藏函数
 */
export const nameCarousel = (params: NameList) => {
  let str =
    params.RECORDS[parseInt((Math.random() * 3000).toString(), 10)].nickname;
  const w1 = str[0] || "";
  const w2 = str[2] || "";
  const w3 = str[str.length - 1] || "";
  const w4 = str[str.length] || "";
  const strFront = `${w1}${w2}`;
  const strBack = `${w3}${w4}`;
  str = `${strFront}***${strBack}`;
  return str;
};
