import { url } from "../../../../../../config";
import get from "../../../methods/get";

export default async function getAll(params: string) {
  const finalUrl = url + "/activity" + params
  const response = await get(finalUrl);
  return response;
}