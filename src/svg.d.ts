declare module "*.svg" {
    import type { ComponentProps, FC } from "react";

    const Component: FC<ComponentProps<"svg">>;
    export default Component;
}
