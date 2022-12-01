// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: rcEGNgTfxT6W6gDjnxsJgN
// Component: Pwf6EWrv8j7Nr7
import * as React from "react";

import { Link, GatsbyLinkProps as LinkProps } from "gatsby";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import Footer from "../../Footer"; // plasmic-import: m0B3ZpmlFE6MA6/component

import "@plasmicapp/react-web/lib/plasmic.css";

import * as plasmic_library_plasmic_color_type_css from "../library_plasmic_color_type/plasmic_library_plasmic_color_type.module.css"; // plasmic-import: seaQhLVS4bbjiGvJJrRwyL/projectcss
import * as projectcss from "./plasmic_new_habistack_com.module.css"; // plasmic-import: rcEGNgTfxT6W6gDjnxsJgN/projectcss
import * as sty from "./PlasmicHabistackFooter.module.css"; // plasmic-import: Pwf6EWrv8j7Nr7/css

export type PlasmicHabistackFooter__VariantMembers = {};
export type PlasmicHabistackFooter__VariantsArgs = {};
type VariantPropType = keyof PlasmicHabistackFooter__VariantsArgs;
export const PlasmicHabistackFooter__VariantProps =
  new Array<VariantPropType>();

export type PlasmicHabistackFooter__ArgsType = {};
type ArgPropType = keyof PlasmicHabistackFooter__ArgsType;
export const PlasmicHabistackFooter__ArgProps = new Array<ArgPropType>();

export type PlasmicHabistackFooter__OverridesType = {
  root2?: p.Flex<typeof Footer>;
};

export interface DefaultHabistackFooterProps {
  className?: string;
}

function PlasmicHabistackFooter__RenderFunc(props: {
  variants: PlasmicHabistackFooter__VariantsArgs;
  args: PlasmicHabistackFooter__ArgsType;
  overrides: PlasmicHabistackFooter__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const currentUser = p.useCurrentUser?.() || {};

  const [$queries, setDollarQueries] = React.useState({});

  return (
    <Footer
      data-plasmic-name={"root2"}
      data-plasmic-override={overrides.root2}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames("__wab_instance", sty.root2)}
    />
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root2: ["root2"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root2: typeof Footer;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHabistackFooter__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHabistackFooter__VariantsArgs;
    args?: PlasmicHabistackFooter__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHabistackFooter__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicHabistackFooter__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicHabistackFooter__ArgProps,
          internalVariantPropNames: PlasmicHabistackFooter__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicHabistackFooter__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root2") {
    func.displayName = "PlasmicHabistackFooter";
  } else {
    func.displayName = `PlasmicHabistackFooter.${nodeName}`;
  }
  return func;
}

export const PlasmicHabistackFooter = Object.assign(
  // Top-level PlasmicHabistackFooter renders the root element
  makeNodeComponent("root2"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicHabistackFooter
    internalVariantProps: PlasmicHabistackFooter__VariantProps,
    internalArgProps: PlasmicHabistackFooter__ArgProps
  }
);

export default PlasmicHabistackFooter;
/* prettier-ignore-end */
