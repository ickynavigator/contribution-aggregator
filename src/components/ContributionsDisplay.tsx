import { unifyContributions, type Entry } from "@/utils/helpers";
import { Box } from "@mantine/core";

interface IContributionsDisplay {
  entries: Entry[];
}

export const ContributionsDisplay = (props: IContributionsDisplay) => {
  const { entries } = props;

  const contributions = unifyContributions(entries);

  return (
    <div>
      <div className="ContributionsContainer">
        {contributions.weeks.map((week, index) => (
          <div className="row" key={index}>
            {week.days.map(curr => (
              <Box
                sx={{ backgroundColor: curr.color }}
                key={curr.date}
                className="box"
              >
                {" "}
              </Box>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContributionsDisplay;
