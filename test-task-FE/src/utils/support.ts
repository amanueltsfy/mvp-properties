import parser from "html-react-parser";

export const createHtml = (value: string) => parser(value);
