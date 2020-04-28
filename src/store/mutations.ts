import * as types from "./mutation-types";
import { StateOptions } from "./state";

const matations = {
  /**
   * state:当前状态树
   * v: 提交matations时传的参数
   */
  [types.SET_USERTOKEN](state: StateOptions, v: string): void {
    state.userToken = v;
  },
  [types.SET_DEVICENUMBER](state: StateOptions, v: string): void {
    state.deviceNumber = v;
  },
};

export default matations;
