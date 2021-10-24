import { useRouter } from "next/router";

const Paths = {
  home: "/",
  users: "/users",
  user: "/users/[userId]",
  blogs: "/users/[userId]/blogs",
  blog: "/users/[userId]/blogs/[blogId]",
  address: "/address/[prefecture]/[...cities]",
  calc: "/calc/[operator]/[[...numbers]]",
} as const;

type PathNames = keyof typeof Paths;
type Path = typeof Paths[PathNames];

type WithoutSlash<T> = T extends `/${infer U}` ? U : never;
type Resource<T> = T extends `${infer U}/${infer S}` ? U | Resource<S> : T;

type DynamicOptionalArrayRoute<T> = T extends `[[...${infer U}]]` ? U : never;
type DynamicArrayRoute<T> = T extends `[...${infer U}]` ? U : never;
type DynamicRoute<T> = T extends `[[...${infer _U}]]`
  ? never
  : T extends `[...${infer _U}]`
  ? never
  : T extends `[${infer U}]`
  ? U
  : never;

type OptionalArrayParams<T> = DynamicOptionalArrayRoute<
  Resource<WithoutSlash<T>>
>;
type ArrayParams<T> = DynamicArrayRoute<Resource<WithoutSlash<T>>>;
type Params<T> = DynamicRoute<Resource<WithoutSlash<T>>>;

type OptionalArrayParamKeys<T extends Path> = OptionalArrayParams<T>;
type ArrayParamKeys<T extends Path> = ArrayParams<T>;
type ParamKeys<T extends Path> = Params<T>;

type PathParams<T extends PathNames> = {
  pathname: T;
  params?: Partial<
    Record<OptionalArrayParamKeys<typeof Paths[T]>, (string | number)[]>
  > &
    Record<ArrayParamKeys<typeof Paths[T]>, (string | number)[]> &
    Record<ParamKeys<typeof Paths[T]>, string | number>;
};

type Args<T extends PathNames> = ParamKeys<typeof Paths[T]> extends never
  ? PathParams<T>
  : Required<PathParams<T>>;

export const createPath = <T extends PathNames>({
  pathname,
  params,
}: Args<T>) => {
  const path = Paths[pathname];

  if (params === undefined) {
    return path;
  }

  const directories = path.split("/");

  const replacedDirectories = directories.map((str) => {
    const matchOptionalArray = str.match(/\[\[\.\.\.(.*?)\]\]/);
    if (matchOptionalArray) {
      const key = matchOptionalArray[1] as ParamKeys<typeof path>;
      const param = params[key];
      return param ? param.join("/") : "";
    }

    const matchArray = str.match(/\[\.\.\.(.*?)\]/);
    if (matchArray) {
      const key = matchArray[1] as ParamKeys<typeof path>;
      return params[key].join("/");
    }

    const match = str.match(/\[(.*?)\]/);
    if (match) {
      const key = match[0];
      const trimmed = key.substring(1, key.length - 1) as ParamKeys<
        typeof path
      >;
      return params[trimmed];
    }

    return str;
  });

  return "/" + replacedDirectories.filter((d) => d !== "").join("/");
};

export const usePathParams = <
  T extends PathNames = never,
  Query extends Record<string, string | string[]> = {}
>() => {
  const router = useRouter();
  const params = router.query as Partial<
    Record<OptionalArrayParamKeys<typeof Paths[T]>, string[]>
  > &
    Record<ArrayParamKeys<typeof Paths[T]>, string[]> &
    Record<ParamKeys<typeof Paths[T]>, string> &
    Partial<Query>;

  return params;
};
