import React from "react";
import {
  Card,
  CardContent,
  Avatar,
  Typography,
  Button,
  Box,
  IconButton,
  Divider,
  Tooltip,
} from "@mui/material";
import { Link } from "react-router-dom";
import { deepOrange, blue, grey, green, red } from "@mui/material/colors";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PhoneIcon from "@mui/icons-material/Phone";
import ScheduleIcon from "@mui/icons-material/Schedule";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

const MentorCard = ({ mentor }) => {
  const {
    profileImageUrl = "default-image-url",
    name = "Unknown",
    bio = "No bio available",
    education = "Not specified",
    domain = [],
    skills = [],
    experience = [],
    publications = [],
    availability = { days: [], time: { from: "00:00", to: "00:00" } },
    contact = { linkedin: "", phone: "" },
    mark = "red", // Added mark for status
  } = mentor || {};

  // Define the color based on the mark value
  const statusColor = mark === "green" ? green[500] : red[500];
  const statusText = mark === "green" ? "Available" : "Not Available";

  return (
    <Card
      sx={{
        width: { xs: "100%", sm: 320 },
        maxWidth: 360,
        borderRadius: 2,
        boxShadow: 3,
        transition: "transform 0.2s, box-shadow 0.2s",
        "&:hover": {
          transform: "scale(1.02)",
          boxShadow: 6,
        },
        position: "relative",
      }}
    >
      {/* Status Indicator with Tooltip */}
      <Tooltip title={statusText} arrow>
        <Box
          sx={{
            position: "absolute",
            top: 16,
            right: 16,
            width: 16,
            height: 16,
            borderRadius: "50%",
            backgroundColor: statusColor,
            border: `2px solid ${statusColor}`,
          }}
        />
      </Tooltip>

      <CardContent sx={{ p: 2 }}>
        <Box display="flex" alignItems="center" mb={1}>
          <Avatar
            sx={{ bgcolor: deepOrange[500], width: 56, height: 56, mr: 2 }}
            alt={name}
            src={profileImageUrl}
          >
            {name.charAt(0)}
          </Avatar>
          <Box>
            <Typography variant="h6" component="div" noWrap>
              {name}
            </Typography>
            <Typography variant="body2" color="text.secondary" Wrap>
              {bio}
            </Typography>
          </Box>
        </Box>
        {/* Education */}
        <Typography variant="body2" color="text.primary" sx={{ mb: 0.5 }}>
          Education: {education}
        </Typography>
        {/* Domain */}
        <Typography variant="body2" color="text.primary">
          {Array.isArray(domain) ? domain.join(", ") : "No domain specified"}
        </Typography>
        {/* Skills */}
        <Typography variant="body2" color="text.primary" sx={{ mb: 0.5 }}>
          Skills:{" "}
          {Array.isArray(skills) ? skills.join(", ") : "No skills listed"}
        </Typography>
        {/* Experience */}
        <Box>
          <Typography variant="body2" color="text.primary" sx={{ mb: 0.5 }}>
            Experience:
          </Typography>
          <ul style={{ paddingLeft: 16, marginBottom: 8, fontSize: "0.75rem" }}>
            {experience.map((exp, index) => (
              <li key={index}>
                {exp.title} at {exp.company} ({exp.years}) - {exp.details}
              </li>
            ))}
          </ul>
        </Box>
        {/* Publications */}
        <Box>
          <Typography variant="body2" color="text.primary" sx={{ mb: 0.5 }}>
            Publications:
          </Typography>
          <ul style={{ paddingLeft: 16, marginBottom: 8, fontSize: "0.75rem" }}>
            {publications.map((pub, index) => (
              <li key={index}>
                <a href={pub.link} target="_blank" rel="noopener noreferrer">
                  {pub.title}
                </a>
              </li>
            ))}
          </ul>
        </Box>
        {/* Availability */}
        <Divider sx={{ my: 1 }} />
        <Box sx={{ mb: 1 }}>
          <Typography variant="body2" color="text.primary" sx={{ mb: 0.5 }}>
            Availability
          </Typography>
          <Box sx={{ fontSize: "0.75rem" }}>
            <Box display="flex" alignItems="center" mb={0.5}>
              <CalendarTodayIcon sx={{ color: grey[600], mr: 0.5 }} />
              <Typography variant="body2" color="text.primary">
                Days:{" "}
                {Array.isArray(availability.days)
                  ? availability.days.join(", ")
                  : "No availability"}
              </Typography>
            </Box>
            <Box display="flex" alignItems="center">
              <ScheduleIcon sx={{ color: grey[600], mr: 0.5 }} />
              <Typography variant="body2" color="text.primary">
                Time: {availability.time.from} - {availability.time.to}
              </Typography>
            </Box>
          </Box>
        </Box>
        {/* Contact */}
        <Divider sx={{ my: 1 }} />
        <Box sx={{ mb: 1 }}>
          <Typography variant="body2" color="text.primary" sx={{ mb: 0.5 }}>
            Contact
          </Typography>
          <Box sx={{ fontSize: "0.75rem" }}>
            {contact.linkedin && (
              <Box display="flex" alignItems="center" mb={0.5}>
                <IconButton
                  href={contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedInIcon sx={{ color: blue[700] }} />
                </IconButton>
                <Typography variant="body2" color="text.primary">
                  LinkedIn
                </Typography>
              </Box>
            )}
            {contact.phone && (
              <Box display="flex" alignItems="center">
                <PhoneIcon sx={{ color: grey[600], mr: 0.5 }} />
                <Typography variant="body2" color="text.primary">
                  {contact.phone}
                </Typography>
              </Box>
            )}
          </Box>
        </Box>
      </CardContent>

      {/* Book a Mentor Button */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          p: 1,
        }}
      >
        <Button
          component={Link}
          to={`/mentor/${mentor.userId}`}
          variant="contained"
          sx={{
            bgcolor: blue[500],
            "&:hover": { bgcolor: blue[700] },
            borderRadius: 2,
            px: 2,
            py: 1,
            textTransform: "none",
            fontSize: "0.75rem",
          }}
        >
          Book a Mentor
        </Button>
      </Box>
    </Card>
  );
};

export default MentorCard;
