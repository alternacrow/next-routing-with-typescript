import { useRouter } from "next/router";

const Paths = {
  home: "/",
  users: "/users",
  user: "/user/[userId]",
  blogs: "/user/[userId]/blogs",
  blog: "/user/[userId]/blogs/[blogId]",
} as const;

type PathNames = keyof typeof Paths;
type Path = typeof Paths[PathNames];

type WithoutSlash<T> = T extends `/${infer U}` ? U : never;
type Resource<T> = T extends `${infer U}/${infer S}` ? U | Resource<S> : T;
type DynamicRoute<T> = T extends `[${infer U}]` ? U : never;

type Params<T> = DynamicRoute<Resource<WithoutSlash<T>>>;
type ParamKeys<T extends Path> = Params<T>;

type PathParams<T extends PathNames> = {
  pathname: T;
  params?: { [K in ParamKeys<typeof Paths[T]>]: string | number };
};
type Args<T extends PathNames> = ParamKeys<typeof Paths[T]> extends never
  ? PathParams<T>
  : Required<PathParams<T>>;

export const createPath = <T extends PathNames>({
  pathname,
  params,
}: Args<T>) => {
  const path = Paths[pathname];

  if (!params) {
    return path;
  }

  return path
    .split("/")
    .map((str) => {
      const match = str.match(/\[(.*?)\]/);
      if (match) {
        const key = match[0];
        const trimmed = key.substring(1, key.length - 1) as ParamKeys<
          typeof path
        >;
        return params[trimmed];
      }
      return str;
    })
    .join("/");
};

export const usePathParams = <T extends PathNames = never>() => {
  const router = useRouter();
  const params = router.query as {
    [K in ParamKeys<typeof Paths[T]>]?: string;
  };

  return params;
};
