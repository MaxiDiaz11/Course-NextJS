import { formatDistanceToNow } from "date-fns";
import { es } from "date-fns/locale";

export const getFormatdistanceToNow = (date: number) => {
  const fromNow = formatDistanceToNow(date, { locale: es });

  return `Hace ${fromNow}`;
};
