import { Builder } from "@builder.io/react";
import dynamic from "next/dynamic";

Builder.registerComponent(
  dynamic(() => import("./index")),
  {
    name: "CommerceToolsProductsList",
    inputs: [
      {
        name: "products",
        type: "CommercetoolsProductsList",
      },
    ],
  }
);
