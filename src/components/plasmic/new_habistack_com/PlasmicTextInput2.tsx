// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: rcEGNgTfxT6W6gDjnxsJgN
// Component: 7SVl8zJ-sDMSIw
import * as React from "react";

import { Link, GatsbyLinkProps as LinkProps } from "gatsby";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

import * as pp from "@plasmicapp/react-web";
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
import * as sty from "./PlasmicTextInput2.module.css"; // plasmic-import: 7SVl8zJ-sDMSIw/css

import SearchIcon from "./icons/PlasmicIcon__Search"; // plasmic-import: eTw_Xt64C6xadZ/icon
import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: RGbuXJ2Ji6_YB0/icon

export type PlasmicTextInput2__VariantMembers = {
  showStartIcon: "showStartIcon";
  showEndIcon: "showEndIcon";
  isDisabled: "isDisabled";
  color: "dark";
  fontSize: "small";
};
export type PlasmicTextInput2__VariantsArgs = {
  showStartIcon?: SingleBooleanChoiceArg<"showStartIcon">;
  showEndIcon?: SingleBooleanChoiceArg<"showEndIcon">;
  isDisabled?: SingleBooleanChoiceArg<"isDisabled">;
  color?: SingleChoiceArg<"dark">;
  fontSize?: SingleChoiceArg<"small">;
};
type VariantPropType = keyof PlasmicTextInput2__VariantsArgs;
export const PlasmicTextInput2__VariantProps = new Array<VariantPropType>(
  "showStartIcon",
  "showEndIcon",
  "isDisabled",
  "color",
  "fontSize"
);

export type PlasmicTextInput2__ArgsType = {
  value?: any;
  placeholder?: string;
  endIcon?: React.ReactNode;
  startIcon?: React.ReactNode;
};
type ArgPropType = keyof PlasmicTextInput2__ArgsType;
export const PlasmicTextInput2__ArgProps = new Array<ArgPropType>(
  "value",
  "placeholder",
  "endIcon",
  "startIcon"
);

export type PlasmicTextInput2__OverridesType = {
  root?: p.Flex<"div">;
  startIconContainer?: p.Flex<"div">;
  input?: p.Flex<"input">;
  endIconContainer?: p.Flex<"div">;
};

export interface DefaultTextInput2Props extends pp.BaseTextInputProps {
  value?: any;
  placeholder?: string;
  color?: SingleChoiceArg<"dark">;
  fontSize?: SingleChoiceArg<"small">;
}

