// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 626ggfSgCYVT2YHifhdAKj
// Component: 4EGTL2LaH0JZ

"use client";

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";

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
import Button from "../../Button"; // plasmic-import: O1n4fOqLki7Y/component

import { useScreenVariants as useScreenVariantsvUzx0AI3UQDj } from "./PlasmicGlobalVariant__Mobile"; // plasmic-import: vUZX0aI3uQDj/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_zig_trade_option.module.css"; // plasmic-import: 626ggfSgCYVT2YHifhdAKj/projectcss
import sty from "./PlasmicFooter.module.css"; // plasmic-import: 4EGTL2LaH0JZ/css

import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: 8Ohe9_jUnbeW/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: ZxojYksPfqIt/icon

createPlasmicElementProxy;

export type PlasmicFooter__VariantMembers = {};
export type PlasmicFooter__VariantsArgs = {};
type VariantPropType = keyof PlasmicFooter__VariantsArgs;
export const PlasmicFooter__VariantProps = new Array<VariantPropType>();

export type PlasmicFooter__ArgsType = {};
type ArgPropType = keyof PlasmicFooter__ArgsType;
export const PlasmicFooter__ArgProps = new Array<ArgPropType>();

export type PlasmicFooter__OverridesType = {
  root?: p.Flex<"div">;
  columns?: p.Flex<"div">;
  link?: p.Flex<"a"> & Partial<LinkProps>;
};

export interface DefaultFooterProps {
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicFooter__RenderFunc(props: {
  variants: PlasmicFooter__VariantsArgs;
  args: PlasmicFooter__ArgsType;
  overrides: PlasmicFooter__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = ph.useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};

  const globalVariants = ensureGlobalVariants({
    mobile: useScreenVariantsvUzx0AI3UQDj()
  });

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
        sty.root
      )}
    >
      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__aCwkn)}
      >
        <p.Stack
          as={"div"}
          data-plasmic-name={"columns"}
          data-plasmic-override={overrides.columns}
          hasGap={true}
          className={classNames(projectcss.all, sty.columns)}
        >
          <div className={classNames(projectcss.all, sty.column___3Ehy0)}>
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__tiMvv)}
            >
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox___05DWn)}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text___7Blx
                  )}
                >
                  {"Zig Trade Option"}
                </div>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text___1XJ5A
                  )}
                >
                  {"Invest in Your Future with Confidence"}
                </div>
              </p.Stack>
            </p.Stack>
          </div>
          <div className={classNames(projectcss.all, sty.column__jaixM)}>
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__hkCcp)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___0N1Qt
                )}
              >
                {"main menu"}
              </div>
              <Button
                className={classNames("__wab_instance", sty.button___5XPs)}
                color={"clear"}
                endIcon={
                  <IconIcon
                    className={classNames(projectcss.all, sty.svg___3DcPj)}
                    role={"img"}
                  />
                }
                link={`/`}
                size={"minimal"}
                startIcon={
                  <ChecksvgIcon
                    className={classNames(projectcss.all, sty.svg__qnvX4)}
                    role={"img"}
                  />
                }
                submitsForm={true}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__aknym
                  )}
                >
                  {"Home"}
                </div>
              </Button>
              <p.PlasmicLink
                data-plasmic-name={"link"}
                data-plasmic-override={overrides.link}
                className={classNames(projectcss.all, projectcss.a, sty.link)}
                component={Link}
                href={`/about`}
                platform={"nextjs"}
              >
                <Button
                  color={"clear"}
                  endIcon={
                    <IconIcon
                      className={classNames(projectcss.all, sty.svg__vgJoj)}
                      role={"img"}
                    />
                  }
                  size={"minimal"}
                  startIcon={
                    <ChecksvgIcon
                      className={classNames(projectcss.all, sty.svg__oh4Mg)}
                      role={"img"}
                    />
                  }
                  submitsForm={true}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__jNt9S
                    )}
                  >
                    {"About"}
                  </div>
                </Button>
              </p.PlasmicLink>
            </p.Stack>
          </div>
          <div className={classNames(projectcss.all, sty.column__rsbrj)}>
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__spZ5D)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__iNrxi
                )}
              >
                {"Support"}
              </div>
              <Button
                className={classNames("__wab_instance", sty.button__bfI8B)}
                color={"clear"}
                endIcon={
                  <IconIcon
                    className={classNames(projectcss.all, sty.svg__haXyg)}
                    role={"img"}
                  />
                }
                link={`/contact`}
                size={"minimal"}
                startIcon={
                  <ChecksvgIcon
                    className={classNames(projectcss.all, sty.svg__w8Tjt)}
                    role={"img"}
                  />
                }
                submitsForm={true}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__k9Eoi
                  )}
                >
                  {"Contact"}
                </div>
              </Button>
              <Button
                className={classNames("__wab_instance", sty.button__wsTcj)}
                color={"clear"}
                endIcon={
                  <IconIcon
                    className={classNames(projectcss.all, sty.svg__vhv8N)}
                    role={"img"}
                  />
                }
                link={`/plans`}
                size={"minimal"}
                startIcon={
                  <ChecksvgIcon
                    className={classNames(projectcss.all, sty.svg__zLuop)}
                    role={"img"}
                  />
                }
                submitsForm={true}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__nsjl7
                  )}
                >
                  {"Plans"}
                </div>
              </Button>
            </p.Stack>
          </div>
         
        </p.Stack>
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__unLbj
          )}
        >
          {"Copyright \u00a9 2023 Zig Trade Option."}
        </div>
      </p.Stack>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "columns", "link"],
  columns: ["columns", "link"],
  link: ["link"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  columns: "div";
  link: "a";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicFooter__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicFooter__VariantsArgs;
    args?: PlasmicFooter__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicFooter__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicFooter__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
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
          internalArgPropNames: PlasmicFooter__ArgProps,
          internalVariantPropNames: PlasmicFooter__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicFooter__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicFooter";
  } else {
    func.displayName = `PlasmicFooter.${nodeName}`;
  }
  return func;
}

export const PlasmicFooter = Object.assign(
  // Top-level PlasmicFooter renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    columns: makeNodeComponent("columns"),
    link: makeNodeComponent("link"),

    // Metadata about props expected for PlasmicFooter
    internalVariantProps: PlasmicFooter__VariantProps,
    internalArgProps: PlasmicFooter__ArgProps
  }
);

export default PlasmicFooter;
/* prettier-ignore-end */
