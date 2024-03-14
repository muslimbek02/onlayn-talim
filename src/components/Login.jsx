import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useContext } from "react";
import Context from "../content";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { setData } from "../persistence";



export default function Login() {

  const {setUser, users} = useContext(Context);

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const userData = {
      email: data.get("email"),
      password: data.get("password"), 
    }

    const currentUser = users.find(item => item.email === userData.email);

    if(currentUser) {
      if(currentUser.password === userData.password) {
        setUser({...currentUser, isLogin: true});
        setData('user', currentUser);
        setData('isLogin', true);
        navigate('/');
      }else{
        toast.error('Parol notogri!');
      }
    }else{
      toast.warning('Bunday foydalanuvchi yoq!');
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Kirish
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            type="email"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Parol"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Kirish
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Parolni unutdingizmi?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/register" variant="body2">
                {"Sizda profil mavjud emasmi?"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
