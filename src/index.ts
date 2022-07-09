import { IGetPaginationRangeProps } from "./types/IGetPaginationRangeProps"

export const getPaginationRange = ({
  total,
  current,
}: IGetPaginationRangeProps): number[] => {
  const lengthList = total > 5 ? 5 : total
  const before = current - Math.floor(lengthList / 2)
  const after = current + Math.floor(lengthList / 2)

  let start: number
  if (before < 1) start = 1
  else if (after > total) start = total - lengthList + 1
  else start = before

  return Array.from({ length: lengthList }, (_, i) => i + start)
}
