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
  qualified: stages;
  disqualified: stages;
  total: total;

  employers: {
    [key: string]: {
      // qualified: stages;
      // disqualified: stages;
      employerTotal: total;
      opportunities: {
        [key: string]: {
          qualified: stages;
          disqualified: stages;
          opportunitytotal: total;
        };
      };
    };
  };
}
