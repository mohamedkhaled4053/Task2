export interface stages {
  applied: number;
  recommended: number;
  interview: number;
  offer: number;
  hired: number;
  rejected?: number;
}

export interface total {
  now: stages;
  previous: stages;
}

export interface ProgramData {
  active: stages;
  disqualified: stages;
  total: total;

  employers: {
    [key: string]: {
      active: stages;
      disqualified: stages;
      total: total;
      opportunities: {
        [key: string]: {
          active: stages;
          disqualified: stages;
          total: total;
        };
      };
    };
  };
}
