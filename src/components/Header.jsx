import { Button } from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import Context from "../content";
import UserMenu from "./UserMenu";

const Header = () => {
  const { user } = useContext(Context);

  return (
    <div className="flex items-center justify-between">
      <h1 className="text-[40px] py-[10px]">Onlayn ta'lim</h1>
      <div className="flex items-center">
        <Link
          className="font-semibold font-semibold rounded-[6px] py-[5px] px-[10px] hover:bg-[rgba(18,98,241,0.1)]"
          to={"/"}
        >
          Bosh sahifa
        </Link>
        <Link
          className="ml-[25px] font-semibold rounded-[6px] py-[5px] px-[10px] hover:bg-[rgba(18,98,241,0.1)]"
          to={"/"}
        >
          Kurslar
        </Link>
        <Link
          className="ml-[25px] font-semibold rounded-[6px] py-[5px] px-[10px] hover:bg-[rgba(18,98,241,0.1)]"
          to={"/articles"}
        >
          Maqolalar
        </Link>
        <Link
          className="ml-[25px] font-semibold rounded-[6px] py-[5px] px-[10px] hover:bg-[rgba(18,98,241,0.1)]"
          to={"/projects"}
        >
          Loyihalar
        </Link>
        <Link
          className="ml-[25px] font-semibold rounded-[6px] py-[5px] px-[10px] hover:bg-[rgba(18,98,241,0.1)]"
          to={"/students"}
        >
          O'quvchilar
        </Link>
      </div>
      <div className="flex items-center">
        {user?.isLogin ? (
          <UserMenu />
        ) 
        :
        (
          <Button variant="contained" sx={{ mr: "10px" }} href="/login">
          Kirish
        </Button>
        )}
      </div>
    </div>
  );
};

export default Header;
