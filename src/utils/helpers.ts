export enum AcceptedEntries {
  Github,
  Gitlab
}

export interface Entry {
  weeks: Array<{
    days: Array<{
      color: string;
      count: number;
      level: string;
      weekday: number;
      date: string;
    }>;
  }>;
  type: AcceptedEntries;
}

export const unifyContributions = (entries: Entry[]) => {
  const unified: Omit<Entry, "type"> = { weeks: [] };

  // TODO: work on this
  entries.forEach(entry => {
    unified.weeks.push(...entry.weeks);
  });

  return unified;
};