function PlasmicTextInput2__RenderFunc(props: {
  variants: PlasmicTextInput2__VariantsArgs;
  args: PlasmicTextInput2__ArgsType;
  overrides: PlasmicTextInput2__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(
    () =>
      Object.assign(
        {
          placeholder: "Enter something…" as const
        },
        props.args
      ),
    [props.args]
  );

  const $props = {
    ...args,
    ...variants
  };

  const currentUser = p.useCurrentUser?.() || {};

  const stateSpecs = React.useMemo(
    () => [
      {
        path: "showStartIcon",
        type: "private",
        initFunc: ($props, $state, $ctx) => $props.showStartIcon
      },
      {
        path: "showEndIcon",
        type: "private",
        initFunc: ($props, $state, $ctx) => $props.showEndIcon
      },
      {
        path: "isDisabled",
        type: "private",
        initFunc: ($props, $state, $ctx) => $props.isDisabled
      },
      {
        path: "color",
        type: "private",
        initFunc: ($props, $state, $ctx) => $props.color
      },
      {
        path: "fontSize",
        type: "private",
        initFunc: ($props, $state, $ctx) => $props.fontSize
      }
    ],
    [$props, $ctx]
  );
  const $state = p.useDollarState(stateSpecs, $props, $ctx);

  const [$queries, setDollarQueries] = React.useState({});

  const [isRootFocusVisibleWithin, triggerRootFocusVisibleWithinProps] =
    useTrigger("useFocusVisibleWithin", {
      isTextInput: true
    });
  const triggers = {
    focusVisibleWithin_root: isRootFocusVisibleWithin
  };

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
        sty.root,
        {
          [sty.root___focusVisibleWithin]: triggers.focusVisibleWithin_root,
          [sty.rootcolor_dark]: hasVariant($state, "color", "dark"),
          [sty.rootfontSize_small]: hasVariant($state, "fontSize", "small"),
          [sty.rootisDisabled]: hasVariant($state, "isDisabled", "isDisabled"),
          [sty.rootshowStartIcon]: hasVariant(
            $state,
            "showStartIcon",
            "showStartIcon"
          )
        }
      )}
      data-plasmic-trigger-props={[triggerRootFocusVisibleWithinProps]}
    >
      {(hasVariant($state, "showStartIcon", "showStartIcon") ? true : true) ? (
        <div
          data-plasmic-name={"startIconContainer"}
          data-plasmic-override={overrides.startIconContainer}
          className={classNames(projectcss.all, sty.startIconContainer, {
            [sty.startIconContainer___focusVisibleWithin]:
              triggers.focusVisibleWithin_root,
            [sty.startIconContainerisDisabled]: hasVariant(
              $state,
              "isDisabled",
              "isDisabled"
            ),
            [sty.startIconContainershowStartIcon]: hasVariant(
              $state,
              "showStartIcon",
              "showStartIcon"
            )
          })}
        >
          {p.renderPlasmicSlot({
            defaultContents: (
              <SearchIcon
                className={classNames(projectcss.all, sty.svg___3ByHt)}
                role={"img"}
              />
            ),

            value: args.startIcon,
            className: classNames(sty.slotTargetStartIcon, {
              [sty.slotTargetStartIconshowStartIcon]: hasVariant(
                $state,
                "showStartIcon",
                "showStartIcon"
              )
            })
          })}
        </div>
      ) : null}

      <input
        data-plasmic-name={"input"}
        data-plasmic-override={overrides.input}
        className={classNames(projectcss.all, projectcss.input, sty.input, {
          [sty.input___focusVisibleWithin]: triggers.focusVisibleWithin_root,
          [sty.inputcolor_dark]: hasVariant($state, "color", "dark"),
          [sty.inputfontSize_small]: hasVariant($state, "fontSize", "small"),
          [sty.inputisDisabled]: hasVariant($state, "isDisabled", "isDisabled"),
          [sty.inputshowStartIcon]: hasVariant(
            $state,
            "showStartIcon",
            "showStartIcon"
          )
        })}
        disabled={
          hasVariant($state, "isDisabled", "isDisabled") ? true : undefined
        }
        placeholder={args.placeholder}
        type={"text" as const}
        value={args.value}
      />

      {(hasVariant($state, "showEndIcon", "showEndIcon") ? true : true) ? (
        <div
          data-plasmic-name={"endIconContainer"}
          data-plasmic-override={overrides.endIconContainer}
          className={classNames(projectcss.all, sty.endIconContainer, {
            [sty.endIconContainershowEndIcon]: hasVariant(
              $state,
              "showEndIcon",
              "showEndIcon"
            )
          })}
        >
          {p.renderPlasmicSlot({
            defaultContents: (
              <ChecksvgIcon
                className={classNames(projectcss.all, sty.svg__mW7RW)}
                role={"img"}
              />
            ),

            value: args.endIcon,
            className: classNames(sty.slotTargetEndIcon, {
              [sty.slotTargetEndIconshowEndIcon]: hasVariant(
                $state,
                "showEndIcon",
                "showEndIcon"
              )
            })
          })}
        </div>
      ) : null}
    </div>
  ) as React.ReactElement | null;
}

function useBehavior<P extends pp.BaseTextInputProps>(
  props: P,
  ref: pp.TextInputRef
) {
  return pp.useTextInput<P, typeof PlasmicTextInput2>(
    PlasmicTextInput2,
    props,
    {
      showStartIconVariant: {
        group: "showStartIcon",
        variant: "showStartIcon"
      },
      showEndIconVariant: { group: "showEndIcon", variant: "showEndIcon" },
      isDisabledVariant: { group: "isDisabled", variant: "isDisabled" },
      startIconSlot: "startIcon",
      endIconSlot: "endIcon",
      root: "root",
      input: "input"
    },
    ref
  );
}

const PlasmicDescendants = {
  root: ["root", "startIconContainer", "input", "endIconContainer"],
  startIconContainer: ["startIconContainer"],
  input: ["input"],
  endIconContainer: ["endIconContainer"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  startIconContainer: "div";
  input: "input";
  endIconContainer: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicTextInput2__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicTextInput2__VariantsArgs;
    args?: PlasmicTextInput2__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicTextInput2__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicTextInput2__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicTextInput2__ArgProps,
          internalVariantPropNames: PlasmicTextInput2__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicTextInput2__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicTextInput2";
  } else {
    func.displayName = `PlasmicTextInput2.${nodeName}`;
  }
  return func;
}

export const PlasmicTextInput2 = Object.assign(
  // Top-level PlasmicTextInput2 renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    startIconContainer: makeNodeComponent("startIconContainer"),
    input: makeNodeComponent("input"),
    endIconContainer: makeNodeComponent("endIconContainer"),

    // Metadata about props expected for PlasmicTextInput2
    internalVariantProps: PlasmicTextInput2__VariantProps,
    internalArgProps: PlasmicTextInput2__ArgProps,

    useBehavior
  }
);

export default PlasmicTextInput2;
/* prettier-ignore-end */