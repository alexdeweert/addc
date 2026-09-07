export interface Article {
  date: string;
  header: string;
  pinned?: boolean;
  route: string;
  summary: string;
}

export function sortArticles(articles: readonly Article[]) {
  return [...articles].sort((first, second) => {
    const pinnedOrder = Number(Boolean(second.pinned)) - Number(Boolean(first.pinned));

    if (pinnedOrder !== 0) {
      return pinnedOrder;
    }

    const dateOrder = sortableDate(second.date).localeCompare(sortableDate(first.date));

    return dateOrder !== 0 ? dateOrder : first.header.localeCompare(second.header);
  });
}

function sortableDate(date: string) {
  return /^\d{4}-\d{2}-\d{2}$/u.test(date) ? date : '';
}
