// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: rcEGNgTfxT6W6gDjnxsJgN
// Component: oh_ohgRb05-j4W
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

import "@plasmicapp/react-web/lib/plasmic.css";

import * as plasmic_library_plasmic_color_type_css from "../library_plasmic_color_type/plasmic_library_plasmic_color_type.module.css"; // plasmic-import: seaQhLVS4bbjiGvJJrRwyL/projectcss
import * as projectcss from "./plasmic_new_habistack_com.module.css"; // plasmic-import: rcEGNgTfxT6W6gDjnxsJgN/projectcss
import * as sty from "./PlasmicHamburgerMenu.module.css"; // plasmic-import: oh_ohgRb05-j4W/css

export type PlasmicHamburgerMenu__VariantMembers = {};
export type PlasmicHamburgerMenu__VariantsArgs = {};
type VariantPropType = keyof PlasmicHamburgerMenu__VariantsArgs;
export const PlasmicHamburgerMenu__VariantProps = new Array<VariantPropType>();

export type PlasmicHamburgerMenu__ArgsType = {};
type ArgPropType = keyof PlasmicHamburgerMenu__ArgsType;
export const PlasmicHamburgerMenu__ArgProps = new Array<ArgPropType>();

export type PlasmicHamburgerMenu__OverridesType = {
  root?: p.Flex<"div">;
};

export interface DefaultHamburgerMenuProps {
  className?: string;
}

function PlasmicHamburgerMenu__RenderFunc(props: {
  variants: PlasmicHamburgerMenu__VariantsArgs;
  args: PlasmicHamburgerMenu__ArgsType;
  overrides: PlasmicHamburgerMenu__OverridesType;

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
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_library_plasmic_color_type_css.plasmic_tokens,
        sty.root
      )}
    />
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHamburgerMenu__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHamburgerMenu__VariantsArgs;
    args?: PlasmicHamburgerMenu__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHamburgerMenu__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicHamburgerMenu__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicHamburgerMenu__ArgProps,
          internalVariantPropNames: PlasmicHamburgerMenu__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicHamburgerMenu__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHamburgerMenu";
  } else {
    func.displayName = `PlasmicHamburgerMenu.${nodeName}`;
  }
  return func;
}

export const PlasmicHamburgerMenu = Object.assign(
  // Top-level PlasmicHamburgerMenu renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicHamburgerMenu
    internalVariantProps: PlasmicHamburgerMenu__VariantProps,
    internalArgProps: PlasmicHamburgerMenu__ArgProps
  }
);

export default PlasmicHamburgerMenu;
/* prettier-ignore-end */
