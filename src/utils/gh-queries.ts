import { graphql } from "@octokit/graphql";

export const apiKey = String(process.env.GH_TOKEN);
export const githubGQL = graphql.defaults({
  headers: {
    authorization: `token ${apiKey}`
  }
});

export const getContributions = async (username: string) => {
  interface GetContributions {
    repositoryOwner?: {
      contributionsCollection: {
        contributionCalendar: {
          weeks: Array<{
            days: Array<{
              color: string;
              count: number;
              level: string;
              weekday: number;
              date: string;
            }>;
          }>;
        };
      };
    };
  }

  const res = await githubGQL<GetContributions>(
    `
    query Contributions($username: String!) {
        repositoryOwner(login: $username) {
            ... on User {
                contributionsCollection {
                    contributionCalendar {
                        weeks {
                            days: contributionDays {
                                color
                                count: contributionCount
                                level: contributionLevel
                                weekday
                                date
                            }
                        }
                    }
                }
            }
        }
    }`,
    { username }
  );

  const { weeks } = res.repositoryOwner?.contributionsCollection
    .contributionCalendar ?? { weeks: [] };

  return { weeks };
};
