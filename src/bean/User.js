import { PREFIX_BEAN } from "data-pick";
import Hobby from "./Hobby";
export default class User {
  id;
  name;
  phone;
  hobby;
  get [`${PREFIX_BEAN}hobby`]() {
    return Hobby;
  }
}
