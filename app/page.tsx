import {
  Code,
  FilterAltOutlined,
  InsertDriveFile,
  Link,
  Search,
} from "@mui/icons-material";
import {
  Button,
  Chip,
  Grid,
  IconButton,
  InputBase,
  Paper,
} from "@mui/material";
import Image from "next/image";

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
      <div className="mx-[98px] mb-10">
        <div className=" relative mb-8">
          <CustomizedInputBase />
        </div>
        <div className="flex justify-between mb-12">
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
        <Grid container spacing={2} className="">
          <Grid item xs={4} className="flex flex-col gap-4">
            <div>
              <Image
                src={"/1.png"}
                alt={"1"}
                width={100}
                height={100}
                className="w-full rounded-2xl inline-block"
              />
            </div>
            <div className="text-2xl text-[#344054] max-w-[360px]">
              Case Study Template: FlipX, an Investment Attraction Startup
            </div>
            <div>
              <Chip
                label="Design file"
                icon={<Link />}
                className="text-[14px] py-1 px-2 rounded-md mr-2"
              ></Chip>
            </div>
          </Grid>
          <Grid item xs={4} className="flex flex-col gap-4">
            <div>
              <Image
                src={"/2.png"}
                alt={"2"}
                width={100}
                height={100}
                className="w-full rounded-2xl inline-block"
              />
            </div>
            <div className="text-2xl text-[#344054] max-w-[360px]">
              Designing Impression: The Power of First Impressions
            </div>
            <div>
              <Chip
                label="Github Resource"
                icon={<Code />}
                className="text-[14px] py-1 px-2 rounded-md mr-2"
              ></Chip>
            </div>
          </Grid>
          <Grid item xs={4} className="flex flex-col gap-4 mb-20">
            <div>
              <Image
                src={"/3.png"}
                alt={"3"}
                width={100}
                height={100}
                className="w-full rounded-2xl inline-block"
              />
            </div>
            <div className="text-2xl text-[#344054] max-w-[360px]">
              Fluid Card Animation in After Effects
            </div>
            <div>
              <Chip
                label="Design"
                className="text-[14px] py-1 px-2 rounded-md mr-2"
              ></Chip>
              <Chip
                label="UI UX"
                className="text-[14px] py-1 px-2 rounded-md mr-2"
              ></Chip>
              <Chip
                label="Branding"
                className="text-[14px] py-1 px-2 rounded-md mr-2"
              ></Chip>
            </div>
          </Grid>
          <Grid item xs={4} className="flex flex-col gap-4">
            <div>
              <Image
                src={"/4.png"}
                alt={"4"}
                width={100}
                height={100}
                className="w-full rounded-2xl inline-block"
              />
            </div>
            <div className="text-2xl text-[#344054] max-w-[360px]">
              Designing Impression: The Power of First Impressions
            </div>
            <div>
              <Chip
                label="Design"
                className="text-[14px] py-1 px-2 rounded-md mr-2"
              ></Chip>
              <Chip
                label="UI UX"
                className="text-[14px] py-1 px-2 rounded-md mr-2"
              ></Chip>
              <Chip
                label="Branding"
                className="text-[14px] py-1 px-2 rounded-md mr-2"
              ></Chip>
            </div>
          </Grid>
          <Grid item xs={4} className="flex flex-col gap-4">
            <div>
              <Image
                src={"/5.png"}
                alt={"5"}
                width={100}
                height={100}
                className="w-full rounded-2xl inline-block"
              />
            </div>
            <div className="text-2xl text-[#344054] max-w-[360px]">
              Designing Impression: The Power of First Impressions
            </div>
            <div>
              <Chip
                label="Design"
                className="text-[14px] py-1 px-2 rounded-md mr-2"
              ></Chip>
            </div>
          </Grid>
          <Grid item xs={4} className="flex flex-col gap-4">
            <div>
              <Image
                src={"/6.png"}
                alt={"6"}
                width={100}
                height={100}
                className="w-full rounded-2xl inline-block"
              />
            </div>
            <div className="text-2xl text-[#344054] max-w-[360px]">
              OpenCore Customer Acquisition Strategy
            </div>
            <div>
              <Chip
                label="Marketing PDF"
                icon={<InsertDriveFile />}
                className="text-[14px] py-1 px-2 rounded-md mr-2"
              ></Chip>
            </div>
          </Grid>
        </Grid>
      </div>
      <div className="w-full px-[74px] py-24">
        <div className="w-full px-24 py-32 bg-gradient-to-r from-[#2F5478] to-[#22405C] text-white">
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <div className=" max-w-[560px]">
                <div className=" font-normal text-[64px]">
                  Transforming your Ideas into reality
                </div>
                <div className="font-medium text-xl">
                  Let's build something extraordinary together to captivate your
                  audience.
                </div>
              </div>
            </Grid>
            <Grid item xs={6} className="flex justify-end">
              <div className="rounded-full border w-[250px] h-[250px] flex justify-center items-center">
                Let’s Work Together!
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </main>
  );
}
