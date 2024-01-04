import { usePathname } from 'next/navigation';

// ----------------------------------------------------------------------

type ReturnType = boolean;

export function useActiveLink(path: string, deep = true): ReturnType {
  const pathname = usePathname();

  const currentPath = path === '/' ? '/' : `${path}/`;

  const normalActive = pathname === currentPath;

  const deepActive = pathname.includes(currentPath);

  return deep ? deepActive : normalActive;
}
