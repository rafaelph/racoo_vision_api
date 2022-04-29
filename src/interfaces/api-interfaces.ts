export interface IResponse {
  result: boolean;
  message?: string | null;
  text?: any;
  errors?: string[] | null;
}

export const responseToInterface = (
  data = {},
  result = true,
  message = "success",
) => ({
  result,
  data,
  message
});