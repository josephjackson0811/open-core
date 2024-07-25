"use client";

import {
  ArrowDropDown,
  Code,
  FilterAltOutlined,
  InsertDriveFile,
  Link,
  Search,
} from "@mui/icons-material";
import {
  Button,
  ButtonGroup,
  Chip,
  ClickAwayListener,
  Grid,
  Grow,
  IconButton,
  InputBase,
  MenuItem,
  MenuList,
  Paper,
  Popper,
} from "@mui/material";
import React, { useRef } from "react";
import { useEffect, useState } from "react";

const options = [
  "All Resources",
  "Design",
  "Development",
  "Marketing",
  "Branding",
];

const CustomizedInputBase = () => {
  return (
    <Paper component="form" className="rounded-2xl w-full">
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
      />
    </Paper>
  );
};

const SplitButton = () => {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef<HTMLDivElement>(null);
  const [selectedIndex, setSelectedIndex] = useState(1);

  const handleMenuItemClick = (
    event: React.MouseEvent<HTMLLIElement, MouseEvent>,
    index: number
  ) => {
    setSelectedIndex(index);
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: Event) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  };

  return (
    <React.Fragment>
      <ButtonGroup
        variant="outlined"
        ref={anchorRef}
        aria-label="Button group with a nested menu"
      >
        <Button>{options[selectedIndex]}</Button>
        <Button
          size="small"
          aria-controls={open ? "split-button-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-label="select merge strategy"
          aria-haspopup="menu"
          onClick={handleToggle}
        >
          <ArrowDropDown />
        </Button>
      </ButtonGroup>
      <Popper
        sx={{
          zIndex: 1,
        }}
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom" ? "center top" : "center bottom",
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList id="split-button-menu" autoFocusItem>
                  {options.map((option, index) => (
                    <MenuItem
                      key={option}
                      selected={index === selectedIndex}
                      onClick={(event) => handleMenuItemClick(event, index)}
                    >
                      {option}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </React.Fragment>
  );
};

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [imageHeight, setImageHeight] = useState(100);
  const [logoHeight, setLogoHeight] = useState(100);
  const imgRef = useRef<HTMLImageElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);

  const buttonLables = [
    "All Resources",
    "Design",
    "Development",
    "Marketing",
    "Branding",
  ];

  useEffect(() => {
    const handleWidth = () => {
      setIsMobile(innerWidth <= 820);
      setIsTablet(innerWidth <= 1137);
      setImageHeight(imgRef.current?.height as number);
      setLogoHeight(logoRef.current?.height as number);
    };
    handleWidth();
    window.addEventListener("resize", handleWidth);

    // return window.removeEventListener("resize", handleWidth);
  });

  // width = 665px / 820

  return (
    <main>
      <div className="flex justify-center items-center h-screen w-full">
        <div>
          <img
            src="Union_1.png"
            alt=""
            className="absolute top-0 left-0 w-full"
          />
        </div>
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
      <div className={"mb-10" + (isTablet ? " mx-4" : " mx-[98px]")}>
        <div className=" relative mb-8">
          <CustomizedInputBase />
        </div>
        <div className="flex justify-between mb-12">
          <div className="flex justify-between gap-4">
            {isTablet ? (
              <SplitButton />
            ) : (
              buttonLables.map((label, index) => (
                <Button
                  className="px-4 py-3 rounded-lg"
                  variant="outlined"
                  key={index}
                >
                  {label}
                </Button>
              ))
            )}
          </div>
          <div>
            <Button className="px-4 py-3 rounded-lg" variant="outlined">
              <FilterAltOutlined />
              Filters
            </Button>
          </div>
        </div>
        <Grid
          container
          spacing={2}
          className={isTablet ? "flex flex-col items-center" : ""}
        >
          <Grid
            item
            xs={isTablet ? 11 : 4}
            className="flex flex-col gap-4 w-full"
          >
            <div>
              <img
                src="1.png"
                className="w-full rounded-2xl inline-block"
                style={{ height: imageHeight }}
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
          <Grid
            item
            xs={isTablet ? 11 : 4}
            className="flex flex-col gap-4 w-full"
          >
            <div>
              <img
                src="2.png"
                className="w-full rounded-2xl inline-block"
                ref={imgRef}
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
          <Grid
            item
            xs={isTablet ? 11 : 4}
            className="flex flex-col gap-4 mb-20 w-full"
          >
            <div>
              <img src="3.png" className="w-full rounded-2xl inline-block" />
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
          {!isTablet && (
            <>
              <Grid item xs={4} className="flex flex-col gap-4">
                <div>
                  <img
                    src="4.png"
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
                  <img
                    src="5.png"
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
                  <img
                    src="6.png"
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
            </>
          )}
        </Grid>
      </div>
      <div className={"w-full py-24" + (isTablet ? " px-4" : " px-[74px]")}>
        <div className=" relative w-full">
          <div className="absolute w-full">
            <img src="Union_3.png" className="w-full" />
          </div>
          <div className="absolute bottom-0 w-full">
            <img src="Union_2.png" className="w-full" />
          </div>
          <div
            className={
              "w-full py-32 bg-[#22405C] text-white" +
              (isMobile ? "" : " px-24")
            }
          >
            <Grid
              container
              spacing={2}
              className={isTablet ? " flex flex-col items-center" : ""}
            >
              <Grid item xs={isTablet ? 10 : 6}>
                <div className=" max-w-[560px]">
                  <div
                    className={
                      " font-normal" +
                      (isMobile ? ` text-[40px]` : ` text-[64px]`)
                    }
                  >
                    Transforming your Ideas into reality
                  </div>
                  <div className="font-medium text-xl">
                    Let&apos;s build something extraordinary together to
                    captivate your audience.
                  </div>
                </div>
              </Grid>
              <Grid item xs={isTablet ? 12 : 6} className="flex justify-end">
                <div className="rounded-full border w-[250px] h-[250px] flex justify-center items-center">
                  Let&apos;s Work Together!
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
      <div
        className={
          "w-full py-24 bg-[#294F74]" + (isTablet ? " px-4" : " px-[74px]")
        }
      >
        <div
          className={
            "w-full pt-20 rounded-[36px] bg-white flex flex-col justify-between gap-28" +
            (isTablet ? "" : " px-24")
          }
        >
          <div className={"flex flex-col" + (isTablet ? "" : " gap-16")}>
            <div
              className={
                "flex" +
                (isTablet
                  ? " flex-col items-center"
                  : " justify-between gap-16")
              }
            >
              <div className="w-64 flex gap-6 flex-col">
                <div>
                  <div className=" font-semibold text-xl">Say Hello!</div>
                  <div className=" text-xl">opencoregroup@gmail.com</div>
                </div>

                <div className=" flex justify-between">
                  <a href="#" className="p-2 rounded-md bg-[#F2F4F7]">
                    <i className="fa fa-instagram w-6 h-6 text-center"></i>
                  </a>
                  <a href="#" className="p-2 rounded-md bg-[#F2F4F7]">
                    <i className="fa fa-facebook w-6 h-6 text-center"></i>
                  </a>
                  <a href="#" className="p-2 rounded-md bg-[#F2F4F7]">
                    <i className="fa fa-twitter w-6 h-6 text-center"></i>
                  </a>
                  <a href="#" className="p-2 rounded-md bg-[#F2F4F7]">
                    <i className="fa fa-linkedin w-6 h-6 text-center"></i>
                  </a>
                </div>
              </div>
              {isTablet && <hr className=" text-[#F2F4F7] w-[80%]" />}
              <div className=" flex gap-16 text-xl text-[#475467]">
                <div className=" flex flex-col gap-3">
                  <a href="#">Home</a>
                  <a href="#">About us</a>
                  <a href="#">Work</a>
                </div>
                <div className=" flex flex-col gap-3">
                  <a href="#">Services</a>
                  <a href="#">Contact us</a>
                </div>
              </div>
              {isTablet && <hr className=" text-[#F2F4F7] w-[80%]" />}
            </div>

            <div
              className={
                "flex text-[#667085] text-xl" +
                (isTablet ? " flex-col items-center gap-2" : " justify-between")
              }
            >
              <div className="">Toronto, ON Canada</div>
              <div className="">OpenCore. All Rights Reserved</div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className=" max-w-[877px]">
              <img
                src="logo.png"
                className={`w-full`}
                style={{ marginBottom: -logoHeight * 0.22 }}
                ref={logoRef}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
