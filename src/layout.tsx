import { Outlet, NavLink } from 'react-router-dom';

interface CustomLinkProps {
  to: string;
  children: React.ReactNode;
}

const CustomLink = ({ to, children }: CustomLinkProps) => {
  return (
    <NavLink to={to} className={({ isActive }) => [isActive ? 'text-red-500' : ''].join(' ')}>
      {children}
    </NavLink>
  );
};

export const Layout = () => {
  return (
    <div className="flex h-screen flex-col items-center gap-y-10 pt-10">
      <div className="flex gap-x-4">
        <CustomLink to="/test-1">test-1</CustomLink>
        <CustomLink to="/test-2">test-2</CustomLink>
        <CustomLink to="/test-3">test-3</CustomLink>
        <CustomLink to="/test-4">test-4</CustomLink>
      </div>
      <Outlet />
    </div>
  );
};
