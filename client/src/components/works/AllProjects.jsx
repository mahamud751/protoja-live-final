import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import Link from "next/link";

const AllProjects = ({ projects }) => {
  return (
    <Box>
      <Grid container spacing={2}>
        {projects?.map((project, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Link href={`/project-details/${project._id}`}>
              <Image
                src={project?.photos?.[0] || "/assets/scrool/default.png"}
                width={2000}
                height={1000}
                alt={project.title || "Project Image"}
                className="h-[250px] sm:h-[350px] md:h-[450px] w-full object-cover"
              />
              <Typography variant="subtitle1" className="font-semibold mt-1 text-base sm:text-lg md:text-xl">
                {project?.title}
              </Typography>
              <Typography variant="body" className="text-[#3c3b3b] font-normal text-sm sm:text-base">
                {project?.description || "Strategy - Visual Identity - Website"}
              </Typography>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default AllProjects;
