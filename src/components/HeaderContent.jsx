import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const courses = [
  {
    title: "Angular Frontend",
    lessons: 10,
    mentor: "Elyorbek Sobirov",
    img: "angular.png",
  },
  {
    title: "Node JS Backend",
    lessons: 15,
    mentor: "Qosimbek Nortojiyev",
    img: "nodejs.png",
  },
  {
    title: "Django Backed",
    lessons: 8,
    mentor: "Shohislom Bahromov",
    img: "django.webp",
  },
  {
    title: "Java Backend",
    lessons: 12,
    mentor: "Muslimbek Burxonov",
    img: "java.webp",
  },
  {
    title: "React JS Frontend",
    lessons: 10,
    mentor: "Muslimbek Burxonov",
    img: "react.png",
  },
  {
    title: "Javascript",
    lessons: 20,
    mentor: "Elyorbek Sobirov",
    img: "js.avif",
  },
];

const HeaderContent = () => {
  return (
    <div>
      <h1 className="text-[30px] font-semibold mb-[25px]">Kurslar</h1>
      <div className="grid grid-cols-3 gap-[25px]">
        {courses.map(({ title, lessons, mentor, img }) => (
          <div className="w-full" key={img}>
            <Card sx={{ borderRadius: "6px", pb: "20px" }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                className="h-[200px]"
                image={img}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Darslar soni: {lessons}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Mentor: {mentor}
                </Typography>
              </CardContent>
              <CardActions>
                <Button fullWidth variant="contained">
                  Kursga o'tish
                </Button>
              </CardActions>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeaderContent;