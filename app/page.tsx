import { FilterAltOutlined, Search } from "@mui/icons-material";
import { Button, IconButton, InputBase, Paper } from "@mui/material";

const CustomizedInputBase = () => {
  return (
    <Paper
      component="form"
      // sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}
      className="rounded-2xl w-full"
    >
      <IconButton
        sx={{ p: "10px" }}
        aria-label="menu"
        className=" absolute top-[43px] left-8"
      >
        <Search />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search for resources and tutorials"
        className="pr-4 py-5 pl-20 w-full"
        // inputProps={{ "aria-label": "search google maps" }}
      />
    </Paper>
  );
};

export default function Home() {
  const buttonLables = [
    "All Resources",
    "Design",
    "Development",
    "Marketing",
    "Branding",
  ];

  return (
    <main>
      <div className="flex justify-center items-center h-screen">
        <div className=" absolute top-[52.5px] left-50% border flex rounded-[500px] h-[88px]">
          <div className="w-[88px] flex justify-center items-center text-[41px]">
            <i className="fa fa-creative-commons"></i>
          </div>
          <div className="w-[88px] flex justify-center items-center border-l text-[41px]">
            <i className="fa fa-bars"></i>
          </div>
        </div>
        <div className="text-center max-w-[730px]">
          <div className="text-[64px] text-[#294F74] font-semibold">
            Your Ultimate Resource Hub for Digital Success
          </div>

          <div className="text-2xl">
            Explore our comprehensive library of tools and templates for
            developers, designers, marketers, and branding experts.
          </div>
        </div>
      </div>
      <div className="mx-[98px]">
        <div className=" relative mb-8">
          <CustomizedInputBase />
        </div>
        <div className="flex justify-between">
          <div className="flex justify-between gap-4">
            {buttonLables.map((label, index) => (
              <Button
                className="px-4 py-3 rounded-lg"
                variant="outlined"
                key={index}
              >
                {label}
              </Button>
            ))}
          </div>
          <div>
            <Button className="px-4 py-3 rounded-lg" variant="outlined">
              <FilterAltOutlined />
              Filters
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
