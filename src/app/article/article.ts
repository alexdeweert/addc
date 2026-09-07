export interface Article {
  date: string;
  header: string;
  pinned?: boolean;
  pinOrder?: number;
  route: string;
  summary: string;
}

export function sortArticles(articles: readonly Article[]) {
  return [...articles].sort((first, second) => {
    const pinnedOrder = Number(Boolean(second.pinned)) - Number(Boolean(first.pinned));

    if (pinnedOrder !== 0) {
      return pinnedOrder;
    }

    if (first.pinned && second.pinned) {
      const pinOrder = comparePinOrder(first.pinOrder, second.pinOrder);

      if (pinOrder !== 0) {
        return pinOrder;
      }
    }

    const dateOrder = sortableDate(second.date).localeCompare(sortableDate(first.date));

    return dateOrder !== 0 ? dateOrder : first.header.localeCompare(second.header);
  });
}

function comparePinOrder(first?: number, second?: number) {
  const firstHasOrder = Number.isFinite(first);
  const secondHasOrder = Number.isFinite(second);

  if (firstHasOrder && secondHasOrder) {
    return first! - second!;
  }

  if (firstHasOrder !== secondHasOrder) {
    return firstHasOrder ? -1 : 1;
  }

  return 0;
}

function sortableDate(date: string) {
  return /^\d{4}-\d{2}-\d{2}$/u.test(date) ? date : '';
}
