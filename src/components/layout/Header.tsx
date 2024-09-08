import {Link} from "react-router-dom";
import {ShoppingCartIcon} from "../../assets/Icons/Icons";
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import {  logout } from "../../redux/slices/AuthSlice";

const Header: React.FC = () => {
  const cart = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  return (
    <>
      <header className="bg-primary text-primary-foreground py-4 px-6">
        <div className="container flex items-center justify-between h-16 px-4 md:px-6">
          <Link to="/" className="flex items-center gap-2">
            <span className="font-bold text-lg">Elite Buy</span>
          </Link>
          <nav className="hidden md:flex items-center gap-4">
            <Link
              to="/cart"
              className="relative text-muted-foreground hover:text-foreground"
            >
              <ShoppingCartIcon className="w-6 h-6" />
              {cart?.length > 0 && (
                <span className="absolute -top-1 right-auto left-4 bg-red-500 text-white rounded-full text-xs w-4 h-4 flex items-center justify-center">
                  {cart?.length}
                </span>
              )}
            </Link>
            <Link to="" className="text-muted-foreground hover:text-foreground">
              Login
            </Link>
            <Link to="" className="text-muted-foreground hover:text-foreground">
              Sign Up
            </Link>
            <Link to="/login"  onClick={() => {dispatch(logout())}} className="text-muted-foreground hover:text-foreground">
              Logout
            </Link>
          </nav>
          <button className="md:hidden" onClick={() => {}}>
            {/* <MenuIcon className="w-6 h-6" /> */} Menu Icon
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
