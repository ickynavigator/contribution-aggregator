import axios from "axios";

export const apiKey = String(process.env.GL_TOKEN);
export const gitlabAxios = axios.create({
  baseURL: "https://git.internetbrands.com/api/v4",
  headers: {
    "PRIVATE-TOKEN": apiKey
  }
});

export const getContributions = async (username: string) => {
  type Contributions = Record<string, unknown>;

  try {
    const thisYear = new Date().getFullYear();
    const res = await gitlabAxios.get<Contributions>(
      `/users/${username}/events`,
      {
        params: {
          after: `${thisYear}-01-01`,
          per_page: 365,
          target_type: "merge_request"
          //   target_type: ["issue", "merge_request", "project"].join(",")
        }
      }
    );

    return res.data;
  } catch (error) {
    console.error(error);
  }
};
